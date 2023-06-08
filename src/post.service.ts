import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from './post';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class PostService {
  private apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
   private selectedPostTypeSource = new Subject<string>();
   selectedPostType$ = this.selectedPostTypeSource.asObservable();

  selectPostType(postType: string): void {
    this.selectedPostTypeSource.next(postType);
  }
  
  getPosts(page: number): Observable<Post[]> {
  
  return this.http.get<Post[]>(`${this.apiURL}/`);
}

}


