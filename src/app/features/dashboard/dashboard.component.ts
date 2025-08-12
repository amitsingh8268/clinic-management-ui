import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // Current date and time for a dynamic welcome message
  currentDateTime: Date = new Date();

  // Dashboard metrics data
  metrics = [
    { title: 'Active Patients', value: 1250, icon: 'people_alt', color: '#4CAF50' }, // Green
    { title: 'Appointments Today', value: 48, icon: 'event', color: '#2196F3' },   // Blue
    { title: 'Pending Results', value: 15, icon: 'science', color: '#FFC107' },    // Amber
    { title: 'New Registrations', value: 5, icon: 'person_add', color: '#9C27B0' } // Purple
  ];

  // Dummy data for recent activities/appointments
  recentActivities = [
    { type: 'Appointment', patient: 'Alice Johnson', time: '10:00 AM', status: 'Confirmed', notes: 'Routine checkup' },
    { type: 'Consultation', patient: 'Bob Williams', time: '11:30 AM', status: 'Completed', notes: 'Follow-up on fever' },
    { type: 'Lab Result', patient: 'Charlie Brown', time: '01:00 PM', status: 'Pending Review', notes: 'Blood test results' },
    { type: 'Appointment', patient: 'Diana Prince', time: '02:00 PM', status: 'Confirmed', notes: 'Vaccination' },
    { type: 'New Patient', patient: 'Eve Adams', time: '03:45 PM', status: 'Registered', notes: 'First visit' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Update time every second (optional, for a live clock effect)
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }

  addNewPatient(): void {
     this.router.navigate(['/patients/new']);
  }

  scheduleAppointment(): void {
     this.router.navigate(['/appointments']);
  }

  viewReports(): void {
    this.router.navigate(['/reports']);
  }
}
