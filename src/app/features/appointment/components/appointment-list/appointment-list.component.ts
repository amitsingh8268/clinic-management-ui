import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { Appointment } from '../../models/appointment.model';
import { ColumnDefinition } from 'src/app/shared/components/generic-grid/generic-grid.component';


@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  appointments: Appointment[] = [];

  appointmentColumns: ColumnDefinition[] = [
    { key: 'patientName', header: 'Patient' },
    { key: 'doctorName', header: 'Doctor' },
    { key: 'date', header: 'Date' },
    { key: 'time', header: 'Time' },
    { key: 'status', header: 'Status' }
  ];

  constructor(private appointmentService: AppointmentService, private router: Router) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(data => this.appointments = data);
  }

  viewDetails(row: any) {
    this.router.navigate(['/appointments', row.id]);
  }
}
