export interface Appointment {
  id?: number;
  patientName: string;
  doctorName: string;
  appointmentDate: string;
  appointmentTime: string;
  reason: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
}
