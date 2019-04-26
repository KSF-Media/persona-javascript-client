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
    root.Persona.PausedSubscription = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The PausedSubscription model module.
   * @module model/PausedSubscription
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>PausedSubscription</code>.
   * @alias module:model/PausedSubscription
   * @class
   * @param subsno {Number} 
   * @param sleepStartdate {Date} 
   * @param sleepEndDate {Date} 
   * @param creditType {String} 
   * @param creditAmount {Number} 
   * @param sleepType {String} 
   * @param credited {Boolean} 
   * @param creditInvno {Number} 
   * @param bookingDate {String} 
   * @param allowWebpaper {Boolean} 
   * @param receiveType {String} 
   * @param confirmStatus {String} 
   * @param stampUser {String} 
   */
  var exports = function(subsno, sleepStartdate, sleepEndDate, creditType, creditAmount, sleepType, credited, creditInvno, bookingDate, allowWebpaper, receiveType, confirmStatus, stampUser) {
    var _this = this;

    _this['subsno'] = subsno;
    _this['sleepStartdate'] = sleepStartdate;
    _this['sleepEndDate'] = sleepEndDate;
    _this['creditType'] = creditType;
    _this['creditAmount'] = creditAmount;
    _this['sleepType'] = sleepType;
    _this['credited'] = credited;
    _this['creditInvno'] = creditInvno;
    _this['bookingDate'] = bookingDate;
    _this['allowWebpaper'] = allowWebpaper;
    _this['receiveType'] = receiveType;
    _this['confirmStatus'] = confirmStatus;
    _this['stampUser'] = stampUser;
  };

  /**
   * Constructs a <code>PausedSubscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PausedSubscription} obj Optional instance to populate.
   * @return {module:model/PausedSubscription} The populated <code>PausedSubscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subsno')) {
        obj['subsno'] = ApiClient.convertToType(data['subsno'], 'Number');
      }
      if (data.hasOwnProperty('sleepStartdate')) {
        obj['sleepStartdate'] = ApiClient.convertToType(data['sleepStartdate'], 'Date');
      }
      if (data.hasOwnProperty('sleepEndDate')) {
        obj['sleepEndDate'] = ApiClient.convertToType(data['sleepEndDate'], 'Date');
      }
      if (data.hasOwnProperty('creditType')) {
        obj['creditType'] = ApiClient.convertToType(data['creditType'], 'String');
      }
      if (data.hasOwnProperty('creditAmount')) {
        obj['creditAmount'] = ApiClient.convertToType(data['creditAmount'], 'Number');
      }
      if (data.hasOwnProperty('sleepType')) {
        obj['sleepType'] = ApiClient.convertToType(data['sleepType'], 'String');
      }
      if (data.hasOwnProperty('credited')) {
        obj['credited'] = ApiClient.convertToType(data['credited'], 'Boolean');
      }
      if (data.hasOwnProperty('creditInvno')) {
        obj['creditInvno'] = ApiClient.convertToType(data['creditInvno'], 'Number');
      }
      if (data.hasOwnProperty('bookingDate')) {
        obj['bookingDate'] = ApiClient.convertToType(data['bookingDate'], 'String');
      }
      if (data.hasOwnProperty('allowWebpaper')) {
        obj['allowWebpaper'] = ApiClient.convertToType(data['allowWebpaper'], 'Boolean');
      }
      if (data.hasOwnProperty('receiveType')) {
        obj['receiveType'] = ApiClient.convertToType(data['receiveType'], 'String');
      }
      if (data.hasOwnProperty('confirmStatus')) {
        obj['confirmStatus'] = ApiClient.convertToType(data['confirmStatus'], 'String');
      }
      if (data.hasOwnProperty('stampUser')) {
        obj['stampUser'] = ApiClient.convertToType(data['stampUser'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} subsno
   */
  exports.prototype['subsno'] = undefined;
  /**
   * @member {Date} sleepStartdate
   */
  exports.prototype['sleepStartdate'] = undefined;
  /**
   * @member {Date} sleepEndDate
   */
  exports.prototype['sleepEndDate'] = undefined;
  /**
   * @member {String} creditType
   */
  exports.prototype['creditType'] = undefined;
  /**
   * @member {Number} creditAmount
   */
  exports.prototype['creditAmount'] = undefined;
  /**
   * @member {String} sleepType
   */
  exports.prototype['sleepType'] = undefined;
  /**
   * @member {Boolean} credited
   */
  exports.prototype['credited'] = undefined;
  /**
   * @member {Number} creditInvno
   */
  exports.prototype['creditInvno'] = undefined;
  /**
   * @member {String} bookingDate
   */
  exports.prototype['bookingDate'] = undefined;
  /**
   * @member {Boolean} allowWebpaper
   */
  exports.prototype['allowWebpaper'] = undefined;
  /**
   * @member {String} receiveType
   */
  exports.prototype['receiveType'] = undefined;
  /**
   * @member {String} confirmStatus
   */
  exports.prototype['confirmStatus'] = undefined;
  /**
   * @member {String} stampUser
   */
  exports.prototype['stampUser'] = undefined;



  return exports;
}));


