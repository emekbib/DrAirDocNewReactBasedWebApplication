import Header from '../components/Header';
import BookingsList from '../components/BookingsList';
import styles from './BookingsListPage.module.css';

export default function BookingsListPage() {
  return (
    <div className={styles.pageContainer}>
      <Header />

<BookingsList />
    </div>
  );
}
