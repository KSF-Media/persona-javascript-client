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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.DeliveryAddress = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The DeliveryAddress model module.
   * @module model/DeliveryAddress
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>DeliveryAddress</code>.
   * @alias module:model/DeliveryAddress
   * @class
   * @param zipcode {String} 
   */
  var exports = function(zipcode) {
    var _this = this;

    _this['zipcode'] = zipcode;
  };

  /**
   * Constructs a <code>DeliveryAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryAddress} obj Optional instance to populate.
   * @return {module:model/DeliveryAddress} The populated <code>DeliveryAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('streetAddress')) {
        obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], 'String');
      }
      if (data.hasOwnProperty('zipcode')) {
        obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('temporaryName')) {
        obj['temporaryName'] = ApiClient.convertToType(data['temporaryName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} streetAddress
   */
  exports.prototype['streetAddress'] = undefined;
  /**
   * @member {String} zipcode
   */
  exports.prototype['zipcode'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} temporaryName
   */
  exports.prototype['temporaryName'] = undefined;



  return exports;
}));


