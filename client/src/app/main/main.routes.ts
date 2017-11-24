import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


export const mainRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'signup',
        component: RegisterComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
