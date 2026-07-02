
CREATE TABLE bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  service_address text NOT NULL,
  service_type text NOT NULL CHECK (service_type IN ('air-duct-cleaning', 'dryer-vent-cleaning', 'both')),
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon WITH CHECK (true);

CREATE POLICY "anon_select_bookings" ON bookings FOR SELECT
  TO anon USING (true);

CREATE POLICY "authenticated_update_bookings" ON bookings FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_delete_bookings" ON bookings FOR DELETE
  TO authenticated USING (true);
