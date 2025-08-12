import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FormValidationDirective } from './directives/form-validation.directive';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ConfirmDialogComponent,
    SearchFilterComponent,
    DataTableComponent,
    FormValidationDirective,
    DateFormatPipe,
    PhonePipe,
    FormValidationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    ConfirmDialogComponent,
    SearchFilterComponent,
    DataTableComponent,
    FormValidationDirective,
    DateFormatPipe,
    PhonePipe
  ]
})
export class SharedModule { }