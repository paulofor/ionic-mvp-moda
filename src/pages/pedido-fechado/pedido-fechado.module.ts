import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidoFechadoPage } from './pedido-fechado';

@NgModule({
  declarations: [
    PedidoFechadoPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidoFechadoPage),
  ],
})
export class PedidoFechadoPageModule {}
