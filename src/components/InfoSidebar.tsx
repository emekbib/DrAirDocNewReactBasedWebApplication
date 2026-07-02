import styles from './InfoSidebar.module.css';

export default function InfoSidebar() {
  return (
    <aside className={styles.infoSidebar}>
      <div className={`${styles.infoCard} ${styles.featured}`}>
        <h3><span className={styles.cardIcon}>&#11088;</span>Why Choose DrAirDoc?</h3>
        <ul>
          <li>&#9989; Licensed &amp; Fully Insured</li>
          <li>&#9989; NADCA Certified Technicians</li>
          <li>&#9989; 100% Satisfaction Guaranteed</li>
          <li>&#9989; Competitive Pricing</li>
          <li>&#9989; Same-Day Service Available</li>
          <li>&#9989; Atlanta's Most Trusted Choice</li>
        </ul>
      </div>

      <div className={styles.infoCard}>
        <h3><span className={styles.cardIcon}>&#128506;&#65039;</span>Service Areas</h3>
        <p>We serve the entire Atlanta Metropolitan Area including:</p>
        <ul>
          <li>&#128205; Atlanta &amp; Marietta</li>
          <li>&#128205; Alpharetta &amp; Roswell</li>
          <li>&#128205; Kennesaw &amp; Smyrna</li>
          <li>&#128205; Decatur &amp; Sandy Springs</li>
          <li>&#128205; Norcross &amp; Duluth</li>
          <li>&#128205; Lawrenceville &amp; Buford</li>
        </ul>
      </div>

      <div className={styles.infoCard}>
        <h3><span className={styles.cardIcon}>&#128336;</span>Business Hours</h3>
        <div className={styles.hoursList}>
          <div className={styles.hourItem}>
            <strong>Mon – Fri</strong>
            <span>8:00 AM – 6:00 PM</span>
          </div>
          <div className={styles.hourItem}>
            <strong>Saturday</strong>
            <span>9:00 AM – 4:00 PM</span>
          </div>
          <div className={styles.hourItem}>
            <strong>Sunday</strong>
            <span className={styles.closed}>Closed</span>
          </div>
        </div>
      </div>

      <div className={styles.infoCard}>
        <h3><span className={styles.cardIcon}>&#128179;</span>Payment Options</h3>
        <p>We accept:</p>
        <ul>
          <li>&#128181; Cash</li>
          <li>&#9989; Personal Check</li>
          <li>&#128179; All Major Credit / Debit Cards</li>
          <li>&#128247; Zelle &amp; Venmo</li>
        </ul>
      </div>
    </aside>
  );
}
