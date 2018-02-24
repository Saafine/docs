import {
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

function emailDomainValidator(control: FormControl) {
  const email = control.value;
  if (email && email.indexOf('@') !== -1) {
    const [_, domain] = email.split('@');
    if (domain !== 'codecraft.tv') {
      return {
        emailDomain: {
          parsedDomain: domain
        }
      };
    }
  }
  return null;
}

@Component({
  selector: 'views-form',
  styleUrls: ['./form.component.scss'],
  templateUrl: './form.component.html',
})
export class ViewsFormComponent implements OnInit {
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  myform: FormGroup;
  firstName: FormControl;
  lastName: FormControl;
  email: FormControl;
  password: FormControl;
  language: FormControl;


  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.email = new FormControl('', [
      Validators.required,
      Validators.pattern('[^ @]*@[^ @]*'),
      emailDomainValidator
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]);
    this.language = new FormControl('');
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        firstName: this.firstName,
        lastName: this.lastName,
      }),
      email: this.email,
      password: this.password,
      language: this.language
    });
  }

}
