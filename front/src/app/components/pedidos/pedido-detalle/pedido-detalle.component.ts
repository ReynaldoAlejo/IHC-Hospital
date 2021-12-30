import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pedido-detalle',
  templateUrl: './pedido-detalle.component.html',
  styleUrls: ['./pedido-detalle.component.css']
})
export class PedidoDetalleComponent implements OnInit {

  public id:any;
  public pedido : any = {
    iduser: '',
    idprovedor: ''
  };
  public detalle_pedido:any;
  public identity;

  constructor(
    private _route : ActivatedRoute,
    private _pedidoService : PedidoService,
    private _userService : UserService,
    private _router : Router
  ) {
    this.identity =this._userService.getIdentity();
   }

  ngOnInit(): void {
    if(this.identity){
      this._route.params.subscribe(params=>{
        this.id = params['id'];
  
        this._pedidoService.data_pedido(this.id).subscribe(
          response=>{
            this.pedido = response.data.pedido;
            this.detalle_pedido = response.data.detalles;
          },
          error=>{
  
          }
        );
      });
    }else{
      this._router.navigate(['']);
    }

  }  
}

