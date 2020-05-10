import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import {
	Component,
	ViewChild,
	AfterViewInit,
	ViewEncapsulation
} from '@angular/core';

import { NgForm } from '@angular/forms';
import { QA } from '../../../shared/typings/model/qA';
import { QuestionType } from '../../../shared/typings/model/questionType';

const ClassicEditor = DecoupledEditor;


@Component({
  selector: 'app-wysiwyg-editor',
  templateUrl: './wysiwyg-editor.component.html',
  styleUrls: ['./wysiwyg-editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class WysiwygEditorComponent implements AfterViewInit {
	@ViewChild( 'demoForm', { static: true } ) public demoForm?: NgForm;

	public Editor = ClassicEditor;
	public qa: QA = {
		revealed: false,
		maxSelection: 1,
		choices:[],
		selectionCounter: 0,
		point: 0,
		submitted: false,
		validated: false,
		qType: QuestionType.MultType,
		question: '<p>A <b>really</b> nice fellow.</p>'
	};

    public onReady( editor ) {
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
		this.demoForm!.control.valueChanges.subscribe( values => {
			this.formDataPreview = JSON.stringify( values );
		} );
	}

	public onSubmit() {
		console.log( this.qa );
	}

	public reset() {
		this.demoForm!.reset();
	}
}