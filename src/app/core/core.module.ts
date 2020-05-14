import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule, MatButtonModule, MatTableModule, MatCheckboxModule, MatRadioModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { WysiwygEditorComponent } from './components/wysiwyg-editor/wysiwyg-editor.component';
import { PrettyjsonPipe } from './pipes/prettyjson.pipe';
import { TextInputComponent } from './components/editor/text-input/text-input.component';
import { MultiChoiceEditorComponent } from './components/editor/multi-choice-editor/multi-choice-editor.component';


@NgModule({
  declarations: [
    LoginComponent, 
    UserComponent, 
    WysiwygEditorComponent,
    PrettyjsonPipe,
    TextInputComponent,
    MultiChoiceEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatRadioModule,
    RouterModule,
    CKEditorModule
  ],
  providers: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    PrettyjsonPipe,
    TextInputComponent,
    MultiChoiceEditorComponent
  ]
})
export class CoreModule { 
  
}
