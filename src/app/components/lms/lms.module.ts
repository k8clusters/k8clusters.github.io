import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaComponent } from './qa/qa.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { QaTestComponent } from './qa-test/qa-test.component';

@NgModule({
  declarations: [QaComponent, QaTestComponent],
  exports: [QaComponent],
  imports: [
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class LmsModule { }
