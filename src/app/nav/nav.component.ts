import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import {SeleccionService } from '../service/seleccion.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sesion; 
  nombre;
  constructor(private reporteservice: SeleccionService, private routs:Router) {
    this.sesion=localStorage.getItem("matricula");
   
   }

  ngOnInit() {
    this.nombresesion();
  }

  nombresesion(){
    this.reporteservice.nombresesion(this.sesion).subscribe(result => this.nombre = result);
  }
  cerrarsesion(){
    
    localStorage.removeItem("matricula");
    
    localStorage.removeItem("token");
    localStorage.removeItem("idgrupo");
    
    localStorage.removeItem("idsemana");
    localStorage.removeItem("semana");
    
    localStorage.removeItem("grupo");
    this.routs.navigateByUrl('');

  }
}
