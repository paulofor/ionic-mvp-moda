import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule , LOCALE_ID} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ProdutoApi } from '../app/shared/sdk/services/custom/Produto';

import { HttpClient, HttpResponse, HttpClientModule } from '@angular/common/http';
import { SocketConnection } from './shared/sdk/sockets/socket.connections';
import { SocketDriver } from './shared/sdk/sockets/socket.driver';
import { SDKModels } from './shared/sdk/services/custom/SDKModels';
import { LoopBackAuth } from './shared/sdk/services/core/auth.service';
import { InternalStorage } from './shared/sdk/storage/storage.swaps';

import { DetalheProdutoPage } from '../pages/detalhe-produto/detalhe-produto';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { TesteGridPage } from '../pages/teste-grid/teste-grid';
import { PedidoPage } from '../pages/pedido/pedido';
import { PedidoFechadoPage } from '../pages/pedido-fechado/pedido-fechado';

import localePtBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { IonicStorageModule } from '@ionic/storage';
import { UsuarioAppApi } from '../app/shared/sdk/services/custom/UsuarioApp';
import { PedidoApi } from '../app/shared/sdk/services/custom/Pedido';


registerLocaleData(localePtBr);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetalheProdutoPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TesteGridPage,
    PedidoPage,
    PedidoFechadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetalheProdutoPage,
    WelcomePage,
    LoginPage,
    SignupPage,
    TesteGridPage,
    PedidoPage,
    PedidoFechadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProdutoApi,
    UsuarioAppApi,
    HttpClient, 
    SocketConnection  , 
    SocketDriver,
    SDKModels,
    LoopBackAuth,
    InternalStorage,
    { provide: LOCALE_ID, useValue: 'pt' } ,
    PedidoApi
  ]
})
export class AppModule {}
