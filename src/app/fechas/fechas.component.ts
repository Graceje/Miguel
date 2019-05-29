import { Component, OnInit } from '@angular/core';
import { SeleccionService } from '../service/seleccion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fechas',
  templateUrl: './fechas.component.html',
  styleUrls: ['./fechas.component.css']
})
export class FechasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  //datos para datatable
  data: any[] = [];
  datos = {
    idsemana: null,
    fechaInicio: null,
    fechaFin: null,
    nom_semana: null,
  }
  fechaInicio = null;
  fechaFin = null;
  nombre = null;
  bailar;
  resultado;
  bailar2;
  bailar3;
  mostrar1:boolean;
  mostrar2:boolean;
  constructor(private reporteservice: SeleccionService, private routs: Router) {
    this.bailar = { resultado: '' };
    this.tabla();
  }



  ngOnInit(): void {
    $(document).ready(function () {
      $('#example').DataTable({
        "scrollY": "200px",
        "scrollCollapse": true,
        "paging": false
      });
    });
    this.dtOptions = {
      pagingType: 'full_numbers',
      "scrollY": "200px",
      "scrollCollapse": true,
    };


    this.bailar2;
  }

  registrar_semana() {
    console.log(this.fechaInicio);
    console.log(this.fechaFin);
    let date = new Date(this.fechaInicio);

    if (date.getMonth() + 1 < 10 && date.getDate() < 10) {
      var newdate = date.getFullYear() + '/' + '0' + (date.getMonth() + 1) + '/' + '0' + date.getDate();
      console.info(newdate);
    } else if (date.getMonth() + 1 < 10) {
      var newdate = date.getFullYear() + '/' + '0' + (date.getMonth() + 1) + '/' + date.getDate();
      console.info(newdate);
    } else if (date.getDate() < 10) {
      var newdate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + '0' + date.getDate();
      console.info(newdate);
    } else {
      var newdate = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
      console.info(newdate);
    }

    let date2 = new Date(this.fechaFin);

    if (date2.getMonth() + 1 < 10 && date2.getDate() < 10) {
      var newdate2 = date2.getFullYear() + '/' + '0' + (date2.getMonth() + 1) + '/' + '0' + date2.getDate();
      console.info(newdate2);
    } else if (date2.getMonth() + 1 < 10) {
      var newdate2 = date2.getFullYear() + '/' + '0' + (date2.getMonth() + 1) + '/' + date2.getDate();
      console.info(newdate2);
    } else if (date2.getDate() < 10) {
      var newdate2 = date2.getFullYear() + '/' + (date2.getMonth() + 1) + '/' + '0' + date2.getDate();
      console.info(newdate2);
    } else {
      var newdate2 = date2.getFullYear() + '/' + (date2.getMonth() + 1) + '/' + date2.getDate();
      console.info(newdate2);
    }

    this.reporteservice.insert_semana(newdate, newdate2, this.nombre).subscribe(result => {
      this.bailar = result;
      console.log(result);
      if (this.bailar.resultado == "OK") {
        alert("Agregado exitosamente");
        this.tabla();
      }

    });


  }

  tabla() {
    this.reporteservice.semanas().subscribe(result => this.bailar2 = result);
  }
  seleccione(idsemana) {
    this.reporteservice.seleccionados(idsemana).subscribe(result => this.datos = result[0]);
  }
  lista(idsemana) {
    console.log(idsemana);
    this.reporteservice.lista(idsemana).subscribe(result => this.bailar3 = result);
  }
  editar() {
    this.reporteservice.editar(this.datos).subscribe(result => {
      if (result['resultado'] == 'OK') {
        alert(result['mensaje']);
        this.tabla();
      }
    });

  }
  activar(){
    this.mostrar1=true;
    this.mostrar2=true;
    alert("Dio de alta exitosamente");
  }
  baja(){
    this.mostrar1=false;
    this.mostrar2=false;
    alert("Dio de baja exitosamente");
  }

}


