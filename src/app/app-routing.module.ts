import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component'
import { QaComponent } from './components/lms/qa/qa.component';
import { QaTestComponent } from './components/lms/qa-test/qa-test.component';
const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: 'about',
  component: AboutComponent
}, {
  path: 'qaTest',
  component: QaTestComponent
}, {
  path: 'qa',
  component: QaComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
