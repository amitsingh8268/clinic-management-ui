import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientMockService } from '../../services/patient-mock.service';
import { PatientService } from '../../services/patient.services';


@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.scss']
})
export class PatientDetailsComponent implements OnInit {
  patientId!: number;
  patient: any;
  constructor(
    private route: ActivatedRoute,
    private patientService: PatientMockService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.patientId) {
      this.loadPatientDetails();
    } 
  }

  loadPatientDetails(): void {
    this.patientService.getPatientById(this.patientId).subscribe({
      next: (data) => {
        this.patient = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/patients']);
  }

  editPatient(): void {
    this.router.navigate(['/patients/edit', this.patientId]);
  }
}
