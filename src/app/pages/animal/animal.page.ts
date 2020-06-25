import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import Raca from 'src/app/models/Raca';
import Categoria from 'src/app/models/Categoria';
import Produtor from 'src/app/models/Produtor';
import Fazenda from 'src/app/models/Fazenda';
import Animal from 'src/app/models/Animal';
import { AnimalService } from 'src/app/services/animal.service';
import { FazendaService } from 'src/app/services/fazenda.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { RacaService } from 'src/app/services/raca.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.page.html',
  styleUrls: ['./animal.page.scss'],
})
export class AnimalPage implements OnInit {

  animais: Array<Animal>; 
  fazendas: Array<Fazenda>;  
  produtores: Array<Produtor>;
  categorias: Array<Categoria>;
  racas: Array<Raca>; 
  
  @ViewChild(IonContent, {static: true}) content: IonContent;
  
  scrollToTop() {
    this.content.scrollToTop(400);
  }
  ionViewDidEnter(){
    this.scrollToTop();
  }

  public id:number=0;
  public numeroAnimal:string="";
  public datanasc: Date;
  public produtorid:number=0; 
  public fazendaid:number=0; 
  public categoriaid:number=0; 
  public racaid:number=0; 
  public ativo:boolean; 


  constructor(private animalService: AnimalService, 
              private fazendaService: FazendaService, 
              private produtorService: ProdutorService,
              private categoriaService: CategoriaService, 
              private racaService:RacaService) { };



save() {
  if (!this.numeroAnimal.length){
    alert("Entre com a Identificação do Animal ! ");
    return;
  }
  if (this.produtorid==0) {
    alert("Entre com o Produtor !");
    return;
  }
  if (this.fazendaid==0) {
    alert("Entre com a Fazenda!");
    return;
  }
  if (this.categoriaid==0) {
    alert("Entre com a Categoria !");
    return;
  }
  if (this.racaid==0) {
    alert("Entre com a Raça !");
    return;
  }
  if (this.id!=0) 
       {   
        var oput = new Animal()
        oput.id = this.id;
        oput.numeroAnimal = this.numeroAnimal; 
        oput.datanasc = this.datanasc;
        oput.produtorid = this.produtorid; 
        oput.fazendaid = this.fazendaid; 
        oput.categoriaid = this.categoriaid;
        oput.racaid = this.racaid;
        oput.ativo = this.ativo;   
            
        this.animalService.put(this.id.toString(),oput)
        .subscribe( value => {
          this.clearfields();
          this.getAll(); 
        });
      
       } else
       {


       var opost = new Animal()
       opost.id = this.id;
       opost.numeroAnimal = this.numeroAnimal; 
       opost.datanasc = this.datanasc;
       opost.produtorid = this.produtorid; 
       opost.fazendaid = this.fazendaid; 
       opost.categoriaid = this.categoriaid;
       opost.racaid = this.racaid;
       opost.ativo = this.ativo;   
             
       this.animalService.post(opost)
       .subscribe(
         data=> { 
            this.clearfields();
            this.getAll();          }
       )} 
      this.scrollToTop();
  }

  getAll() {
    this.animalService.getAll().subscribe(data => {
      this.animais = data;
    });  
  }

  getProdutores() {
    this.produtorService.getAll().subscribe(data => {
      this.produtores = data;
    });      
  }
  
  getFazendas() {
    this.fazendaService.getAll().subscribe(data => {
      this.fazendas = data;
    });       
  }
  
  getCategorias() {
    this.categoriaService.getAll().subscribe(data => {
      this.categorias = data;
    });    
       
  }

  getRacas() {
    this.racaService.getAll().subscribe(data => {
      this.racas = data;
    });    
      
  }

delete(item) {
  this.animalService.delete(item.id).subscribe(value=> {
    this.getAll(); 
  });
 
}

  update(item) {
    this.id = item.id;
    this.numeroAnimal = item.numeroAnimal;
    this.datanasc = item.dataNasc;
    this.produtorid = item.produtor.id; 
    this.fazendaid  = item.fazenda.id;
    this.categoriaid = item.categoria.id; 
    this.racaid = item.raca.id;
    this.ativo = item.ativo;    
    this.scrollToTop();

  }


clearfields(){
  this.id = 0;
  this.numeroAnimal = "";
  this.datanasc = null;
  this.produtorid = 0; 
  this.fazendaid = 0; 
  this.categoriaid = 0; 
  this.racaid = 0; 
  this.ativo = false; 
}

  ngOnInit() {
    this.getAll();
    this.getProdutores(); 
    this.getFazendas();
    this.getCategorias(); 
    this.getRacas(); 
  }



}
