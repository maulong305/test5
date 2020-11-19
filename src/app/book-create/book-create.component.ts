import { Component, Input, OnInit } from '@angular/core';
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
  
  @Input() book: any = {
    title: '',
    author: '',
    description:''
  }

  ngOnInit(): void {
   
  }

  create() {
   
    this.bookService.createBook(this.book).subscribe(data => {
      this.message = 'New book created successfully!';
    });
  }

}

