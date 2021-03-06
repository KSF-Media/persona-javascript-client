/**
 * Persona
 * KSF Media unified login service
 *
 * The version of the OpenAPI document: 1.3.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/PackageCampaign', 'model/PackageOffer', 'model/Paper', 'model/Product'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PackageCampaign'), require('./PackageOffer'), require('./Paper'), require('./Product'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.ModelPackage = factory(root.Persona.ApiClient, root.Persona.PackageCampaign, root.Persona.PackageOffer, root.Persona.Paper, root.Persona.Product);
  }
}(this, function(ApiClient, PackageCampaign, PackageOffer, Paper, Product) {
  'use strict';



  /**
   * The ModelPackage model module.
   * @module model/ModelPackage
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>ModelPackage</code>.
   * @alias module:model/ModelPackage
   * @class
   * @param id {String} Package identifier
   * @param name {String} Package name
   * @param info {Array.<String>} Package description
   * @param paper {module:model/Paper} 
   * @param digitalOnly {Boolean} All products in this package are digital
   * @param products {Array.<module:model/Product>} The Products contained in a package
   * @param offers {Array.<module:model/PackageOffer>} Offers for the package
   * @param campaigns {Array.<module:model/PackageCampaign>} Active campaigns for the package
   * @param canPause {Boolean} Does the package allow delivery pauses
   * @param canTempAddr {Boolean} Does the package allow temporary address changes
   */
  var exports = function(id, name, info, paper, digitalOnly, products, offers, campaigns, canPause, canTempAddr) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['info'] = info;
    _this['paper'] = paper;
    _this['digitalOnly'] = digitalOnly;
    _this['products'] = products;
    _this['offers'] = offers;
    _this['campaigns'] = campaigns;
    _this['canPause'] = canPause;
    _this['canTempAddr'] = canTempAddr;
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
      if (data.hasOwnProperty('info')) {
        obj['info'] = ApiClient.convertToType(data['info'], ['String']);
      }
      if (data.hasOwnProperty('paper')) {
        obj['paper'] = Paper.constructFromObject(data['paper']);
      }
      if (data.hasOwnProperty('digitalOnly')) {
        obj['digitalOnly'] = ApiClient.convertToType(data['digitalOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('products')) {
        obj['products'] = ApiClient.convertToType(data['products'], [Product]);
      }
      if (data.hasOwnProperty('offers')) {
        obj['offers'] = ApiClient.convertToType(data['offers'], [PackageOffer]);
      }
      if (data.hasOwnProperty('campaigns')) {
        obj['campaigns'] = ApiClient.convertToType(data['campaigns'], [PackageCampaign]);
      }
      if (data.hasOwnProperty('nextDelivery')) {
        obj['nextDelivery'] = ApiClient.convertToType(data['nextDelivery'], 'Date');
      }
      if (data.hasOwnProperty('canPause')) {
        obj['canPause'] = ApiClient.convertToType(data['canPause'], 'Boolean');
      }
      if (data.hasOwnProperty('canTempAddr')) {
        obj['canTempAddr'] = ApiClient.convertToType(data['canTempAddr'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Package identifier
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Package name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Package description
   * @member {Array.<String>} info
   */
  exports.prototype['info'] = undefined;
  /**
   * @member {module:model/Paper} paper
   */
  exports.prototype['paper'] = undefined;
  /**
   * All products in this package are digital
   * @member {Boolean} digitalOnly
   */
  exports.prototype['digitalOnly'] = undefined;
  /**
   * The Products contained in a package
   * @member {Array.<module:model/Product>} products
   */
  exports.prototype['products'] = undefined;
  /**
   * Offers for the package
   * @member {Array.<module:model/PackageOffer>} offers
   */
  exports.prototype['offers'] = undefined;
  /**
   * Active campaigns for the package
   * @member {Array.<module:model/PackageCampaign>} campaigns
   */
  exports.prototype['campaigns'] = undefined;
  /**
   * @member {Date} nextDelivery
   */
  exports.prototype['nextDelivery'] = undefined;
  /**
   * Does the package allow delivery pauses
   * @member {Boolean} canPause
   */
  exports.prototype['canPause'] = undefined;
  /**
   * Does the package allow temporary address changes
   * @member {Boolean} canTempAddr
   */
  exports.prototype['canTempAddr'] = undefined;



  return exports;
}));


