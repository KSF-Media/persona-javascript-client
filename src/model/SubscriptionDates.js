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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.SubscriptionDates = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The SubscriptionDates model module.
   * @module model/SubscriptionDates
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>SubscriptionDates</code>.
   * @alias module:model/SubscriptionDates
   * @class
   * @param start {Date} 
   */
  var exports = function(start) {
    var _this = this;

    _this['start'] = start;
  };

  /**
   * Constructs a <code>SubscriptionDates</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubscriptionDates} obj Optional instance to populate.
   * @return {module:model/SubscriptionDates} The populated <code>SubscriptionDates</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('lenMonths')) {
        obj['lenMonths'] = ApiClient.convertToType(data['lenMonths'], 'Number');
      }
      if (data.hasOwnProperty('lenDays')) {
        obj['lenDays'] = ApiClient.convertToType(data['lenDays'], 'Number');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Date');
      }
      if (data.hasOwnProperty('end')) {
        obj['end'] = ApiClient.convertToType(data['end'], 'Date');
      }
      if (data.hasOwnProperty('unpaidBreak')) {
        obj['unpaidBreak'] = ApiClient.convertToType(data['unpaidBreak'], 'Date');
      }
      if (data.hasOwnProperty('invoicingStart')) {
        obj['invoicingStart'] = ApiClient.convertToType(data['invoicingStart'], 'Date');
      }
      if (data.hasOwnProperty('paidUntil')) {
        obj['paidUntil'] = ApiClient.convertToType(data['paidUntil'], 'Date');
      }
      if (data.hasOwnProperty('suspend')) {
        obj['suspend'] = ApiClient.convertToType(data['suspend'], 'Date');
      }
    }
    return obj;
  }

  /**
   * @member {Number} lenMonths
   */
  exports.prototype['lenMonths'] = undefined;
  /**
   * @member {Number} lenDays
   */
  exports.prototype['lenDays'] = undefined;
  /**
   * @member {Date} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {Date} end
   */
  exports.prototype['end'] = undefined;
  /**
   * @member {Date} unpaidBreak
   */
  exports.prototype['unpaidBreak'] = undefined;
  /**
   * @member {Date} invoicingStart
   */
  exports.prototype['invoicingStart'] = undefined;
  /**
   * @member {Date} paidUntil
   */
  exports.prototype['paidUntil'] = undefined;
  /**
   * @member {Date} suspend
   */
  exports.prototype['suspend'] = undefined;



  return exports;
}));


