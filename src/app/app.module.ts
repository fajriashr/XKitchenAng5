import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//pages
import { AppComponent } from './app.component';
import { CategoriesComponent } from './page/categories/categories.component';
import { UsersComponent } from './page/users/users.component';
import { TablesComponent } from './page/tables/tables.component';
import { HomeComponent } from './page/home/home.component';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { CategoryService } from './page/services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule} from '@angular/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './page/services/user.service';
import { TableComponent } from './page/tables/table/table.component';
import { TableListComponent } from './page/tables/table-list/table-list.component';
import { TableService } from './page/services/table.service';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    UsersComponent,
    TablesComponent,
    HomeComponent,
    routingComponents,
    TableComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, CategoryService, UserService, TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
