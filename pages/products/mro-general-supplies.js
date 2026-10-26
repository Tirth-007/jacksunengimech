
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const supplyCategories = [
    {
        number: "01",
        name: "Electrical accessories",
        description:
            "Electrical accessories for industrial and general workplace requirements.",
        tag: "ELECTRICAL",
    },
    {
        number: "02",
        name: "Maintenance products",
        description:
            "Products supporting industrial maintenance requirements and routine upkeep.",
        tag: "MAINTENANCE",
    },
    {
        number: "03",
        name: "General industrial supplies",
        description:
            "Additional industrial supply requirements discussed on a customer-by-customer basis.",
        tag: "GENERAL SUPPLIES",
    },
];

export default function MROGeneralSuppliesPage() {
    return (
        <>
            <Head>
                <title>MRO & General Industrial Supplies | Jacksun Engimech</title>
                <meta
                    name="description"
                    content="Explore MRO and general industrial supplies from Jacksun Engimech, including electrical accessories, maintenance products, and additional industrial supply requirements."
                />
            </Head>

            <main className="jec mro-page">
                <SiteHeader currentPage="products" />

                <div className="mro-breadcrumb">
                    <Link href="/products">PRODUCTS</Link>
                    <span>/</span>
                    <span>08 — MRO & GENERAL INDUSTRIAL SUPPLIES</span>
                    <span className="mro-established">EST. 2020</span>
                </div>

                <section className="mro-hero">
                    <div className="mro-hero-copy">
                        <p className="eyebrow">
                            JEC INDUSTRIAL SUPPLIES / 008
                        </p>

                        <h1>
                            Keep
                            <br />
                            industry
                            <br />
                            <span>moving.</span>
                        </h1>

                        <p className="mro-intro">
                            Industrial operations depend on the right
                            supplies being available when they're needed.
                            Jacksun Engimech supports general industrial
                            requirements with electrical accessories,
                            maintenance products, and more.
                        </p>

                        <div className="mro-hero-actions">
                            <Link href="/quote" className="button-dark">
                                Discuss your requirement <span>↗</span>
                            </Link>

                            <Link href="#mro-range" className="text-link">
                                Explore the range <span>↓</span>
                            </Link>
                        </div>

                        <div className="mro-hero-caption">
                            <span>MRO / ELECTRICAL / INDUSTRIAL</span>
                            <span>GENERAL SUPPLY</span>
                        </div>
                    </div>

                    <div
                        className="mro-hero-visual"
                        role="img"
                        aria-label="Abstract technical illustration representing connected industrial supply components"
                    >
                        <div className="mro-grid" />

                        <div className="mro-visual-top">
                            <span>FIG. 008</span>
                            <span>INDUSTRIAL SUPPORT</span>
                        </div>

                        <div className="mro-system-art">
                            <div className="mro-system-ring mro-ring-one" />
                            <div className="mro-system-ring mro-ring-two" />
                            <div className="mro-system-ring mro-ring-three" />

                            <div className="mro-system-line mro-line-one" />
                            <div className="mro-system-line mro-line-two" />
                            <div className="mro-system-line mro-line-three" />
                            <div className="mro-system-line mro-line-four" />

                            <div className="mro-node mro-node-one">
                                <span>01</span>
                            </div>

                            <div className="mro-node mro-node-two">
                                <span>02</span>
                            </div>

                            <div className="mro-node mro-node-three">
                                <span>03</span>
                            </div>

                            <div className="mro-system-core">
                                <span>MRO</span>
                                <small>JEC / 008</small>
                            </div>
                        </div>

                        <div className="mro-visual-note">
                            <span>INDUSTRIAL REQUIREMENTS</span>
                            <p>Supplies that support operations</p>
                        </div>

                        <div className="mro-visual-bottom">
                            MAINTENANCE / ACCESSORIES / SUPPLIES
                        </div>
                    </div>
                </section>

                <section className="mro-info-strip">
                    <div>
                        <span>01 / CATEGORY</span>
                        <strong>MRO &amp; industrial supplies</strong>
                    </div>

                    <div>
                        <span>02 / RANGE</span>
                        <strong>General requirements</strong>
                    </div>

                    <div>
                        <span>03 / APPROACH</span>
                        <strong>Requirement-led enquiry</strong>
                    </div>
                </section>

                <section className="mro-range" id="mro-range">
                    <div className="mro-section-label">
                        <span>01</span>
                        <span>THE SUPPLY RANGE</span>
                        <span>CORE CATEGORIES</span>
                    </div>

                    <div className="mro-range-heading">
                        <h2>
                            Everyday needs.
                            <br />
                            <span>Industrial focus.</span>
                        </h2>

                        <p>
                            JEC's company material identifies electrical
                            accessories, maintenance products, and
                            additional general industrial supplies.
                            Contact the team to discuss your specific
                            requirement and confirm availability.
                        </p>
                    </div>

                    <div className="mro-category-list">
                        {supplyCategories.map((category) => (
                            <article
                                className="mro-category-row"
                                key={category.number}
                            >
                                <span className="mro-category-number">
                                    {category.number}
                                </span>

                                <div className="mro-category-copy">
                                    <h3>{category.name}</h3>
                                    <p>{category.description}</p>
                                </div>

                                <span className="mro-category-tag">
                                    {category.tag}
                                </span>

                                <span
                                    className="mro-category-arrow"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="mro-workflow">
                    <div className="mro-section-label">
                        <span>02</span>
                        <span>HOW TO START</span>
                        <span>YOUR REQUIREMENT</span>
                    </div>

                    <div className="mro-workflow-heading">
                        <h2>
                            Start with
                            <br />
                            <span>what you need.</span>
                        </h2>

                        <p>
                            A clear enquiry helps the team understand
                            your requirements and discuss the next steps.
                        </p>
                    </div>

                    <div className="mro-steps">
                        <article>
                            <span>01 / DESCRIBE</span>
                            <h3>Identify the need</h3>
                            <p>
                                Explain which supply or maintenance
                                requirement you need to address.
                            </p>
                        </article>

                        <article>
                            <span>02 / SPECIFY</span>
                            <h3>Share the details</h3>
                            <p>
                                Include quantities, product references,
                                dimensions, or specifications where
                                available and relevant.
                            </p>
                        </article>

                        <article>
                            <span>03 / DISCUSS</span>
                            <h3>Contact JEC</h3>
                            <p>
                                Send your enquiry to discuss availability
                                and the suitability of the requested
                                supplies.
                            </p>
                        </article>
                    </div>
                </section>

                <section className="mro-enquiry">
                    <div className="mro-enquiry-top">
                        <span>03 / GENERAL INDUSTRIAL REQUIREMENTS</span>
                        <span>JACKSUN ENGIMECH</span>
                    </div>

                    <h2>
                        One enquiry.
                        <br />
                        <span>Your supply needs.</span>
                    </h2>

                    <div className="mro-enquiry-bottom">
                        <p>
                            Looking for electrical accessories,
                            maintenance products, or other general
                            industrial supplies? Share your requirement
                            with the JEC team to start the conversation.
                        </p>

                        <Link href="/quote" className="button-light">
                            Request a quotation <span>↗</span>
                        </Link>
                    </div>
                </section>

                <section className="mro-technical-note">
                    <p className="eyebrow">SUPPLY NOTE / 008</p>

                    <h2>
                        Specific needs.
                        <br />
                        Clear requirements.
                    </h2>

                    <p>
                        To help clarify your enquiry, provide the product
                        description, intended use, required quantity, and
                        any available brand, part number, or technical
                        specification.
                    </p>

                    <p className="mro-disclaimer">
                        The company profile mentions electrical
                        accessories, maintenance products, and additional
                        industrial supplies. It does not establish a
                        complete inventory, specific brands, product
                        models, stock availability, or technical
                        specifications. Confirm these details with JEC
                        before placing an order.
                    </p>
                </section>

                <div className="mro-back-link">
                    <Link href="/products">← Back to all products</Link>
                    <span>JACKSUN ENGIMECH / MRO &amp; GENERAL SUPPLIES</span>
                </div>
            </main>
        </>
    );
}
