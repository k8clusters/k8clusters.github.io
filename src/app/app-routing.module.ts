import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component'
import { QaComponent } from './lms/components/qa/qa.component';
import { QaTestComponent } from './lms/components/qa-test/qa-test.component';
import { AuthGaurdService } from './core/service/auth-gaurd.service';
import { LoginComponent } from './core/components/login/login.component';
import { UserComponent } from './core/components/user/user.component';
import { WysiwygEditorComponent } from './core/components/wysiwyg-editor/wysiwyg-editor.component';
import { QaEditorComponent } from './core/components/editor/qa-editor/qa-editor.component';
import { ExamComponent } from './lms/components/exam/exam/exam.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent, canActivate: [AuthGaurdService]
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'qaTest',
    component: QaTestComponent, canActivate: [AuthGaurdService]
  }, {
    path: 'qa',
    component: QaComponent, canActivate: [AuthGaurdService]
  }, {
    path: 'users',
    component: UserComponent, canActivate: [AuthGaurdService]
  }, {
    path: 'qaEditor',
    component: QaEditorComponent, canActivate: [AuthGaurdService]
  }, {
    path: 'exam',
    component: ExamComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
