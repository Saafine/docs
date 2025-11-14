/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule, NgFor } from '@angular/common';
import { Component, inject, Input, ViewContainerRef, ɵcompileComponent } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-dynamic-template',
  template: ``,
  styles: [],
  imports: [CommonModule, MatTabsModule],
})
export class DynamicTemplateComponent {
  viewRef = inject(ViewContainerRef);

  ngOnInit(): void {
    const template = `
    <mat-form-field>
  <mat-label>Favorite food</mat-label>
  <mat-select>
    <mat-option *ngFor="let item of items" [value]="item">
      {{item}}
    </mat-option>
  </mat-select>
</mat-form-field>`;
    const component = getComponentFromTemplate(template);
    const componentRef = this.viewRef.createComponent(component);

    // TODO [P. Labus] destroy
    componentRef.setInput('items', ['value1', 'value2']);
  }
}

@Component({
  template: '',
})
class MyCustomComponent {
  @Input() items: string[] = [];
}

function getComponentFromTemplate(template: string) {
  ɵcompileComponent(MyCustomComponent, {
    template,
    standalone: true,
    imports: [NgFor, MatSelectModule], // Added material module
  });


  return MyCustomComponent;
}
