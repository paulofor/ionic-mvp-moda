/* tslint:disable */
import {
  ItemPedido
} from '../index';

declare var Object: any;
export interface PedidoInterface {
  "id"?: number;
  "data_inicio"?: Date;
  "data_fechamento"?: Date;
  "aberto"?: boolean;
  "valor_total"?: number;
  "usuarioAppId"?: number;
  itemPedidos?: ItemPedido[];
}

export class Pedido implements PedidoInterface {
  "id": number;
  "data_inicio": Date;
  "data_fechamento": Date;
  "aberto": boolean;
  "valor_total": number;
  "usuarioAppId": number;
  itemPedidos: ItemPedido[];
  constructor(data?: PedidoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Pedido`.
   */
  public static getModelName() {
    return "Pedido";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Pedido for dynamic purposes.
  **/
  public static factory(data: PedidoInterface): Pedido{
    return new Pedido(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Pedido',
      plural: 'Pedidos',
      path: 'Pedidos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "data_inicio": {
          name: 'data_inicio',
          type: 'Date'
        },
        "data_fechamento": {
          name: 'data_fechamento',
          type: 'Date'
        },
        "aberto": {
          name: 'aberto',
          type: 'boolean'
        },
        "valor_total": {
          name: 'valor_total',
          type: 'number'
        },
        "usuarioAppId": {
          name: 'usuarioAppId',
          type: 'number'
        },
      },
      relations: {
        itemPedidos: {
          name: 'itemPedidos',
          type: 'ItemPedido[]',
          model: 'ItemPedido',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'pedidoId'
        },
      }
    }
  }
}
