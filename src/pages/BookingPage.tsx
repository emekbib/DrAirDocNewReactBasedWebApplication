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
