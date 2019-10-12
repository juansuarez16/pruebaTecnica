import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductosInter } from '../models/productos';
import {PedidoInter} from '../models/pedido';
@Injectable({
  providedIn: 'root'
})


  export class CRUDService {

  pedidos:PedidoInter[];
  api= "https://fvwzxk56cg.execute-api.us-east-1.amazonaws.com/mock/productos";

    constructor(private http:HttpClient) { 

    }

    getProducto():Observable<ProductosInter[]>{
      return this.http.get<ProductosInter[]>(this.api);
    }

    getPedido(){

      return this.pedidos

    }

    AgregarPedido(pedidos:PedidoInter) {
      var pedido = localStorage.setItem('pedido', JSON.stringify(pedidos));
      var pedidoParse = JSON.parse(localStorage.getItem('pedido'));

      this.pedidos.push(pedidoParse);
    }

      borrarPedido(){
        
      }


    }
