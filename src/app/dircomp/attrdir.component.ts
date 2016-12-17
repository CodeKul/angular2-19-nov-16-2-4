import { Component } from '@angular/core';

@Component({
  selector: 'app-attrdir',
  templateUrl: './attrdir.component.html',
  styleUrls: ['./attrdir.component.css']
})
export class AttrdirComponent  {
  private inputSize: String;

  public constructor() {

  }

  public increaseSize(size : number) {
    this.inputSize = `${size}px`;
  }
}
