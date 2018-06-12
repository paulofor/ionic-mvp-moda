import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage  } from '@ionic/storage';

import { ItemPedido, UsuarioApp } from '../../app/shared/sdk';
import { Pedido } from '../../app/shared/sdk';

import { PedidoApi } from '../../app/shared/sdk/services/custom/Pedido';



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


  usuario: UsuarioApp;
  pedido: Pedido = new Pedido();
  listaItemPedido : ItemPedido[];
  totalPedido: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private pedidoSrv: PedidoApi, private storage: Storage) {
      //this.carregaListaItemPedido();

  }

  ionViewWillEnter() {
    this.storage.get('user').then((val : UsuarioApp) => {
      console.log('Usuario: ', val);
      this.usuario = val;
      this.carregaPedido();
    });
  }

  calculaTotalPedido() {
    this.totalPedido = 0;
    for (let item of this.pedido.itemPedidos) {
      console.log(item); // 1, "string", false
    }
  }

  carregaListaItemPedido() {
    this.pedidoSrv.getItemPedidos(this.pedido.id,{"include": "produto"})
      .subscribe((result: ItemPedido[]) => {
        console.log("Lista: " , result);
        this.listaItemPedido = result;
      })
  }

  carregaPedido() {
    this.pedidoSrv.find( {"where" : {"usuarioAppId" : this.usuario.id , "aberto" : true} } )
      .subscribe((result : Pedido[]) => {
        console.log("Pedido: " , result[0]);
        this.pedido = result[0];
        this.carregaListaItemPedido();
      })
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
