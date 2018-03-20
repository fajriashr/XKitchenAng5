import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
    {id: 1, badgeId: '001', name: 'Anto'},
    {id: 2, badgeId: '002', name: 'Budi'},
    {id: 3, badgeId: '003', name: 'Charlie'},
    {id: 4, badgeId: '004', name: 'Dodi'},
    {id: 5, badgeId: '005', name: 'Eko'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
