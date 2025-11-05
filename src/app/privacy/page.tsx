import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto p-6 text-gray-800">
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to site
        </Link>
      </div>
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
      <p className="text-gray-600 mb-8">Last updated: November 2025</p>

      <section className="mb-8">
        <p className="mb-4">
          Thank you for visiting carabetcorneliu-next.netlify.app (the{" "}
          {`"Website"`}), operated by Corneliu Carabet. This Privacy Policy
          explains how I collect, use, and protect your personal information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          1. Information I Collect
        </h2>
        <p className="mb-4">
          This Website is primarily informational. However, I may collect
          limited personal data in the following cases:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            When you contact me through a form or email (e.g., name, email
            address, and message).
          </li>
          <li>
            Through anonymous website analytics tools to improve performance and
            usability.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          2. How I Use the Information
        </h2>
        <p className="mb-2">Your personal data is used only for:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Responding to your inquiries or messages.</li>
          <li>Improving the content and functionality of this Website.</li>
        </ul>
        <p>I do not sell, rent, or trade personal data.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Cookies and Analytics
        </h2>
        <p className="mb-4">
          This Website does not use cookies for tracking or advertising
          purposes. Analytics tools (like Google Analytics or Netlify Analytics)
          are used, they may collect anonymous usage data.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Data Retention</h2>
        <p>
          Messages and contact submissions are retained only as long as
          necessary to respond to your request, after which they are be deleted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Data Sharing</h2>
        <p>
          I do not share personal data with third parties except for essential
          service providers that help operate this Website (e.g., Netlify
          hosting).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
        <p>
          You may request that your personal information be deleted or corrected
          by contacting me directly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Contact</h2>
        <p>For any privacy-related questions, please contact:</p>
        <p className="mt-5">
          <a href="/go/email/" className="text-blue-600 hover:underline">
            <span style={{ unicodeBidi: "bidi-override", direction: "rtl" }}>
              <span>moc.liamg</span>
              <span>@</span>
              <span>uilenroc.tebarac 📧 </span>
            </span>
          </a>
        </p>
      </section>
    </main>
  );
}
