import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { daysInMonth } from 'ngx-bootstrap/chronos/units/month';
@Injectable({
  providedIn: 'root'
})
export class SeleccionService {

  constructor(public _http: HttpClient) { }
  getseleccion(grupo: string, carrera: string, turno: string) {
    return this._http.post('http://localhost/API-MIKE/mostrar_seleccion.php', { 'grupo': grupo, 'carrera': carrera, 'turno': turno });
  }
  login(matricula: string, pass: string ) {
    return this._http.post('http://localhost/API-MIKE/login.php', { 'matricula': matricula, 'pass': pass });
  }
  getdatossesion(matricula: string) {
    return this._http.post('http://localhost/API-MIKE/sal.php', { 'matricula': matricula});
  }
  getsemanas(matricula: string) {
    return this._http.post('http://localhost/API-MIKE/prueba.php',{ 'matricula': matricula});
  }
  getsemanaspendientes(matricula: string) {
    return this._http.post('http://localhost/API-MIKE/endienes.php',{ 'matricula': matricula});
  }
  getdatossesion2(matricula: string) {
    return this._http.post('http://localhost/API-MIKE/sal2.php', { 'matricula': matricula});
  }
  nombresesion(matricula:string){
    return this._http.post('http://localhost/API-MIKE/nombresesion.php', { 'matricula': matricula});
  }
  getprofesor(matricula:string){
    return this._http.post('http://localhost/API-MIKE/getprofesor.php', {'matricula': matricula});
  }
  getmateriasxprofe(grupo: string){
    return this._http.post('http://localhost/API-MIKE/getmateriasxprofe.php', { 'grupo': grupo});
  }
  getdatosMaestro(matricula:string){
    return this._http.post('http://localhost/API-MIKE/getdatosMaestro.php', { 'matricula': matricula});
  }
  getAsistencias(semana:string, profesor:string, grupo:string){
    return this._http.post('http://localhost/API-MIKE/consulta_asistencias.php', { 'semana': semana, 'profesor': profesor, 'grupo': grupo});
  }

  insert_semana(fechaInicio: string, fechaFin: string, nom_semana: string){
    return this._http.post('http://localhost/API-MIKE/insert_semana.php', { 'fechaInicio': fechaInicio, 'fechaFin': fechaFin, 'nom_semana': nom_semana});
  }
  semanas(){
    return this._http.get('http://localhost/API-MIKE/semanas.php');
  }
  seleccionados(idsemana: string){
    return this._http.post('http://localhost/API-MIKE/selecion_semana.php', { 'idsemana': idsemana});
  }
  editar(bailame){
    return this._http.post('http://localhost/API-MIKE/editar.php', JSON.stringify(bailame));
  }
  lista(idsemana: string){
    return this._http.post('http://localhost/API-MIKE/lista.php', { 'idsemana': idsemana});
  }
  registrar_asis(bailar2: any){
    
    return this._http.post('http://localhost/API-MIKE/registro_asistencias.php', bailar2);
  }
  registrar_datosgenerales(matricula:string,idsemana:string){
    
    return this._http.post('http://localhost/API-MIKE/registrar_datosgenerales.php',{'matricula': matricula,'idsemana':idsemana} );
  }
  getidgrupo(grupo:string){
    return this._http.post('http://localhost/API-MIKE/getidgrupo.php',{'grupo':grupo} );
  }
  getidsemana(nomsemana:string){
    return this._http.post('http://localhost/API-MIKE/getidsemana.php',{'nomsemana':nomsemana} );
  }
  getprofexsemana(semana:string, profesor:string){
    return this._http.post('http://localhost/API-MIKE/getsemanaprofe.php',{'semana':semana, 'profesor':profesor } );
  }
  getxsemana(semana:string){
    return this._http.post('http://localhost/API-MIKE/getfiltroXsemana.php',{'semana':semana } );
  }
  getxdia(dia:string, profesor:string, semana:string){
    return this._http.post('http://localhost/API-MIKE/getdia.php',{'dia':dia, 'semana':semana, 'profesor':profesor} );
  }

}
