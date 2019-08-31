import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@myorgworkspace/ui';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [CommonModule, UiModule, FormsModule, ReactiveFormsModule],
  declarations: [SignInComponent]
})
export class AuthModule {}
export const AuthModuleName = AuthModule.name;
