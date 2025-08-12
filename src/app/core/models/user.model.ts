export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
  profile: UserProfile;
}

export enum UserRole {
  ADMIN = 'admin',
  DOCTOR = 'doctor',
  NURSE = 'nurse',
  RECEPTIONIST = 'receptionist',
  PHARMACIST = 'pharmacist',
  LAB_TECH = 'lab_tech',
  RADIOLOGIST = 'radiologist'
}

export interface UserProfile {
  firstName: string;
  lastName: string;
  phone: string;
  department?: string;
  specialization?: string;
}
