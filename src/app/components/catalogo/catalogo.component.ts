import { Component, OnInit } from '@angular/core';

// import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';
import { CRUDService } from 'src/app/service/crud.service';
import { ProductosInter } from 'src/app/models/productos';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
 productos:ProductosInter[];
  constructor(private ProductoService:CRUDService) {
    
   }

  ngOnInit() {

    // this.Materialbox();
    this.Productos();
  }

  // //  Materialbox() {
  //   var elems = document.querySelectorAll('.materialboxed');
  //   var instances = M.Materialbox.init(elems);
  // };


  Productos(){
  
 this.ProductoService.getProducto().subscribe(data =>{
this.productos = data;
  console.log(this.productos);

 })

  }

  guardarPedido(id: number, producto: ProductosInter) {
    for(let i = 0; i < this.productos.length; i++){
      if(id === producto.idProducto) {
        localStorage.setItem('producto', JSON.stringify(producto));
      } else {
        return;
      }
    }
  }
}

