import { Routes } from '@angular/router';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'signin', component: SigninComponent},
    {path:'signup', component: SignupComponent},
    {path:'product/:id', component: ProductComponent},
    {path:'**', component: HomeComponent}
];
