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

  book = this.bookService.getBook();
  message = null;

  ngOnInit(): void {
   
  }



  edit() {
    this.bookService.editBook(this.book.id, this.book).subscribe(p => {
      this.message = "This book was edited successfully";
    })
  }

  
}
