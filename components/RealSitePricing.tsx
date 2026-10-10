import styles from "./RealSitePricing.module.css";

const Check = () => <span className={styles.check} aria-hidden="true">✓</span>;

export type RealSitePricingProps = {
  /** Replace these sample starting prices with approved RealSite pricing. */
  basePrice?: string;
  servicePrice?: string;
  salesPrice?: string;
  contactHref?: string;
};

export default function RealSitePricing({
  basePrice = "$799",
  servicePrice = "Custom quote",
  salesPrice = "Custom quote",
  contactHref = "/contact",
}: RealSitePricingProps) {
  return (
      <section className={styles.pricing} id="realsite-pricing" aria-labelledby="realsite-pricing-title">
        <div className={styles.container}>
          <p className={styles.eyebrow}>A REAL SITE. YOUR WAY.</p>
          <div className={styles.sectionHeader}>
            <div>
              <h2 id="realsite-pricing-title">Start with a <span>RealSite.</span><br />Add what you need.</h2>
              <p>One connected foundation. Add Service Delivery, Product Sales, or both as your business grows.</p>
            </div>
            <div className={styles.headerNote}><span className={styles.noteCircle}>✓</span><span>ONE FOUNDATION.<br />ENDLESS POSSIBILITIES.</span></div>
          </div>
          <div className={styles.pricingGrid}>
            <article className={`${styles.priceCard} ${styles.coreCard}`}>
              <div className={styles.cardTop}><span>01 / THE FOUNDATION</span><span className={styles.included}>INCLUDED</span></div>
              <h3>RealSite</h3>
              <p className={styles.priceLabel}>STARTING FROM</p>
              <p className={styles.price}>{basePrice}</p>
              <p className={styles.cardIntro}>Your website, connected to your customers and the way your business operates.</p>
              <ul>{["Professional website", "Client Experience", "Asana operational setup", "Connected inquiry workflow", "Mobile-ready design"].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <a className={styles.primaryButton} href={contactHref}>GET A REAL SITE <span aria-hidden="true">↗</span></a>
            </article>
            <article className={styles.priceCard}>
              <div className={styles.cardTop}><span>02 / OPTIONAL SOLUTION</span><span className={styles.plus}>+</span></div>
              <h3>Service Delivery</h3>
              <p className={styles.priceLabel}>ADDITIONAL IMPLEMENTATION</p>
              <p className={styles.optionPrice}>{servicePrice}</p>
              <p className={styles.cardIntro}>Configure the tools that help your team deliver work from inquiry to completion.</p>
              <ul>{["Booking & scheduling", "Quotes & proposals", "Project / job tracking", "Invoicing", "Industry-specific integrations"].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <a className={styles.secondaryButton} href={`${contactHref}?solution=service-delivery`}>ADD SERVICE DELIVERY <span aria-hidden="true">↗</span></a>
            </article>
            <article className={styles.priceCard}>
              <div className={styles.cardTop}><span>03 / OPTIONAL SOLUTION</span><span className={styles.plus}>+</span></div>
              <h3>Product Sales</h3>
              <p className={styles.priceLabel}>ADDITIONAL IMPLEMENTATION</p>
              <p className={styles.optionPrice}>{salesPrice}</p>
              <p className={styles.cardIntro}>Sell products, memberships, subscriptions, and more through your RealSite.</p>
              <ul>{["Product catalog", "Secure checkout", "Payments", "Subscriptions & memberships", "Commerce integrations"].map((item) => <li key={item}><Check />{item}</li>)}</ul>
              <a className={styles.secondaryButton} href={`${contactHref}?solution=product-sales`}>ADD PRODUCT SALES <span aria-hidden="true">↗</span></a>
            </article>
          </div>
          <p className={styles.priceFootnote}>Service Delivery and Product Sales are independent additions. Choose either, both, or neither. Platform subscription fees, where applicable, are separate.</p>
        </div>
      </section>
  );
}
