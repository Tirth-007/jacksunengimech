import { useEffect, useRef } from "react";
import styles from "./BusinessRelationshipWall.module.css";

const companies = [
    { number: "01", name: "Ingersoll Rand", logo: "/assets/clients/01_ingersoll_rand.png", field: "INDUSTRIAL EQUIPMENT" },
    { number: "02", name: "JSW Steel", logo: "/assets/clients/02_jsw_steel.png", field: "STEEL & MATERIALS" },
    { number: "03", name: "AM/NS India", logo: "/assets/clients/03_amns_india.png", field: "STEEL & MATERIALS" },
    { number: "04", name: "Dresser-Rand", logo: "/assets/clients/04_dresser_rand.png", field: "PROCESS EQUIPMENT" },
    { number: "05", name: "Larsen & Toubro", logo: "/assets/clients/05_larsen_toubro_lt.png", field: "ENGINEERING & CONSTRUCTION" },
    { number: "06", name: "GSPC LNG", logo: "/assets/clients/06_gspc_lng.png", field: "ENERGY & GAS" },
    { number: "07", name: "Texmo", logo: "/assets/clients/07_texmo.png", field: "INDUSTRIAL PRODUCTS" },
    { number: "08", name: "Haitian Huayuan", logo: "/assets/clients/08_haitian_huayuan.png", field: "MACHINERY & INDUSTRIAL SYSTEMS" },
    { number: "09", name: "N.K. Proteins", logo: "/assets/clients/09_nk_proteins.png", field: "FOOD & NUTRITION" },
    { number: "10", name: "IndustryBuying", logo: "/assets/clients/10_industrybuying.png", field: "INDUSTRIAL SUPPLY" },
    { number: "11", name: "Kothari Group", logo: "/assets/clients/11_kothari_group.png", field: "DIVERSIFIED BUSINESS" },
    { number: "12", name: "SecuraMax", logo: "/assets/clients/12_securamax.png", field: "FLOW CONTROL" },
    { number: "13", name: "Dishman Carbogen Amcis", logo: "/assets/clients/13_dishman_carbogen_amcis.png", field: "PHARMA & LIFE SCIENCES" },
    { number: "14", name: "Ratnaflex", logo: "/assets/clients/14_ratnaflex.png", field: "ENGINEERED SOLUTIONS" },
    { number: "15", name: "Triovision", logo: "/assets/clients/15_triovision.png", field: "COMPOSITES & MATERIALS" },
    { number: "16", name: "WD", logo: "/assets/clients/16_wd.png", field: "INDUSTRIAL SOLUTIONS" },
    { number: "17", name: "Cadila Pharmaceuticals", logo: "/assets/clients/17_cadila_pharmaceuticals.png", field: "PHARMACEUTICALS" },
    { number: "18", name: "SPX FLOW", logo: "/assets/clients/18_spx_flow.png", field: "PROCESS TECHNOLOGIES" },
];

function CompanyMark({ company }) {
    return (
        <article className={styles.company} key={company.number}>
            <span className={styles.number}>{company.number}</span>
            <img className={styles.logo} src={company.logo} alt={`${company.name} logo`} loading="lazy" />
            <span className={styles.name}>{company.name}</span>
            <span className={styles.field}>{company.field}</span>
        </article>
    );
}

