import { NewPageComponent } from './routing-two/new-page.component';
import { AppComponent } from './app.component';
import { LoginAgainComponent } from './routing-two/login-again.component';
import { RegiAgainComponent } from './routing-two/regi-again.component';
import { RoutingTwoComponent } from './routing-two/routing-two.component';
import { Projmod1Component } from './projmod1/projmod1.component';
import { RegistrationComponent } from './routing/registration.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router'

const ROUTES : Routes = [
    {path :'', component :LoginAgainComponent},
    {path :'register', component :RegiAgainComponent},
    {path :'new/:userName', component : NewPageComponent}
];

export const MyRouter = RouterModule.forRoot(ROUTES);