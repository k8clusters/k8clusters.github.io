import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaTestComponent } from './qa-test.component';

describe('QaTestComponent', () => {
  let component: QaTestComponent;
  let fixture: ComponentFixture<QaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
