import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { books } from 'src/data/books';
import { Book } from 'src/book';

@Component({
  selector: 'app-library-dashboard',
  templateUrl: './library-dashboard.component.html',
  styleUrls: ['./library-dashboard.component.css']
})
export class LibraryDashboardComponent implements OnInit {

  books: Book[] = books;

  constructor(private lib: LibraryService) { }

  ngOnInit(): void {
  }

}
