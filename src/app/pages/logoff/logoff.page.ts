import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.page.html',
  styleUrls: ['./logoff.page.scss'],
})
export class LogoffPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
       localStorage.removeItem('token');
       localStorage.removeItem('rolename');
       this.router.navigate(['/login']); 
  }

}
