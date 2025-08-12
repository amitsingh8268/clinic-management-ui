import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { PatientService } from './services/patient.services';
import { PatientListComponent } from './componenets/patient-list/patient-list.component';
import { PatientFormComponent } from './componenets/patient-form/patient-form.component';
import { PatientDetailComponent } from './componenets/patient-detail/patient-detail.component';
import { MaterialModule } from 'src/app/shared/material/material.module';

const routes = [
  { path: '', component: PatientListComponent },
  { path: 'new', component: PatientFormComponent },
  { path: ':id', component: PatientDetailComponent },
  { path: ':id/edit', component: PatientFormComponent }
];

@NgModule({
  declarations: [
    PatientListComponent,
    PatientFormComponent,
    PatientDetailComponent
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