import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FirstComponent } from './first/first.component';
import { CalcComponent } from './calc/calc.component';
import { BindingComponent } from './binding/binding.component';
import { HeropanelComponent } from './heropanel/heropanel.component';
import { HeroselComponent } from './heropanel/herosel.component';
import { IntercomComponent } from './intercom/intercom.component';
import { BtnpanelComponent } from './intercom/btnpanel.component';
import { ImagepanelComponent } from './intercom/imagepanel.component';

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
    ImagepanelComponent
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
