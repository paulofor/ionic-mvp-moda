/* tslint:disable */
import {
  Produto
} from '../index';

declare var Object: any;
export interface ItemPedidoInterface {
  "id"?: number;
  "data_inclusao"?: Date;
  "preco_produto"?: number;
  "quantidade_produto"?: number;
  "preco_total"?: number;
  "nome_produto"?: string;
  "produtoId"?: number;
  "pedidoId"?: number;
  produto?: Produto;
}

export class ItemPedido implements ItemPedidoInterface {
  "id": number;
  "data_inclusao": Date;
  "preco_produto": number;
  "quantidade_produto": number;
  "preco_total": number;
  "nome_produto": string;
  "produtoId": number;
  "pedidoId": number;
  produto: Produto;
  constructor(data?: ItemPedidoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ItemPedido`.
   */
  public static getModelName() {
    return "ItemPedido";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ItemPedido for dynamic purposes.
  **/
  public static factory(data: ItemPedidoInterface): ItemPedido{
    return new ItemPedido(data);
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
      name: 'ItemPedido',
      plural: 'ItemPedidos',
      path: 'ItemPedidos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "data_inclusao": {
          name: 'data_inclusao',
          type: 'Date'
        },
        "preco_produto": {
          name: 'preco_produto',
          type: 'number'
        },
        "quantidade_produto": {
          name: 'quantidade_produto',
          type: 'number'
        },
        "preco_total": {
          name: 'preco_total',
          type: 'number'
        },
        "nome_produto": {
          name: 'nome_produto',
          type: 'string'
        },
        "produtoId": {
          name: 'produtoId',
          type: 'number'
        },
        "pedidoId": {
          name: 'pedidoId',
          type: 'number'
        },
      },
      relations: {
        produto: {
          name: 'produto',
          type: 'Produto',
          model: 'Produto',
          relationType: 'belongsTo',
                  keyFrom: 'produtoId',
          keyTo: 'id'
        },
      }
    }
  }
}
