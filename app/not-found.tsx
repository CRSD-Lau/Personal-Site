import type { Metadata } from "next";
import Link from "next/link";
import InformationPage from "@/components/InformationPage";

export const metadata: Metadata = {
  title: "Page not found | Neil Mitchell",
  alternates: { canonical: null },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <InformationPage>
      <div className="information-page__header information-page__error">
        <p className="eyebrow">404 / Page not found</p>
        <h1>
          Let’s get you
          <br />
          back on track.
        </h1>
        <p className="information-page__lead">
          This address doesn’t lead to a page. You can return to the portfolio or explore my
          independent work.
        </p>
        <div className="information-page__actions">
          <Link className="button button--primary" href="/" prefetch={false}>
            Back to home
          </Link>
          <Link className="information-page__back" href="/works" prefetch={false}>
            Explore my work <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </InformationPage>
  );
}
