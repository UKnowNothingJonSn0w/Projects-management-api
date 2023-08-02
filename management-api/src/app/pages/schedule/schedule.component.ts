import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { addDays, addMonths, startOfDay, startOfMonth, subMonths } from 'date-fns';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit{
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  meetings: any[] = [];
  modalEvent: CalendarEvent<any> | undefined;

  modalData: { action: string; event: CalendarEvent } | undefined;

  @ViewChild('eventModal', { static: true }) eventModal!: TemplateRef<any>;

  constructor(
    private PagesService: PagesService,
    private router: Router,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.loadMeetings();
  }

  openModal(eventData: { event: CalendarEvent<any>; sourceEvent: MouseEvent | KeyboardEvent }): void {
    this.modalEvent = eventData.event;
    this.modalService.open(this.eventModal, { centered: true });
  }
  

  loadMeetings(): void {
    this.PagesService.loadMeetings().subscribe(
      (meetings: any[]) => {
        this.meetings = meetings.map((meeting) => ({
          title: meeting.meeting_name,
          start: this.parseDate(meeting.date, meeting.time),
          type:  meeting.meeting_type,
          members: meeting.members
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
