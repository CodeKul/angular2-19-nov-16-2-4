import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template : `
  //   <div> {{title}} and {{num}}</div>
  // `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'app works in codekul';
  num : number = 10;
}
