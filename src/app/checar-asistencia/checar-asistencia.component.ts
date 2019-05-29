import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeleccionService } from '../service/seleccion.service'
@Component({
  selector: 'app-checar-asistencia',
  templateUrl: './checar-asistencia.component.html',
  styleUrls: ['./checar-asistencia.component.css']
})
export class ChecarAsistenciaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
   //datos para datatable
 
  profesor;
  semana;
  grupo;
  bailar;
  constructor(private reporteservice: SeleccionService, private routs: Router) { }

  ngOnInit(): void{
    this.dtOptions = {
      pagingType: 'full_numbers',
      "scrollY":        "200px",
      "scrollCollapse": true,
    };
  }

  getAsistencias(){
    this.reporteservice.getAsistencias(this.semana, this.profesor, this.grupo).subscribe(result => this.bailar = result);
    console.log(this.profesor);
  }



}
