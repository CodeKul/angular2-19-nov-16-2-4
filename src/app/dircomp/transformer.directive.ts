import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[transformer]'
})
export class TransformerDirective {

  private temRef: TemplateRef<any>;
  private contRef: ViewContainerRef;

  constructor(temRef: TemplateRef<any>, contRef: ViewContainerRef) {
    this.temRef = temRef;
    this.contRef = contRef;
  }

  @Input() public set transformer(num: string) {
    // if(con) this.contRef.createEmbeddedView(this.temRef);
    // else this.contRef.clear();

    if (num == '1') this.contRef.createEmbeddedView(this.temRef);
    else this.contRef.clear();
  }
}
