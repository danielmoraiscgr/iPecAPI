import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let ProdutorService = class ProdutorService {
    constructor(http) {
        this.http = http;
        this.API = 'https://localhost:44339/api';
        this.PRODUTORES_API = `${this.API}/Produtores`;
    }
    getAll() {
        return this.http.get(this.PRODUTORES_API);
    }
    get(id) {
        // console.log(id); 
        return this.http.get(`${this.PRODUTORES_API}/${id}`);
    }
    save(produtor) {
        let result;
        if (produtor.id) {
            result = this.http.put(`${this.PRODUTORES_API}/${produtor.id}`, produtor);
        }
        else {
            result = this.http.post(this.PRODUTORES_API, produtor);
        }
        return result;
    }
    remove(id) {
        // return this.http.delete(`${this.PRODUTORES_API}/${id.toString()}`);
        const url = `${this.PRODUTORES_API}/${id}`;
        console.log(url);
        return this.http.delete(url, httpOptions);
    }
};
ProdutorService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], ProdutorService);
export { ProdutorService };
//# sourceMappingURL=produtor.service.js.map