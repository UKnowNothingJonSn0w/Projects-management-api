import { Component } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { addDays, addMonths, startOfDay, startOfMonth, subMonths } from 'date-fns';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  constructor() {
    this.events = [
      {
        title: 'Przykładowe wydarzenie 1',
        start: startOfDay(new Date()),
        color: { primary: '#ad2121', secondary: '#FAE3E3' }
      },
      {
        title: 'Przykładowe wydarzenie 2',
        start: startOfDay(addDays(new Date(), 1)),
        color: { primary: '#1e90ff', secondary: '#D1E8FF' }
      },
      {
        title: 'Przykładowe wydarzenie 3',
        start: startOfDay(addDays(new Date(), 2)),
        color: { primary: '#e3bc08', secondary: '#FDF1BA' }
      }
    ];
  }

  dayClicked(day: CalendarMonthViewDay): void {
    console.log('Kliknięto dzień: ', day);
  }
  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addDays(startOfMonth(addMonths(this.viewDate, 1)), 1);
  }

}
