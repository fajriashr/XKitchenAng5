import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from "@angular/router";

//pages
//langkah 1
import {HomeComponent} from './page/home/home.component'
import { CategoriesComponent } from './page/categories/categories.component';
import { UsersComponent } from "./page/users/users.component";
import { TablesComponent } from './page/tables/tables.component';

//langkah 1 Routes
const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'categories', component: CategoriesComponent},
    {path: 'users', component: UsersComponent},
    {path: 'tables', component: TablesComponent}
    
];

@NgModule({
    declarations: [],
    //langkah 2
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule],
    providers: [],

})
export class AppRoutingModule {}
//tambahkan routingComponents ketika Routes terisi
//langkah 1
export const routingComponents = [HomeComponent, CategoriesComponent, UsersComponent, TablesComponent]