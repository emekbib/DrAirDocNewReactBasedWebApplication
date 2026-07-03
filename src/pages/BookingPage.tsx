import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BookingForm from '../components/BookingForm';
import InfoSidebar from '../components/InfoSidebar';
import styles from './BookingPage.module.css';

export default function BookingPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.bookingContainer}>
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
              <source src="/8C9E06E0-486A-4764-9839-5CE3594D5530.mp4" type="video/mp4" />
              <source src="/8C9E06E0-486A-4764-9839-5CE3594D5530.mov" type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <main className={styles.bookingContent}>
        <BookingForm />
        <InfoSidebar />
      </main>

      <footer className={styles.pageFooter}>
        <button className={styles.adminLink} onClick={() => navigate('/list')}>
          🔒 Admin
        </button>
      </footer>
    </div>
  );
}
