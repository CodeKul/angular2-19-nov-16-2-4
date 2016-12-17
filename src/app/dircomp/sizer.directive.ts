import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class SizerDirective {

  private elRef : ElementRef;
  private rend : Renderer;
  //@Input('sizer') private inputSize: String;
  @Input() private inputSize: String;

  @HostListener('mouseenter') public onMouseEnter() {
    //this.rend.setElementStyle(this.elRef.nativeElement,'width','300px');
    this.inputSize = '300px';
  }

  @HostListener('mouseleave') public onMouseLeave() {
    //this.rend.setElementStyle(this.elRef.nativeElement,'width','100px');
    this.inputSize = '100px';
  }

  @HostBinding('style.width') get inputWidth(){
      return this.inputSize;
  }

  public constructor(elRef : ElementRef, rend : Renderer) {
    this.inputSize = '300px';
    this.elRef = elRef;
    this.rend = rend;

    //this.elRef.nativeElement.style.width = this.inputSize;
    //this.rend.setElementStyle(this.elRef.nativeElement,'width',this.inputSize.toString());
  }

  ngOnInit(){
    this.rend.setElementStyle(this.elRef.nativeElement,'width',this.inputSize.toString());
  }
}
