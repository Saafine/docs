import {
  AfterContentChecked,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-order-control',
  templateUrl: './order-control.component.html',
  styleUrls: ['./order-control.component.css'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => OrderControlComponent), multi: true },
  ]
})
export class OrderControlComponent implements AfterContentChecked, ControlValueAccessor {
  _options;
  _onChange: any = () => {};

  @Input() set options(val) {
    this._options = val;
    this._onChange(val);
  }

  get options() {
    return this._options;
  }

  ngAfterContentChecked() {
    this._onChange(this.options);
  }

  /**
   * Required functions
   */
  writeValue(value) {
    if (value) {
      this.options = value;
    }
  }

  registerOnChange(fn: (_: any) => void): void {
    this._onChange = fn;
  }

  registerOnTouched() {
  }
}
