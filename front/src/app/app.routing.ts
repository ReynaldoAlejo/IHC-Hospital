
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
 import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserIndexComponent } from './components/users/user-index/user-index.component';
import { UserCreateComponent } from './components/users/user-create/user-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { ClienteIndexComponent } from './components/clientes/cliente-index/cliente-index.component';
import { ClienteEditComponent } from './components/clientes/cliente-edit/cliente-edit.component';
import { ClienteCreateComponent } from './components/clientes/cliente-create/cliente-create.component';
import { ProveedorIndexComponent } from './components/proveedores/proveedor-index/proveedor-index.component';
import { ProveedorCreateComponent } from './components/proveedores/proveedor-create/proveedor-create.component';
import { ProveedorEditComponent } from './components/proveedores/proveedor-edit/proveedor-edit.component';
import { ProductoIndexComponent } from './components/productos/producto-index/producto-index.component';
import { ProductoCreateComponent } from './components/productos/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/productos/producto-edit/producto-edit.component';
import { PedidoIndexComponent } from './components/pedidos/pedido-index/pedido-index.component';
import { PedidoCreateComponent } from './components/pedidos/pedido-create/pedido-create.component';
import { PedidoDetalleComponent } from './components/pedidos/pedido-detalle/pedido-detalle.component';
import { VentaIndexComponent } from './components/ventas/venta-index/venta-index.component';
import { VentaCreateComponent } from './components/ventas/venta-create/venta-create.component';
import { VentaDetalleComponent } from './components/ventas/venta-detalle/venta-detalle.component';
import { EntregaIndexComponent } from './components/entregas/entrega-index/entrega-index.component';
import { EntregaCreateComponent } from './components/entregas/entrega-create/entrega-create.component';
import { EntregaDetalleComponent } from './components/entregas/entrega-detalle/entrega-detalle.component';

import { DoctorIndexComponent } from './components/doctores/doctor-index/doctor-index.component';
import { DoctorCreateComponent } from './components/doctores/doctor-create/doctor-create.component';
import { DoctorEditComponent } from './components/doctores/doctor-edit/doctor-edit.component';

import { CitasIndexComponent } from './components/citas/citas-index/citas-index.component';

import { CitasCreateComponent } from './components/citas/citas-create/citas-create.component';

import { CitasEditComponent } from './components/citas/citas-edit/citas-edit.component';
const appRoute:Routes =[
     {path:'', component:LoginComponent},
     {path:'dashboard', component:DashboardComponent},
     {path:'usuarios',component:UserIndexComponent},
     {path:'usuarios/registrar', component:UserCreateComponent},
     {path:'usuario/editar/:id',component:UserEditComponent},
     {path: 'clientes', component: ClienteIndexComponent},
     {path: 'cliente/registrar', component: ClienteCreateComponent},
     {path: 'cliente/editar/:id', component: ClienteEditComponent},
     {path: 'proveedores', component: ProveedorIndexComponent},
     {path: 'proveedor/registrar', component: ProveedorCreateComponent },
     {path: 'proveedor/editar/:id', component: ProveedorEditComponent},
     {path: 'productos', component: ProductoIndexComponent},
     {path: 'producto/registrar', component: ProductoCreateComponent },
     {path: 'producto/editar/:id', component: ProductoEditComponent},
     {path: 'pedidos', component: PedidoIndexComponent },
     {path: 'pedido/registrar', component: PedidoCreateComponent },
     {path: 'pedido/:id', component: PedidoDetalleComponent },
     {path:'ventas',component:VentaIndexComponent},
     {path:'venta/registrar',component:VentaCreateComponent},
     {path:'venta/:id',component:VentaDetalleComponent},
     {path:'entregas',component:EntregaIndexComponent},
     {path:'entrega/registrar',component:EntregaCreateComponent},
     {path:'entrega/:id', component:EntregaDetalleComponent},
     {path:'doctores',component:DoctorIndexComponent},
     {path:'doctor/registrar',component:DoctorCreateComponent},
     {path: 'doctor/editar/:id', component: DoctorEditComponent},
     {path:'citas',component:CitasIndexComponent},
     {path:'cita/registrar',component:CitasCreateComponent},
     {path: 'cita/editar/:id', component: CitasEditComponent},

]

export const appRoutingProviders: any[]=[];
export const routing : ModuleWithProviders<any> =RouterModule.forRoot(appRoute);
