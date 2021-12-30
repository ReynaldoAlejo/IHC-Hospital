import { Injectable } from '@angular/core';
import { GLOBAL } from "./GLOBAL";
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  public url;
  constructor(
    private _http : HttpClient
  ) {
    this.url = GLOBAL.url;
  }
  get_proveedores():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'especialidades',{headers:headers});
  }

  insert_proveedor(data: any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'especialidad/registrar',data,{headers:headers});
  }

  get_proveedor(id: any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'especialidad/'+id,{headers:headers});
  }

  update_proveedor(data:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url+'especialidad/editar/'+data._id,data,{headers:headers});
  }

  delete_proveedor(id:any):Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url+'/especialidad/eliminar/'+id,{headers:headers});
  }

}
