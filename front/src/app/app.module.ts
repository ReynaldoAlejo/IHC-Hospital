import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ClienteIndexComponent } from './components/clientes/cliente-index/cliente-index.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { ProveedorIndexComponent } from './components/proveedores/proveedor-index/proveedor-index.component';
import { ProveedorEditComponent } from './components/proveedores/proveedor-edit/proveedor-edit.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { PedidoIndexComponent } from './components/pedidos/pedido-index/pedido-index.component';
import { PedidoCreateComponent } from './components/pedidos/pedido-create/pedido-create.component';
import { PedidoDetalleComponent } from './components/pedidos/pedido-detalle/pedido-detalle.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { VentaIndexComponent } from './components/ventas/venta-index/venta-index.component';
import { VentaCreateComponent } from './components/ventas/venta-create/venta-create.component';
import { VentaDetalleComponent } from './components/ventas/venta-detalle/venta-detalle.component';
import { EntregaIndexComponent } from './components/entregas/entrega-index/entrega-index.component';
import { EntregaDetalleComponent } from './components/entregas/entrega-detalle/entrega-detalle.component';
import { EntregaCreateComponent } from './components/entregas/entrega-create/entrega-create.component';

import { NgxPrintModule } from 'ngx-print';
import { DoctorIndexComponent } from './components/doctores/doctor-index/doctor-index.component';
import { DoctorCreateComponent } from './components/doctores/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './components/doctores/doctor-edit/doctor-edit.component';
import { CitasIndexComponent } from './components/citas/citas-index/citas-index.component';
import { CitasCreateComponent } from './components/citas/citas-create/citas-create.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    UserIndexComponent,
    UserCreateComponent,
    UserEditComponent,
    ClienteCreateComponent,
    ClienteIndexComponent,
    ClienteEditComponent,
    ProveedorIndexComponent,
    ProveedorEditComponent,
    ProveedorCreateComponent,
    ProductoIndexComponent,
    ProductoCreateComponent,
    ProductoEditComponent,
    PedidoIndexComponent,
    PedidoCreateComponent,
    PedidoDetalleComponent,
    VentaIndexComponent,
    VentaCreateComponent,
    VentaDetalleComponent,
    EntregaIndexComponent,
    EntregaDetalleComponent,
    EntregaCreateComponent,
    DoctorIndexComponent,
    DoctorCreateComponent,
    DoctorEditComponent,
    CitasIndexComponent,
    CitasCreateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    routing,
    NgxPaginationModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
