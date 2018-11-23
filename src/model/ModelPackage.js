/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.2.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Campaign', 'model/PackageDescription', 'model/PackageOffer', 'model/Paper', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Campaign'), require('./PackageDescription'), require('./PackageOffer'), require('./Paper'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.ModelPackage = factory(root.Persona.ApiClient, root.Persona.Campaign, root.Persona.PackageDescription, root.Persona.PackageOffer, root.Persona.Paper, root.Persona.Product);
  }
}(this, function(ApiClient, Campaign, PackageDescription, PackageOffer, Paper, Product) {
  'use strict';



  /**
   * The ModelPackage model module.
   * @module model/ModelPackage
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ModelPackage</code>.
   * @alias module:model/ModelPackage
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param paper {module:model/Paper} 
   * @param products {Array.<module:model/Product>} 
   * @param offers {Array.<module:model/PackageOffer>} 
   * @param campaigns {Array.<module:model/Campaign>} 
   */
  var exports = function(id, name, paper, products, offers, campaigns) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['paper'] = paper;
    _this['products'] = products;
    _this['offers'] = offers;
    _this['campaigns'] = campaigns;
  };

  /**
   * Constructs a <code>ModelPackage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelPackage} obj Optional instance to populate.
   * @return {module:model/ModelPackage} The populated <code>ModelPackage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('paper')) {
        obj['paper'] = Paper.constructFromObject(data['paper']);
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Product]);
      }
      if (data.hasOwnProperty('offers')) {
        obj['offers'] = ApiClient.convertToType(data['offers'], [PackageOffer]);
      }
      if (data.hasOwnProperty('campaigns')) {
        obj['campaigns'] = ApiClient.convertToType(data['campaigns'], [Campaign]);
      }
      if (data.hasOwnProperty('nextDelivery')) {
        obj['nextDelivery'] = ApiClient.convertToType(data['nextDelivery'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = PackageDescription.constructFromObject(data['description']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/Paper} paper
   */
  exports.prototype['paper'] = undefined;
  /**
   * @member {Array.<module:model/Product>} products
   */
  exports.prototype['products'] = undefined;
  /**
   * @member {Array.<module:model/PackageOffer>} offers
   */
  exports.prototype['offers'] = undefined;
  /**
   * @member {Array.<module:model/Campaign>} campaigns
   */
  exports.prototype['campaigns'] = undefined;
  /**
   * @member {Date} nextDelivery
   */
  exports.prototype['nextDelivery'] = undefined;
  /**
   * @member {module:model/PackageDescription} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


