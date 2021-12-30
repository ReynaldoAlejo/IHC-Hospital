import { Component, OnInit } from '@angular/core';
import { User } from "../../models/User";

import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public token: any;
  public identity: any;
  public data_error:any;
 
  constructor(
    private _userService : UserService,
    private _router: Router
  ) {
    this.user = new User('','','','','','','','');
    this.identity = this._userService.getIdentity();

   }

  ngOnInit(): void {
    if(this.identity){
      this._router.navigate(['usuarios']);
    }
  }

  close_alert(){
    this.data_error='';
  }

  login(loginForm: NgForm){
    if (loginForm.valid) {
        this._userService.login(this.user,true).subscribe(
          response=>{ 
            
            this.token = response.jwt;
            localStorage.setItem('token',this.token);
            this._userService.login(this.user,true).subscribe(
              response=>{
                localStorage.setItem('identity',JSON.stringify(response.user));
                
                
                  this._router.navigate(['productos']);
                
              },
              error=>{

              }
            );
          },
          error=>{

            this.data_error=  error.error.message;
          }
        );
    } else {
      
    }
  }

}
