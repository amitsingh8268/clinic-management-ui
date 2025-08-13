import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Appointment } from '../models/appointment.model';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private appointments: Appointment[] = [
    { id: 1, patientName: 'Amit Singh', doctorName: 'Dr. Sharma', appointmentDate: '2025-08-15', appointmentTime: '10:30', status: 'Scheduled', reason: 'First visit' },
    { id: 2, patientName: 'Priya Gupta', doctorName: 'Dr. Mehta', appointmentDate: '2025-08-16', appointmentTime: '11:00', status: 'Completed',reason:'' }
  ];

  getAppointments(): Observable<Appointment[]> {
    return of(this.appointments);
  }

  getAppointmentById(id: number): Observable<Appointment | undefined> {
    return of(this.appointments.find(a => a.id === id));
  }

  addAppointment(appointment: Appointment) {
    appointment.id = this.appointments.length + 1;
    this.appointments.push(appointment);
  }

  updateAppointment(appointment: Appointment) {
    const index = this.appointments.findIndex(a => a.id === appointment.id);
    if (index !== -1) this.appointments[index] = appointment;
  }
}
