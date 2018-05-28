import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  produtoSelecionado(event, produto) {
    this.navCtrl.push(DetalheProdutoPage, {
        item: produto, 
    })
  }


}
