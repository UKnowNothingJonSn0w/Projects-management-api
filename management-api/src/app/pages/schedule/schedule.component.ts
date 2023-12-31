import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { CalendarEvent, CalendarMonthViewDay } from 'angular-calendar';
import { addDays, addMonths, startOfDay, startOfMonth, subMonths } from 'date-fns';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit, OnDestroy {
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  meetings: any[] = [];
  modalEvent: CalendarEvent<any> | undefined;
  public isloading = true;

  modalData: { action: string; event: CalendarEvent } | undefined;

  @ViewChild('eventModal', { static: true }) eventModal!: TemplateRef<any>;
  @ViewChild('addMeetingModal', { static: true }) addMeetingModal!: TemplateRef<any>;

  addMeetingForm!: FormGroup;
  get addMeetingF() { return this.addMeetingForm.controls; }

  private subscriptions: Subscription[] = [];

  constructor(
    private PagesService: PagesService,
    private router: Router,
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadMeetings();
    this.loadForm();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  loadForm() {
    this.addMeetingForm = this.formBuilder.group({
      meeting_name: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      meeting_type: ['', Validators.required],
      email: ['', Validators.required],
      note: ['', Validators.required],
    });
    this.isloading = false;
  }

  openModal(eventData: { event: CalendarEvent<any>; sourceEvent: MouseEvent | KeyboardEvent }): void {
    this.modalEvent = eventData.event;
    this.modalService.open(this.eventModal, { centered: true });
  }

  openAddMeetingModal(): void {
    this.modalService.open(this.addMeetingModal, { centered: true });
  }

  loadMeetings(): void {
    this.subscriptions.push(
      this.PagesService.loadMeetings().subscribe(
        (meetings: any[]) => {
          this.meetings = meetings.map((meeting) => ({
            title: meeting.meeting_name,
            start: this.parseDate(meeting.date, meeting.time),
            type: meeting.meeting_type,
            members: meeting.members
          }));
          this.events = this.meetings;
        },
        (error) => {
          console.error('Error', error);
        }
      )
    );
  }

  parseDate(date: string, time: string): Date {
    const [year, month, day] = date.split('-').map(Number);
    const [hours, minutes] = time.split(':').map(Number);
    return new Date(year, month - 1, day, hours, minutes);
  }

  dayClicked(day: CalendarMonthViewDay): void {
    console.log('Day: ', day);
  }

  previousMonth(): void {
    this.viewDate = subMonths(this.viewDate, 1);
  }

  nextMonth(): void {
    this.viewDate = addDays(startOfMonth(addMonths(this.viewDate, 1)), 1);
  }

  addMeeting() {
    if (this.addMeetingForm.invalid) {
      return;
    } else {
      const json_data = {
        meeting_name: this.addMeetingF['meeting_name'].value,
        date: this.addMeetingF['date'].value,
        time: this.addMeetingF['time'].value,
        meeting_type: this.addMeetingF['meeting_type'].value,
        email: this.addMeetingF['email'].value,
        note: this.addMeetingF['note'].value,
      };

      this.subscriptions.push(
        this.PagesService.AddMeeting(json_data).subscribe(response => {
          this.modalService.dismissAll('Close');
          this.loadMeetings();
        })
      );
    }
  }
}
