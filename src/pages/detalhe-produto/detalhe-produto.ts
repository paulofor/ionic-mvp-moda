import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Produto } from '../../app/shared/sdk/models/Produto';
import { ProdutoApi } from '../../app/shared/sdk/services/custom/Produto';
import { Pedido } from '../../app/shared/sdk/models/Pedido';
import { PedidoApi } from '../../app/shared/sdk/services/custom/Pedido';
import { UsuarioAppApi } from '../../app/shared/sdk/services/custom/UsuarioApp';
import { ItemPedido } from '../../app/shared/sdk';
import { Storage  } from '@ionic/storage';

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
  idPedidoAtual: number;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController, private storage: Storage, private usuarioSrv: UsuarioAppApi,
    private pedidoSrv: PedidoApi) {
    
  }

  ngOnInit() {
    this.produto = this.navParams.get('item');
    //this.recuperaPedido(1);
    this.obtemIdPedidoMemoria();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheProdutoPage');
  }

  adicionaProduto() {
    let itemPedido: ItemPedido = new ItemPedido();
    itemPedido.pedidoId = this.idPedidoAtual;
    itemPedido.produtoId = this.produto.id;
    itemPedido.nome_produto = this.produto.nome;
    itemPedido.preco_produto = this.produto.preco;
    itemPedido.quantidade_produto = 1;
    itemPedido.preco_total = itemPedido.preco_produto * itemPedido.quantidade_produto;
    itemPedido.data_inclusao = new Date();
    console.log('Item Pedido que vai ser salvo: ' , JSON.stringify(itemPedido));

    this.pedidoSrv.createItemPedidos( itemPedido.pedidoId, itemPedido)
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

  /* Não recupera pedidos abertos !!!! */

  /*
  recuperaPedido(idUsuario: number) {
    this.usuarioSrv.getPedidos(idUsuario)
      .subscribe((valor: Pedido[]) => {
        this.pedido = valor[0];
        console.log('Pedido:' + JSON.stringify(this.pedido));
      })
  }
  */


  obtemIdPedidoMemoria() {
    this.storage.get('idPedido').then((id : number) => {
      console.log('IdPedido Recuperado: ', id);
      this.idPedidoAtual = id;
    });
  }
  
  
}
