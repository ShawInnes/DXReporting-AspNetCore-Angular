import {Component, OnInit} from '@angular/core';
import * as DevExpress from '@devexpress/analytics-core';

@Component({
  selector: 'app-report-design',
  templateUrl: './report-design.component.html',
  styleUrls: ['./report-design.component.scss']
})
export class ReportDesignComponent implements OnInit {
  reportUrl = 'FinancialSummaryReport';
  hostUrl = 'http://localhost:5000/';
  getDesignerModelAction = 'api/reporting/designer';

  constructor() {
  }

  getToken() {
    // tslint:disable-next-line:max-line-length
    return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik5USXpOVEkwT0RjMFF6STBOakJGTWpBNU1rRkJNVGxDTURZNE9FSTFOVFpHUkRaQlEwTTBPUSJ9.eyJpc3MiOiJodHRwczovL2F1dGgubGVhc2VzMTYuY29tLyIsInN1YiI6IkgzZENnVUE3ZnNDMnpHZFFjYXFXYUZXVnM4REllaU0xQGNsaWVudHMiLCJhdWQiOiJodHRwczovL2FwaS5sZWFzZXMxNi5jb20iLCJpYXQiOjE1NTYzMzU5MzAsImV4cCI6MTU1NjQyMjMzMCwiYXpwIjoiSDNkQ2dVQTdmc0MyekdkUWNhcVdhRldWczhESWVpTTEiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.tcf7FeVDeqsuIusSkabJpbWDeI0l8oDSbdv2J6Bc4dLK3RPpNSA8bLmAy7WY93VXDN1zvgnVvXbzLG8HQbVw7REZ7YqHDwMKvDLSKV8AFb_8b9wodfDbLLm1bsaVu0Ipg5FG0Ps1ce0YHqMvwXGZBL17IVl8EcjQivU9MpBrQtWApSheDl0DyUrokitfRKhtTFi2KozVwtyF1tYm7EgU1QJTuFQ7duHTzUCDkcNk59LhQuAUQJHUCF1rARucmPGe6OOIL46wnQDN2bujmGn56fDGrth0rWug9H8WvS1CzXogaf4jT5DTCLapOvk4VzNdaHUN4USY9iuUPLorREmvvQ';
  }

  ngOnInit() {
    DevExpress.Analytics.Utils.ajaxSetup.ajaxSettings = {headers: {Authorization: `Bearer ${this.getToken()}`}};
  }

}
