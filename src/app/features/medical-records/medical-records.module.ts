import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { MedicalRecordListComponent } from './components/medical-record-list/medical-record-list.component';
import { MedicalRecordFormComponent } from './components/medical-record-form/medical-record-form.component';
import { MedicalRecordViewComponent } from './components/medical-record-view/medical-record-view.component';
import { MedicalRecordsService } from './services/medical-records.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  { path: '', component: MedicalRecordListComponent },
  { path: 'new', component: MedicalRecordFormComponent },
  { path: ':id', component: MedicalRecordViewComponent },
  { path: ':id/edit', component: MedicalRecordFormComponent }
];

@NgModule({
  declarations: [
    MedicalRecordListComponent,
    MedicalRecordFormComponent,
    MedicalRecordViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [MedicalRecordsService]
})
export class MedicalRecordsModule { }