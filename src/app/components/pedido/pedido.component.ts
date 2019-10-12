import { Component, OnInit } from '@angular/core';import * as M from 'node_modules/materialize-css/dist/js/materialize.min.js';
import { CRUDService } from 'src/app/service/crud.service';
import { NgForm } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PedidoInter } from 'src/app/models/pedido';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  pedidos: PedidoInter;
  
  constructor(  public pedidoService :CRUDService,
                public pipeDate: DatePipe) { 
    }

  ngOnInit() {
    this.picker();
    this.select();
  }

  picker() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems);
  };

  select() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  };
  

  guardarDatospedido(form: NgForm){
    console.log(form.value);
  }
}
