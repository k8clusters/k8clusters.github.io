import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceEditorComponent } from './multi-choice-editor.component';

describe('MultiChoiceEditorComponent', () => {
  let component: MultiChoiceEditorComponent;
  let fixture: ComponentFixture<MultiChoiceEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiChoiceEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiChoiceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
