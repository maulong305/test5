import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookEditComponent} from "./book-edit/book-edit.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookDetailComponent} from "./book-detail/book-detail.component";
import {BookDeleteComponent} from "./book-delete/book-delete.component";

const routes: Routes = [
  {path:"", component: BookListComponent},
  {path:"create", component: BookCreateComponent},
  {path:"edit", component: BookEditComponent},
  {path:"detail", component: BookDetailComponent},
  {path:"delete", component: BookDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
