import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  constructor(private bookService: BookService, private router:Router, private fb: FormBuilder) { }

  message = null;
  bookForm: FormGroup;

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]
    })
  }

  create() {
    let book = this.bookForm.value;
    this.bookService.createBook(book).subscribe(p => {
      this.message = 'New book created successfully!';
    });
  }

  get bookTitle(){
    return this.bookForm.get('title')
  }

  get bookAuthor(){
    return this.bookForm.get('author')
  }

  get bookDescription(){
    return this.bookForm.get('description')
  }
}

