import { urlGuardGuard } from './core/guards/authG/url-guard.guard';
import { Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CartComponent } from './features/pages/cart/cart.component';
import { ProductComponent } from './features/pages/product/product.component';
import { CategoriesComponent } from './features/pages/categories/categories.component';
import { BrandsComponent } from './features/pages/brands/brands.component';
import { NotFoundComponent } from './features/layout/not-found/not-found.component';
import { LoginComponent } from './features/authentication/login/login.component';
import { RegisterComponent } from './features/authentication/register/register.component';

export const routes: Routes = [
    {path:"" , redirectTo:"login" , pathMatch:"full"},
    {path:"home" , component:HomeComponent , canActivate:[urlGuardGuard]},
    {path:"cart" , component:CartComponent , canActivate:[urlGuardGuard]},
    {path:"products" , component:ProductComponent , canActivate:[urlGuardGuard]},
    {path:"Categories" , component:CategoriesComponent , canActivate:[urlGuardGuard]},
    {path:"brands" , component:BrandsComponent , canActivate:[urlGuardGuard]} ,
    {path:"login" , component:LoginComponent},
    {path:"register" , component:RegisterComponent},

    {path:"**" , component:NotFoundComponent}
];
