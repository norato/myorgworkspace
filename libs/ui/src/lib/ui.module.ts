import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const UiModuleName = 'UiModule';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [InputComponent]
})
export class UiModule {}
