import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MedicationListComponent } from './components/medication-list/medication-list.component';
import { PrescriptionListComponent } from './components/prescription-list/prescription-list.component';
import { PharmacyInventoryComponent } from './components/pharmacy-inventory/pharmacy-inventory.component';
import { PharmacyService } from './services/pharmacy.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  { path: '', redirectTo: 'prescriptions'},
  { path: 'prescriptions', component: PrescriptionListComponent },
  { path: 'medications', component: MedicationListComponent },
  { path: 'inventory', component: PharmacyInventoryComponent }
];

@NgModule({
  declarations: [
    MedicationListComponent,
    PrescriptionListComponent,
    PharmacyInventoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [PharmacyService]
})
export class PharmacyModule { }