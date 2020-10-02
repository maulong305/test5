import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  constructor(private bookService: BookService, private router:Router, private fb: FormBuilder) { }

  bookEditForm: FormGroup;
  book = this.bookService.getBook();
  message = null;

  ngOnInit(): void {
    this.bookEditForm = this.fb.group({
      id: [this.book.id],
      title: [this.book.title, [Validators.required]],
      author: [this.book.author, [Validators.required]],
      description: [this.book.description, [Validators.required]]
    })
  }



  edit() {
    let book = this.bookEditForm.value;
    this.bookService.editBook(book.id, book).subscribe(p => {
      this.message = "This book was edited successfully";
    })
  }

  get bookId(){
    return this.bookEditForm.get('id')
  }

  get bookTitle(){
    return this.bookEditForm.get('title')
  }

  get bookAuthor(){
    return this.bookEditForm.get('author')
  }

  get bookDescription(){
    return this.bookEditForm.get('description')
  }

}
