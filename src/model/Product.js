/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.3.0
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
    define(['ApiClient', 'model/ActiveDays', 'model/Paper'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActiveDays'), require('./Paper'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.Product = factory(root.Persona.ApiClient, root.Persona.ActiveDays, root.Persona.Paper);
  }
}(this, function(ApiClient, ActiveDays, Paper) {
  'use strict';



  /**
   * The Product model module.
   * @module model/Product
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>Product</code>.
   * @alias module:model/Product
   * @class
   * @param id {String} 
   * @param name {String} 
   * @param active {module:model/ActiveDays} 
   * @param paper {module:model/Paper} 
   * @param digital {Boolean} 
   */
  var exports = function(id, name, active, paper, digital) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
    _this['active'] = active;
    _this['paper'] = paper;
    _this['digital'] = digital;
  };

  /**
   * Constructs a <code>Product</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Product} obj Optional instance to populate.
   * @return {module:model/Product} The populated <code>Product</code> instance.
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
      if (data.hasOwnProperty('active')) {
        obj['active'] = ActiveDays.constructFromObject(data['active']);
      }
      if (data.hasOwnProperty('nextDelivery')) {
        obj['nextDelivery'] = ApiClient.convertToType(data['nextDelivery'], 'Date');
      }
      if (data.hasOwnProperty('paper')) {
        obj['paper'] = Paper.constructFromObject(data['paper']);
      }
      if (data.hasOwnProperty('digital')) {
        obj['digital'] = ApiClient.convertToType(data['digital'], 'Boolean');
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
   * @member {module:model/ActiveDays} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Date} nextDelivery
   */
  exports.prototype['nextDelivery'] = undefined;
  /**
   * @member {module:model/Paper} paper
   */
  exports.prototype['paper'] = undefined;
  /**
   * @member {Boolean} digital
   */
  exports.prototype['digital'] = undefined;



  return exports;
}));


