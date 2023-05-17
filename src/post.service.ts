import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
  
export class PostService {

  constructor(private http: HttpClient) { }
  
  
  getPosts(page: number): Observable<Post[]> {
    return this.http.get<Post[]>(
      `https://6460f1bf185dd9877e33c542.mockapi.io/photos?page=${page}&limit=6`
    );
  }
}

