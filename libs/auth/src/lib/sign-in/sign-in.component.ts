import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-org-auth-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);

  form = new FormGroup({
    username: this.username,
    password: this.password
  });

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('foo');
  }
}
