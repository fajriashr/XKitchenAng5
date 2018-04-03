import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products =[
  {id:1, categoryId:'C01', initial:'Main', name:'Main Baverage'},
  {id:2, categoryId:'C02', initial:'Soft', name:'Soft Drink'},
  {id:3, categoryId:'C03', initial:'Desert', name:'Desert'},
  {id:4, categoryId:'C04', initial:'Water', name:'Mineral Water'},
  {id:5, categoryId:'C05', initial:'Ice', name:'Ice Cream'},  
]
  constructor() { }

  ngOnInit() {
  }

}
