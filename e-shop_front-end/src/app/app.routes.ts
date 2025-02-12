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
import { OverviewComponent } from './components/adminDashboard/overview/overview.component';
import { ManageProductsComponent } from './components/adminDashboard/manage-products/manage-products.component';
import { AddProductComponent } from './components/adminDashboard/manageProduct/add-product/add-product.component';
import { UpdateProductComponent } from './components/adminDashboard/manageProduct/update-product/update-product.component';
import { AddCategoryComponent } from './components/adminDashboard/manageProduct/add-category/add-category.component';


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
        path:"dashboard", 
        component: DashboardComponent,
        children: [
            {
                path:"overview", 
                component: OverviewComponent,
                children : [
                    {
                        path: "addProduct", component : AddProductComponent
                    },
                    {
                        path: ":id/updateProduct", 
                        component : UpdateProductComponent
                    },
                    {
                        path: "addCategory", 
                        component : AddCategoryComponent
                    },
                ]
            },
            {
                path:"manageProducts", 
                component: ManageProductsComponent,
            },
        ]
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
    // uncatched paths :
    { path: '**', redirectTo: '' } 
];
