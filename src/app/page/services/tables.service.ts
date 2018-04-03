import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { Table } from '../../models/table.model';


@Injectable()
export class TablesService {

  private _url = 'http://localhost:3000/api/tables';


  selectTable: Table;

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this._url);
  }
}
