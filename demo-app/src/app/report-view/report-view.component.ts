import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss']
})
export class ReportViewComponent implements OnInit {
  reportUrl = 'XtraReport';
  hostUrl = 'http://localhost:5000/';
  invokeAction = 'DXXRDV';

  constructor() {
  }

  ngOnInit() {
  }

}
