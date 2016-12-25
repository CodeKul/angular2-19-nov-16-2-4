import { DataproviderService } from './dataprovider.service';
import { Component} from '@angular/core';

@Component({
  selector: 'app-servicecomp',
  templateUrl: './servicecomp.component.html',
  styleUrls: ['./servicecomp.component.css'],
  //providers : [DataproviderService]
})
export class ServicecompComponent  {

  private data : DataproviderService;
  private countries : string [];

  constructor(data : DataproviderService) { 
    this.data = data;
    this.data.addCountry('anything');
    this.countries  = this.data.getCountries();
  }

  public  addNewCountry(newCountry  : string){
    this.data.addCountry(newCountry);
  }
}
