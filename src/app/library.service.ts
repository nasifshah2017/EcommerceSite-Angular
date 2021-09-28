import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookDetails } from './BookDetails';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  // Endpoint
  configUrl = "http://216.10.245.166//Library/GetBook.php?AuthorName=Shetty1";

  // HTTP Client
  constructor(private http: HttpClient) { }

  getBootDetails(): Observable<BookDetails[]> {
    // Making API request using HTTP Client
    return this.http.get<BookDetails[]>(this.configUrl);
  }
}
