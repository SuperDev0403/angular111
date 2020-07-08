import { Component, OnInit } from '@angular/core';

import { Widgets, Contacts, ChartType } from './dashboard.model';

import { widgetsData, analyticsLineChart, averagetimeBarChart, contactsData, salesDonutChart } from './data';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})


export class InboxComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  widgetsData: Widgets[];
  contactsData: Contacts[];

  analyticsLineChart: ChartType;
  averagetimeBarChart: ChartType;
  salesDonutChart: ChartType;
  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', path: '/' }, { label: 'Inbox', path: '/', active: true }];
    this._fetchData();
  }

  private _fetchData() {
    this.widgetsData = widgetsData;
    this.analyticsLineChart = analyticsLineChart;
    this.averagetimeBarChart = averagetimeBarChart;
    this.contactsData = contactsData;
    this.salesDonutChart = salesDonutChart;
  }
}
