import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs:'appDropdown'
})
export class DropdownDirective {
@HostBinding("class.show") toggle: Boolean = false;
  constructor() { }
  @HostListener('click') mouseclick(){
    this.toggle = !this.toggle;
    console.log(this.toggle);
  }
}
