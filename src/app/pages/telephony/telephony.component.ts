import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-telephony',
  templateUrl: './telephony.component.html',
  styleUrls: ['./telephony.component.scss']
})


export class TelephonyComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Home', path: '/' }, { label: 'Telephony', path: '/', active: true }];
    this._fetchData();
  }

  private _fetchData() {

  }
}
