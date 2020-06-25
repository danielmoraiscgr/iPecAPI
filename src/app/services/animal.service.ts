import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import Animal from '../models/Animal';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  public API = 'https://localhost:44339/api';
  public ANIMAIS_API = `${this.API}/Animais`;

  constructor(private http: HttpClient) { }
  
getAll(): Observable<Array<Animal>> {
    return this.http.get<Array<Animal>>(this.ANIMAIS_API);
 }

 get(id: string) {
   return this.http.get(`${this.ANIMAIS_API}/${id}`);
 }

 delete(id: number): Observable<{}> {
     const url = `${this.ANIMAIS_API}/${id}`;  
   return this.http.delete(url, httpOptions);   
 }

 post(opost:Animal): Observable<any> {
       return this.http.post(this.ANIMAIS_API,opost);
 }

 put(id: string, oput: Animal): Observable<Animal> {
      console.log(this.ANIMAIS_API+'/'+id.toString());
      return this.http.put<Animal>(`${this.ANIMAIS_API}/${id}`,oput);
 }

 update(animal: Animal){
   if (animal.id) {
     let result: Observable<Animal>;
     result = this.http.put<Animal>(
       `${this.ANIMAIS_API}/${animal.id}`,animal);
   
   return result;
 }}

}
