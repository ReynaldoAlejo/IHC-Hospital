import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import { GLOBAL } from "../../../services/GLOBAL";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.css']
})
export class UserIndexComponent implements OnInit {

  public url;
  public usuarios: any;
  public identity:any;
  public p:number | undefined;
  constructor(
    private _userService : UserService,
    private _router : Router
  ) { 
    this.url=GLOBAL.url;
    this.identity = _userService.getIdentity();
  }

  ngOnInit(): void {
    if(this.identity.role === 'Administración'){
      this._userService.get_users().subscribe(
        response =>{
          console.log(response);
            this.usuarios = response.usuarios;
        },
        error=>{
  
        }
      );
    }else{
      this._router.navigate(['dashboard']);
    }
    
  }

  eliminar(id: any){
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

        this._userService.delete_usuario(id).subscribe(
          resposen=>{
            this._userService.get_users().subscribe(
              response=>{
                this.usuarios = response.usuarios;
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


