import Link from "next/link";

export default function SiteHeader({ currentPage = "home" }) {
  return (
    <header className="site-header">
      <Link
        href="/"
        className="brand"
        aria-label="Jacksun Engimech home"
      >
        <span className="brand-symbol">
          J<span>E</span>
        </span>

        <span className="brand-copy">
          JACKSUN<br />
          ENGIMECH
        </span>
      </Link>

      <div className="header-status">
        <span className="status-dot" />
        ENGINEERING · SURVEYING · SOLUTIONS
      </div>

      <nav className="header-nav" aria-label="Main navigation">
        <Link
          href="/"
          className={currentPage === "home" ? "active" : ""}
          aria-current={currentPage === "home" ? "page" : undefined}
        >
          Home
        </Link>

        <Link
          href="/about"
          className={currentPage === "about" ? "active" : ""}
          aria-current={currentPage === "about" ? "page" : undefined}
        >
          About
        </Link>

        <Link
          href="/products"
          className={currentPage === "products" ? "active" : ""}
          aria-current={currentPage === "products" ? "page" : undefined}
        >
          Products
        </Link>

        <Link
          href="/contact"
          className={currentPage === "contact" ? "active" : ""}
          aria-current={currentPage === "contact" ? "page" : undefined}
        >
          Contact
        </Link>
      </nav>

      <Link href="/quote" className="header-cta">
        Start an enquiry <span>↗</span>
      </Link>
    </header>
  );
}