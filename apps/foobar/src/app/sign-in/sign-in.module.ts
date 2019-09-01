import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthModule } from '@myorgworkspace/auth';
import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, AuthModule]
})
export class SignInModule {}
