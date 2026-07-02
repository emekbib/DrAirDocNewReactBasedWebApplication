import { useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Booking } from '../types/booking';
import styles from './BookingForm.module.css';

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service_address?: string;
  service_type?: string;
}

function validate(data: Partial<Booking>): FormErrors {
  const errors: FormErrors = {};
  if (!data.name?.trim()) errors.name = 'Full name is required.';
  if (!data.phone?.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^[\d\s\-()]{10,}$/.test(data.phone)) {
    errors.phone = 'Enter a valid phone number (10+ digits).';
  }
  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!data.service_address?.trim()) errors.service_address = 'Service address is required.';
  if (!data.service_type) errors.service_type = 'Please select a service type.';
  return errors;
}

export default function BookingForm() {
  const [form, setForm] = useState<Partial<Booking>>({
    name: '', phone: '', email: '', service_address: '', service_type: undefined, notes: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (submitted) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setSuccessMessage('');
    setErrorMessage('');

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from('bookings').insert([{
      name: form.name!.trim(),
      phone: form.phone!.trim(),
      email: form.email?.trim() || null,
      service_address: form.service_address!.trim(),
      service_type: form.service_type!,
      notes: form.notes?.trim() || null,
    }]);

    setSubmitting(false);

    if (error) {
      setErrorMessage('Failed to submit booking. Please try again or call us directly.');
      return;
    }

    setSuccessMessage('Booking request submitted successfully! We will contact you soon.');
    setForm({ name: '', phone: '', email: '', service_address: '', service_type: undefined, notes: '' });
    setErrors({});
    setSubmitted(false);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formHeader}>
        <h2>&#128203; New Booking Form</h2>
        <p>Fill out the form below and we'll get back to you promptly</p>
      </div>

      <form className={styles.bookingForm} onSubmit={handleSubmit} noValidate>
        {successMessage && (
          <div className={styles.successMessage}>
            <span className={styles.successIcon}>&#9989;</span>
            <span className={styles.messageText}>{successMessage}</span>
          </div>
        )}
        {errorMessage && (
          <div className={styles.errorMessageBox}>
            <span className={styles.errorIcon}>&#10060;</span>
            <span className={styles.messageText}>{errorMessage}</span>
          </div>
        )}

        <div className={styles.formGroup}>
          <label htmlFor="name">
            <span className={styles.labelIcon}>&#128100;</span>
            Full Name <span className={styles.required}>*</span>
          </label>
          <input
            id="name" name="name" type="text"
            className={`${styles.formControl} ${errors.name ? styles.error : ''}`}
            placeholder="John Smith"
            value={form.name ?? ''}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.errorMessage}><span>&#9888;&#65039;</span>{errors.name}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone">
            <span className={styles.labelIcon}>&#128222;</span>
            Phone Number <span className={styles.required}>*</span>
          </label>
          <input
            id="phone" name="phone" type="tel"
            className={`${styles.formControl} ${errors.phone ? styles.error : ''}`}
            placeholder="(404) 555-1234"
            value={form.phone ?? ''}
            onChange={handleChange}
          />
          {errors.phone && <p className={styles.errorMessage}><span>&#9888;&#65039;</span>{errors.phone}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">
            <span className={styles.labelIcon}>&#9993;&#65039;</span>
            Email Address <span className={styles.optional}>(optional)</span>
          </label>
          <input
            id="email" name="email" type="email"
            className={`${styles.formControl} ${errors.email ? styles.error : ''}`}
            placeholder="john@example.com"
            value={form.email ?? ''}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.errorMessage}><span>&#9888;&#65039;</span>{errors.email}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service_address">
            <span className={styles.labelIcon}>&#127968;</span>
            Service Address <span className={styles.required}>*</span>
          </label>
          <input
            id="service_address" name="service_address" type="text"
            className={`${styles.formControl} ${errors.service_address ? styles.error : ''}`}
            placeholder="123 Main St, Atlanta, GA 30301"
            value={form.service_address ?? ''}
            onChange={handleChange}
          />
          {errors.service_address && <p className={styles.errorMessage}><span>&#9888;&#65039;</span>{errors.service_address}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="service_type">
            <span className={styles.labelIcon}>&#128295;</span>
            Service Type <span className={styles.required}>*</span>
          </label>
          <select
            id="service_type" name="service_type"
            className={`${styles.formControl} ${errors.service_type ? styles.error : ''}`}
            value={form.service_type ?? ''}
            onChange={handleChange}
          >
            <option value="" disabled>Select a service...</option>
            <option value="air-duct-cleaning">Air Duct Cleaning</option>
            <option value="dryer-vent-cleaning">Dryer Vent Cleaning</option>
            <option value="both">Both Services</option>
          </select>
          {errors.service_type && <p className={styles.errorMessage}><span>&#9888;&#65039;</span>{errors.service_type}</p>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="notes">
            <span className={styles.labelIcon}>&#128203;</span>
            Additional Notes <span className={styles.optional}>(optional)</span>
          </label>
          <textarea
            id="notes" name="notes"
            className={styles.formControl}
            placeholder="Any special instructions or questions..."
            rows={4}
            value={form.notes ?? ''}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitBtn} disabled={submitting}>
          <span className={styles.btnIcon}>{submitting ? '⏳' : '📋'}</span>
          {submitting ? 'Submitting...' : 'Submit Booking Request'}
        </button>

        <p className={styles.formFooter}>
          <span className={styles.lockIcon}>&#128274;</span>
          Your information is secure. By submitting, you agree to be contacted by DrAirDoc.
        </p>
      </form>
    </div>
  );
}
