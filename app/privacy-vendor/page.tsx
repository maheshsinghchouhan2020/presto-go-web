import Link from "next/link";

async function getPrivacyPolicy() {
  const res = await fetch("https://api.presto-go.com/api/view-privacy-policy?owner_type=vendor", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch privacy policy");
  }
  return res.text();
}

export default async function PrivacyPolicyVendor() {
  const htmlContent = await getPrivacyPolicy();

  return (
    <div className="min-h-screen bg-background-white py-16">
      <div className="section-shell">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline">
            ← Back to Home
          </Link>

          <h1 className="text-4xl font-black text-secondary mb-4">Privacy Policy (Vendor)</h1>
          <p className="text-secondary-light text-lg mb-12">Last updated: October 18, 2025</p>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </div>
  );
}
