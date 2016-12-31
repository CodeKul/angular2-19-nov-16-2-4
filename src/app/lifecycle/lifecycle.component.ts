import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  Input
} from '@angular/core';



@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges, OnInit, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    private myName : string;

  constructor() {
   }

  ngOnChanges() {
    this.l('ngOnChanges');
  }
  ngOnInit() {
    this.l('ngOnInit');
  }

  ngDoCheck() {
    this.l('ngDoCheck');
  }

  ngAfterContentInit() {
    this.l('ngAfterContentInit');
  }

  ngAfterContentChecked() {
    this.l('ngAfterContentChecked');
  }

  ngAfterViewInit() {
    this.l('ngAfterViewInit');
  }

  ngAfterViewChecked() {
    this.l('ngAfterViewChecked');
  }

  ngOnDestroy() {
    this.l('ngOnDestroy');
  }

  private l(msg : string) {
    console.log(msg);
  }

  public myNameIsKhan(){
    this.myName = new Date().toString();
  }
}
