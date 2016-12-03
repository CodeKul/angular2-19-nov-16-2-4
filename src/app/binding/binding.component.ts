import { Component} from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent  {
  private isSpecialDiv : Boolean;
  private myOs : String

  constructor() { 
    this.isSpecialDiv = true;
    this.myOs = 'Android';
  }

  public makeSpecialDiv() : Boolean {
    this.isSpecialDiv = !this.isSpecialDiv; 
    return this.isSpecialDiv;
  }
}
