import { Component } from '@angular/core';

@Component({
  selector: 'app-herosel',
  template: `
    <div>
      <input type="button" value="Iron Man" (click)="onHeroClicked('ironMan')">
      <input type="button" value="Spider Man" (click)="onHeroClicked('spiderMan')">
      <input type="button" value="Hulk" (click)="onHeroClicked('hulk')">
    </div>
    <div>
      <img [src] = "heroName" [alt]="heroName"/>
    </div>
  `,
  styles: []
})
export class HeroselComponent {

  private heroName : String ;

  public constructor(){
    this.heroName = './assets/hulk.jpg';
  }

  public onHeroClicked(heroName : String) : void {
    if(heroName == 'ironMan'){
      this.heroName = 'https://www.sideshowtoy.com/photo_902622_thumb.jpg';
    }
    else if(heroName == 'spiderMan') {
      this.heroName = 'http://cdn.movieweb.com/img.news.tops/NElW3Ex3w06Fon_2_b.jpg';
    } 
    else {
      this.heroName = 'http://img.cinemablend.com/cb/3/f/e/e/3/7/3fee37dcfa24d7df1eb34eeddd051cf47e6cb0151d82ec2c88c9331f4ff6cd1a.jpg';
    }
  }
}
