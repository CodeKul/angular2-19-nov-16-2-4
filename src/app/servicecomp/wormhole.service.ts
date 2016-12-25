import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class WormholeService {

  private bridge : EventEmitter<String>;

  constructor() { 
    this.bridge = new EventEmitter<String>();
  }

  public travelThroughSpace(data : String) {
    this.bridge.emit(data);
  }

  public getBridge() : EventEmitter<String> {
    return this.bridge;    
  }
}
