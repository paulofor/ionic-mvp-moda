/* tslint:disable */

declare var Object: any;
export interface ProdutoInterface {
  "id"?: number;
  "nome"?: string;
  "imagem"?: string;
  "preco"?: number;
}

export class Produto implements ProdutoInterface {
  "id": number;
  "nome": string;
  "imagem": string;
  "preco": number;
  constructor(data?: ProdutoInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Produto`.
   */
  public static getModelName() {
    return "Produto";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Produto for dynamic purposes.
  **/
  public static factory(data: ProdutoInterface): Produto{
    return new Produto(data);
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
      name: 'Produto',
      plural: 'Produtos',
      path: 'Produtos',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "nome": {
          name: 'nome',
          type: 'string'
        },
        "imagem": {
          name: 'imagem',
          type: 'string'
        },
        "preco": {
          name: 'preco',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
