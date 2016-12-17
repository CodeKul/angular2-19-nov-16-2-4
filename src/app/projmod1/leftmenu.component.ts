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
    this.menus[0] = new Menu('Iron Name', 'Character in moview', 'http://vignette4.wikia.nocookie.net/marvelcinematicuniverse/images/2/24/CACW_Tony_Textless_Poster.jpg/revision/latest/scale-to-width-down/270?cb=20160527050608');
    this.menus[1] = new Menu('Captain America', 'Character in moview', 'http://cdn.bgr.com/2014/04/captain-america.jpg?quality=98&strip=all&w=625&h=500&crop=1');
    this.menus[2] = new Menu('Spider Man', 'Character in moview', 'http://cdn.movieweb.com/img.news.tops/NElW3Ex3w06Fon_2_b.jpg');
    this.menus[3] = new Menu('Ant Man', 'Character in moview', 'http://www.eatyourcomics.com/wp-content/uploads/2015/05/AntMan_Poster_Cover_600x592-600x592.jpg');
    this.menus[4] = new Menu('Balck Widow', 'Character in moview', 'https://s-media-cache-ak0.pinimg.com/736x/89/c6/d7/89c6d7cbd65d21f8ca7741ab52ff4810.jpg');
    this.menus[5] = new Menu('Hulk', 'Character in moview', 'http://img.lum.dolimg.com/v1/images/usa_avengers_chi_hulk_n_4d0875ae.png?region=0%2C0%2C300%2C300');
    this.menus[6] = new Menu('Thor', 'Character in moview', 'http://vignette3.wikia.nocookie.net/marvelcinematicuniverse/images/f/f1/Thortextless.jpg/revision/latest/scale-to-width-down/270?cb=20161114221707');
  }

  public onMenuClicked(menu : Menu) : void {
    console.log(''+menu.heroName);
    
    this.heroClick.emit(menu);
  }
}
