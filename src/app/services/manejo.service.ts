import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import Manejo from '../models/Manejo';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class ManejoService {
  public API = 'https://localhost:44339/api';
  public MANEJOS_API = `${this.API}/Manejos`;

  constructor(private http: HttpClient) { }

  
getAll(): Observable<Array<Manejo>> {
  return this.http.get<Array<Manejo>>(this.MANEJOS_API);
}

get(id: string) {
 return this.http.get(`${this.MANEJOS_API}/${id}`);
}

delete(id: number): Observable<{}> {
   const url = `${this.MANEJOS_API}/${id}`;  
 return this.http.delete(url, httpOptions);   
}

post(opost:Manejo): Observable<any> {
     return this.http.post(this.MANEJOS_API,opost);
}

put(id: string, oput: Manejo): Observable<Manejo> {
    return this.http.put<Manejo>(`${this.MANEJOS_API}/${id}`,oput);
}

update(manejo: Manejo){
 if (manejo.id) {
   let result: Observable<Manejo>;
   result = this.http.put<Manejo>(
     `${this.MANEJOS_API}/${manejo.id}`,manejo);
 
 return result;
}}
  

}
