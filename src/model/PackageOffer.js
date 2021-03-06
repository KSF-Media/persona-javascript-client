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
    root.Persona.PackageOffer = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PackageOffer model module.
   * @module model/PackageOffer
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>PackageOffer</code>.
   * @alias module:model/PackageOffer
   * @class
   * @param months {Number} Duration of the offer
   * @param totalPrice {Number} Amount of cents that has to be paid
   * @param monthlyPrice {Number} Amount of cents that has to be paid
   */
  var exports = function(months, totalPrice, monthlyPrice) {
    var _this = this;

    _this['months'] = months;
    _this['totalPrice'] = totalPrice;
    _this['monthlyPrice'] = monthlyPrice;
  };

  /**
   * Constructs a <code>PackageOffer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackageOffer} obj Optional instance to populate.
   * @return {module:model/PackageOffer} The populated <code>PackageOffer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('months')) {
        obj['months'] = ApiClient.convertToType(data['months'], 'Number');
      }
      if (data.hasOwnProperty('totalPrice')) {
        obj['totalPrice'] = ApiClient.convertToType(data['totalPrice'], 'Number');
      }
      if (data.hasOwnProperty('monthlyPrice')) {
        obj['monthlyPrice'] = ApiClient.convertToType(data['monthlyPrice'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Duration of the offer
   * @member {Number} months
   */
  exports.prototype['months'] = undefined;
  /**
   * Amount of cents that has to be paid
   * @member {Number} totalPrice
   */
  exports.prototype['totalPrice'] = undefined;
  /**
   * Amount of cents that has to be paid
   * @member {Number} monthlyPrice
   */
  exports.prototype['monthlyPrice'] = undefined;



  return exports;
}));


