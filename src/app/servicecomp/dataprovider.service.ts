import { Injectable } from '@angular/core';
import { SecondserviceService } from './secondservice.service';

@Injectable()
export class DataproviderService {

  private secondService : SecondserviceService;

  private countries : string[];

  constructor(secondService : SecondserviceService) { 
    this.secondService = secondService;
    this.countries = [];

    this.countries.push('India');
    this.countries.push('Chiana');
    this.countries.push('Japan');
    this.countries.push('US');
    this.countries.push('UK');
  } 

  public addCountry(country : string){
    this.countries.push(country);
  }
  public getCountries() {
    return this.countries;
  }
}
