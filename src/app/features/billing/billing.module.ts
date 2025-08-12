import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { InvoiceListComponent } from './components/invoice-list/invoice-list.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { BillingService } from './services/billing.service';
import { SharedModule } from 'src/app/shared/shared.module';

const routes = [
  { path: '', component: InvoiceListComponent },
  { path: 'new', component: InvoiceFormComponent },
  { path: 'payments', component: PaymentHistoryComponent },
  { path: ':id/edit', component: InvoiceFormComponent }
];

@NgModule({
  declarations: [
    InvoiceListComponent,
    InvoiceFormComponent,
    PaymentHistoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [BillingService]
})
export class BillingModule { }