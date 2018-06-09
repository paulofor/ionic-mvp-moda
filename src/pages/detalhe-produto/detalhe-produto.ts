import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Produto } from '../../app/shared/sdk/models/Produto';
import { ProdutoApi } from '../../app/shared/sdk/services/custom/Produto';
import { Pedido } from '../../app/shared/sdk/models/Pedido';
import { PedidoApi } from '../../app/shared/sdk/services/custom/Pedido';
import { UsuarioAppApi } from '../../app/shared/sdk/services/custom/UsuarioApp';
import { ItemPedido } from '../../app/shared/sdk';

/**
 * Generated class for the DetalheProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-produto',
  templateUrl: 'detalhe-produto.html',
})
export class DetalheProdutoPage {

  produto: Produto;
  pedido: Pedido;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController, private usuarioSrv: UsuarioAppApi,
    private pedidoSrv: PedidoApi) {
    
  }

  ngOnInit() {
    this.produto = this.navParams.get('item');
    this.recuperaPedido();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheProdutoPage');
  }

  adicionaProduto() {
    let itemPedido: ItemPedido = new ItemPedido();
    itemPedido.pedidoId = this.pedido.id;
    itemPedido.produtoId = this.produto.id;
    itemPedido.data_inclusao = new Date();
    this.pedidoSrv.createItemPedidos(this.pedido.id, itemPedido)
      .subscribe((result) => {
        if (result) {
          this.toastCtrl.create({
            message: 'Produto adicionando ao carrinho',
            position: 'bottom',
            duration: 2500
          }).present();
        }
      })
  }

  recuperaPedido() {
    this.usuarioSrv.getPedidos(1)
      .subscribe((valor: Pedido[]) => {
        this.pedido = valor[0];
        console.log('Pedido:' + JSON.stringify(this.pedido));
      })
  }

}
