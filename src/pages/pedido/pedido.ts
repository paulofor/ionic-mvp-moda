import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { ItemPedido } from '../../app/shared/sdk';
import { Pedido } from '../../app/shared/sdk';

/**
 * Generated class for the PedidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pedido',
  templateUrl: 'pedido.html',
})
export class PedidoPage {

  listaItemProduto: ItemPedido[];
  pedido: Pedido;
  totalPedido: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  calculaTotalPedido() {
    this.totalPedido = 0;
    for (let item of this.listaItemProduto) {
      console.log(item); // 1, "string", false
    }
  }

  carregaPedido() {

  }

  carregaItemPedido() {

  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
