import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public id: any;
  public user: any;
  public success_message: any;
  public password: any;
  public identity:any;

  constructor(
    private _route: ActivatedRoute,
    private _userService : UserService,
    private _router : Router,
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {

   
        

    if(this.identity.role == 'Administración'){
      this._route.params.subscribe((params)=>{
        this.id = params['id'];
        
        this._userService.get_user(this.id).subscribe(
          (          response: { user: any; })=>{
            console.log(response);
            this.user = response.user;
          },
          (          error: any)=>{
  
          }
        )
  
        
      });
    }else{
      this._router.navigate(['dashboard']);
    }

  }

  success_alert(){
    this.success_message = '';
  }

  
  onSubmit(userForm:NgForm){
    if(userForm.valid){
      this._userService.editar({
        _id: this.id,
        nombres:userForm.value.nombres,
        apellidos:userForm.value.apellidos,
        email:userForm.value.email,
        password:userForm.value.password,
        dni:userForm.value.dni,
        telefono:userForm.value.telefono,
        role: userForm.value.role,
      }).subscribe(
        response=>{
          this.success_message = 'Se actualizo los datos usuario';
          console.log(response);
      
        },
        error=>{

        }
      );
    }
  }

}
