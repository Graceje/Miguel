import { Component, OnInit } from '@angular/core';
import {NgForm } from '@angular/forms/src/directives/ng_form';
import { Router } from '@angular/router';
import {SeleccionService } from '../service/seleccion.service';
@Component({
  selector: 'app-nav2',
  templateUrl: './nav2.component.html',
  styleUrls: ['./nav2.component.css']
})
export class Nav2Component implements OnInit {
  log={
   
    matricula:null,
    pass:null,
    
  }
  toki; 
  tip;
  constructor(private reporteservice: SeleccionService, private routs:Router) {
    this.toki = { token: '' };
    this.tip = { tipo: '' };
   }

  ngOnInit() {
  }
  login(){
    
    this.reporteservice.login(this.log.matricula,this.log.pass).subscribe( result =>{
      console.log('amos');
      this.toki = result;
      console.log(result);
      console.log(this.toki);
      if(this.toki.token == "no"){
        alert("Error, Intente de nuevo");

      }else{

        this.reporteservice.getdatossesion(this.log.matricula).subscribe(result =>{
          localStorage.setItem("matricula",this.log.matricula);
          localStorage.setItem('token' , this.toki.token);
          this.tip = result;
         if (this.tip.tipo == "Admin" ) {
            console.log(this.tip);
            this.routs.navigateByUrl('fechas');
           
          
          }
          if (this.tip.tipo == "Maestro" ) {
            console.log(this.tip);
            this.routs.navigateByUrl('inicio');
          
          }
          if (this.tip.tipo == "Estudiante" ) {
            console.log(this.tip);
            this.routs.navigateByUrl('inicio');
           
          }
          if (this.tip.tipo == "Checador" ) {
            console.log(this.tip);
            this.routs.navigateByUrl('inicio');
          }
       

        })
       
       

      };
     
    });
  }

}
