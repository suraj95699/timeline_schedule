import { Component,ViewEncapsulation } from '@angular/core';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { createElement } from '@syncfusion/ej2-base';
import { L10n } from '@syncfusion/ej2-base';

import { DayService, WeekService, WorkWeekService, MonthService,
  TimelineViewsService, AgendaService,EventRenderedArgs, PopupOpenEventArgs,
  GroupModel, EventSettingsModel, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';

L10n.load({
  'en-US': {
      'schedule': {
          'saveButton': 'Add',
          'cancelButton': 'Close',
          'deleteButton': 'Remove',
          'newEvent': ' New Delivery',
      },
  }
});


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, 
    AgendaService,TimelineViewsService, AgendaService, ResizeService, DragAndDropService],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'my-sch';
     
  public showQuickInfo: boolean = false;
  public selectedDate: Date = new Date();
    public views: Array<string> = ['Day', 'Week', 'WorkWeek', 'Month','TimelineViewsService'];


    public data = [];
    public eventSettings: EventSettingsModel = {
      dataSource: this.data,
      fields: {
          id: 'Id',
          subject: { name: 'Subject', title: 'Site Name' },
          location: { name: 'Event Location', title: 'Site Address'},
          description: { name: 'Description', title: 'Event Description' },
          startTime: { name: 'StartTime', title: 'Start Duration' },
          endTime: { name: 'EndTime', title: 'End Duration'  },
          
      }
  };

    
  // public selectedDate: Date = new Date(2018, 1, 15);
  // public showQuickInfo: boolean = false;
  // public statusFields: Object = { text: 'StatusText', value: 'StatusText' };
  // public StatusData: Object[] = [
  //   { StatusText: 'New', Id: 1 },
  //   { StatusText: 'Requested', Id: 2 },
  //   { StatusText: 'Confirmed', Id: 3 }
  // ];
  // public dateParser(data: string) {
  //     return new Date(data);
  //   }
  // public onEventRendered(args: EventRenderedArgs): void {
  //     switch (args.data.EventType) {
  //         case 'Requested':
  //             (args.element as HTMLElement).style.backgroundColor = '#F57F17';
  //             break;
  //         case 'Confirmed':
  //             (args.element as HTMLElement).style.backgroundColor = '#7fa900';
  //             break;
  //         case 'New':
  //             (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
  //             break;
  //     }
  // }
  // public onActionBegin(args: { [key: string]: Object }): void {
  //     if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
  //         let data: any;
  //         if (args.requestType === 'eventCreate') {
  //             data = <any>args.data[0];
  //         } else if (args.requestType === 'eventChange') {
  //             data = <any>args.data;
  //         }
       
  //     }
  // }







  onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type === 'Editor') {
        // Create required custom elements in initial time
        if (!args.element.querySelector('.custom-field-row')) {
            let row: HTMLElement = createElement('div', { className: 'custom-field-row' });
            let formElement: HTMLElement = args.element.querySelector('.e-schedule-form');
            formElement.firstChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));
            formElement.lastChild.insertBefore(row, args.element.querySelector('.e-title-location-row'));

            let container: HTMLElement = createElement('div', { className: 'custom-field-container' });
            let container1: HTMLElement = createElement('div', { className: 'customer-field-container' });

            let inputEle: HTMLInputElement = createElement('input', {
                className: 'e-field', attrs: { name: 'EventType' }
            }) as HTMLInputElement;
            container.appendChild(inputEle);
            container1.appendChild(inputEle);

            row.appendChild(container);
            row.appendChild(container1);


            let dropDownList: DropDownList = new DropDownList({
                dataSource: [
                    { text: 'Public Event', value: 'public-event' },
                    { text: 'Maintenance', value: 'maintenance' },
                    { text: 'Commercial Event', value: 'commercial-event' },
                    { text: 'Family Event', value: 'family-event' }
                ],
                fields: { text: 'text', value: 'value' },
                value: (<{ [key: string]: Object }>(args.data)).EventType as string,
                floatLabelType: 'Always', placeholder: 'Location'
            });



            let dropDownList1: DropDownList = new DropDownList({
              dataSource: [
                 
                  { text: 'Commercial Event', value: 'commercial-event' },
                  { text: 'Family Event', value: 'family-event' }
              ],
              fields: { text: 'text', value: 'value' },
              value: (<{ [key: string]: Object }>(args.data)).EventType as string,
              floatLabelType: 'Always', placeholder: 'customer'
          });



            dropDownList.appendTo(inputEle);
            dropDownList1.appendTo(container);

            inputEle.setAttribute('name', 'EventType');
        }
    }
}









public departmentDataSource: Object[] = [
  { Text: '', Id: 1, Color: '' },
  { Text: 'DENTAL', Id: 2, Color: '#9e5fff' }
];
public consultantDataSource: Object[] = [
  { Text: '', Id: 1, GroupId: 1, Color: '', Designation: '' },
  { Text: 'Nancy', Id: 2, GroupId: 2, Color: '#9e5fff', Designation: 'Orthodontist' },
  { Text: 'Robert', Id: 3, GroupId: 1, Color: '#bbdc00', Designation: 'Optometrist' },
  { Text: 'Robson', Id: 4, GroupId: 2, Color: '#9e5fff', Designation: 'Periodontist' },
  { Text: 'Laura', Id: 5, GroupId: 1, Color: '#bbdc00', Designation: 'Orthopedic' },
  { Text: 'Margaret', Id: 6, GroupId: 2, Color: '#9e5fff', Designation: 'Endodontist' }
];



  
}







