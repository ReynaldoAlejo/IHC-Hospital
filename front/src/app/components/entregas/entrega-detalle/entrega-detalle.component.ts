import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntregaService } from 'src/app/services/entrega.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-entrega-detalle',
  templateUrl: './entrega-detalle.component.html',
  styleUrls: ['./entrega-detalle.component.css']
})
export class EntregaDetalleComponent implements OnInit {

  public data_detalle : Array<any> = [];
  public id: any;
  public idp: any;
  public pedido: any = {
    iduser: '',
    idprovedor: ''
  };
  public detalle_pedido: any;
  public entrega: any = {
    iduser: '',
    idpedido: ''
  };
  public detalle_entrega: any;
  public identity;
  public estado: any;
  constructor(
    private _route: ActivatedRoute,
    private _pedidoService: PedidoService,
    private _entregaService: EntregaService,
    private _userService: UserService,
    private _router: Router
  ) {
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {
    if (this.identity) {

      this._route.params.subscribe(params => {
        this.id = params['id'];

        this._entregaService.data_entrega(this.id).subscribe(
          response => {
            this.entrega = response.data.entrega;
            this.detalle_entrega = response.data.detalles;
            this._pedidoService.data_pedido(this.entrega.idpedido._id).subscribe(
              response => {
                this.pedido = response.data.pedido;
                this.detalle_pedido = response.data.detalles;

                /* if (parseInt(this.detalle_pedido.cantidad) == parseInt(this.detalle_entrega.cantidad)) {
                  this.estado = 'completa';
                } else {
                  this.estado = 'Incompleta';
                } */

                
                  /* for (let i=0 ;i<=3;i=i+1) {
                    if (parseInt(this.detalle_pedido[i].cantidad) === parseInt(this.detalle_entrega[i].cantidad)) {
                      this.estado = 'completa';
                    } else {
                      this.estado = 'Incompleta';
                    }
                  } */
                  
                  
                
              },
              error => {

              }
            );


          },
          error => {

          }

        );

      });

    } else {
      this._router.navigate(['']);
    }

  }
  ver(detalle_pedido:any){
    if (parseInt(detalle_pedido.cantidad) == parseInt(this.detalle_entrega.cantidad)) {
      this.estado = 'completa';
    } else {
      this.estado = 'Incompleta';
    }
  }

}

