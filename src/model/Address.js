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
    root.Persona.Address = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The Address model module.
   * @module model/Address
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>Address</code>.
   * Postal address for shipping the papers.
   * @alias module:model/Address
   * @class
   * @param countryCode {String} Country code
   * @param streetAddress {String} Street address, containing all details
   */
  var exports = function(countryCode, streetAddress) {
    var _this = this;

    _this['countryCode'] = countryCode;
    _this['streetAddress'] = streetAddress;
  };

  /**
   * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Address} obj Optional instance to populate.
   * @return {module:model/Address} The populated <code>Address</code> instance.
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
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('streetAddress')) {
        obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], 'String');
      }
      if (data.hasOwnProperty('streetName')) {
        obj['streetName'] = ApiClient.convertToType(data['streetName'], 'String');
      }
      if (data.hasOwnProperty('houseNo')) {
        obj['houseNo'] = ApiClient.convertToType(data['houseNo'], 'String');
      }
      if (data.hasOwnProperty('staircase')) {
        obj['staircase'] = ApiClient.convertToType(data['staircase'], 'String');
      }
      if (data.hasOwnProperty('apartment')) {
        obj['apartment'] = ApiClient.convertToType(data['apartment'], 'String');
      }
    }
    return obj;
  }

  /**
   * Country code
   * @member {String} countryCode
   */
  exports.prototype['countryCode'] = undefined;
  /**
   * Zip code
   * @member {String} zipCode
   */
  exports.prototype['zipCode'] = undefined;
  /**
   * City
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * Street address, containing all details
   * @member {String} streetAddress
   */
  exports.prototype['streetAddress'] = undefined;
  /**
   * Street name
   * @member {String} streetName
   */
  exports.prototype['streetName'] = undefined;
  /**
   * House number
   * @member {String} houseNo
   */
  exports.prototype['houseNo'] = undefined;
  /**
   * Staircase letter
   * @member {String} staircase
   */
  exports.prototype['staircase'] = undefined;
  /**
   * Apartment number
   * @member {String} apartment
   */
  exports.prototype['apartment'] = undefined;



  return exports;
}));


