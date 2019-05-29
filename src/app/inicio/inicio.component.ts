import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeleccionService } from '../service/seleccion.service';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  sesion;
  bailar2 = null;
  bailar = null;
  bailar3= null;
  tip;
  constructor(private reporteservice: SeleccionService, private routs: Router) {
    this.sesion=localStorage.getItem("matricula");
    this.tip = { tipo: '' };
  }

  ngOnInit() {
    this.getsemanas();
    this.getsemanaspendientes();
  }


  getsemanas() {
    console.log(this.sesion)
    this.reporteservice.getsemanas(this.sesion).subscribe(result => this.bailar2 = result);
    console.log("hola");
    
  }
  getsemanaspendientes(){
    this.reporteservice.getsemanaspendientes(this.sesion).subscribe(result => this.bailar = result);
  }

  registro(idsemana:any,nom_semana: any,fechaInicio: any,fechaFin:any){
    localStorage.setItem("idsemana",idsemana);
    localStorage.setItem("semana",nom_semana);
    localStorage.setItem("fechaInicio",fechaInicio);
    localStorage.setItem("fechaFin",fechaFin);
    this.reporteservice.getdatossesion(this.sesion).subscribe(result =>{
      
      this.tip = result;
      if (this.tip.tipo == "Maestro" ) {
        console.log(this.tip);
        this.routs.navigateByUrl('registro-maestro');
        localStorage.setItem("usuario",this.tip.tipo);
       
      }
      if (this.tip.tipo == "Estudiante" ) {
        console.log(this.tip);
        this.routs.navigateByUrl('primera');
        localStorage.setItem("usuario",this.tip.tipo);
      }
      if (this.tip.tipo == "Checador" ) {
        console.log(this.tip);
        this.routs.navigateByUrl('registro-checador');
        localStorage.setItem("usuario",this.tip.tipo);
      }
      if (this.tip.tipo == "Admin" ) {
        console.log(this.tip);
        this.routs.navigateByUrl('fechas');
      }
      
      
    });
   
   

  }

  


}
