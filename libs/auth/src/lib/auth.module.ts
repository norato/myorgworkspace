import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@myorgworkspace/ui';
import { AuthSignInComponent } from './sign-in/sign-in.component';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [AuthSignInComponent],
  exports: [AuthSignInComponent]
})
export class AuthModule {}
export const AuthModuleName = AuthModule.name;
