import { Component, OnInit } from '@angular/core';
import {IBook} from "../ibook";
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: IBook[] = [];
  constructor(private bookService: BookService, private router: Router) {
    this.books = this.getAllBooks();
  }

  bookList;

  booksAmount;

  ngOnInit(): void {
  }

  getAllBooks(): IBook[] {
    this.bookService.getBookList().subscribe(p => {this.bookList = p; this.booksAmount = this.bookList.length});
    return this.books;
  }

  detail(book: IBook) {
    this.bookService.setBook(book);
    this.router.navigate(["/detail"])
  }

  edit(book: IBook) {
    this.bookService.setBook(book);
    this.router.navigate(["/edit"])
  }

  delete(book: IBook) {
    this.bookService.setBook(book);
    this.router.navigate(["/delete"])
  }
}
