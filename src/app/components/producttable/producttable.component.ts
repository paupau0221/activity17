import { Component } from '@angular/core';
class Product {
  id!: number;
  name!: string;
  category!: string;
  price!: number;
  stock!: number;
  supplierEmail!: string;
}

@Component({
  selector: 'app-producttable',
  templateUrl: './producttable.component.html',
  styleUrl: './producttable.component.css'
})
export class ProducttableComponent {
  products: Product[] = [
    { id: 1, name: "Laptop", category: "Electronics", price: 750, stock: 50, supplierEmail: "supplier1@gmail.com" },
    { id: 2, name: "Desk Chair", category: "Furniture", price: 100, stock: 200, supplierEmail: "supplier2@gmail.com" },
    { id: 3, name: "Smartwatch", category: "Electronics", price: 200, stock: 150, supplierEmail: "supplier3@gmail.com" },
    { id: 4, name: "Notebook", category: "Stationery", price: 5, stock: 500, supplierEmail: "supplier4@gmail.com" },
    { id: 5, name: "Running Shoes", category: "Apparel", price: 80, stock: 100, supplierEmail: "supplier5@gmail.com" }
  ];
}
