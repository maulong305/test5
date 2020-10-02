import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subscription} from "rxjs";
import {IBook} from "./ibook";
import {Router} from "@angular/router";



@Injectable({
  providedIn: 'root'
})

export class BookService {

  book: IBook;

  constructor(private http: HttpClient, private router: Router) { }

  private url = 'http://localhost:3000/books';

  setBook(book: IBook) {
    this.book = book;
  }

  getBook() {
    return this.book;
  }

  getBookList(): Observable<IBook[]>{
    return this.http.get<IBook[]>(this.url);
  }

  createBook(book: IBook): Observable<IBook>{
    return this.http.post<IBook>(this.url, book);
  }

  editBook(id: number, book: IBook): Observable<IBook> {
    return this.http.put<IBook>(this.url + '/' + id, book);
  }

  deleteBook(id: number): Subscription {
    return this.http.delete<IBook>(this.url + '/' + id).subscribe(res => this.router.navigate([""]));
  }


}
