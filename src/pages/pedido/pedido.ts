import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage  } from '@ionic/storage';

import { ItemPedido, UsuarioApp, UsuarioAppApi } from '../../app/shared/sdk';
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
  //listaItemPedido : ItemPedido[];
  totalPedido: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private pedidoSrv: PedidoApi, private storage: Storage, private usuarioAppSrv : UsuarioAppApi) {
      //this.carregaListaItemPedido();

  }

  ionViewWillEnter() {
    this.storage.get('user').then((val : UsuarioApp) => {
      console.log('Usuario: ', val);
      this.usuario = val;
      this.carregaPedidoCompleto();
    });
  }

  carregaPedidoCompleto() {
    this.usuarioAppSrv.getPedidos(this.usuario.id,{"where": {"aberto" : true }, "include" : {"itemPedidos" :["produto"]}})
      .subscribe((result: Pedido[]) => {
        console.log('Pedido Corrente: ' , JSON.stringify(result));
        this.pedido = result[0];
        this.calculaTotalPedido();
      })
  }

  calculaTotalPedido() {
    this.pedido.valor_total = 0;
    for (let item of this.pedido.itemPedidos) {
      console.log(item); // 1, "string", false
      this.pedido.valor_total += item.preco_total;
    }
  }

  /*
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
  */



  ionViewDidLoad() {
    console.log('ionViewDidLoad PedidoPage');
  }

}
