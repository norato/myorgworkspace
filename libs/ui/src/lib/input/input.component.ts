import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

export type InputType =
  | 'email'
  | 'number'
  | 'password'
  | 'text'
  | 'checkbox'
  | 'search';

@Component({
  selector: 'my-org-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl('');
  @Input() placeholder: string;
  @Input() type: InputType = 'text';

  constructor() {}

  ngOnInit() {}
}
