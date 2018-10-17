/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 3.1.2-SNAPSHOT
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
    root.Persona.LoginResponse = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LoginResponse model module.
   * @module model/LoginResponse
   * @version 1.1.0
   */

  /**
   * Constructs a new <code>LoginResponse</code>.
   * @alias module:model/LoginResponse
   * @class
   * @param token {String} 
   * @param uuid {String} 
   */
  var exports = function(token, uuid) {
    var _this = this;

    _this['token'] = token;

    _this['uuid'] = uuid;
  };

  /**
   * Constructs a <code>LoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginResponse} obj Optional instance to populate.
   * @return {module:model/LoginResponse} The populated <code>LoginResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('token')) {
        obj['token'] = ApiClient.convertToType(data['token'], 'String');
      }
      if (data.hasOwnProperty('ssoCode')) {
        obj['ssoCode'] = ApiClient.convertToType(data['ssoCode'], 'String');
      }
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} token
   */
  exports.prototype['token'] = undefined;
  /**
   * @member {String} ssoCode
   */
  exports.prototype['ssoCode'] = undefined;
  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;



  return exports;
}));


