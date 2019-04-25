import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-design',
  templateUrl: './report-design.component.html',
  styleUrls: ['./report-design.component.scss']
})
export class ReportDesignComponent implements OnInit {
  reportUrl = 'XtraReport';
  hostUrl = 'http://localhost:5000/';
  getDesignerModelAction = 'api/ReportDesigner/GetReportDesignerModel';

  constructor() {
  }

  ngOnInit() {
  }

}
