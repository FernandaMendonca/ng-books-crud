import { Routes } from '@angular/router';

import { BooksListComponent } from '../components/books-list/books-list.component';
import { AddBookComponent } from '../components/add-book/add-book.component';
import { BookDetailComponent } from '../components/book-detail/book-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },  // Redireciona para a lista de livros
  { path: 'books', component: BooksListComponent },
  { path: 'books/add', component: AddBookComponent },
  { path: 'books/:id', component: BookDetailComponent }  // Página de detalhes do livro com ID dinâmico
];
