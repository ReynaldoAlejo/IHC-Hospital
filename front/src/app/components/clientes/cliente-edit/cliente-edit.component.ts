import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.css']
})
export class ClienteEditComponent implements OnInit {

  public id: any;
  public cliente : any = {};
  public success_message:any;

  constructor(
    private _route : ActivatedRoute,
    private _clienteService :ClienteService
  ) { }

  ngOnInit() {
    this._route.params.subscribe(
      params=>{
        this.id = params['id'];

        this._clienteService.get_cliente(this.id).subscribe(
          response =>{
            console.log(response);
            this.cliente = response.paciente;
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

  onSubmit(clienteForm:NgForm){
    if(clienteForm.valid){

      this._clienteService.update_cliente({
        _id: this.id,
        nombres: clienteForm.value.nombres,
        dni: clienteForm.value.dni,
        telefono: clienteForm.value.telefono,

      }).subscribe(
        response=>{
          this.success_message = 'Se actualizo los datos del cliente';
        },
        error=>{

        }
      );

    }
  }

}
