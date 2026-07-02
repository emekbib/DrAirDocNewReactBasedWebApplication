import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookingPage from './pages/BookingPage';
import BookingsListPage from './pages/BookingsListPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookingPage />} />
        <Route path="/list" element={<BookingsListPage />} />
      </Routes>
    </BrowserRouter>
  );
}
