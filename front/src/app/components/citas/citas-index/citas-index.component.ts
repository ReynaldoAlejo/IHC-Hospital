import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaService } from 'src/app/services/cita.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citas-index',
  templateUrl: './citas-index.component.html',
  styleUrls: ['./citas-index.component.css']
})
export class CitasIndexComponent implements OnInit {
  public success_message: any;
  public identity:any;
  public clientes : any;
  public venta : any = {
    idcliente : '',
  };
  public producto_id: any;
  public productos: any;
  public doctores: any;
  public especialidades: any;
  public producto : any = {
    stock :'--|--',
  }
  public total = 0;
  public citas:any;
  public data_detalle : Array<any> = [];
  public detalle : any = {
    idproducto : ''
  };
  public error_message: any;
  public p: number | undefined;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _citaService : CitaService,
  ) {
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    if(this.identity){

      this._citaService.get_citas().subscribe(
        response=>{
          this.citas = response.citas;
          console.log(response);
        },
        error=>{

        }
      );
      this._citaService.get_pacientes().subscribe(
        response=>{
          this.clientes = response.pacientes;
        },
        error=>{

        }
      );



      this._citaService.get_doctores().subscribe(
        response =>{

          this.doctores = response.doctores;
        },
        error=>{

        }
      );

      this._citaService.get_especialidades().subscribe(
        response =>{

          this.especialidades = response.especialidad;
        },
        error=>{

        }
      );
    }else{
      this._router.navigate(['']);
    }
  }

  //tomarlo en cuenta para lo del stock de la cama
  /*get_data_producto(id:any){
    this._productoService.get_producto(id).subscribe(
      response=>{
        this.producto = response.producto;
      },
      error=>{

      }
    );
  }*/

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

         this._citaService.delete_cita(id).subscribe(
           response=>{
             this._citaService.get_citas().subscribe(
               response=>{
                 this.citas = response.citas;
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

  /*save_detalle(detalleForm: { valid: any; value: { cantidad: any; idproducto: any; }; }){
    if(detalleForm.valid){
        if(detalleForm.value.cantidad <= this.producto.stock){
          this.data_detalle.push({
            idproducto : detalleForm.value.idproducto,
            cantidad: detalleForm.value.cantidad,
            producto: this.producto.nombre,
            precio_venta : this.producto.precio_venta
          });

          this.detalle = new DetalleVenta('','',0);
          this.producto.stock = '--|--',


          this.total = this.total + (parseInt(this.producto.precio_venta) * parseInt(detalleForm.value.cantidad));
          console.log( this.total);
        }
        else{
          this.error_message = 'No existe el suficiente stock para la venta';
        }
    }else{
      console.log("error");
    }
  }*/

  /*eliminar(idx: number,precio_venta: string,cantidad: string){
    this.data_detalle.splice(idx,1);
    this.total=this.total - (parseInt(precio_venta)*parseInt(cantidad));
  }

  onSubmit(ventaForm: { valid: any; value: { idcliente: string; }; }){
    if(ventaForm.valid){
      if(ventaForm.value.idcliente != ''){
        let data = {
          idcliente: ventaForm.value.idcliente,
          iduser: this.identity._id,
          detalles: this.data_detalle,
          monto:this.total,
        }

        this._ventaService.save_data(data).subscribe(
          response =>{
            this._router.navigate(['ventas']);
          },
          error=>{
            console.log(error);
          }
        );

      }else{
        console.log('error');
      }

    }else{
      console.log('error');

    }
  }*/

}
