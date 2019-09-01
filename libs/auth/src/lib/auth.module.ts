import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@myorgworkspace/ui';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [SignInComponent],
  exports: [SignInComponent]
})
export class AuthModule {}
export const AuthModuleName = AuthModule.name;
