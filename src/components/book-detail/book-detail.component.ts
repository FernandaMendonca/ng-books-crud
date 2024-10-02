import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-detail',
  template: `
    <h2>Lista de Livros</h2>
    <ul>
      <li *ngFor="let book of books">{{ book.title }}</li>
    </ul>
  `,
  styles: []
})
export class BookDetailComponent implements OnInit {
  books = [
    { title: 'Livro 1' },
    { title: 'Livro 2' },
    { title: 'Livro 3' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
