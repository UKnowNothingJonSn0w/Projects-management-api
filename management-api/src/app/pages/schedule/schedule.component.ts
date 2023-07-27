import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { addDays, addMonths, startOfDay, startOfMonth, subMonths } from 'date-fns';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  meetings: any[] = [];

  constructor(
    private PagesService: PagesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loadMeetings();
  }

  loadMeetings(): void {
    this.PagesService.loadMeetings().subscribe(
      (meetings: any[]) => {
        this.meetings = meetings.map((meeting) => ({
          title: meeting.meeting_name,
          start: this.parseDate(meeting.date, meeting.time),
          color: { primary: '#ad2121', secondary: '#FAE3E3' } // Kolor możesz zmienić na dowolny, może być również dynamiczny zależnie od meeting_type itp.
        }));
        this.events = this.meetings;
      },
      (error) => {
        console.error('Błąd podczas pobierania danych ze spotkaniami.', error);
      }
    );
  }

  parseDate(date: string, time: string): Date {
    const [day, month, year] = date.split('.').map(Number);
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes);
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
