import { Menu } from './menu';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent  {

  private menus : Array<Menu> ;

  @Output() private heroClick : EventEmitter<Menu>;

  public constructor() {

    this.heroClick = new EventEmitter<Menu>();

    this.menus = new Array<Menu>();
    this.menus[0] = new Menu('Iron Name', 'Character in moview', 'link');
    this.menus[1] = new Menu('Captain America', 'Character in moview', 'link');
    this.menus[2] = new Menu('Spider Man', 'Character in moview', 'link');
    this.menus[3] = new Menu('Ant Man', 'Character in moview', 'link');
    this.menus[4] = new Menu('Balck Widow', 'Character in moview', 'link');
    this.menus[5] = new Menu('Hulk', 'Character in moview', 'link');
    this.menus[6] = new Menu('Thor', 'Character in moview', 'link');
  }

  public onMenuClicked(menu : Menu) : void {
    console.log(''+menu.heroName);
    
    this.heroClick.emit(menu);
  }
}
