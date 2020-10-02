import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {IBook} from "../ibook";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  book = this.bookService.getBook();

  edit(book: IBook) {
    this.bookService.setBook(book);
    this.router.navigate(["edit"]);
  }
  delete(book: IBook) {
    this.bookService.setBook(book);
    this.router.navigate(["delete"]);
  }


}
