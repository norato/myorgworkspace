import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
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

  constructor(private readonly authService: AuthService) {}

  ngOnInit() {}

  onSubmit() {
    if (this.form.valid) {
      this.authService
        .signin(this.form.value)
        .pipe(first())
        .subscribe();
    }
  }
}
