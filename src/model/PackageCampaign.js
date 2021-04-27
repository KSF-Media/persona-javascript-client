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
    root.Persona.PackageCampaign = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PackageCampaign model module.
   * @module model/PackageCampaign
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>PackageCampaign</code>.
   * @alias module:model/PackageCampaign
   * @class
   * @param no {Number} Campaign number
   * @param id {String} Campaign id
   * @param name {String} Campaign name
   * @param priceEur {Number} Price of campaign in euros
   * @param length {Number} Length of campaign
   * @param lengthUnit {module:model/PackageCampaign.LengthUnitEnum} Unit of length (days, weeks, months, years)
   */
  var exports = function(no, id, name, priceEur, length, lengthUnit) {
    var _this = this;

    _this['no'] = no;
    _this['id'] = id;
    _this['name'] = name;
    _this['priceEur'] = priceEur;
    _this['length'] = length;
    _this['lengthUnit'] = lengthUnit;
  };

  /**
   * Constructs a <code>PackageCampaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PackageCampaign} obj Optional instance to populate.
   * @return {module:model/PackageCampaign} The populated <code>PackageCampaign</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('no')) {
        obj['no'] = ApiClient.convertToType(data['no'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('priceEur')) {
        obj['priceEur'] = ApiClient.convertToType(data['priceEur'], 'Number');
      }
      if (data.hasOwnProperty('length')) {
        obj['length'] = ApiClient.convertToType(data['length'], 'Number');
      }
      if (data.hasOwnProperty('lengthUnit')) {
        obj['lengthUnit'] = ApiClient.convertToType(data['lengthUnit'], 'String');
      }
    }
    return obj;
  }

  /**
   * Campaign number
   * @member {Number} no
   */
  exports.prototype['no'] = undefined;
  /**
   * Campaign id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Campaign name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * Price of campaign in euros
   * @member {Number} priceEur
   */
  exports.prototype['priceEur'] = undefined;
  /**
   * Length of campaign
   * @member {Number} length
   */
  exports.prototype['length'] = undefined;
  /**
   * Unit of length (days, weeks, months, years)
   * @member {module:model/PackageCampaign.LengthUnitEnum} lengthUnit
   */
  exports.prototype['lengthUnit'] = undefined;


  /**
   * Allowed values for the <code>lengthUnit</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LengthUnitEnum = {
    /**
     * value: "Day"
     * @const
     */
    "Day": "Day",
    /**
     * value: "Week"
     * @const
     */
    "Week": "Week",
    /**
     * value: "Month"
     * @const
     */
    "Month": "Month",
    /**
     * value: "Year"
     * @const
     */
    "Year": "Year"  };


  return exports;
}));

