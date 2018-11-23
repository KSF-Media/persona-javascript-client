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
    if (!root.PersonaClient) {
      root.PersonaClient = {};
    }
    root.PersonaClient.LoginDataSSO = factory(root.PersonaClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The LoginDataSSO model module.
   * @module model/LoginDataSSO
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>LoginDataSSO</code>.
   * @alias module:model/LoginDataSSO
   * @class
   * @param uuid {String} 
   * @param accessToken {String} 
   */
  var exports = function(uuid, accessToken) {
    var _this = this;

    _this['uuid'] = uuid;
    _this['accessToken'] = accessToken;
  };

  /**
   * Constructs a <code>LoginDataSSO</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginDataSSO} obj Optional instance to populate.
   * @return {module:model/LoginDataSSO} The populated <code>LoginDataSSO</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('uuid')) {
        obj['uuid'] = ApiClient.convertToType(data['uuid'], 'String');
      }
      if (data.hasOwnProperty('accessToken')) {
        obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} uuid
   */
  exports.prototype['uuid'] = undefined;
  /**
   * @member {String} accessToken
   */
  exports.prototype['accessToken'] = undefined;



  return exports;
}));


