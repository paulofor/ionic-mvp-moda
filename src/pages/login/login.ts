import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../model/usuario';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Storage  } from '@ionic/storage';
import { Pedido } from '../../app/shared/sdk';

import { UsuarioAppApi } from '../../app/shared/sdk/services/custom/UsuarioApp';
import { PedidoApi } from '../../app/shared/sdk/services/custom/Pedido';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  usuario : User;
  loginForm: FormGroup;
  pedido:Pedido;

  constructor(public navCtrl: NavController, public navParams: NavParams
              , private formBuilder: FormBuilder, private storage: Storage,
              private usuarioAppSrv: UsuarioAppApi, private pedidoSrv: PedidoApi) {
    this.loginForm = this.formBuilder.group({
      login : '',
      senha : ''
    });
  }




  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

  onSubmit(){
    this.usuario = new User();
    this.usuario.username = this.loginForm.get("login").value;
    this.usuario.password = this.loginForm.get("senha").value;
    this.usuario.id = 1;
    this.storage.set('user',this.usuario);
    console.log("form:" , this.usuario);
    this.verificaPedidoAberto();
  }

  mudaTela() {
    this.guardaPedido(this.pedido);
    this.navCtrl.push(HomePage, {}, {animate: true});
  }


  criaPedido() {
    console.log('Cria Pedido');
    let pedido : Pedido = new Pedido();
    pedido.aberto = true;
    pedido.usuarioAppId = this.usuario.id;
    pedido.data_inicio = new Date();
    this.usuarioAppSrv.createPedidos(this.usuario.id, pedido, (err,obj) => {
      console.log("Erro:" + err.message);
      this.mudaTela();
    }).subscribe((e: any) => {
      console.log("Resposta Pedido Criado: " , JSON.stringify(e));
    });
  }

  verificaPedidoAberto() {
    // Identificar para o usuario corrente qual pedido esta aberto.
    console.log("Verificando Pedido - usuarioId = " , this.usuario.id);
    this.pedidoSrv.find({where: {aberto:true,usuarioAppId:this.usuario.id}})
      .subscribe((resultado : Pedido[]) => {
          console.log("Pedido: " , resultado);
          if (resultado.length>0) {
            this.pedido = resultado[0];
            this.mudaTela();
          } else {
            this.criaPedido();
          }
      })
  }

  guardaPedido(pedido : Pedido) {
    this.storage.set('idPedido',pedido.id);
  }

 
  
}
