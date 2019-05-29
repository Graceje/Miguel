import { Component, OnInit } from '@angular/core';
import {SeleccionService } from '../service/seleccion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-checador',
  templateUrl: './registro-checador.component.html',
  styleUrls: ['./registro-checador.component.css']
})
export class RegistroChecadorComponent implements OnInit {
  sesion;
  bailar= null;
  bailar3;
  bailar2;
  prof=null;
  idsemana;
  usuario;
  semana;
  bailarx;
  acomodo: boolean = false;
  vis={
    profesor: null,
  }
 
  constructor(private reporteservice: SeleccionService, private routs: Router) {
    this.sesion=localStorage.getItem("matricula");
    this.semana = localStorage.getItem("semana");
    this.usuario = localStorage.getItem("usuario");
    this.idsemana=localStorage.getItem("idsemana");
   }

  ngOnInit() {
    this.getdatossesion();
    this.getprofesor();
   
  }
  getdatossesion(){
    this.reporteservice.getdatossesion2(this.sesion).subscribe(result =>  this.bailar = result)
    
  }

  getprofesor(){
    this.reporteservice.getprofesor().subscribe(result =>  this.prof = result)
  }

  getmateriasxprofe(){
    this.reporteservice.getmateriasxprofe(this.vis.profesor).subscribe(result =>  this.bailar2 = result)
    console.log(this.vis.profesor);
  }
  acomodar(cont: any) {

    for (let i in cont) {
      console.log("entro")
      this.bailar2[i].lunes = "NO";
      this.bailar2[i].martes = "NO";
      this.bailar2[i].miercoles = "NO";
      this.bailar2[i].jueves = "NO";
      this.bailar2[i].viernes = "NO";
      this.bailar2[i].reporteador = this.usuario;
      this.bailar2[i].semana = this.semana;
      
      this.bailar2[i].sesion = this.sesion;



    }
  }
  sumaOresta(d: string, i: string) {
    if (this.acomodo == false) {
      this.acomodar(this.bailar2)
      this.acomodo = true
    }

    let sum = document.getElementById('suma' + i);
    let x = +sum.innerHTML;
    let chec = <HTMLInputElement>document.getElementById(d + i);
    if (chec.checked) {
      if (d == "lunes") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].lunes = 'SI';
      } else if (d == "martes") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].martes = 'SI';
      } else if (d == "miercoles") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].miercoles = 'SI';
      } else if (d == "jueves") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].jueves = 'SI';
      } else if (d == "viernes") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].viernes = 'SI';
      }

    } else {
      if (d == "lunes") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].lunes = 'NO';
      } else if (d == "martes") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].martes = 'NO';
      } else if (d == "miercoles") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].miercoles = 'NO';
      } else if (d == "jueves") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].jueves = 'NO';
      } else if (d == "viernes") {
        sum.innerHTML = (x + 1).toString();
        this.bailar2[i].viernes = 'NO';
      }
    }
    console.log(this.bailar2);
  }
  registrar() {
    this.registrardatosgenerales();
    console.log(this.bailar2);
    this.reporteservice.registrar_asis(this.bailar2).subscribe(result => {
      this.bailar3 = result;
      if (result['resultado'] == 'OK') {
        alert(result['mensaje']);
        this.routs.navigateByUrl('inicio');
      }
    })
    
  }
  registrardatosgenerales(){
    
    console.log(this.idsemana);
    this.reporteservice.registrar_datosgenerales(this.sesion,this.idsemana).subscribe(result =>  this.bailarx = result)
   }
}
