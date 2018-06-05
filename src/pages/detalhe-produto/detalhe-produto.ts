import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { Produto } from '../../app/shared/sdk/models/Produto';
import { ProdutoApi } from '../../app/shared/sdk/services/custom/Produto';

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

  produto : Produto;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            private toastCtrl: ToastController) {
    this.produto = navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheProdutoPage');
  }

  adicionaProduto() {
    this.toastCtrl.create({
      message: 'Produto adicionando ao carrinho',
      position: 'bottom',
      duration: 3000
    }).present();
  }

  recuperaPedido() {
    
  }

}
