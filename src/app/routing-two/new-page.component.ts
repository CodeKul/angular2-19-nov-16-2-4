import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import {  Subscription } from 'rxjs/Rx'

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit, OnDestroy {

  private userName : string;
  private sub : Subscription;
  private subQuery : Subscription;

  constructor(private router : Router, private activatedRoute: ActivatedRoute) {
    //this.userName = activatedRoute.snapshot.params['userName'];
    this.sub = this.activatedRoute.params.subscribe( params => this.userName = params['userName']);
    this.subQuery = this.router.routerState.root.queryParams.subscribe(params => this.userName = params['ver']);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //this.sub.unsubscribe();
    this.subQuery.unsubscribe();
  }
}
