import { Directive, ElementRef, Input, AfterViewChecked } from '@angular/core';

@Directive({
  selector: '[colorYear]'
})
export class ColorLineForYearDirective  implements AfterViewChecked {
  @Input() col: any;
  currentDate = new Date().getFullYear();

  constructor(private elementRef: ElementRef){
  }

  ngAfterViewChecked(): void {
    if (!this.col) {
      return;
    }

    if (this.col.year > this.currentDate) {
      this.elementRef.nativeElement.style.background = "#f2fbf5";
    } else if (this.col.year < this.currentDate) {
      this.elementRef.nativeElement.style.background = "#F1F2F2";
    }
  }

}
