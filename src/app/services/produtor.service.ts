import { Injectable } from '@angular/core';
import { Storage } from  '@ionic/storage';

export interface Produtor { 
    id: number;
    nome: string; 
    email: string
}

const PRODUTORES_KEY = 'my-produtores';


@Injectable({
  providedIn: 'root'
})
export class ProdutorService {

  constructor(private storage: Storage) { }

  addProdutor(produtor: Produtor): Promise<any> {
      return this.storage.get(PRODUTORES_KEY).then((produtores: Produtor[]) =>{
        if (produtores) {
            produtores.push(produtor);
            return this.storage.set(PRODUTORES_KEY, produtor);
        }else {
             return this.storage.set(PRODUTORES_KEY, [produtor])
        }
      });
  }

  getProdutores(): Promise<Produtor[]> {
       return this.storage.get(PRODUTORES_KEY);

          
  }

  updateProdutor(produtor: Produtor): Promise<any> {
    return this.storage.get(PRODUTORES_KEY).then((produtores: Produtor[]) =>{
      if (!produtores || produtores.length === 0) {
        return null;
      }
      let newProdutores: Produtor[] = [];
      for (let i of produtores) {
        if (i.id === produtor.id) {
             newProdutores.push(produtor);

        } else {
            newProdutores.push(i);
        }

      }
      return this.storage.set(PRODUTORES_KEY, newProdutores);
    });
    
  }

  deleteProdutor(id: number): Promise<Produtor> {
    return this.storage.get(PRODUTORES_KEY).then((produtores: Produtor[]) => {
      if (!produtores || produtores.length === 0) {
        return null;
      }
      let toKeep: Produtor[] = [];
      for (let i of produtores){
         if (i.id !== id) {
           toKeep.push(i);
         }
      } 
      return this.storage.set(PRODUTORES_KEY, toKeep);
    });
  }


}
