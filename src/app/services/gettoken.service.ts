import { tokenName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';



@Injectable()

export class GetTokenService{

constructor(private storage: Storage){

}

}