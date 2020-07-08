import { Directive, OnChanges, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnChanges {

  defaultColor =  'yellow';
  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') bgColor: string;

  constructor(private el: ElementRef) { }

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.bgColor || this.defaultColor;
  }

}
