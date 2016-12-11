import { Menu } from './menu';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projmod1',
  templateUrl: './projmod1.component.html',
  styleUrls: ['./projmod1.component.css']
})
export class Projmod1Component  {

  public menu : Menu;

  constructor() { }

  public onReceiveHero(menu : Menu) : void{
    console.log('Hero received '+menu.heroName);
    this.menu = menu;
  }
}
