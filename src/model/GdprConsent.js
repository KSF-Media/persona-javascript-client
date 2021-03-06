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
    root.Persona.GdprConsent = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GdprConsent model module.
   * @module model/GdprConsent
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>GdprConsent</code>.
   * @alias module:model/GdprConsent
   * @class
   * @param brand {String} 
   * @param consentKey {String} 
   * @param value {Boolean} 
   */
  var exports = function(brand, consentKey, value) {
    var _this = this;

    _this['brand'] = brand;
    _this['consentKey'] = consentKey;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>GdprConsent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GdprConsent} obj Optional instance to populate.
   * @return {module:model/GdprConsent} The populated <code>GdprConsent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('brand')) {
        obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
      }
      if (data.hasOwnProperty('consentKey')) {
        obj['consentKey'] = ApiClient.convertToType(data['consentKey'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} brand
   */
  exports.prototype['brand'] = undefined;
  /**
   * @member {String} consentKey
   */
  exports.prototype['consentKey'] = undefined;
  /**
   * @member {Boolean} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


