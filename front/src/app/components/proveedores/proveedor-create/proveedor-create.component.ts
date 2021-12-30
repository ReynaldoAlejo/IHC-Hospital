import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Proveedor } from 'src/app/models/Proveedor';
import { ProveedorService } from 'src/app/services/proveedor.service';

@Component({
  selector: 'app-proveedor-create',
  templateUrl: './proveedor-create.component.html',
  styleUrls: ['./proveedor-create.component.css']
})
export class ProveedorCreateComponent implements OnInit {

  public proveedor;
  constructor(
    private _proveedorService: ProveedorService,
    private _router : Router
  ) {
    this.proveedor = new Proveedor('','','');
  }

  ngOnInit(): void {
  }

  onSubmit(proveedorForm:NgForm){
    if(proveedorForm.valid){

      this._proveedorService.insert_proveedor({
        nombre: proveedorForm.value.nombre,
        descripcion: proveedorForm.value.descripcion
      }).subscribe(
        response=>{
          this._router.navigate(['proveedores']);

        },
        error=>{

        }
      );

    }
  }

}
