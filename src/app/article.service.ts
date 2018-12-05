import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<any> {
    console.log('getAllArticle');
    return this.http.get('http://localhost:3000/articles')
      .pipe(
        catchError(this.handleError)
      );

  }

  createArticle(article: any): Observable<any> {
    return this.http.post('http://localhost:3000/articles', article)
      .pipe(
        catchError(this.handleError)
      );
  }

  deleteHero(id: any): Observable<{}> {
    const url = `http://localhost:3000/articles/${id}`; 
    return this.http.delete(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