export default function BusinessRelationshipWall() {
    const wallRef = useRef(null);

    useEffect(() => {
        const node = wallRef.current;
        if (!node || typeof IntersectionObserver === "undefined") return;
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                node.classList.add(styles.visible);
                observer.disconnect();
            }
        }, { threshold: 0.08 });
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    const left = companies.slice(0, 9);
    const right = companies.slice(9);

    return (
        <section className={styles.section} id="clients" aria-labelledby="relationship-wall-title">
            <div className={styles.topline}>
                <span>03 / OUR BUSINESS RELATIONSHIPS</span>
                <span>JEC · EST. 2020</span>
            </div>

            <header className={styles.heading}>
                <p className={styles.eyebrow}>A NETWORK BUILT THROUGH INDUSTRY</p>
                <h2 id="relationship-wall-title">A network of <em>trust.</em></h2>
                <p className={styles.subheading}>BUILT THROUGH INDUSTRIAL PARTNERSHIPS.</p>
                <p className={styles.intro}>Companies represented in JEC’s business profile, across industrial and engineering domains.</p>
            </header>

            <div className={styles.network} ref={wallRef}>
                <svg className={styles.lines} viewBox="0 0 1000 720" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                        <linearGradient id="jec-wall-line" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#b99a64" stopOpacity=".24" />
                            <stop offset=".5" stopColor="#b99a64" stopOpacity=".88" />
                            <stop offset="1" stopColor="#00a6a1" stopOpacity=".45" />
                        </linearGradient>
                    </defs>
                    {companies.map((company, index) => {
                        const isLeft = index < 9;
                        const row = isLeft ? index : index - 9;
                        const y = 40 + row * 80;
                        const x = isLeft ? 270 : 730;
                        const c1 = isLeft ? 410 : 590;
                        const c2 = isLeft ? 365 : 635;
                        return (
                            <g key={company.number} className={styles.connector}>
                                <path d={`M 500 360 C ${c1} 360, ${c2} ${y}, ${x} ${y}`} />
                                <circle cx={x} cy={y} r="3" />
                                <circle cx={isLeft ? 475 : 525} cy={360 + (y - 360) * .45} r="2" />
                            </g>
                        );
                    })}
                    <circle className={styles.orbit} cx="500" cy="360" r="105" />
                    <circle className={styles.orbit} cx="500" cy="360" r="125" />
                    <circle className={styles.orbit} cx="500" cy="360" r="145" />
                </svg>

                <div className={styles.companyColumn}>{left.map((company) => <CompanyMark company={company} key={company.number} />)}</div>

                <div className={styles.hub}>
                    <span className={styles.hubKicker}>INDUSTRIAL PARTNERSHIPS</span>
                    <strong>JEC</strong>
                    <span className={styles.hubRule} />
                    <span className={styles.hubName}>JACKSUN ENGIMECH TECH</span>
                    <span className={styles.hubFooter}>ENGINEERING<br />PARTNERSHIPS IN ACTION</span>
                </div>

                <div className={styles.companyColumn}>{right.map((company) => <CompanyMark company={company} key={company.number} />)}</div>
            </div>

            <footer className={styles.footer}>
                <span>BUILT THROUGH RELATIONSHIPS.</span>
                <span>ENGINEERED AROUND REQUIREMENTS.</span>
            </footer>
        </section>
    );
}






// import { useEffect, useRef } from "react";
// import styles from "./BusinessRelationshipWall.module.css";

// const companies = [
//   { number: "01", name: "Ingersoll Rand", logo: "/assets/clients/01_ingersoll_rand.png", descriptor: "Industrial equipment" },
//   { number: "02", name: "JSW Steel", logo: "/assets/clients/02_jsw_steel.png", descriptor: "Steel & materials" },
//   { number: "03", name: "AM/NS India", logo: "/assets/clients/03_amns_india.png", descriptor: "Steel & materials" },
//   { number: "04", name: "Dresser-Rand", logo: "/assets/clients/04_dresser_rand.png", descriptor: "Process equipment" },
//   { number: "05", name: "Larsen & Toubro", logo: "/assets/clients/05_larsen_toubro_lt.png", descriptor: "Engineering & construction" },
//   { number: "06", name: "GSPC LNG", logo: "/assets/clients/06_gspc_lng.png", descriptor: "Energy & gas" },
//   { number: "07", name: "Texmo", logo: "/assets/clients/07_texmo.png", descriptor: "Industrial products" },
//   { number: "08", name: "Haitian Huayuan", logo: "/assets/clients/08_haitian_huayuan.png", descriptor: "Machinery & systems" },
//   { number: "09", name: "N.K. Proteins", logo: "/assets/clients/09_nk_proteins.png", descriptor: "Food & nutrition" },
//   { number: "10", name: "IndustryBuying", logo: "/assets/clients/10_industrybuying.png", descriptor: "Industrial supply" },
//   { number: "11", name: "Kothari Group", logo: "/assets/clients/11_kothari_group.png", descriptor: "Diversified business" },
//   { number: "12", name: "SecuraMax", logo: "/assets/clients/12_securamax.png", descriptor: "Flow control" },
//   { number: "13", name: "Dishman Carbogen Amcis", logo: "/assets/clients/13_dishman_carbogen_amcis.png", descriptor: "Pharma & life sciences" },
//   { number: "14", name: "Ratnaflex", logo: "/assets/clients/14_ratnaflex.png", descriptor: "Engineered solutions" },
//   { number: "15", name: "Triovision", logo: "/assets/clients/15_triovision.png", descriptor: "Composites & materials" },
//   { number: "16", name: "WD", logo: "/assets/clients/16_wd.png", descriptor: "Industrial solutions" },
//   { number: "17", name: "Cadila Pharmaceuticals", logo: "/assets/clients/17_cadila_pharmaceuticals.png", descriptor: "Pharmaceuticals" },
//   { number: "18", name: "SPX FLOW", logo: "/assets/clients/18_spx_flow.png", descriptor: "Process technologies" },
// ];

