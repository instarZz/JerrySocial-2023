import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[myClickToggle]'
})
export class MyClickToggleDirective implements OnInit {
  @Input('myClickToggle') targetId: any;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const targetDiv: any = document.getElementById(this.targetId);
    this.el.nativeElement.addEventListener('click', () => {
      targetDiv.style.display = targetDiv?.style.display === 'none' ? 'block' : 'none';
    });
  }
}
