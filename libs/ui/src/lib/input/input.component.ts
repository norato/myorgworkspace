import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-org-ui-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() placeholder: string;

  constructor() {}

  ngOnInit() {}
}
