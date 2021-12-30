import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../../models/User';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  public user;
  public success_message:any;
  public identity: any;
  constructor(
    private _userService : UserService,
    private _router : Router,
  ) { 
    this.user = new User('','','','','','','','');
    this.identity = this._userService.getIdentity(); 
  }

  ngOnInit(): void {
    if(this.identity.role == 'Administración'){

    }else{
      this._router.navigate(['dashboard']);
    } 
  }
  success_alert(){
    this.success_message = '';
  }

  onSubmit(userForm:NgForm){
    if(userForm.valid){
      this._userService.registrar({
                password:userForm.value.password,
                nombres:userForm.value.nombres,
                apellidos:userForm.value.apellidos,
                email:userForm.value.email,
                dni:userForm.value.dni,
                telefono:userForm.value.telefono,
                role:userForm.value.role,

      }).subscribe(
        (        response: any)=>{
          this.user = new User('','','','','','','','');
          this.success_message = 'El usuario se registro con exito';
          console.log(response);
          
        },
        (        error: any)=>{
          console.log(<any>error);
          
        }
      ); 
    }
  }
}
