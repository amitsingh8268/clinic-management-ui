import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { PhonePipe } from './pipes/phone.pipe';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { FormValidationDirective } from './directives/form-validation.directive';
import { GenericGridComponent } from './components/generic-grid/generic-grid.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    ConfirmDialogComponent,
    SearchFilterComponent,
    FormValidationDirective,
    DateFormatPipe,
    PhonePipe,
    FormValidationComponent,
    GenericGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoadingSpinnerComponent,
    ConfirmDialogComponent,
    SearchFilterComponent,
    FormValidationDirective,
    DateFormatPipe,
    PhonePipe,
    GenericGridComponent
  ]
})
export class SharedModule { }