import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../core/services/api.service';
import { Patient } from 'src/app/core/models/patient.model';

@Injectable()
export class PatientService {
  constructor(private api: ApiService) { }

  getPatients(params?: any): Observable<Patient[]> {
    return this.api.get<Patient[]>('patients', params);
  }

  getPatient(id: string): Observable<Patient> {
    return this.api.get<Patient>(`patients/${id}`);
  }

  createPatient(patient: Patient): Observable<Patient> {
    return this.api.post<Patient>('patients', patient);
  }

  updatePatient(id: string, patient: Patient): Observable<Patient> {
    return this.api.put<Patient>(`patients/${id}`, patient);
  }

  deletePatient(id: string): Observable<any> {
    return this.api.delete(`patients/${id}`);
  }
}