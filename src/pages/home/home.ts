import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto';
import { PedidoPage } from '../pedido/pedido';
import { Storage  } from '@ionic/storage';
import { Produto } from '../../app/shared/sdk/models/Produto';
import { ProdutoApi } from '../../app/shared/sdk/services/custom/Produto';
import { PedidoApi } from '../../app/shared/sdk/services/custom/Pedido';
import { UsuarioApp } from '../../app/shared/sdk/index';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos: Produto[];
  total: number;
  idPedido: number;
  //usuario: UsuarioApp;

  constructor(public navCtrl: NavController, private servico: ProdutoApi, 
              private storage: Storage, private pedidoSrv: PedidoApi) {

  }


  ionViewWillEnter() {
    this.obtemIdPedidoMemoria();
  }

  ngOnInit() {
    this.carregaListaProduto();
  }

  obtemIdPedidoMemoria() {
    this.storage.get('idPedido').then((id : number) => {
      console.log('IdPedido: ', id);
      this.idPedido = id;
      this.carregaQtdePedido();
    });
  }

  carregaListaProduto() {
    this.servico.find()
      .subscribe((valor: Produto[]) => {
        console.log('Lista: ' + JSON.stringify(valor));
        this.produtos = valor;
      })
  }
  carregaQtdePedido() {
    this.pedidoSrv.countItemPedidos(this.idPedido)
      .subscribe((quantidade) => {
        console.log('Quantidade carrinho: ', quantidade.count);
        this.total = quantidade.count;
      })
  }

  produtoSelecionado(event, produto) {
    this.navCtrl.push(DetalheProdutoPage, {
      item: produto,
    })
  }

  verCarrinho() {
    this.navCtrl.push(PedidoPage)
  }


}
