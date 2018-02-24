import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 *   FormsModule and ReactiveFormsModule must be imported into the module
 */
export class User {
  constructor(public email: string, public password: string) {
  }
}

@Component({
  selector: 'views-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  @Output() public loggedIn = new EventEmitter<User>();
  @Input() public enabled = true;

  public loginRequired: boolean = true;

  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.authService.asyncIsAuthenticated().then((authenticated) => {
      this.loginRequired = !authenticated;
    });

    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        // Validators.pattern('[^ @]*@[^ @]*')
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(2)]],
    });
  }

  public needsLogin() {
    console.log('test');
    return !this.authService.isAuthenticated();
  }

  public login(email, password) {
    // this if belongs to example without FormGroup
    if (email && password) {
      console.log('emitting');
      this.loggedIn.emit(new User(email, password));
    }

    if (this.form.valid) {
      console.log('valid');
      this.loggedIn.emit(
        new User(
          this.form.value.email,
          this.form.value.password
        )
      );
    } else {
      console.log('invalid');
    }
  }
}
