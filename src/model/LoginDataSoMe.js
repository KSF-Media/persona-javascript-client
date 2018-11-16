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
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.LoginDataSoMe = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The LoginDataSoMe model module.
   * @module model/LoginDataSoMe
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>LoginDataSoMe</code>.
   * @alias module:model/LoginDataSoMe
   * @class
   * @param provider {String} 
   * @param someToken {String} 
   */
  var exports = function(provider, someToken) {
    var _this = this;

    _this['provider'] = provider;
    _this['someToken'] = someToken;
  };

  /**
   * Constructs a <code>LoginDataSoMe</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginDataSoMe} obj Optional instance to populate.
   * @return {module:model/LoginDataSoMe} The populated <code>LoginDataSoMe</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('provider')) {
        obj['provider'] = ApiClient.convertToType(data['provider'], 'String');
      }
      if (data.hasOwnProperty('someToken')) {
        obj['someToken'] = ApiClient.convertToType(data['someToken'], 'String');
      }
      if (data.hasOwnProperty('mergeToken')) {
        obj['mergeToken'] = ApiClient.convertToType(data['mergeToken'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} provider
   */
  exports.prototype['provider'] = undefined;
  /**
   * @member {String} someToken
   */
  exports.prototype['someToken'] = undefined;
  /**
   * @member {String} mergeToken
   */
  exports.prototype['mergeToken'] = undefined;



  return exports;
}));

