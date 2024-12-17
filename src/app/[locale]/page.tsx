import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="home-wrapper max-w-[144rem] mx-auto my-0 px-16 py-0 flex flex-col items-center justify-center gap-24 h-[35rem] text-center">
      <h1 className="section-header">
        {t("title-part1")}&nbsp;
        <strong className="highlight text-[#ec5e2a] font-bold">E-shop</strong>
        &nbsp;{t("title-part2")} 👋
      </h1>
      <p className="home-txt text-3xl">{t("description")}</p>

      {/* Stripe */}
      <ul className="card-list">
        <li>
          <Link
            href="/donate-with-embedded-checkout"
            className="card checkout-style-background"
          >
            <h2 className="bottom">Donate with embedded Checkout</h2>
          </Link>
        </li>
        <li>
          <Link
            href="/donate-with-checkout"
            className="card checkout-style-background"
          >
            <h2 className="bottom">Donate with hosted Checkout</h2>
          </Link>
        </li>
        <li>
          <Link
            href="/donate-with-elements"
            className="card elements-style-background"
          >
            <h2 className="bottom">Donate with Elements</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
}
