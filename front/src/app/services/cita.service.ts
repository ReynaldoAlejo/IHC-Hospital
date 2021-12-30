import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  public url;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  get_citas():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'citas',{headers:headers});
  }

  get_especialidades():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'especialidades',{headers:headers});
  }

  get_doctores():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'doctores',{headers:headers});
  }

  get_pacientes():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'pacientes',{headers:headers});
  }

  insert_doctor(data:any){
    const fd = new FormData();
    fd.append('idpaciente',data.idpaciente);
    fd.append('iduser',data.iduser);
    fd.append('iddoctor',data.iddoctor);
    fd.append('idespecialidad',data.idespecialidad);
    fd.append('fecha',data.fecha);
    fd.append('hora',data.hora);
    fd.append('detalle',data.detalle);
    return this._http.post(this.url + 'doctor/registrar',fd);
  }


  get_doctor(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'cita/'+id,{headers:headers});
  }

  update_doctor(data:any){
    const fd = new FormData();
    fd.append('idpaciente',data.idpaciente);
    fd.append('iduser',data.iduser);
    fd.append('iddoctor',data.iddoctor);
    fd.append('idespecialidad',data.idespecialidad);
    fd.append('fecha',data.fecha);
    fd.append('hora',data.hora);
    fd.append('detalle',data.detalle);

    return this._http.put(this.url + 'doctor/editar/'+data._id+'/'+data.img_name,fd);
  }

  insert_especialidad(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'especialidad/registrar',data,{headers:headers});
  }

  delete_cita(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'cita/'+id,{headers:headers});
  }
}
