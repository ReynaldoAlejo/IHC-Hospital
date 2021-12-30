import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DoctorService } from 'src/app/services/doctor.service';
import { GLOBAL } from 'src/app/services/GLOBAL';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-index',
  templateUrl: './doctor-index.component.html',
  styleUrls: ['./doctor-index.component.css']
})
export class DoctorIndexComponent implements OnInit {

  public doctores: any;
  public url;
  public filter:any ;
  public especialidades: any;
  public titulo_cat: any;
  public descripcion_cat: any;
  public producto_stock: any;
  public producto_id: any;
  public p: number | undefined;
  public success_message: any;
  //public filtroText:any;

  constructor(
    private _doctorService : DoctorService,
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this._doctorService.get_doctores('').subscribe(
      response =>{
        this.doctores = response.doctores;
        console.log(response);

      },
      error=>{

      }
    );

    this._doctorService.get_especialidades().subscribe(
      response=>{
        this.especialidades = response.especialidad;
      },
      error=>{

      }
    );
  }
  search(searchForm:any){
    this._doctorService.get_doctores(searchForm.value.filter).subscribe(
      response =>{
        this.doctores = response.doctores;
      },
      error=>{

      }
    );


  }

  /* save_cat(categoriaForm:NgForm){
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
*/
  eliminar(id:any){
   Swal.fire({
      title: '¿Está seguro de eliminarlo?',
      text: "Eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí,eliminar!',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Registro eliminado!',
          'Se elimino correctamente.',
          'success'
        )

        this._doctorService.delete_doctor(id).subscribe(
          response=>{
            this._doctorService.get_doctores('').subscribe(
              response=>{
                this.doctores = response.doctores;
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
