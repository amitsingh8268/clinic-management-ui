import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';
import { addHours } from 'date-fns';

@Component({
  selector: 'app-appointment-calendar',
  templateUrl: './appointment-calendar.component.html',
  styleUrls: ['./appointment-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppointmentCalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      start: new Date(),
      end: addHours(new Date(), 1),
      title: 'John Doe - Consultation',
      color: { primary: '#1e88e5', secondary: '#bbdefb' },
      allDay: false
    },
    {
      start: addHours(new Date(), 2),
      end: addHours(new Date(), 3),
      title: 'Jane Smith - Follow-up',
      color: { primary: '#43a047', secondary: '#c8e6c9' },
      allDay: false
    }
  ];

  ngOnInit() {}

  setView(view: CalendarView) {
    this.view = view;
  }

  setDate(date: Date) {
    this.viewDate = date;
  }
}
