import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaComponent } from './components/qa/qa.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { QaTestComponent } from './components/qa-test/qa-test.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material'
import { QaService } from './services/core/qa.service';
import { ExamTimerComponent } from './components/exam/exam-timer/exam-timer.component';
import { ExamOverviewComponent } from './components/exam/exam-overview/exam-overview.component';
import { ExamComponent } from './components/exam/exam/exam.component';
import { ExamQaComponent } from './components/exam/exam-qa/exam-qa.component';



@NgModule({
  declarations: [QaComponent, QaTestComponent, ExamTimerComponent, ExamOverviewComponent, ExamComponent, ExamQaComponent],
  exports: [QaComponent],
  imports: [
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    CommonModule,
    HttpClientModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [QaService]
})
export class LmsModule { }
