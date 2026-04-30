'use client';

import Link from "next/link";
import { useEffect, useState } from "react";
import { FiAlertCircle, FiRefreshCcw } from "react-icons/fi";
import { fetchWithRetry } from "@/lib/fetch-utils";

export default function TermsConditionsVendor() {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const loadTerms = async () => {
    setLoading(true);
    const content = await fetchWithRetry(
      "https://api.presto-go.com/api/view-terms-conditions?owner_type=vendor",
      { cache: "no-store" },
      3,
      1000,
      "Terms and conditions not found",
      "Server error"
    );
    setHtmlContent(content);
    setLoading(false);
  };

  useEffect(() => {
    loadTerms();
  }, []);

  return (
    <div className="min-h-screen bg-background-white py-16">
      <div className="section-shell">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline">
            ← Back to Home
          </Link>

      

          {loading ? (
            <div className="premium-card p-8 text-center">
              <div className="mx-auto w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4" />
              <p className="text-secondary-light">Loading terms and conditions...</p>
            </div>
          ) : htmlContent ? (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : (
            <div className="premium-card p-8 text-center">
              <FiAlertCircle className="mx-auto text-6xl text-status-error mb-4" />
              <h2 className="text-2xl font-black text-secondary mb-3">
                Unable to Load Terms & Conditions
              </h2>
              <p className="text-secondary-light mb-6">
                We&apos;re having trouble loading the terms and conditions right now. Please try again later.
              </p>
              <button
                onClick={loadTerms}
                className="primary-button inline-flex items-center gap-2 px-6 py-3 font-bold"
              >
                <FiRefreshCcw />
                Try Again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

