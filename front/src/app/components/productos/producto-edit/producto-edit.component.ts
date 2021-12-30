import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';
import { GLOBAL } from 'src/app/services/GLOBAL';

interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  public producto:any;
  public id: any;
  public categorias: any;
  public url;
  public file :any;
  public imgSelect : any;
  public success_message: any;
  public error_message: any;
  public stock: any;

  constructor(
    private _route : ActivatedRoute,
    private _productoService : ProductoService
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit() {

    this._route.params.subscribe(params=>{
      this.id = params['id'];
      this._productoService.get_producto(this.id).subscribe(
        response=>{
          this.producto = response.cama;

          this._productoService.get_categorias().subscribe(
            response=>{
              this.categorias = response.categorias;
              console.log(this.categorias);

            },
            error=>{

            }
          );


        },
        error=>{

        }
      )
    });

  }

  success_alert(){
    this.success_message = '';
   }

   error_alert(){
     this.error_message = '';
    }

  imgSelected(event: any){
    if(event.target.files  && event.target.files[0]){
        this.file = <File>event.target.files[0];

        const reader = new FileReader();
        reader.onload = e => this.imgSelect= reader.result;
        reader.readAsDataURL(this.file);
    }
  }

  onSubmit(productoForm: { valid: any; value: { nombre: any; unidad_venta: any; precio_compra: any; precio_venta: any;stock: any; idcategoria: any;  }; }){
    if(productoForm.valid){

      this._productoService.update_producto({
        _id: this.id,
        nombre: productoForm.value.nombre,
        imagen: this.file,
        idcategoria: productoForm.value.idcategoria,
        img_name : this.producto.imagen,
      }).subscribe(
        response=>{
          console.log(response);
          this.success_message = 'Se actualizó el producto correctamente';
        },
        error=>{

        }
      );

    }else{
      this.error_message = 'Complete correctamente el formulario';
    }
  }


}
