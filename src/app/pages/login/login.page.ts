import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  isLoginError : boolean = false;
  username:string; 
  password:string; 

  constructor(private router : Router, 
              public navCtrl: NavController,
              private toast:ToastController, 
              private loginService: LoginService) { 
 
  }
  ngOnInit() {
  }
  
  async mensagem(msg){
    const toast = await this.toast.create({
      message: msg,
      position: 'middle',
      duration: 2000
    });
    toast.present();
  }
  login(){    

    if(this.username==null){
        this.mensagem('Informa o Usuario !');
        return;
    }
    if(this.password==null){
        this.mensagem('Informe a Senha !');
        return; 
    }

    this.loginService.login(this.username,this.password)
    .subscribe(async (data : any)=>{
      const toast = await this.toast.create({
        message: 'Usuario Autenticado com sucesso !',
        position: 'middle',
        duration: 2000
      });
      toast.present();

     localStorage.setItem('token',data.token);
     localStorage.setItem('rolename',data.roleName);
     this.router.navigate(['/home']);
   },
   async (err : HttpErrorResponse)=>{
     this.isLoginError = true;
     const toast = await this.toast.create({
      message: 'Erro na autenticacao. Verifica suas credenciais !',
      position: 'middle',
      duration: 2000
    });
    toast.present();     
   });
 }

}
