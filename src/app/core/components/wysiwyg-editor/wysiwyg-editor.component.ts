import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';

import {
	Component,
	ViewChild,
	AfterViewInit
} from '@angular/core';

import { NgForm } from '@angular/forms';

const ClassicEditor = DecoupledEditor;


@Component({
  selector: 'app-wysiwyg-editor',
  templateUrl: './wysiwyg-editor.component.html',
  styleUrls: ['./wysiwyg-editor.component.scss']
})
export class WysiwygEditorComponent implements AfterViewInit {
	@ViewChild( 'demoForm', { static: true } ) public demoForm?: NgForm;

	public Editor = ClassicEditor;
	public model = {
		name: 'John',
		surname: 'Doe',
		description: '<p>A <b>really</b> nice fellow.</p>'
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