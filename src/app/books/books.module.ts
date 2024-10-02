import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from '../../components/books-list/books-list.component';
import { BookDetailComponent } from '../../components/book-detail/book-detail.component';
import { AddBookComponent } from '../../components/add-book/add-book.component';
import { FormsModule } from '@angular/forms';

// Defina as rotas para o módulo de livros
const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'add', component: AddBookComponent },
  { path: ':id', component: BookDetailComponent }
];

@NgModule({
  declarations: [
    BooksListComponent,
    BookDetailComponent,
    AddBookComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  // Caso esteja usando formulários
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    BooksListComponent,
    BookDetailComponent,
    AddBookComponent
  ]
})
export class BooksModule { }
