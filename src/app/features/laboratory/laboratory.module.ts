import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { LabTestListComponent } from './components/lab-test-list/lab-test-list.component';
import { LabResultsComponent } from './components/lab-results/lab-results.component';
import { LabOrdersComponent } from './components/lab-orders/lab-orders.component';
import { LaboratoryService } from './services/laboratory.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  { path: '', redirectTo: 'orders'},
  { path: 'orders', component: LabOrdersComponent },
  { path: 'tests', component: LabTestListComponent },
  { path: 'results', component: LabResultsComponent }
];

@NgModule({
  declarations: [
    LabTestListComponent,
    LabResultsComponent,
    LabOrdersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [LaboratoryService]
})
export class LaboratoryModule { }