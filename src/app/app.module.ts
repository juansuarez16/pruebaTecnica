  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { NavigationComponent } from './components/navigation/navigation.component';
  import { CatalogoComponent } from './components/catalogo/catalogo.component';
  import { HttpClient } from 'selenium-webdriver/http';
  import { HttpClientModule } from '@angular/common/http';
  import { PedidoComponent } from './components/pedido/pedido.component';
  import { CRUDService } from 'src/app/service/crud.service';
  import { ListaPedidosComponent } from './components/lista-pedidos/lista-pedidos.component';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { DatePipe } from '@angular/common';

  @NgModule({
    declarations: [
      AppComponent,
      NavigationComponent,
      CatalogoComponent,
      PedidoComponent,
      ListaPedidosComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
    ],
    providers: [CRUDService, DatePipe],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
