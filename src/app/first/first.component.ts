import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  //templateUrl: './first.component.html',
  template : `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {

  constructor() { }

}
