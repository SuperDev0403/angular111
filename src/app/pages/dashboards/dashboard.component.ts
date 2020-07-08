import { Component, OnInit, ElementRef } from '@angular/core';

import { Widget, UserBalance, RevenueData, ChartType } from './dashboard.model';
import { widgetData, salesMixedChart, revenueRadialChart, userBalanceData, revenueData } from './data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})


export class DashboardComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  widgetData: Widget[];
  userBalanceData: UserBalance[];
  revenueData: RevenueData[];
  salesMixedChart: ChartType;
  revenueRadialChart: ChartType;
  currentDate = new Date();
  constructor(private eref: ElementRef) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'UBold', path: '/' }, { label: 'Dashboard', path: '/', active: true }];


    this._fetchData();
  }

  private _fetchData() {

    this.widgetData = widgetData;
    this.salesMixedChart = salesMixedChart;
    this.revenueRadialChart = revenueRadialChart;
    this.userBalanceData = userBalanceData;
    this.revenueData = revenueData;
  }
}
