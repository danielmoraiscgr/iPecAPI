import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import Raca from 'src/app/models/Raca';
import Categoria from 'src/app/models/Categoria';
import Produtor from 'src/app/models/Produtor';
import Fazenda from 'src/app/models/Fazenda';
import Animal from 'src/app/models/Animal';
import Manejo from 'src/app/models/Manejo';
import { AnimalService } from 'src/app/services/animal.service';
import { FazendaService } from 'src/app/services/fazenda.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { RacaService } from 'src/app/services/raca.service';
import { ManejoService } from 'src/app/services/manejo.service';
import { AparteService } from 'src/app/services/aparte.service';
import Aparte from 'src/app/models/Aparte';
import { TipomanejoService } from 'src/app/services/tipomanejo.service';
import TipoManejo from 'src/app/models/TipoManejo';

@Component({
  selector: 'app-manejo',
  templateUrl: './manejo.page.html',
  styleUrls: ['./manejo.page.scss'],
})

export class ManejoPage implements OnInit {
  
  animais: Array<Animal>; 
  manejos: Array<Manejo>;
  tipomanejos: Array<TipoManejo>;
  fazendas: Array<Fazenda>;  
  produtores: Array<Produtor>;
  categorias: Array<Categoria>;
  racas: Array<Raca>; 
  apartes: Array<Aparte>;

  @ViewChild(IonContent, {static: true}) content: IonContent;

  scrollToTop() {
    this.content.scrollToTop(400);
  }
  ionViewDidEnter(){
    this.scrollToTop();
  }


    public id: number=0;
    public datamanejo: Date; 
    public tipomanejoid: number; 
    public produtorid: number; 
    public fazendaid: number; 
    public numeroanimal: string; 
    public animalid: number; 
    public categoriaid: number; 
    public racaid: number; 
    public peso: number; 
    public aparteid: number;   
    public obs: string;  

    public compareWith: any;


    constructor(private animalService: AnimalService, 
                private manejoService: ManejoService,
                private tipomanejoService: TipomanejoService,
                private fazendaService: FazendaService, 
                private produtorService: ProdutorService,
                private categoriaService: CategoriaService, 
                private racaService:RacaService,
                private aparteService: AparteService) { };
 
save() {
  if (this.datamanejo==null){
    alert("Entre com a Data de Manejo ! ");
    return;
  }
  if (this.tipomanejoid==0) {
    alert("Entre com o Tipo de Manejo !");
    return;
  }
  if (this.animalid==0){
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
  if (this.aparteid==0) {
    alert("Entre com o Aparte !");
    return;
  }
  if (this.id!=0) 
       {   
        var oput = new Manejo()
        oput.id = this.id;
        oput.datamanejo = this.datamanejo; 
        oput.tipomanejoid = this.tipomanejoid; 
        oput.animalid = this.animalid;
        oput.produtorid = this.produtorid; 
        oput.fazendaid = this.fazendaid; 
        oput.categoriaid = this.categoriaid;
        oput.racaid = this.racaid;
        oput.peso = this.peso; 
        oput.aparteid = this.aparteid;
        oput.obs = this.obs; 
            
        this.manejoService.put(this.id.toString(),oput)
        .subscribe( value => {
          this.clearfields();
          this.getAll(); 
        });
      
       } else
       {


       var opost = new Manejo()
       opost.id = this.id;
       opost.datamanejo = this.datamanejo; 
       opost.tipomanejoid = this.tipomanejoid; 
       opost.animalid = this.animalid; 
       opost.produtorid = this.produtorid; 
       opost.fazendaid = this.fazendaid; 
       opost.categoriaid = this.categoriaid;
       opost.racaid = this.racaid;
       opost.peso = this.peso; 
       opost.aparteid = this.aparteid;
       opost.obs = this.obs; 
             
       this.manejoService.post(opost)
       .subscribe(
         data=> { 
            this.clearfields();
            this.getAll();          }
       )} 
      this.scrollToTop();
  }

  getAll() {
    this.manejoService.getAll().subscribe(data => {
      this.manejos = data;
    });  
  }

  getAnimais() {
    this.animalService.getAll().subscribe(data => {
      this.animais = data;
    });  
  }

  getTipoManejos() {
    this.tipomanejoService.getAll().subscribe(data => {
      this.tipomanejos = data;
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
      
  getApartes() {
      this.aparteService.getAll().subscribe(data => {
        this.apartes = data;
      });   
  }

delete(item) {
  this.manejoService.delete(item.id).subscribe(value=> {
    this.getAll(); 
  });
 }

  update(item) {
    this.id = item.id;
    this.datamanejo = item.data;
    this.tipomanejoid = item.tipoManejoId;
    this.animalid = item.animalId;
    this.produtorid = item.animal.produtorId;
    this.fazendaid = item.fazendaId; 
    this.categoriaid = item.animal.categoriaId; 
    this.racaid = item.animal.racaId;
    this.peso  = item.peso;
    this.aparteid = item.aparteId;
    this.obs = item.obs;    
    this.scrollToTop();

  }


clearfields(){
  this.id =0;
  this.datamanejo = null;
  this.tipomanejoid = 0;
  this.animalid = 0;
  this.produtorid = 0;
  this.fazendaid = 0;
  this.categoriaid = 0;
  this.racaid = 0;
  this.peso  = 0;
  this.aparteid = 0;
  this.obs = "";    
}

  ngOnInit() {
    this.getAll();
    this.getAnimais();
    this.getTipoManejos(); 
    this.getProdutores(); 
    this.getFazendas();
    this.getCategorias(); 
    this.getRacas();
    this.getApartes(); 
  }
}


