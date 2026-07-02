import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.bookingHeader}>
      <div className={styles.bgDecoration}>
        <div className={`${styles.circle} ${styles.circle1}`} />
        <div className={`${styles.circle} ${styles.circle2}`} />
        <div className={`${styles.circle} ${styles.circle3}`} />
      </div>

      <div className={styles.headerInner}>
        <div className={styles.headerLogo}>
          <img
            src="/F122784C-E979-4ED2-8F89-0F6D73D1E8D2.jpeg"
            alt="DrAirDoc Logo"
            className={styles.logoImage}
          />
        </div>

        <h1 className={styles.headerTitle}>DrAirDoc Booking Management</h1>
        <p className={styles.subtitle}>Professional Air Duct &amp; Dryer Vent Cleaning</p>
        <p className={styles.tagline}>Breathe Cleaner Air &bull; Professional Service &bull; Trusted Experts</p>

        <div className={styles.contactInfo}>
          <a href="tel:8883282132" className={`${styles.contactBtn} ${styles.phoneBtn}`}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.64 3.36 2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.64a16 16 0 0 0 5.55 5.55l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            Call: 888-328-2132
          </a>
          <a href="tel:4704573805" className={`${styles.contactBtn} ${styles.phoneBtn}`}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
              <line x1="12" y1="18" x2="12.01" y2="18"/>
            </svg>
            Text: 470-457-3805
          </a>
          <a href="mailto:Doctorair101@gmail.com" className={`${styles.contactBtn} ${styles.emailBtn}`}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Email Us
          </a>
        </div>
      </div>
    </header>
  );
}
