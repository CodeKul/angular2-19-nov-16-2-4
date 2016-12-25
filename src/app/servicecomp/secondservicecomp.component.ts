import { DataproviderService } from './dataprovider.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-secondservicecomp',
  templateUrl: './secondservicecomp.component.html',
  styleUrls: ['./secondservicecomp.component.css'],
  //providers : [DataproviderService]
})
export class SecondservicecompComponent  {

  private data  :DataproviderService;
  private countries : string [];

  constructor(data : DataproviderService) { 
    this.data = data;
    this.countries = data.getCountries();
  }

   public  addNewCountry(newCountry  : string){
    this.data.addCountry(newCountry);
  }
}
