import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CategoryListComponent } from './category-list/category-list.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'categories', component: CategoryListComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
];
