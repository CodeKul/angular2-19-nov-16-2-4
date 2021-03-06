import { OkayGuardService } from './routing-two/okay-guard.service';
import { MyRouter } from './app.routing';
import { WormholeService } from './servicecomp/wormhole.service';
import { SecondserviceService } from './servicecomp/secondservice.service';
import { DataproviderService } from './servicecomp/dataprovider.service';
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
import { ServicecompComponent } from './servicecomp/servicecomp.component';
import { SecondservicecompComponent } from './servicecomp/secondservicecomp.component';
import { IndexservicecompComponent } from './servicecomp/indexservicecomp.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { RoutingComponent } from './routing/routing.component';
import { LoginroutComponent } from './routing/loginrout.component';
import { RegistrationComponent } from './routing/registration.component';
import { RoutingTwoComponent } from './routing-two/routing-two.component';
import { LoginAgainComponent } from './routing-two/login-again.component';
import { RegiAgainComponent } from './routing-two/regi-again.component';
import { NewPageComponent } from './routing-two/new-page.component';
import { SimpleComponent } from './routing-two/simple.component';
import { ComplexComponent } from './routing-two/complex.component';
import { FormsComponent } from './forms/forms.component';
import { TemplateDrivenComponent } from './forms/template-driven.component';
import { DataDrivenComponent } from './forms/data-driven.component';

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
    DropdownDirective,
    ServicecompComponent,
    SecondservicecompComponent,
    IndexservicecompComponent,
    LifecycleComponent,
    RoutingComponent,
    LoginroutComponent,
    RegistrationComponent,
    RoutingTwoComponent,
    LoginAgainComponent,
    RegiAgainComponent,
    NewPageComponent,
    SimpleComponent,
    ComplexComponent,
    FormsComponent,
    TemplateDrivenComponent,
    DataDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MyRouter
  ],
  providers: [DataproviderService,SecondserviceService,WormholeService,OkayGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
