import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente-index',
  templateUrl: './cliente-index.component.html',
  styleUrls: ['./cliente-index.component.css']
})
export class ClienteIndexComponent implements OnInit {

  public clientes:any;
  public p:number | undefined;

  constructor(
    private _clienteService: ClienteService
  ) { }

  ngOnInit() {
    this._clienteService.get_clientes().subscribe(
      response=>{
        this.clientes = response.pacientes;
        console.log(response);

      },
      error=>{

      }
    )
  }

   eliminar(id: any){
    Swal.fire({
      title: '¿Está seguro de eliminarlo?',
      text: "Eliminación!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí,eliminar',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Registro eliminado!',
          'Se elimino correctamente.',
          'success'
        )

        this._clienteService.delete_cliente(id).subscribe(
          resposen=>{
            this._clienteService.get_clientes().subscribe(
              response=>{
                this.clientes = response.pacientes;
              },
              error=>{

              }
            );
          },
          erro=>{

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

}
