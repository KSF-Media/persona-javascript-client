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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.UserUpdateAddress = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The UserUpdateAddress model module.
   * @module model/UserUpdateAddress
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>UserUpdateAddress</code>.
   * @alias module:model/UserUpdateAddress
   * @class
   * @param countryCode {String} 
   * @param zipCode {String} 
   * @param streetAddress {String} 
   */
  var exports = function(countryCode, zipCode, streetAddress) {
    var _this = this;

    _this['countryCode'] = countryCode;
    _this['zipCode'] = zipCode;
    _this['streetAddress'] = streetAddress;
  };

  /**
   * Constructs a <code>UserUpdateAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserUpdateAddress} obj Optional instance to populate.
   * @return {module:model/UserUpdateAddress} The populated <code>UserUpdateAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('zipCode')) {
        obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
      }
      if (data.hasOwnProperty('streetAddress')) {
        obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * @member {String} zipCode
   */
  exports.prototype['zipCode'] = undefined;
  /**
   * @member {String} streetAddress
   */
  exports.prototype['streetAddress'] = undefined;



  return exports;
}));


