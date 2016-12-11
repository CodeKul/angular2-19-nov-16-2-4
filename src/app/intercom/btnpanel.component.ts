import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-btnpanel',
  templateUrl: './btnpanel.component.html',
  styleUrls: ['./btnpanel.component.css']
})
export class BtnpanelComponent {

  @Output() private heroClick : EventEmitter<String>;

  public constructor(){
    this.heroClick = new EventEmitter<String>();
  }
  public onHeroClicked(heroName : String) : void {
    this.heroClick.emit(heroName);
  }
}
