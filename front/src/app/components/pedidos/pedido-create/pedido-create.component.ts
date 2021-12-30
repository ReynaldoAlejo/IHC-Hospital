import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetallePedido } from 'src/app/models/DetallePedido';
import { PedidoService } from 'src/app/services/pedido.service';
import { ProductoService } from 'src/app/services/producto.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-pedido-create',
  templateUrl: './pedido-create.component.html',
  styleUrls: ['./pedido-create.component.css']
})
export class PedidoCreateComponent implements OnInit {

  public identity:any;
  public proveedores : any;
  public pedido : any = {
    idproveedor : '',
  };
  public productos: any;
  public producto : any = {
    stock :'--|--',
  }
  public total = 0;

  public data_detalle : Array<any> = [];
  public detalle : any = {
    idproducto : ''
  };
  public error_message: any;
  constructor(
    private _userService:UserService,
    private _proveedorService:ProveedorService,
    private _productoService : ProductoService,
    private _router:Router,
    private _pedidoService : PedidoService,
  ) { 
    this.identity = this._userService.getIdentity();
  }

  ngOnInit(): void {

    if(this.identity){
      this._proveedorService.get_proveedores().subscribe(
        response=>{
          this.proveedores = response.proveedores;
        },
        error=>{

        }
      );

      this._productoService.get_productos('').subscribe(
        response =>{
  
          this.productos = response.productos;
        },
        error=>{
          
        }
      );
    }else{
      this._router.navigate(['']);
    }
  }
  get_data_producto(id:any){
    this._productoService.get_producto(id).subscribe(
      response=>{
        this.producto = response.producto;
      },  
      error=>{

      }
    );
  }

  close_alert(){
    this.error_message = '';
  }

  save_detalle(detalleForm: { valid: any; value: { cantidad: any; idproducto: any; }; }){
    if(detalleForm.valid){
        if(detalleForm.value.cantidad >0){
          this.data_detalle.push({
            idproducto : detalleForm.value.idproducto,
            cantidad: detalleForm.value.cantidad,
            producto: this.producto.nombre,
            precio_compra : this.producto.precio_compra
          });
  
          this.detalle = new DetallePedido('','',0);
          this.producto.stock = '--|--',
          

          this.total = this.total + (parseInt(this.producto.precio_compra) * parseInt(detalleForm.value.cantidad));
          console.log( this.total);
       }
         else{
          this.error_message = 'Por favor ingrese cantidades válidas';
        } 
    }else{
      console.log("error");
    }
  }

  eliminar(idx: number,precio_compra: string,cantidad: string){
    this.data_detalle.splice(idx,1);
    this.total=this.total - (parseInt(precio_compra)*parseInt(cantidad));
  }

  onSubmit(pedidoForm: { valid: any; value: { idproveedor: string; }; }){
    if(pedidoForm.valid){
      if(pedidoForm.value.idproveedor != ''){
        let data = {
          idproveedor: pedidoForm.value.idproveedor,
          iduser: this.identity._id,
          detalles: this.data_detalle
        }

        this._pedidoService.save_data(data).subscribe(
          response =>{
            this._router.navigate(['pedidos']);
          },
          error=>{
            console.log(error);
          }
        );
        
      }else{
        console.log('error');
      }
      
    }else{
      console.log('error');
      
    }
  }
}
