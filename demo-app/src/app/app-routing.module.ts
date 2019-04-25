import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ReportDesignComponent} from './report-design/report-design.component';
import {ReportViewComponent} from './report-view/report-view.component';

const routes: Routes = [
  { path: 'viewer', component: ReportViewComponent },
  { path: 'designer', component: ReportDesignComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
