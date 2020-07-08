import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./dashboards/dashboards.module').then(m => m.DashboardsModule), pathMatch: 'full' },
  { path: 'calendar', loadChildren: () => import('./calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'inbox', loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule) },
  { path: 'telephony', loadChildren: () => import('./telephony/telephony.module').then(m => m.TelephonyModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
