import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  testForm: FormGroup;
  testSelectForm: FormGroup;
  testOptions = ['test1', 'test2', 'test3', 'test4'];

  ngOnInit() {
    this.testSelectForm = new FormGroup({
        'testSelectControl': new FormControl(this.testOptions[2]),
      }
    );

    this.testForm = new FormGroup({
        'testCustomControl': new FormControl()
      }
    );
  }

  submit() {
    console.log(this.testForm.value);
  }
}
