import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientMockService {
  private patients: Patient[] = [
  {
    id: 1,
    patientId: 'PAT-2025-0001',
    firstName: 'Amit',
    lastName: 'Sharma',
    dateOfBirth: new Date('1988-05-15'),
    gender: 'Male',
    phone: '+91-9876543210',
    email: 'amit.sharma@example.com',
    address: {
      street: '123 MG Road',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      zipCode:'4000'
    },
    emergencyContact: {
      name: 'Neha Sharma',
      relationship: 'Wife',
      phone: '+91-9812345678'
    },
    insurance: {
      provider: 'HDFC ERGO',
      policyNumber: 'HDFC-INS-458922',
      groupNumber:'',
      expiryDate: new Date('2027-05-15')
    },
    medicalHistory: [
      { condition: 'Hypertension', diagnosedDate: new Date('2020-06-10'), notes: 'Under medication' },
      { condition: 'Asthma', diagnosedDate: new Date('2015-08-22'), notes: 'Occasional inhaler use' }
    ],
    createdDate: new Date('2025-01-15'),
    updatedDate: new Date('2025-03-20')
  },
  {
    id: 2,
    patientId: 'PAT-2025-0002',
    firstName: 'Priya',
    lastName: 'Verma',
    dateOfBirth: new Date('1992-09-25'),
    gender: 'Female',
    phone: '+91-9123456780',
    email: 'priya.verma@example.com',
    address: {
      street: '456 Park Street',
      city: 'Mumbai',
      state: 'Maharashtra',
      zipCode: '400001',
      country: 'India'
    },
    emergencyContact: {
      name: 'Anil Verma',
      relationship: 'Brother',
      phone: '+91-9988776655'
    },
    insurance: {
      provider: 'ICICI Lombard',
      policyNumber: 'ICICI-INS-785421',
      groupNumber:'',
      expiryDate: new Date('2027-05-15')
    },
    medicalHistory: [
      { condition: 'Diabetes Type 2', diagnosedDate: new Date('2021-01-12'), notes: 'Monitoring sugar levels regularly' }
    ],
    createdDate: new Date('2025-02-05'),
    updatedDate: new Date('2025-04-10')
  },
  {
    id: 3,
    patientId: 'PAT-2025-0003',
    firstName: 'Rohan',
    lastName: 'Mehta',
    dateOfBirth: new Date('1985-03-10'),
    gender: 'Male',
    phone: '+91-9001122334',
    email: 'rohan.mehta@example.com',
    address: {
      street: '789 Residency Road',
      city: 'Bangalore',
      state: 'Karnataka',
      zipCode: '560025',
      country: 'India'
    },
    emergencyContact: {
      name: 'Sunita Mehta',
      relationship: 'Mother',
      phone: '+91-9776655443'
    },
    medicalHistory: [],
    createdDate: new Date('2025-03-01'),
    updatedDate: new Date('2025-03-15')
  },
  {
    id: 1,
    patientId: 'PAT-2025-0001',
    firstName: 'Amit',
    lastName: 'Sharma',
    dateOfBirth: new Date('1988-05-15'),
    gender: 'Male',
    phone: '+91-9876543210',
    email: 'amit.sharma@example.com',
    address: {
      street: '123 MG Road',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      zipCode:'4000'
    },
    emergencyContact: {
      name: 'Neha Sharma',
      relationship: 'Wife',
      phone: '+91-9812345678'
    },
    insurance: {
      provider: 'HDFC ERGO',
      policyNumber: 'HDFC-INS-458922',
      groupNumber:'',
      expiryDate: new Date('2027-05-15')
    },
    medicalHistory: [
      { condition: 'Hypertension', diagnosedDate: new Date('2020-06-10'), notes: 'Under medication' },
      { condition: 'Asthma', diagnosedDate: new Date('2015-08-22'), notes: 'Occasional inhaler use' }
    ],
    createdDate: new Date('2025-01-15'),
    updatedDate: new Date('2025-03-20')
  },
  {
    id: 1,
    patientId: 'PAT-2025-0001',
    firstName: 'Amit',
    lastName: 'Sharma',
    dateOfBirth: new Date('1988-05-15'),
    gender: 'Male',
    phone: '+91-9876543210',
    email: 'amit.sharma@example.com',
    address: {
      street: '123 MG Road',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      zipCode:'4000'
    },
    emergencyContact: {
      name: 'Neha Sharma',
      relationship: 'Wife',
      phone: '+91-9812345678'
    },
    insurance: {
      provider: 'HDFC ERGO',
      policyNumber: 'HDFC-INS-458922',
      groupNumber:'',
      expiryDate: new Date('2027-05-15')
    },
    medicalHistory: [
      { condition: 'Hypertension', diagnosedDate: new Date('2020-06-10'), notes: 'Under medication' },
      { condition: 'Asthma', diagnosedDate: new Date('2015-08-22'), notes: 'Occasional inhaler use' }
    ],
    createdDate: new Date('2025-01-15'),
    updatedDate: new Date('2025-03-20')
  },
  {
    id: 1,
    patientId: 'PAT-2025-0001',
    firstName: 'Amit',
    lastName: 'Sharma',
    dateOfBirth: new Date('1988-05-15'),
    gender: 'Male',
    phone: '+91-9876543210',
    email: 'amit.sharma@example.com',
    address: {
      street: '123 MG Road',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      zipCode:'4000'
    },
    emergencyContact: {
      name: 'Neha Sharma',
      relationship: 'Wife',
      phone: '+91-9812345678'
    },
    insurance: {
      provider: 'HDFC ERGO',
      policyNumber: 'HDFC-INS-458922',
      groupNumber:'',
      expiryDate: new Date('2027-05-15')
    },
    medicalHistory: [
      { condition: 'Hypertension', diagnosedDate: new Date('2020-06-10'), notes: 'Under medication' },
      { condition: 'Asthma', diagnosedDate: new Date('2015-08-22'), notes: 'Occasional inhaler use' }
    ],
    createdDate: new Date('2025-01-15'),
    updatedDate: new Date('2025-03-20')
  },
  {
    id: 1,
    patientId: 'PAT-2025-0001',
    firstName: 'Amit',
    lastName: 'Sharma',
    dateOfBirth: new Date('1988-05-15'),
    gender: 'Male',
    phone: '+91-9876543210',
    email: 'amit.sharma@example.com',
    address: {
      street: '123 MG Road',
      city: 'Delhi',
      state: 'Delhi',
      country: 'India',
      zipCode:'4000'
    },
    emergencyContact: {
      name: 'Neha Sharma',
      relationship: 'Wife',
      phone: '+91-9812345678'
    },
    insurance: {
      provider: 'HDFC ERGO',
      policyNumber: 'HDFC-INS-458922',
      groupNumber:'',
      expiryDate: new Date('2027-05-15')
    },
    medicalHistory: [
      { condition: 'Hypertension', diagnosedDate: new Date('2020-06-10'), notes: 'Under medication' },
      { condition: 'Asthma', diagnosedDate: new Date('2015-08-22'), notes: 'Occasional inhaler use' }
    ],
    createdDate: new Date('2025-01-15'),
    updatedDate: new Date('2025-03-20')
  },
];

  getPatients(): Observable<Patient[]> {
    return of(this.patients);
  }

  deletePatient(id: number): Observable<boolean> {
    this.patients = this.patients.filter(p => p.id !== id);
    return of(true);
  }

    getPatientById(id: number): Observable<Patient | undefined> {
     return  of(this.patients.find(p => p.id !== id));
  }
}
