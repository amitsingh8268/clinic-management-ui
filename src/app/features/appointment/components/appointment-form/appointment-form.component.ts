import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.scss']
})
export class AppointmentFormComponent implements OnInit {
  appointmentForm!: FormGroup;
  patients = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' }
  ];
  doctors = [
    { id: 1, name: 'Dr. Williams', specialization: 'Cardiology' },
    { id: 2, name: 'Dr. Johnson', specialization: 'Dermatology' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      patientId: ['', Validators.required],
      doctorId: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      duration: [30],
      reason: ['']
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      console.log('Appointment saved:', this.appointmentForm.value);
      // TODO: Call API
    }
  }
}
