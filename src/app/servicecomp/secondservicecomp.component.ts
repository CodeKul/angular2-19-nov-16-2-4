import { WormholeService } from './wormhole.service';
import { DataproviderService } from './dataprovider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondservicecomp',
  templateUrl: './secondservicecomp.component.html',
  styleUrls: ['./secondservicecomp.component.css'],
  //providers : [DataproviderService]
})
export class SecondservicecompComponent implements OnInit{

  private wormHole: WormholeService;

  private data: DataproviderService;
  private countries: string[];
  private backColor : string;

  constructor(data: DataproviderService, wormHole: WormholeService) {
    this.data = data;
    this.wormHole = wormHole;
    this.countries = data.getCountries();
  }

  public addNewCountry(newCountry: string) {
    this.data.addCountry(newCountry);
  }

  ngOnInit(){
    this.wormHole.getBridge().subscribe(data => this.backColor = data );
  }
}
