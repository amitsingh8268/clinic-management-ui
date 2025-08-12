





// appointment.model.ts
export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  appointmentDate: Date;
  duration: number;
  type: AppointmentType;
  status: AppointmentStatus;
  reason: string;
  notes?: string;
  createdDate: Date;
}

export enum AppointmentType {
  CONSULTATION = 'consultation',
  FOLLOWUP = 'followup',
  EMERGENCY = 'emergency',
  SURGERY = 'surgery'
}

export enum AppointmentStatus {
  SCHEDULED = 'scheduled',
  CONFIRMED = 'confirmed',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled',
  NO_SHOW = 'no_show'
}

// medical-record.model.ts
export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  visitDate: Date;
  chiefComplaint: string;
  diagnosis: string;
  treatment: string;
  prescription: Prescription[];
  labOrders: LabOrder[];
  radiologyOrders: RadiologyOrder[];
  notes: string;
}

export interface Prescription {
  medication: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions: string;
}

export interface LabOrder {
  testName: string;
  status: string;
  orderedDate: Date;
  results?: string;
}

export interface RadiologyOrder {
  examType: string;
  bodyPart: string;
  status: string;
  orderedDate: Date;
  results?: string;
}