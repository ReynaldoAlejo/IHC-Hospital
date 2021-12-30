import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Producto } from 'src/app/models/Producto';
import { GLOBAL } from 'src/app/services/GLOBAL';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2';
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-producto-index',
  templateUrl: './producto-index.component.html',
  styleUrls: ['./producto-index.component.css']
})
export class ProductoIndexComponent implements OnInit {

  public productos: any;
  public url;
  public filter:any ;
  public categorias: any;
  public titulo_cat: any;
  public descripcion_cat: any;
  public producto_stock: any;
  public producto_id: any;
  public p: number | undefined;
  public success_message: any;
  //public filtroText:any;

  constructor(
    private _productoService : ProductoService,
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this._productoService.get_productos('').subscribe(
      response =>{
        this.productos = response.camas;
        console.log(response);

      },
      error=>{

      }
    );

    this._productoService.get_categorias().subscribe(
      response=>{
        this.categorias = response.categorias;
      },
      error=>{

      }
    );
  }
  search(searchForm:any){
    this._productoService.get_productos(searchForm.value.filter).subscribe(
      response =>{
        this.productos = response.camas;
      },
      error=>{

      }
    );


  }

   save_cat(categoriaForm:NgForm){
     if(categoriaForm.valid){
      this._productoService.insert_categoria({
        titulo: categoriaForm.value.titulo_cat,
        descripcion: categoriaForm.value.descripcion_cat,
      }).subscribe(
        response=>{
          this._productoService.get_categorias().subscribe(
            response =>{
              this.categorias = response.categorias;
              $('#modal-save-categoria').modal('hide');
            },
            error=>{

            }
          );
        },
        error=>{

        }
      );

    }
  }

  eliminar(id:any){
   Swal.fire({
      title: 'Estas seguro de eliminarlo?',
      text: "Eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Registro eliminado!',
          'Se elimino correctamente.',
          'success'
        )

        this._productoService.delete_producto(id).subscribe(
          response=>{
            this._productoService.get_productos('').subscribe(
              response=>{
                this.productos = response.camas;
              }
              ,erro=>{

              }
            );
          }
          ,error=>{

          }
        );

      } else if (

        result.dismiss === Swal.DismissReason.cancel
      ) {
        Swal.fire(
          'Cancelado',
          'Se cancelo la solicitud :)',
          'error'
        )
      }
    })
  }

  get_id(id:any){
    this.producto_id = id;
  }

  close_alert(){
    this.success_message = '';
  }

  aumentar_stock(stockForm:NgForm){
    if(stockForm.valid){
     /*  if(this.producto_id){
        this._productoService.stock_producto({
          _id: this.producto_id,
          stock: stockForm.value.producto_stock,
        }).subscribe(
          response=>{
            this.success_message = 'Se aumento el stock correctamente';
            this._productoService.get_productos('').subscribe(
              response =>{
                this.productos = response.productos;
                $('.modal').modal('hide');
              }
              ,error=>{

              }
            );
          },
          error=>{
            console.log(error);

          }
        );
      } */

    }
  }

}
