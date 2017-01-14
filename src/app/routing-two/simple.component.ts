import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  template: `
    <p>
      simple Works!
    </p>
  `,
  styles: []
})
export class SimpleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
