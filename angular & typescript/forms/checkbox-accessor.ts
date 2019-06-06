import { Component, ElementRef, forwardRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CheckboxControlValueAccessor, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

export const CHECKBOX_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TestComponent),
  multi: true,
};

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class TestComponent implements ControlValueAccessor {
  @ViewChild('testId', { static: true }) public testId: ElementRef;
  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private _renderer: Renderer2) {}
  writeValue(value: any): void {
    this._renderer.setProperty(this.testId.nativeElement, 'checked', value);
  }
  registerOnChange(fn: (_: any) => {}): void { this.onChange = fn; }
  registerOnTouched(fn: () => {}): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean): void {
    this._renderer.setProperty(this.testId.nativeElement, 'disabled', isDisabled);
  }
}
