import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  user :any = {
    firstName : '',
    email : '',
    mobile :''
  };
  constructor() { }

  ngOnInit() {
  }

  onFormSubmit(form : NgForm){
    console.log(form);
    //console.log(form['value']['email']);
    //console.log(this.user);
  }
}
