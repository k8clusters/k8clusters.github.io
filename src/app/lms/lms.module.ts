import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaComponent } from './qa/qa.component';



@NgModule({
  declarations: [QaComponent],
  imports: [
    CommonModule,
    QaComponent
  ]
})
export class LmsModule { }
