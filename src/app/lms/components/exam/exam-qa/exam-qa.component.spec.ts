import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamQaComponent } from './exam-qa.component';

describe('ExamQaComponent', () => {
  let component: ExamQaComponent;
  let fixture: ComponentFixture<ExamQaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamQaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamQaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
