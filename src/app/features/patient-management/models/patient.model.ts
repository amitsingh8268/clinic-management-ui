import { Address } from "src/app/core/models/Address.model";
import { EmergencyContact } from "src/app/core/models/EmergencyContact.model";
import { Insurance } from "src/app/core/models/Insurance.model";
import { MedicalHistory } from "src/app/core/models/MedicalHistory.model";

export interface Patient {
  id: number;
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