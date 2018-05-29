/* tslint:disable */
import {
  Produto
} from '../index';

declare var Object: any;
export interface ClienteInterface {
  "id"?: number;
  "nome_fantasia": string;
  "login"?: string;
  "senha"?: string;
  "cor_primaria"?: string;
  "logo"?: string;
  produtos?: Produto[];
}

export class Cliente implements ClienteInterface {
  "id": number;
  "nome_fantasia": string;
  "login": string;
  "senha": string;
  "cor_primaria": string;
  "logo": string;
  produtos: Produto[];
  constructor(data?: ClienteInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Cliente`.
   */
  public static getModelName() {
    return "Cliente";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Cliente for dynamic purposes.
  **/
  public static factory(data: ClienteInterface): Cliente{
    return new Cliente(data);
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
      name: 'Cliente',
      plural: 'Clientes',
      path: 'Clientes',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nome_fantasia": {
          name: 'nome_fantasia',
          type: 'string'
        },
        "login": {
          name: 'login',
          type: 'string'
        },
        "senha": {
          name: 'senha',
          type: 'string'
        },
        "cor_primaria": {
          name: 'cor_primaria',
          type: 'string'
        },
        "logo": {
          name: 'logo',
          type: 'string'
        },
      },
      relations: {
        produtos: {
          name: 'produtos',
          type: 'Produto[]',
          model: 'Produto',
          relationType: 'hasMany',
                  keyFrom: 'id',
          keyTo: 'clienteId'
        },
      }
    }
  }
}
