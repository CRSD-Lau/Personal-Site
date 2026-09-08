import type { Metadata } from "next";
import Link from "next/link";
import InformationPage from "@/components/InformationPage";
import { profile, siteMetadata, siteUrl } from "@/data/profile";

const title = "Privacy | Neil Mitchell";
const description =
  "How this personal portfolio handles hosting requests, browser preferences, and email contact.";
const image = {
  url: siteMetadata.socialImage.path,
  width: 1200,
  height: 630,
  alt: siteMetadata.socialImage.alt,
  type: "image/png",
};

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    title,
    description,
    url: "/privacy",
    siteName: siteMetadata.name,
    locale: siteMetadata.locale,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [{ url: image.url, alt: image.alt }],
  },
};

export default function PrivacyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description,
    url: `${siteUrl}/privacy`,
    inLanguage: "en-CA",
    dateModified: "2026-09-08",
    author: { "@type": "Person", name: profile.name, url: siteUrl },
  };
  return (
    <InformationPage>
      <header className="information-page__header">
        <p className="eyebrow">About this website</p>
        <h1>Privacy.</h1>
        <p className="information-page__lead">
          A personal portfolio, with straightforward information about what happens when you visit.
        </p>
        <p className="information-page__updated">Updated September 8, 2026</p>
      </header>
      <div className="information-page__body">
        <section aria-labelledby="privacy-operator">
          <h2 id="privacy-operator">Who runs this site</h2>
          <p>
            Neil Mitchell operates this personal career portfolio. It is not an official TD Bank
            Group or TD Insurance website.
          </p>
        </section>
        <section aria-labelledby="privacy-hosting">
          <h2 id="privacy-hosting">Visiting the website</h2>
          <p>
            Vercel hosts this site and processes technical information needed to deliver pages,
            maintain security, and diagnose problems. This can include your IP address, browser
            information, requested URL, and request time. Hosting requests can generate operational
            logs even though this site has no advertising or visitor analytics scripts.
          </p>
          <p>
            Vercel describes its processing and international operations in its{" "}
            <a href="https://vercel.com/legal/privacy-notice">privacy notice</a>. Its storage and
            retention practices are governed by its service and privacy terms.
          </p>
        </section>
        <section aria-labelledby="privacy-storage">
          <h2 id="privacy-storage">Cookies and browser preferences</h2>
          <p>
            This site does not set advertising or analytics cookies. It remembers your chosen light
            or dark theme in your browser. If you install the site as an app, temporary browser
            storage records whether its introduction has appeared during that session. These
            preferences are not sent to an analytics service.
          </p>
          <p>
            You can clear these preferences using your browser’s site-data settings. Fonts and
            images are served with the website rather than loaded from third-party font or image
            services.
          </p>
        </section>
        <section aria-labelledby="privacy-contact">
          <h2 id="privacy-contact">Email and external links</h2>
          <p>
            There is no contact form or account registration on this site. Email links open your
            email application. If you send a message, I receive your address and the information you
            include so that I can read and respond to it. Email providers also process the message
            to deliver and store the conversation. Avoid sending sensitive or confidential
            information.
          </p>
          <p>
            Links to LinkedIn, GitHub, and other websites take you to services with their own
            privacy practices. Those services may collect information when you visit them.
          </p>
        </section>
        <section aria-labelledby="privacy-questions">
          <h2 id="privacy-questions">Questions or requests</h2>
          <p>
            For questions about this website or personal information you have sent me, including
            access or deletion requests, email{" "}
            <a href={`mailto:${profile.social.email}`}>{profile.social.email}</a>.
          </p>
          <p>This notice will be updated when the site’s data practices change.</p>
        </section>
      </div>
      <Link className="information-page__back" href="/" prefetch={false}>
        Back to the portfolio <span aria-hidden="true">→</span>
      </Link>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }}
      />
    </InformationPage>
  );
}