// function CompanyPlaque({ company }) {
//   return (
//     <article className={styles.plaque}>
//       <span className={styles.plaqueNumber}>{company.number}</span>
//       <div className={styles.plaqueBrand}>
//         <img src={company.logo} alt={`${company.name} logo`} loading="lazy" />
//         <span>{company.name}</span>
//       </div>
//       <span className={styles.plaqueDescriptor}>{company.descriptor}</span>
//     </article>
//   );
// }

// export default function BusinessRelationshipWall() {
//   const wallRef = useRef(null);

//   useEffect(() => {
//     const node = wallRef.current;
//     if (!node || typeof IntersectionObserver === "undefined") return;
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         node.classList.add(styles.isVisible);
//         observer.disconnect();
//       }
//     }, { threshold: 0.08 });
//     observer.observe(node);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className={styles.wallSection} id="clients" aria-labelledby="relationship-wall-title">
//       <div className={styles.wallTopline}>
//         <span>03 / OUR BUSINESS RELATIONSHIPS</span>
//         <span>JEC · EST. 2020</span>
//       </div>

//       <header className={styles.wallHeading}>
//         <p className={styles.eyebrow}>A NETWORK BUILT THROUGH INDUSTRY</p>
//         <h2 id="relationship-wall-title">A network of <em>trust.</em></h2>
//         <p className={styles.intro}>A considered representation of companies included in JEC’s business profile, across industrial and engineering domains.</p>
//       </header>

//       <div className={styles.architecture} ref={wallRef}>
//         <svg className={styles.connections} viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">
//           <defs><linearGradient id="jec-network-line" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#b99a64" stopOpacity=".35"/><stop offset="50%" stopColor="#00a6a1" stopOpacity=".75"/><stop offset="100%" stopColor="#b99a64" stopOpacity=".35"/></linearGradient></defs>
//           {companies.map((company, index) => {
//             const left = index < 9;
//             const row = left ? index : index - 9;
//             const y = 34 + row * 72;
//             const x = left ? 300 : 700;
//             return <g key={company.number} className={styles.connection}>
//               <path d={`M 500 325 C ${left ? 420 : 580} 325, ${left ? 390 : 610} ${y}, ${x} ${y}`} />
//               <circle cx={x} cy={y} r="3" />
//             </g>;
//           })}
//           <circle className={styles.orbit} cx="500" cy="325" r="116" />
//           <circle className={styles.orbit} cx="500" cy="325" r="137" />
//         </svg>

//         <div className={`${styles.companyColumn} ${styles.leftColumn}`}>
//           {companies.slice(0, 9).map((company) => <CompanyPlaque company={company} key={company.number} />)}
//         </div>

//         <div className={styles.centralHub} aria-label="Jacksun Engimech Tech">
//           <span className={styles.hubKicker}>INDUSTRIAL PARTNERSHIPS</span>
//           <strong>JEC</strong>
//           <span className={styles.hubRule} />
//           <span className={styles.hubCaption}>JACKSUN ENGIMECH TECH</span>
//         </div>

//         <div className={`${styles.companyColumn} ${styles.rightColumn}`}>
//           {companies.slice(9).map((company) => <CompanyPlaque company={company} key={company.number} />)}
//         </div>
//       </div>

//       <div className={styles.wallFooter}>
//         <span>BUILT THROUGH RELATIONSHIPS.</span>
//         <span>ENGINEERED AROUND REQUIREMENTS.</span>
//       </div>
//     </section>
//   );
// }
