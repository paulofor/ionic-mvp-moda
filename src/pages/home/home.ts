import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetalheProdutoPage } from '../detalhe-produto/detalhe-produto';

import { Produto } from '../../app/shared/sdk/models/Produto';
import { ProdutoApi } from '../../app/shared/sdk/services/custom/Produto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  produtos : Produto[];

  constructor(public navCtrl: NavController, private servico:ProdutoApi) {

  }

  ngOnInit() {
    this.servico.find()
      .subscribe((valor: Produto[]) => {
        console.log('Lista: ' + JSON.stringify(valor));
        this.produtos = valor;
      })
  }

  produtoSelecionado(event, produto) {
    this.navCtrl.push(DetalheProdutoPage, {
        item: produto, 
    })
  }


}
