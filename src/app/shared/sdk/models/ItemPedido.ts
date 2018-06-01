/* tslint:disable */

declare var Object: any;
export interface ItemPedidoInterface {
  "id"?: number;
  "data_inclusao"?: Date;
  "produtoId"?: number;
  "pedidoId"?: number;
}

export class ItemPedido implements ItemPedidoInterface {
  "id": number;
  "data_inclusao": Date;
  "produtoId": number;
  "pedidoId": number;
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
      }
    }
  }
}
