export interface Booking {
  id?: string;
  name: string;
  phone: string;
  email?: string;
  service_address: string;
  service_type: 'air-duct-cleaning' | 'dryer-vent-cleaning' | 'both';
  notes?: string;
  created_at?: string;
}

export const SERVICE_LABELS: Record<string, string> = {
  'air-duct-cleaning': 'Air Duct Cleaning',
  'dryer-vent-cleaning': 'Dryer Vent Cleaning',
  'both': 'Both Services',
};
