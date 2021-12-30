import { Component, OnInit } from '@angular/core';
import { Cliente } from "../../../models/Cliente";
import { ClienteService } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  public cliente;

  constructor(
    private _clienteService: ClienteService,
    private _router : Router
  ) {
    this.cliente = new Cliente('','','','','','');
  }

  ngOnInit() {
  }

  onSubmit(clienteForm:NgForm){
    if(clienteForm.valid){

      this._clienteService.insert_cliente({
        nombre: clienteForm.value.nombre,
        apellido: clienteForm.value.apellido,
        dni: clienteForm.value.dni,
        telefono: clienteForm.value.telefono,
        direccion: clienteForm.value.direccion,
      }).subscribe(
        response=>{
          this._router.navigate(['clientes']);

        },
        error=>{

        }
      );

    }
  }
}
