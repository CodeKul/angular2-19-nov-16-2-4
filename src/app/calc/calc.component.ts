import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html'
})
export class CalcComponent  {

  private result : number;

  public onAddClicked(num1 : string, num2 : string) : void {
    this.result = Number.parseInt(num1) + Number.parseInt(num2);
  }
}
