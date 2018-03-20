import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { UsersComponent } from './page/users/users.component';
import { ProductsComponent } from './page/products/products.component';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    UsersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
