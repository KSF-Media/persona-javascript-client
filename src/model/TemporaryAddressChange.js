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
    root.Persona.TemporaryAddressChange = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The TemporaryAddressChange model module.
   * @module model/TemporaryAddressChange
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>TemporaryAddressChange</code>.
   * @alias module:model/TemporaryAddressChange
   * @class
   * @param zipCode {String} 
   * @param streetAddress {String} 
   * @param countryCode {String} 
   * @param startDate {Date} 
   */
  var exports = function(zipCode, streetAddress, countryCode, startDate) {
    var _this = this;

    _this['zipCode'] = zipCode;
    _this['streetAddress'] = streetAddress;
    _this['countryCode'] = countryCode;
    _this['startDate'] = startDate;
  };

  /**
   * Constructs a <code>TemporaryAddressChange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemporaryAddressChange} obj Optional instance to populate.
   * @return {module:model/TemporaryAddressChange} The populated <code>TemporaryAddressChange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('zipCode')) {
        obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
      }
      if (data.hasOwnProperty('streetAddress')) {
        obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], 'String');
      }
      if (data.hasOwnProperty('countryCode')) {
        obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('temporaryName')) {
        obj['temporaryName'] = ApiClient.convertToType(data['temporaryName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} zipCode
   */
  exports.prototype['zipCode'] = undefined;
  /**
   * @member {String} streetAddress
   */
  exports.prototype['streetAddress'] = undefined;
  /**
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * @member {Date} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * @member {String} temporaryName
   */
  exports.prototype['temporaryName'] = undefined;



  return exports;
}));


