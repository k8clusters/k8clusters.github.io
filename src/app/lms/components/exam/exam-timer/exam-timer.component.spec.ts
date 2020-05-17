import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamTimerComponent } from './exam-timer.component';

describe('ExamTimerComponent', () => {
  let component: ExamTimerComponent;
  let fixture: ComponentFixture<ExamTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
