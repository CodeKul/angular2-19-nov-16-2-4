import { Directive, HostBinding,  HostListener } from '@angular/core';

@Directive({
  selector: '[dropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') private shouldShow : Boolean = false;

  @HostListener('click') public onDropDownClicked(){
    this.shouldShow = true;    
  }

  @HostListener('mouseleave') public onDropDownLeft(){
    this.shouldShow = false;    
  }
}
