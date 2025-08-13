import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentCalendarComponent } from './components/appointment-calendar/appointment-calendar.component';
import { AppointmentService } from './services/appointment.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';


const routes = [
  { path: '', component: AppointmentListComponent },
  { path: 'calendar', component: AppointmentCalendarComponent },
  { path: 'new', component: AppointmentFormComponent },
  { path: ':id/edit', component: AppointmentFormComponent }
];

@NgModule({
  declarations: [
    AppointmentListComponent,
    AppointmentFormComponent,
    AppointmentCalendarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild(routes),
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [AppointmentService]
})
export class AppointmentModule { }