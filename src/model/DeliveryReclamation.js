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
    root.Persona.DeliveryReclamation = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The DeliveryReclamation model module.
   * @module model/DeliveryReclamation
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>DeliveryReclamation</code>.
   * @alias module:model/DeliveryReclamation
   * @class
   * @param _number {String} 
   * @param customerNumber {Number} 
   * @param subscriptionNumber {Number} 
   * @param _date {Date} 
   * @param publicationDate {Date} 
   * @param claim {String} 
   * @param status {String} 
   */
  var exports = function(_number, customerNumber, subscriptionNumber, _date, publicationDate, claim, status) {
    var _this = this;

    _this['number'] = _number;
    _this['customerNumber'] = customerNumber;
    _this['subscriptionNumber'] = subscriptionNumber;
    _this['date'] = _date;
    _this['publicationDate'] = publicationDate;
    _this['claim'] = claim;
    _this['status'] = status;
  };

  /**
   * Constructs a <code>DeliveryReclamation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeliveryReclamation} obj Optional instance to populate.
   * @return {module:model/DeliveryReclamation} The populated <code>DeliveryReclamation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('customerNumber')) {
        obj['customerNumber'] = ApiClient.convertToType(data['customerNumber'], 'Number');
      }
      if (data.hasOwnProperty('subscriptionNumber')) {
        obj['subscriptionNumber'] = ApiClient.convertToType(data['subscriptionNumber'], 'Number');
      }
      if (data.hasOwnProperty('date')) {
        obj['date'] = ApiClient.convertToType(data['date'], 'Date');
      }
      if (data.hasOwnProperty('publicationDate')) {
        obj['publicationDate'] = ApiClient.convertToType(data['publicationDate'], 'Date');
      }
      if (data.hasOwnProperty('claim')) {
        obj['claim'] = ApiClient.convertToType(data['claim'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {Number} customerNumber
   */
  exports.prototype['customerNumber'] = undefined;
  /**
   * @member {Number} subscriptionNumber
   */
  exports.prototype['subscriptionNumber'] = undefined;
  /**
   * @member {Date} date
   */
  exports.prototype['date'] = undefined;
  /**
   * @member {Date} publicationDate
   */
  exports.prototype['publicationDate'] = undefined;
  /**
   * @member {String} claim
   */
  exports.prototype['claim'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;



  return exports;
}));


