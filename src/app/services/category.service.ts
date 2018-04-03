// import { Injectable } from '@angular/core';
// import { Category } from '../models/category.model';
// import { HttpClient } from '@angular/common/http';
// import {Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
// import { Observable} from 'rxjs/Observable'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/toPromise'

// @Injectable()
// export class CategoryService {

//   private _url = 'http://localhost:3000/api/categories';

//   selectedCategory: Category;
//   categoryList : Category[];
//   constructor(private http: Http) { }

//   getCategories() {
//     this.http.get(this._url)
//     .map ((data:Response)=> {
//       return data.json() as Category [];
//     }).toPromise().then(x=>{
//       this.categoryList = x;
//     })
//     // return this.http.get<Category[]>(this._url);
//   }
// }
