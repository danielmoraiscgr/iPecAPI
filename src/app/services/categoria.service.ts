import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import Categoria from '../models/Categoria';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  public API = 'https://localhost:44339/api';
  public CATEGORIAS_API = `${this.API}/Categorias`;


  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(this.CATEGORIAS_API);
 }

 get(id: string) {
   return this.http.get(`${this.CATEGORIAS_API}/${id}`);
 }

 delete(id: number): Observable<{}> {
     const url = `${this.CATEGORIAS_API}/${id}`;  
   return this.http.delete(url, httpOptions);   
 }

 post(opost:Categoria): Observable<any> {
       return this.http.post(this.CATEGORIAS_API,opost);
 }

 put(id: string, oput: Categoria): Observable<Categoria> {
      console.log(this.CATEGORIAS_API+'/'+id.toString());
      return this.http.put<Categoria>(`${this.CATEGORIAS_API}/${id}`,oput);
 }

 update(categoria: Categoria){
   if (categoria.id) {
     let result: Observable<Categoria>;
     result = this.http.put<Categoria>(
       `${this.CATEGORIAS_API}/${categoria.id}`,
       categoria
     );
     console.log(result);
     
   return result;
 }}

 

}
