import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-edit',
  templateUrl: './proveedor-edit.component.html',
  styleUrls: ['./proveedor-edit.component.css']
})
export class ProveedorEditComponent implements OnInit {

  public id: any;
  public proveedor : any = {};
  public success_message:any;
  constructor(
    private _route : ActivatedRoute,
    private _proveedorService :ProveedorService,
    private _router : Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];

        this._proveedorService.get_proveedor(this.id).subscribe(
          response =>{
            console.log(response);
            this.proveedor = response.especialidad;
          },
          error=>{

          }
        );
      }
    );
  }
  close_alert(){
    this.success_message = '';
  }

  onSubmit(proveedorForm:NgForm){
    if(proveedorForm.valid){

      this._proveedorService.update_proveedor({
        _id: this.id,
        nombre: proveedorForm.value.nombre,
        descripcion: proveedorForm.value.descripcion,

      }).subscribe(
        response=>{
          this.success_message = 'Se actualizo los datos del cliente';
          this._router.navigate(['proveedores']);
        },
        error=>{

        }
      );

    }
  }



}
