import { Component } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { addDays, startOfDay } from 'date-fns';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  constructor() {
    // Dodaj przykładowe wydarzenia do wyświetlenia na harmonogramie
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
      // Możesz dodać więcej wydarzeń w podobny sposób
    ];
  }

  // Ta funkcja zostanie wywołana, gdy użytkownik kliknie na konkretny dzień na harmonogramie
  dayClicked(day: CalendarMonthViewDay): void {
    console.log('Kliknięto dzień: ', day);
    // Tutaj możesz obsłużyć zdarzenie po kliknięciu na dzień w harmonogramie
  }
}
