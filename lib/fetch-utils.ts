async function fetchWithTimeout(
  url: string, 
  options: RequestInit = {}, 
  timeout = 10000
): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(timeoutId);
    return response;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Request timeout: The server is taking too long to respond");
    }
    throw error;
  }
}

async function fetchWithRetry<T = string>(
  url: string,
  options: RequestInit = {},
  retries = 3,
  delayMs = 1000,
  error404 = "Resource not found",
  errorGeneral = "Server error"
): Promise<T | null> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await fetchWithTimeout(url, options);
      
      if (!res.ok) {
        const errorDetails = res.status === 404 
          ? error404 
          : `${errorGeneral} (${res.status})`;
        throw new Error(errorDetails);
      }
      
      return await res.text() as T;
    } catch (error) {
      if (attempt === retries) {
        console.error("Failed to fetch after retries:", error);
        return null;
      }
      
      await new Promise(resolve => setTimeout(resolve, delayMs * attempt));
    }
  }
  
  return null;
}

export { fetchWithTimeout, fetchWithRetry };
