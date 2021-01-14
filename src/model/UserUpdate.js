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
    define(['ApiClient', 'model/UserUpdateAddress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UserUpdateAddress'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.UserUpdate = factory(root.Persona.ApiClient, root.Persona.UserUpdateAddress);
  }
}(this, function(ApiClient, UserUpdateAddress) {
  'use strict';



  /**
   * The UserUpdate model module.
   * @module model/UserUpdate
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>UserUpdate</code>.
   * @alias module:model/UserUpdate
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>UserUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserUpdate} obj Optional instance to populate.
   * @return {module:model/UserUpdate} The populated <code>UserUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('address')) {
        obj['address'] = UserUpdateAddress.constructFromObject(data['address']);
      }
      if (data.hasOwnProperty('pendingAddressChanges')) {
        obj['pendingAddressChanges'] = ApiClient.convertToType(data['pendingAddressChanges'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {module:model/UserUpdateAddress} address
   */
  exports.prototype['address'] = undefined;
  /**
   * @member {Array.<Object>} pendingAddressChanges
   */
  exports.prototype['pendingAddressChanges'] = undefined;



  return exports;
}));


