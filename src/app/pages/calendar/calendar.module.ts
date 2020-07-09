import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import {
  NgbDropdownModule, NgbModalModule, NgbTypeaheadModule,
  NgbPaginationModule, NgbProgressbarModule, NgbTooltipModule
} from '@ng-bootstrap/ng-bootstrap';
import { DndModule } from 'ngx-drag-drop';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CalendarRoutingModule } from './calendar-routing.module';

import { UIModule } from '../../shared/ui/ui.module';

import { CalendarComponent } from './calendar.component';

@NgModule({
  declarations: [CalendarComponent],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    NgbDropdownModule,
    UIModule,
    FormsModule,
    DndModule,
    NgbModalModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    FullCalendarModule,
    Ng2SearchPipeModule,
    HttpClientModule,
    NgbTypeaheadModule,
    NgbProgressbarModule,
    NgbTooltipModule
  ],

})
export class CalendarModule { }
