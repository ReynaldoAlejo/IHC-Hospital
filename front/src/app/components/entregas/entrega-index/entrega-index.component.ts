import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntregaService } from 'src/app/services/entrega.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-entrega-index',
  templateUrl: './entrega-index.component.html',
  styleUrls: ['./entrega-index.component.css']
})
export class EntregaIndexComponent implements OnInit {

  public identity;
  public entregas: any;
  public p:any;
  public pedidos: any;
  

  constructor(
    private _userService : UserService,
    private _entregasService : EntregaService,
    private _pedidosService : PedidoService,
    private _router : Router,
  ) {
    this.identity = this._userService.getIdentity();
   }

  ngOnInit(): void {
    if(this.identity){
      //USUARIO AUTENTICADO
      
      this._entregasService.get_entrega().subscribe(
        response=>{
          this.entregas = response.entregas;
          console.log(this.entregas);
          
          
        },
        error=>{

        }
      );
        
    }else{
      this._router.navigate(['']);
    }
  }

}
