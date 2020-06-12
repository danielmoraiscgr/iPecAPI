import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import Categoria from '../models/Categoria';
import { catchError, retry } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public API = 'https://localhost:44339/api';
  public CATEGORIAS_API = `${this.API}/Categorias`;


  constructor(private http: HttpClient) { }

  
// Http Options
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

 // Handle API errors
 handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
};

  getAll(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(this.CATEGORIAS_API);
 }

 get(id: string) {
   return this.http.get(`${this.CATEGORIAS_API}/${id}`);
 }

add(categoria: Categoria): Observable<Categoria> {
   let result: Observable<Categoria>;
   if (categoria.id) {
     result = this.http.put<Categoria>(
       `${this.CATEGORIAS_API}/${categoria.id}`,categoria);
   } else {
     result = this.http.post<Categoria>(this.CATEGORIAS_API, categoria);
   }
   return result;
 }

   // Create a new item
  createItem(item): Observable<Categoria> {
    return this.http
      .post<Categoria>(this.CATEGORIAS_API, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

 remove(id: number): Observable<{}> {
    const url = `${this.CATEGORIAS_API}/${id}`; 
    return this.http.delete(url,this.httpOptions);
 }

 

}
