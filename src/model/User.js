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
    define(['ApiClient', 'model/Address', 'model/GdprConsent', 'model/LegalConsent', 'model/PendingAddressChange', 'model/Subscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./GdprConsent'), require('./LegalConsent'), require('./PendingAddressChange'), require('./Subscription'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.User = factory(root.Persona.ApiClient, root.Persona.Address, root.Persona.GdprConsent, root.Persona.LegalConsent, root.Persona.PendingAddressChange, root.Persona.Subscription);
  }
}(this, function(ApiClient, Address, GdprConsent, LegalConsent, PendingAddressChange, Subscription) {
  'use strict';



  /**
   * The User model module.
   * @module model/User
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @class
   * @param uuid {String} 
   * @param email {String} 
   * @param cusno {String} 
   * @param subs {Array.<module:model/Subscription>} 
   * @param consent {Array.<module:model/GdprConsent>} 
   * @param legal {Array.<module:model/LegalConsent>} 
   */
  var exports = function(uuid, email, cusno, subs, consent, legal) {
    var _this = this;

    _this['uuid'] = uuid;
    _this['email'] = email;
    _this['cusno'] = cusno;
    _this['subs'] = subs;
    _this['consent'] = consent;
    _this['legal'] = legal;
  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = Address.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('cusno')) {
        obj['cusno'] = ApiClient.convertToType(data['cusno'], 'String');
      }
      if (data.hasOwnProperty('subs')) {
        obj['subs'] = ApiClient.convertToType(data['subs'], [Subscription]);
      }
      if (data.hasOwnProperty('consent')) {
        obj['consent'] = ApiClient.convertToType(data['consent'], [GdprConsent]);
      }
      if (data.hasOwnProperty('legal')) {
        obj['legal'] = ApiClient.convertToType(data['legal'], [LegalConsent]);
      }
      if (data.hasOwnProperty('pendingAddressChanges')) {
        obj['pendingAddressChanges'] = ApiClient.convertToType(data['pendingAddressChanges'], [PendingAddressChange]);
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {module:model/Address} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {String} cusno
   */
  exports.prototype['cusno'] = undefined;
  /**
   * @member {Array.<module:model/Subscription>} subs
   */
  exports.prototype['subs'] = undefined;
  /**
   * @member {Array.<module:model/GdprConsent>} consent
   */
  exports.prototype['consent'] = undefined;
  /**
   * @member {Array.<module:model/LegalConsent>} legal
   */
  exports.prototype['legal'] = undefined;
  /**
   * @member {Array.<module:model/PendingAddressChange>} pendingAddressChanges
   */
  exports.prototype['pendingAddressChanges'] = undefined;



  return exports;
}));


