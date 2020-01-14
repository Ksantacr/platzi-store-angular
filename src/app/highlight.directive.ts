import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input() public bgColor: string;
  constructor(
    private element: ElementRef
  ) {

  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = this.bgColor;
  }

}
