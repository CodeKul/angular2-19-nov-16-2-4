import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FirstComponent } from './first/first.component';
import { CalcComponent } from './calc/calc.component';
import { BindingComponent } from './binding/binding.component';
import { HeropanelComponent } from './heropanel/heropanel.component';
import { HeroselComponent } from './heropanel/herosel.component';
import { IntercomComponent } from './intercom/intercom.component';
import { BtnpanelComponent } from './intercom/btnpanel.component';
import { ImagepanelComponent } from './intercom/imagepanel.component';
import { Projmod1Component } from './projmod1/projmod1.component';
import { HeaderComponent } from './projmod1/header.component';
import { LeftmenuComponent } from './projmod1/leftmenu.component';
import { MaincontentComponent } from './projmod1/maincontent.component';
import { DircompComponent } from './dircomp/dircomp.component';
import { AttrdirComponent } from './dircomp/attrdir.component';
import { SizerDirective } from './dircomp/sizer.directive';
import { StrdirComponent } from './dircomp/strdir.component';
import { TransformerDirective } from './dircomp/transformer.directive';
import { DropdownDirective } from './projmod1/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FirstComponent,
    CalcComponent,
    BindingComponent,
    HeropanelComponent,
    HeroselComponent,
    IntercomComponent,
    BtnpanelComponent,
    ImagepanelComponent,
    Projmod1Component,
    HeaderComponent,
    LeftmenuComponent,
    MaincontentComponent,
    DircompComponent,
    AttrdirComponent,
    SizerDirective,
    StrdirComponent,
    TransformerDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
