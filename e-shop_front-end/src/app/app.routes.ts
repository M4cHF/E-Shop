import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductsComponent } from './components/products/products.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


export const routes: Routes = [
    {
        path:"", component: HomeComponent
    },
    {
        path:"products", component: ProductsComponent
    },
    {
        path:"about", component: AboutComponent
    },
    {
        path:"contact", component: ContactComponent
    },
    {
        path:"dashboard", component: DashboardComponent
    },
    {
        path:"cart", component: CartComponent
    },
    {
        path:"profile", component: ProfileComponent
    },
    {
        path:"login", component: LoginComponent
    },
    {
        path:"register", component: RegisterComponent
    },
];
