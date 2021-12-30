import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pedido-index',
  templateUrl: './pedido-index.component.html',
  styleUrls: ['./pedido-index.component.css']
})
export class PedidoIndexComponent implements OnInit {
  public identity;
  public pedidos: any;
  public p:any;
  constructor(
    private _userService : UserService,
    private _pedidoService : PedidoService,
    private _router : Router,
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit() {
    if(this.identity){
      //USUARIO AUTENTICADO
      this._pedidoService.get_pedidos().subscribe(
        response=>{
          this.pedidos = response.pedidos;
          console.log(this.pedidos);
          
        },
        error=>{

        }
      );
    }else{
      this._router.navigate(['']);
    }
  }

}
