import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardsModule } from './dashboards/dashboards.module';
import { CalendarModule } from './calendar/calendar.module';
import { InboxModule } from './inbox/inbox.module';
import { TelephonyModule } from './telephony/telephony.module';

import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbDropdownModule,
    DashboardsModule,
    CalendarModule,
    InboxModule,
    TelephonyModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
