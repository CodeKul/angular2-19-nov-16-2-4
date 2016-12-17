import { Component } from '@angular/core';

@Component({
  selector: 'app-strdir',
  templateUrl: './strdir.component.html',
  styleUrls: ['./strdir.component.css']
})
export class StrdirComponent {

  private mobiles: Array<String>;

  constructor() {

    this.mobiles = new Array<String>();
    this.mobiles[0] = 'Android';
    this.mobiles[1] = 'Apple';
    this.mobiles[2] = 'Black Berry';
    this.mobiles[3] = 'Samsung';
  }
}
