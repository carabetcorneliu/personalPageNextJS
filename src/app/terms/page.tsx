import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
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
      <h1 className="text-3xl font-semibold mb-6">Terms of Service</h1>
      <p className="text-gray-600 mb-8">Last updated: November 2025</p>

      <section className="mb-8">
        <p className="mb-4">
          Thank you for visiting carabetcorneliu-next.netlify.app (the{" "}
          {`"Website"`}). By using this Website, you agree to the following
          terms:
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Use of the Website</h2>
        <p className="mb-4">
          You may browse, view, and interact with content on this Website. You
          may not copy, redistribute, or modify content without permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Contact Form</h2>
        <p className="mb-2">
          Any messages submitted via the contact form must be respectful and
          lawful. You agree that your submissions do not violate any laws or
          third-party rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          3. Intellectual Property
        </h2>
        <p className="mb-4">
          All content on this Website, including text, images, and code samples,
          is owned by Corneliu Carabet and may not be used without permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Liability</h2>
        <p>
          The Website and its content are provided {`"as is"`}. Corneliu Carabet
          is not responsible for any damages or losses resulting from your use
          of the Website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. External Links</h2>
        <p>
          This Website may contain links to external sites. Corneliu Carabet is
          not responsible for the content or practices of these sites.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Privary</h2>
        <p>
          For details about how we handle your personal data, see our{" "}
          <a href="/privacy">[Privacy Policy]</a>.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Modifications</h2>
        <p>
          Corneliu Carabet may modify these terms at any time. Continued use of
          the Website constitutes acceptance of the updated Terms.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
        <p>For legal inquiries, contact:</p>
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
