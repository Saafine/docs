import 'zone.js/dist/zone';
import { Component, Optional, Provider, SkipSelf } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  MatFormFieldDefaultOptions,
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

const containerFactory = (container: ControlContainer): ControlContainer => {
  if (!container) {
    throw new Error('I need a FormGroup instance');
  }
  return container;
};

function provideControlContainer(): Provider[] {
  return [
    {
      provide: ControlContainer,
      deps: [[new SkipSelf(), new Optional(), ControlContainer]],
      useFactory: containerFactory,
    },
  ];
}

@Component({
  standalone: true,
  selector: 'address-form',
  template: `
    <mat-form-field>
      <mat-label>Street Name</mat-label>
      <input matInput formControlName="street" type="text" />
    </mat-form-field>
    <mat-form-field>
      <mat-label>City</mat-label>
      <input matInput formControlName="city" type="text" />
    </mat-form-field>
    <mat-form-field>
      <mat-label>Zip/Postal Code</mat-label>
      <input matInput formControlName="zip" type="text" />
    </mat-form-field>
  `,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  viewProviders: [provideControlContainer()],
})
export class AddressFormComponent {}

@Component({
  standalone: true,
  selector: 'employee-form',
  template: `
  <mat-card>
    <mat-card-title>
      <h4>Employee Form</h4>
    </mat-card-title>
    <mat-card-content>
      <form [formGroup]="formGroup">
        <mat-form-field>
          <mat-label>Badge Number</mat-label>
          <input matInput formControlName="badgeNumber" type="text" />
        </mat-form-field>
        <address-form />
      </form>
    </mat-card-content>
    <mat-card-footer>
      <span>
        <b>Value: </b> {{formGroup.value | json}}
      </span>
    </mat-card-footer>
  </mat-card>
  `,
  imports: [
    AddressFormComponent,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    JsonPipe,
    ReactiveFormsModule,
  ],
})
export class EmployeeFormComponent {
  readonly formGroup = new FormGroup({
    badgeNumber: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    zip: new FormControl(''),
  });
}

@Component({
  standalone: true,
  selector: 'customer-form',
  imports: [
    AddressFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    JsonPipe,
    ReactiveFormsModule,
  ],
  template: `
<mat-card>
  <mat-card-title>
    <h4>Customer Form</h4>
  </mat-card-title>
  <mat-card-content>
    <form [formGroup]="formGroup">
    <mat-form-field>
      <mat-label>Company Name</mat-label>
      <input matInput formControlName="companyName" type="text" />
    </mat-form-field>
    <ng-container [formGroup]="addressFormGroup">
      <address-form />
    </ng-container>
    </form>
  </mat-card-content>
  <mat-card-footer>
    <span>
      <b>Value: </b> {{formGroup.value | json}}
    </span>
  </mat-card-footer>
</mat-card>
  `,
})
export class CustomerFormComponent {
  readonly formGroup = new FormGroup({
    companyName: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zip: new FormControl(''),
    }),
  });

  readonly addressFormGroup = this.formGroup.get('address') as FormGroup;
}

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [EmployeeFormComponent, CustomerFormComponent],
  template: `
  <div class="app-container">
    <employee-form />
    <customer-form />
    </div>
  `,
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideAnimations(),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline',
        color: 'primary',
      } as MatFormFieldDefaultOptions,
    },
  ],
});
