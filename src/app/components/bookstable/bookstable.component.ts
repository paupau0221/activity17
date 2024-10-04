import { Component } from '@angular/core';
interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  isbn: string;
  stock: number;
  price: number;
}

@Component({
  selector: 'app-bookstable',
  templateUrl: './bookstable.component.html',
  styleUrl: './bookstable.component.css'
})
export class BookstableComponent {
  books: Book[] = [
    { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Fiction", publishedYear: 1925, isbn: "978-0743273565", stock: 20, price: 15.99 },
    { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", publishedYear: 1960, isbn: "978-0060935467", stock: 35, price: 10.99 },
    { id: 3, title: "1984", author: "George Orwell", genre: "Dystopian", publishedYear: 1949, isbn: "978-0451524935", stock: 40, price: 9.99 },
    { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", publishedYear: 1951, isbn: "978-0316769488", stock: 25, price: 8.99 },
    { id: 5, title: "A Brief History of Time", author: "Stephen Hawking", genre: "Non-fiction", publishedYear: 1988, isbn: "978-0553380163", stock: 10, price: 18.99 }
  ];
}
