
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";

const toolCategories = [
    {
        number: "01",
        name: "General tools",
        detail:
            "Tools for everyday industrial and maintenance requirements.",
        tag: "GENERAL PURPOSE",
    },
    {
        number: "02",
        name: "Power tools",
        detail:
            "Powered tools for specified workplace tasks and applications.",
        tag: "POWERED EQUIPMENT",
    },
    {
        number: "03",
        name: "Customised tools",
        detail:
            "Tools tailored to customer-defined requirements.",
        tag: "APPLICATION-LED",
    },
    {
        number: "04",
        name: "Non-sparking tools",
        detail:
            "A dedicated category for applications where non-sparking tools are specified.",
        tag: "SPECIALISED TOOLS",
    },
    {
        number: "05",
        name: "Lifting accessories",
        detail:
            "Accessories supporting lifting operations and workplace requirements.",
        tag: "LIFTING & HANDLING",
    },
];

export default function ToolsTacklesPage() {
    return (
        <>
            <Head>
                <title>Tools & Tackles | Jacksun Engimech</title>
                <meta
                    name="description"
                    content="Explore Jacksun Engimech's industrial tools and tackles range, including general tools, power tools, customised tools, non-sparking tools and lifting accessories."
                />
            </Head>

            <main className="jec tools-page">
                <SiteHeader currentPage="products" />

                <div className="tools-topline">
                    <Link
                        href="/products"
                        className="tools-breadcrumb-link"
                    >
                        <span aria-hidden="true">←</span>
                        <span>PRODUCTS</span>
                    </Link>

                    <span>/</span>
                    <span>06 — TOOLS & TACKLES</span>

                    <span className="tools-established">
                        EST. 2020
                    </span>
                </div>

                <section className="tools-hero">
                    <div className="tools-hero-copy">
                        <p className="eyebrow">
                            JEC INDUSTRIAL SUPPLIES / 006
                        </p>

                        <h1>
                            The right tools.
                            <br />
                            <span>Ready for</span>
                            <br />
                            the task.
                        </h1>

                        <p className="tools-intro">
                            From general and power tools to customised
                            tools, non-sparking tools and lifting
                            accessories, Jacksun Engimech supports
                            industrial work requirements with a range
                            of tools and tackles.
                        </p>

                        <div className="tools-actions">
                            <Link
                                href="/quote"
                                className="button-dark"
                            >
                                Discuss your requirement <span>↗</span>
                            </Link>

                            <Link
                                href="#tools-range"
                                className="text-link"
                            >
                                Explore the range <span>↘</span>
                            </Link>
                        </div>

                        <div className="tools-hero-caption">
                            <span>TOOLS & TACKLES / 01—05</span>
                            <span>INDUSTRIAL SUPPLIES</span>
                        </div>
                    </div>

                    <div
                        className="tools-hero-visual"
                        role="img"
                        aria-label="Abstract technical illustration inspired by industrial tools and equipment"
                    >
                        <div className="tools-visual-grid" />

                        <div className="tools-visual-top">
                            <span>FIG. 006</span>
                            <span>TOOLS / EQUIPMENT</span>
                        </div>

                        <div className="tools-drawing">
                            <div className="tools-drawing-ring tools-ring-one" />
                            <div className="tools-drawing-ring tools-ring-two" />
                            <div className="tools-drawing-ring tools-ring-three" />

                            <div className="tools-cross tools-cross-one" />
                            <div className="tools-cross tools-cross-two" />

                            <div className="tools-drawing-core">
                                <span>06</span>
                                <small>JEC / T&amp;T</small>
                            </div>

                            <div className="tools-callout tools-callout-one">
                                <span>01</span>
                                <i />
                            </div>

                            <div className="tools-callout tools-callout-two">
                                <span>02</span>
                                <i />
                            </div>

                            <div className="tools-callout tools-callout-three">
                                <span>03</span>
                                <i />
                            </div>
                        </div>

                        <div className="tools-visual-annotation">
                            <span>APPLICATION-LED SUPPLY</span>
                            <p>Equipment for defined requirements</p>
                        </div>

                        <div className="tools-visual-bottom">
                            GENERAL / POWER / SPECIALISED
                        </div>
                    </div>
                </section>

                <section className="tools-spec-strip">
                    <div>
                        <span>01 / CATEGORY</span>
                        <strong>Industrial tools</strong>
                    </div>

                    <div>
                        <span>02 / RANGE</span>
                        <strong>5 listed categories</strong>
                    </div>

                    <div>
                        <span>03 / REQUIREMENTS</span>
                        <strong>General to specialised</strong>
                    </div>
                </section>

                <section
                    className="tools-range"
                    id="tools-range"
                >
                    <div className="section-label">
                        <span>01</span>
                        <span>THE PRODUCT RANGE</span>
                        <span>05 LISTED CATEGORIES</span>
                    </div>

                    <div className="tools-range-heading">
                        <h2>
                            Different tasks.
                            <br />
                            <span>Different tools.</span>
                        </h2>

                        <p>
                            Explore the tools and tackles categories
                            identified in the JEC company material.
                            Contact the team with your application,
                            required quantity, and any relevant
                            specifications.
                        </p>
                    </div>

                    <div className="tools-category-list">
                        {toolCategories.map((item) => (
                            <article
                                className="tools-category-row"
                                key={item.number}
                            >
                                <span className="tools-category-number">
                                    {item.number}
                                </span>

                                <div className="tools-category-copy">
                                    <h3>{item.name}</h3>
                                    <p>{item.detail}</p>
                                </div>

                                <span className="tools-category-tag">
                                    {item.tag}
                                </span>

                                <span
                                    className="tools-category-mark"
                                    aria-hidden="true"
                                >
                                    ↗
                                </span>
                            </article>
                        ))}
                    </div>
                </section>

                <section className="tools-requirements">
                    <div className="tools-requirements-label">
                        <span>02 / REQUIREMENT-LED SUPPLY</span>
                        <span>START WITH THE APPLICATION</span>
                    </div>

                    <h2>
                        Tell us what
                        <br />
                        <span>the task demands.</span>
                    </h2>

                    <div className="tools-requirements-bottom">
                        <p>
                            The right selection starts with understanding
                            the job, operating environment, and equipment
                            requirements. Share the intended application
                            and available specifications so the
                            requirement can be discussed with JEC.
                        </p>

                        <Link
                            href="/quote"
                            className="button-light"
                        >
                            Enquire about tools <span>↗</span>
                        </Link>
                    </div>
                </section>

                <section className="tools-notes">
                    <p className="eyebrow">
                        TECHNICAL NOTE / 006
                    </p>

                    <h2>
                        Have the details
                        <br />
                        ready?
                    </h2>

                    <p>
                        When enquiring, include the tool or accessory
                        category, intended application, quantity, and
                        any available specifications, drawing, or
                        product reference.
                    </p>

                    <Link
                        href="/quote"
                        className="button-dark"
                    >
                        Request a quotation <span>↗</span>
                    </Link>

                    <p className="tools-disclaimer">
                        The categories on this page reflect the JEC
                        company material. Specific brands, models,
                        materials, load ratings, certifications, and
                        technical specifications have not been
                        established here. Confirm suitability and
                        specifications with JEC before ordering.
                    </p>
                </section>

                <div className="tools-back-link">
                    <Link href="/products">
                        ← Back to all products
                    </Link>

                    <span>JACKSUN ENGIMECH / TOOLS &amp; TACKLES</span>
                </div>
            </main>
        </>
    );
}
