import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Producto';
import { GLOBAL } from "../../services/GLOBAL";
import { ProductoService } from 'src/app/services/producto.service';
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import { VentaService } from 'src/app/services/venta.service';
import { Venta } from 'src/app/models/Venta';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { Proveedor } from 'src/app/models/Proveedor';
import { PedidoService } from 'src/app/services/pedido.service';
import { Pedido } from 'src/app/models/Pedido';
import { EntregaService } from 'src/app/services/entrega.service';
import { Entrega } from 'src/app/models/Entrega';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public url;
  public productos: Producto[] = [];
  public clientes: Cliente[] = [];
  public ventas: Venta[] = [];
  public proveedores: Proveedor[] = [];
  public pedidos: Pedido[] = [];
  public entregas: Entrega[] = [];

  constructor(
    private _router : Router,
    private ProductoService: ProductoService,
    private ClienteService: ClienteService,
    private VentaService: VentaService,
    private ProveedorService: ProveedorService,
    private PedidoService: PedidoService,
    private EntregaService: EntregaService,

  ) {
    this.url=GLOBAL.url;
  }

  ngOnInit(): void {
    this.get_productos();
    this.get_clientes();
    this.get_ventas();
    this.get_proveedores();
    this.get_pedidos();
    this.get_entregas();
  }

  async get_productos(){
    await this.ProductoService.get_productos('')
    .subscribe(
      response =>{
        this.productos = response.productos;
      },
      error=>{
      }
    );
  }

  async get_clientes(){
    await this.ClienteService.get_clientes()
    .subscribe(
      response =>{
        this.clientes = response.clientes;
      },
      error=>{
      }
    );
  }

  async get_ventas(){
    await this.VentaService.get_ventas()
    .subscribe(
      response =>{
        this.ventas = response.ventas;
      },
      error=>{
      }
    );
  }

  async get_proveedores(){
    await this.ProveedorService.get_proveedores()
    .subscribe(
      response =>{
        this.proveedores = response.proveedores;
      },
      error=>{
      }
    );
  }

  async get_pedidos(){
    await this.PedidoService.get_pedidos()
    .subscribe(
      response =>{
        this.pedidos = response.pedidos;
      },
      error=>{
      }
    );
  }

  async get_entregas(){
    await this.EntregaService.get_entrega()
    .subscribe(
      response =>{
        this.entregas = response.entregas;
      },
      error=>{
      }
    );
  }

}
