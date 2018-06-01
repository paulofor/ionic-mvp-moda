/* tslint:disable */
import {
  Pedido
} from '../index';

declare var Object: any;
export interface UsuarioAppInterface {
  "id"?: number;
  "login"?: string;
  "senha"?: string;
  "hash"?: string;
  "nome"?: string;
  pedidos?: Pedido[];
}

export class UsuarioApp implements UsuarioAppInterface {
  "id": number;
  "login": string;
  "senha": string;
  "hash": string;
  "nome": string;
  pedidos: Pedido[];
  constructor(data?: UsuarioAppInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `UsuarioApp`.
   */
  public static getModelName() {
    return "UsuarioApp";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of UsuarioApp for dynamic purposes.
  **/
  public static factory(data: UsuarioAppInterface): UsuarioApp{
    return new UsuarioApp(data);
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
      name: 'UsuarioApp',
      plural: 'UsuarioApps',
      path: 'UsuarioApps',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "login": {
          name: 'login',
          type: 'string'
        },
        "senha": {
          name: 'senha',
          type: 'string'
        },
        "hash": {
          name: 'hash',
          type: 'string'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
      },
      relations: {
        pedidos: {
          name: 'pedidos',
          type: 'Pedido[]',
          model: 'Pedido',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'usuarioAppId'
        },
      }
    }
  }
}
