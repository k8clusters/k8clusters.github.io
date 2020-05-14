import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';

import {
  Component,
  ViewChild,
  AfterViewInit,
  ViewEncapsulation
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { QA } from '@amitkshirsagar13/qa-server';
import { QaService } from '../../../../lms/services/core/qa.service';

const ClassicEditor = DecoupledEditor;

@Component({
  selector: 'app-qa-editor',
  templateUrl: './qa-editor.component.html',
  styleUrls: ['./qa-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class QaEditorComponent implements AfterViewInit {
  @ViewChild('demoForm', { static: true }) public demoForm?: NgForm;

  public editorConfig = {
    placeholder: 'Type the content here!',
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        'blockQuote',
        'undo',
        'redo'
      ]
    },
    // image: {
    //     toolbar: [
    //         'imageStyle:full',
    //         'imageStyle:side',
    //         '|',
    //         'imageTextAlternative'
    //     ]
    // },
    language: 'en'
  };

  constructor(private qaService: QaService) {

  }

  public Editor = ClassicEditor;
  public qa: QA = {
    revealed: false,
    maxSelection: 1,
    choices: [],
    point: 0,
    qType: QA.QTypeEnum.MULTTYPE,
    question: ""
  };

  public onReady(editor) {
    editor.ui.getEditableElement().parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.getEditableElement()
    );
  }

  public formDataPreview?: string;

  public get description() {
    return this.demoForm!.controls.description;
  }

  public ngAfterViewInit() {
    this.demoForm!.control.valueChanges.subscribe(values => {
      this.formDataPreview = JSON.stringify(values);
    });
  }

  public onSubmit() {
    this.qaService.postQA(this.qa).subscribe(data => {
      this.qa = data;
    });
    console.log(this.qa);
  }

  public reset() {
    this.demoForm!.reset();
  }
}