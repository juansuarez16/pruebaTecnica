import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidoComponent } from './components/pedido/pedido.component';
import { CatalogoComponent } from './components/catalogo/catalogo.component';


const routes: Routes = [
{ path: '', redirectTo: 'catalogo', pathMatch: 'full'},
{ path: 'catalogo', component:CatalogoComponent },
{ path: 'pedido', component:PedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
