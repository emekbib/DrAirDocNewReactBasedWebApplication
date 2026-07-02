import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SERVICE_LABELS } from '../types/booking';
import type { Booking } from '../types/booking';
import styles from './BookingsList.module.css';

const PASSWORD = 'DrAirDoc2024';
const STORAGE_KEY = 'list_authenticated';

export default function BookingsList() {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(
    () => sessionStorage.getItem(STORAGE_KEY) === 'true'
  );
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (authenticated) loadBookings();
  }, [authenticated]);

  const loadBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .order('created_at', { ascending: false });
    if (!error && data) setBookings(data as Booking[]);
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === PASSWORD) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return 'N/A';
    const d = new Date(dateStr);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const badgeClass = (type: string) => {
    const map: Record<string, string> = {
      'air-duct-cleaning': styles.badgeAirDuct,
      'dryer-vent-cleaning': styles.badgeDryerVent,
      'both': styles.badgeBoth,
    };
    return `${styles.serviceBadge} ${map[type] ?? ''}`;
  };

  if (!authenticated) {
    return (
      <div className={styles.passwordGate}>
        <div className={styles.passwordCard}>
          <div className={styles.passwordIcon}>&#128274;</div>
          <h2>Admin Access Required</h2>
          <p>Enter the password to view bookings.</p>
          <form onSubmit={handleLogin} className={styles.passwordForm}>
            <input
              type="password"
              placeholder="Enter password"
              value={passwordInput}
              onChange={e => setPasswordInput(e.target.value)}
              className={styles.passwordInput}
              autoFocus
            />
            {authError && <p className={styles.authError}>{authError}</p>}
            <button type="submit" className={styles.passwordBtn}>Access Bookings</button>
          </form>
          <button className={styles.backLink} onClick={() => navigate('/')}>
            &#8592; Back to Booking Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className={styles.bookingsListContainer}>
      <div className={styles.sectionHeader}>
        <h2>&#128203; All Bookings</h2>
        <div className={styles.headerActions}>
          <button className={styles.refreshBtn} onClick={loadBookings}>&#8635; Refresh</button>
          <button className={styles.addBookingBtn} onClick={() => navigate('/')}>
            <span className={styles.btnIcon}>&#43;</span>
            Add New Booking
          </button>
        </div>
      </div>

      <div className={styles.tableContainer}>
        {loading ? (
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner} />
            <p>Loading bookings...</p>
          </div>
        ) : (
          <table className={styles.bookingsTable}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Service Address</th>
                <th>Service Type</th>
                <th>Notes</th>
                <th>Date Created</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan={7} className={styles.noData}>
                    <div className={styles.noDataContent}>
                      <span className={styles.noDataIcon}>&#128205;</span>
                      <p>No bookings found</p>
                      <button className={styles.addFirstBtn} onClick={() => navigate('/')}>
                        Add Your First Booking
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                bookings.map(b => (
                  <tr key={b.id}>
                    <td data-label="Name">{b.name}</td>
                    <td data-label="Phone">{b.phone}</td>
                    <td data-label="Email">{b.email || 'N/A'}</td>
                    <td data-label="Service Address" className={styles.addressCell}>{b.service_address}</td>
                    <td data-label="Service Type">
                      <span className={badgeClass(b.service_type)}>
                        {SERVICE_LABELS[b.service_type] ?? b.service_type}
                      </span>
                    </td>
                    <td data-label="Notes" className={styles.notesCell}>{b.notes || 'N/A'}</td>
                    <td data-label="Date Created">{formatDate(b.created_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </section>
  );
}
