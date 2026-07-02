import Header from '../components/Header';
import BookingsList from '../components/BookingsList';
import styles from './BookingsListPage.module.css';

export default function BookingsListPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

      <section className={styles.videoSection}>
        <div className={styles.videoWrapper}>
          <h2 className={styles.videoTitle}>DrAirDoc — See Us in Action</h2>
          <div className={styles.videoPlayer}>
            <video
              controls
              playsInline
              preload="metadata"
              className={styles.video}
            >
              <source src="/8C9E06E0-486A-4764-9839-5CE3594D5530.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <BookingsList />
    </div>
  );
}
