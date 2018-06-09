import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto';
import { PedidoPage } from '../pedido/pedido';

import { Produto } from '../../app/shared/sdk/models/Produto';
import { ProdutoApi } from '../../app/shared/sdk/services/custom/Produto';
import { PedidoApi } from '../../app/shared/sdk/services/custom/Pedido';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos: Produto[];
  total: number;

  constructor(public navCtrl: NavController, private servico: ProdutoApi, private pedidoSrv: PedidoApi) {

  }

  ionViewWillEnter() {
    this.carregaQtdePedido();
  }

  ngOnInit() {
    this.carregaListaProduto();
  }

  carregaListaProduto() {
    this.servico.find()
      .subscribe((valor: Produto[]) => {
        console.log('Lista: ' + JSON.stringify(valor));
        this.produtos = valor;
      })
  }
  carregaQtdePedido() {
    this.pedidoSrv.countItemPedidos(1)
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
