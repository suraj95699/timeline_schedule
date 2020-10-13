import { Component,ViewEncapsulation } from '@angular/core';

import { DayService, WeekService, WorkWeekService, MonthService,
  TimelineViewsService, AgendaService,EventRenderedArgs, GroupModel, EventSettingsModel, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService,TimelineViewsService, AgendaService, ResizeService, DragAndDropService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-sch';
     
  public selectedDate: Date = new Date(2018, 1, 15);
  public showQuickInfo: boolean = false;
  public statusFields: Object = { text: 'StatusText', value: 'StatusText' };
  public StatusData: Object[] = [
    { StatusText: 'New', Id: 1 },
    { StatusText: 'Requested', Id: 2 },
    { StatusText: 'Confirmed', Id: 3 }
  ];
  public dateParser(data: string) {
      return new Date(data);
    }
  public onEventRendered(args: EventRenderedArgs): void {
      switch (args.data.EventType) {
          case 'Requested':
              (args.element as HTMLElement).style.backgroundColor = '#F57F17';
              break;
          case 'Confirmed':
              (args.element as HTMLElement).style.backgroundColor = '#7fa900';
              break;
          case 'New':
              (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
              break;
      }
  }
  public onActionBegin(args: { [key: string]: Object }): void {
      if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
          let data: any;
          if (args.requestType === 'eventCreate') {
              data = <any>args.data[0];
          } else if (args.requestType === 'eventChange') {
              data = <any>args.data;
          }
          // if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
          //     args.cancel = true;
          // }
      }
  }
}
