import { Projmod1Component } from './projmod1/projmod1.component';
import { RegistrationComponent } from './routing/registration.component';
import { LoginComponent } from './login/login.component';
import {Routes, RouterModule} from '@angular/router'
const ROUTES : Routes = [
    {path :'', component :LoginComponent},
    {path :'register', component :RegistrationComponent},
    {path :'project', component :Projmod1Component}
];

export const MyRouter = RouterModule.forRoot(ROUTES);