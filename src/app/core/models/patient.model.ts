import { Address } from "./Address.model";
import { EmergencyContact } from "./EmergencyContact.model";
import { Insurance } from "./Insurance.model";
import { MedicalHistory } from "./MedicalHistory.model";

export interface Patient {
  id: string;
  patientId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
  phone: string;
  email: string;
  address: Address;
  emergencyContact: EmergencyContact;
  insurance?: Insurance;
  medicalHistory: MedicalHistory[];
  createdDate: Date;
  updatedDate: Date;
}