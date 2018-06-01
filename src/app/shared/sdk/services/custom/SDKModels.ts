/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Message } from '../../models/Message';
import { Cliente } from '../../models/Cliente';
import { Produto } from '../../models/Produto';
import { Pedido } from '../../models/Pedido';
import { UsuarioApp } from '../../models/UsuarioApp';
import { ItemPedido } from '../../models/ItemPedido';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Message: Message,
    Cliente: Cliente,
    Produto: Produto,
    Pedido: Pedido,
    UsuarioApp: UsuarioApp,
    ItemPedido: ItemPedido,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
