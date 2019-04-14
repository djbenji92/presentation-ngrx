import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  private url = 'posts';

  list(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiUrl}${this.url}`);
  }

  get(id: number): Observable<Post> {
    return this.http.get<Post>(`${environment.apiUrl}${this.url}/${id}`);
  }

  add(post: Post): Observable<Post> {
    return this.http.post<Post>( `${environment.apiUrl}${this.url}`, post);
  }
}
