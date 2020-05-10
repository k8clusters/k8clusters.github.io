import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaComponent } from './components/qa/qa.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { QaTestComponent } from './components/qa-test/qa-test.component';
import { QaTestService } from './services/core/qa-test.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material'
import { QaService } from './services/core/qa.service';



@NgModule({
  declarations: [QaComponent, QaTestComponent],
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
  providers: [QaTestService, QaService]
})
export class LmsModule { }
