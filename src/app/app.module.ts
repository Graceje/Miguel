import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { LlenadoComponent } from './llenado/llenado.component';
import { NavComponent } from './nav/nav.component';
import { Nav2Component } from './nav2/nav2.component';
import { Routes, RouterModule} from '@angular/router';
import { PrimeraComponent } from './primera/primera.component';
import { InicioComponent } from './inicio/inicio.component';
import { FechasComponent } from './fechas/fechas.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RegistroMaestroComponent } from './registro-maestro/registro-maestro.component';
import { RegistroChecadorComponent } from './registro-checador/registro-checador.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChecarAsistenciaComponent } from './checar-asistencia/checar-asistencia.component';
import { FiltradoComponent } from './filtrado/filtrado.component';

const routes: Routes =[
   { path: '', component:Nav2Component},
   { path: 'llenado', component: LlenadoComponent},
   { path: 'primera', component: PrimeraComponent},
   { path: 'inicio', component: InicioComponent},
   { path: 'registro-checador', component: RegistroChecadorComponent},
   { path: 'registro-maestro', component: RegistroMaestroComponent},
   { path: 'fechas', component: FechasComponent},
   { path: 'ChecarAsistencia', component: ChecarAsistenciaComponent},
   { path: 'Filtrado', component: FiltradoComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    LlenadoComponent,
    NavComponent,
    Nav2Component,
    PrimeraComponent,
    RegistroMaestroComponent,
    RegistroChecadorComponent,
    InicioComponent,
    FechasComponent,
    ChecarAsistenciaComponent,
    FiltradoComponent
 
  ],
  imports: [
    BrowserModule,
    BsDatepickerModule.forRoot(),
    DataTablesModule,
    RouterModule.forRoot(routes),
    HttpModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
