import { Component, OnInit, ViewChild } from '@angular/core';
import {SeleccionService } from '../service/seleccion.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-primera',
  templateUrl: './primera.component.html',
  styleUrls: ['./primera.component.css']
})
export class PrimeraComponent implements OnInit {
  
    carrera: any;
    grupo: any;
    turno: any;
    acomodo: boolean = false;
  
   
    sesion;
    usuario;
    semana;
    gruposs;
    id_grupo;
    idsemana;
   
  bailar= null;
  bailar2=null;
  bailar3=null;
  bailarx=null;
  constructor(private reporteservice: SeleccionService, private routs: Router) {
    this.bailar = { grupo: '' };
    this.sesion=localStorage.getItem("matricula");
    this.usuario=localStorage.getItem("usuario");
    this.semana=localStorage.getItem("semana");
    this.id_grupo=localStorage.getItem("idgrupo");
    this.idsemana=localStorage.getItem("idsemana");

     
   
   }

  ngOnInit() {
        this.getdatossesion();
    
  }
  acomodar(cont: any){
    
    for(let i in cont){
      console.log("entro")
      this.bailar2[i].lunes = "NO";
      this.bailar2[i].martes = "NO";
      this.bailar2[i].miercoles= "NO";
      this.bailar2[i].jueves = "NO";
      this.bailar2[i].viernes = "NO";
      this.bailar2[i].reporteador= this.usuario;
      this.bailar2[i].semana=this.semana;
      this.bailar2[i].grupo=this.gruposs;

      
      

    }
  }
  getseleccion(){
    console.log(this.carrera);
    
    
  }
  capturar(id_grupo:any,carrera:any,grupo:any,turno:any){
   console.log(carrera);
   this.reporteservice.getseleccion(grupo, carrera,turno).subscribe( result => this.bailar2 = result);
   localStorage.setItem("grupo",grupo);
   localStorage.setItem("idgrupo",id_grupo);
   this.gruposs=grupo;
   console.log(this.id_grupo);
   console.log(this.idsemana);
  
  }
  sumaOresta(d: string,i: string){
    if(this.acomodo == false){
      this.acomodar(this.bailar2)
    this.acomodo = true}
    
    let sum = document.getElementById('suma'+i);
    let x = +sum.innerHTML;
    let chec = <HTMLInputElement>document.getElementById(d+i);
    if(chec.checked){
      if (d == "lunes"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].lunes = 'SI'; 
      }else if(d == "martes"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].martes = 'SI'; 
      }else if(d == "miercoles"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].miercoles = 'SI'; 
      }else if(d == "jueves"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].jueves = 'SI'; 
      }else if(d == "viernes"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].viernes = 'SI'; 
      }
      
    }else{
      if (d == "lunes"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].lunes = 'NO'; 
      }else if(d == "martes"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].martes = 'NO'; 
      }else if(d == "miercoles"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].miercoles = 'NO'; 
      }else if(d == "jueves"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].jueves = 'NO'; 
      }else if(d == "viernes"){
        sum.innerHTML = (x+1).toString();
        this.bailar2[i].viernes = 'NO'; 
      }
    }
    console.log(this.bailar2);
  }


  getdatossesion(){
    this.reporteservice.getdatossesion2(this.sesion).subscribe(result =>  this.bailar = result)
  }
  registrar(){
    this.registrardatosgenerales();
    this.reporteservice.registrar_asis(this.bailar2).subscribe(result =>{
      this.bailar3= result
      if (result['resultado'] == 'OK') {
        alert(result['mensaje']);
        this.routs.navigateByUrl('inicio');
      }
    })
   
  }
 registrardatosgenerales(){
  console.log(this.id_grupo);
  console.log(this.idsemana);
  this.reporteservice.registrar_datosgenerales(this.sesion,this.idsemana).subscribe(result =>  this.bailarx = result)
 }

}
