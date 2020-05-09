import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import {
	Component,
	ViewChild,
	AfterViewInit,
	ViewEncapsulation
} from '@angular/core';

import { NgForm } from '@angular/forms';

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
	public model = {
		revealed: false,
		maxSelection: 1,
		selectionCounter: 0,
		point: 0,
		submitted: false,
		validated: false,
		qType: 'MULTTYPE',
		_class: 'io.k8clusters.qa.dto.QA',
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
		console.log( 'Form submit, model', this.model );
	}

	public reset() {
		this.demoForm!.reset();
	}
}