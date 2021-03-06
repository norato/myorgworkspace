import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'my-org-ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disabled = false;

  constructor() {}

  ngOnInit() {}
}
