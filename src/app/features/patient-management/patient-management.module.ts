import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { PatientService } from './services/patient.services';
import { PatientListComponent } from './componenets/patient-list/patient-list.component';
import { PatientDetailsComponent } from './componenets/patient-detail/patient-detail.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { AddPatientComponent } from './componenets/add-patient/add-patient.component';

const routes = [
  { path: '', component: PatientListComponent },
  { path: 'new', component: AddPatientComponent },
  { path: ':id', component: PatientDetailsComponent },
  { path: 'edit/:id', component: AddPatientComponent }
];

@NgModule({
  declarations: [
    PatientListComponent,
    PatientDetailsComponent,
    AddPatientComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers: [PatientService]
})
export class PatientManagementModule { }