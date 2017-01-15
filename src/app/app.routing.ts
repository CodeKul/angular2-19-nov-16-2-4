import { DataDrivenComponent } from './forms/data-driven.component';
import { TemplateDrivenComponent } from './forms/template-driven.component';
import { OkayGuardService } from './routing-two/okay-guard.service';
import { ComplexComponent } from './routing-two/complex.component';
import { SimpleComponent } from './routing-two/simple.component';
import { NewPageComponent } from './routing-two/new-page.component';
import { AppComponent } from './app.component';
import { LoginAgainComponent } from './routing-two/login-again.component';
import { RegiAgainComponent } from './routing-two/regi-again.component';
import { RoutingTwoComponent } from './routing-two/routing-two.component';
import { Projmod1Component } from './projmod1/projmod1.component';
import { RegistrationComponent } from './routing/registration.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router'

const CHILD_ROUTE  :Routes  =[
    {path:'simple', component : SimpleComponent},
    {path:'complex', component : ComplexComponent},
];

const ROUTES : Routes = [
    {path :'', component :LoginAgainComponent},
    {path :'register', component :RegiAgainComponent},
    {path:'templateDriven', component : TemplateDrivenComponent},
    {path:'dataDriven', component : DataDrivenComponent},
    {path :'new/:userName', component : NewPageComponent, canActivate :[OkayGuardService]},
    {path: 'new/:userName', component: NewPageComponent, children : CHILD_ROUTE},
    {path: 'new', redirectTo:'/new/android'},
    {path :'**',redirectTo :''}
];

export const MyRouter = RouterModule.forRoot(ROUTES);