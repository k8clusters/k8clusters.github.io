import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QaEditorComponent } from './qa-editor.component';

describe('QaEditorComponent', () => {
  let component: QaEditorComponent;
  let fixture: ComponentFixture<QaEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QaEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QaEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
