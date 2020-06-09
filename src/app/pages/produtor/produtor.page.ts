import { Component, OnInit } from '@angular/core';
import { ProdutorService } from '../../services/produtor.service';
import  Produtor from '../../models/Produtor';

@Component({
  selector: 'app-produtor',
  templateUrl: './produtor.page.html',
  styleUrls: ['./produtor.page.scss'],
})
export class ProdutorPage implements OnInit {
  produtores: Array<Produtor>;  

constructor(private produtorService: ProdutorService){}

  ngOnInit() {
    this.produtorService.getAll().subscribe(data => {
      this.produtores = data;
    });
  }

}
