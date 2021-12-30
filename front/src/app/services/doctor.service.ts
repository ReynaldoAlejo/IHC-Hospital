import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GLOBAL } from './GLOBAL';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  public url;

  constructor(
    private _http: HttpClient,
  ) {
    this.url = GLOBAL.url;
  }

  get_doctores(filtro: any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'doctores'+filtro,{headers:headers});
  }

  get_especialidades():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'especialidades',{headers:headers});
  }

  insert_doctor(data:any){
    const fd = new FormData();
    fd.append('nombre',data.nombre);
    fd.append('apellido',data.apellido);
    fd.append('imagen',data.imagen);
    fd.append('exp',data.exp);
    fd.append('idespecialidad',data.idespecialidad);
    return this._http.post(this.url + 'doctor/registrar',fd);
  }


  get_doctor(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'doctor/'+id,{headers:headers});
  }

  update_doctor(data:any){
    const fd = new FormData();
    fd.append('nombre',data.nombre);
    fd.append('apellido',data.apellido);
    fd.append('imagen',data.imagen);
    fd.append('exp',data.exp);
    fd.append('idespecialidad',data.idespecialidad);

    return this._http.put(this.url + 'doctor/editar/'+data._id+'/'+data.img_name,fd);
  }

  insert_especialidad(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'especialidad/registrar',data,{headers:headers});
  }

  delete_doctor(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'doctor/'+id,{headers:headers});
  }

  /*stock_producto(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'cama/stock/'+data._id,data,{headers:headers});
  }*/
}
