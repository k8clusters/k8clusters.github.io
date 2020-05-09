import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { MatCardModule, MatButtonModule, MatTableModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { WysiwygEditorComponent } from './components/wysiwyg-editor/wysiwyg-editor.component';



@NgModule({
  declarations: [LoginComponent, UserComponent, WysiwygEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    RouterModule,
    CKEditorModule
  ]
})
export class CoreModule { 
  
}
