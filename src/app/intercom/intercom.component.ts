import { Component} from '@angular/core';

@Component({
  selector: 'app-intercom',
  templateUrl: './intercom.component.html',
  styleUrls: ['./intercom.component.css']
})
export class IntercomComponent  {

  private heroName : String;

  public constructor() { }

  public onHeroClickedIc (heroName : String) {

    console.log(heroName);
    
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
