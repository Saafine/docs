import { Component } from '@angular/core';
import { FormControl, AbstractControl } from '@angular/forms';
import { concat, defer, Observable, of } from 'rxjs';

// This custom operator enables us to have initial form value returned from valueChanges stream

function valueChanges<T>(
  control: AbstractControl
): Observable<T> {
  return concat(
    defer(() => of(control.value)),
    control.valueChanges
  );
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  control = new FormControl('Default value');
  constructor() {
    // 👌 With valueChanges() operator
    valueChanges(this.control).subscribe(console.log);

    // 🧀🐁 Without valueChanges() operator
    //this.control.valueChanges.subscribe(console.log);
  }
}