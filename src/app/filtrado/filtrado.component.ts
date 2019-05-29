import { Component, OnInit } from '@angular/core';
import { SeleccionService } from '../service/seleccion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  mostrar1:boolean;
  mostrar:boolean;
  mostrar2:boolean;
  mostrar3:boolean;
  mostrar4:boolean;
  mostrar5:boolean;
  mostrarboton:boolean;
  filtrado=null;
  baila;
  profesor;
  semana;
  semana1;
  semana2;
  tabla;
  tabla2;
  dia;
  profesor2;
  constructor(private reporteservice: SeleccionService, private routs: Router) {
   
   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      "scrollY": "200px",
      "scrollCollapse": true,
     
      
    };
  }
  activar(){
    console.log(this.filtrado);
    if(this.filtrado== "1"){
      this.mostrar=false;
      this.mostrar1=true;
      this.mostrar2=false;
      this.mostrar3=false;
      this.mostrar4=false;
      this.mostrar5=false;
    }
    if(this.filtrado== "2"){
      this.mostrar=false;
      this.mostrar1=false;
      this.mostrar2=true;
      this.mostrar3=false;
      this.mostrar4=false;
      this.mostrar5=false;
    }
    if(this.filtrado== "3"){
      this.mostrar=false;
      this.mostrar1=false;
      this.mostrar2=false;
      this.mostrar4=false;
      this.mostrar3=true;
      this.mostrar5=false;
    }
    if(this.filtrado== "4"){
      this.mostrar=false;
      this.mostrar1=false;
      this.mostrar2=false;
      this.mostrar3=false;
      this.mostrar4=true;
      this.mostrar5=false;

    }
    if(this.filtrado== "5"){
      this.mostrar=false;
      this.mostrar1=false;
      this.mostrar2=false;
      this.mostrar3=false;
      this.mostrar4=false;
      this.mostrar5=true;

    }

    
  }
  getprofexsemana(){
    this.tabla=false;
    this.tabla2=false;
    this.reporteservice.getprofexsemana(this.semana, this.profesor).subscribe(result => this.baila = result);
  }
  getxsemana(){
    this.tabla=false;
    this.tabla2=false;
    this.reporteservice.getxsemana(this.semana1).subscribe(result => this.baila = result);
  }
  getprofexdia(){
    this.tabla2=true;
    this.tabla=true;
    this.reporteservice.getxdia(this.dia, this.profesor2, this.semana2).subscribe(result => this.baila = result);
  }
}
