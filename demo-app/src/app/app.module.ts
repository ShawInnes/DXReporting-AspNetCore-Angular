import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DxReportDesignerModule, DxReportViewerModule} from 'devexpress-reporting-angular';
import { ReportViewComponent } from './report-view/report-view.component';
import { ReportDesignComponent } from './report-design/report-design.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportViewComponent,
    ReportDesignComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxReportViewerModule,
    DxReportDesignerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
