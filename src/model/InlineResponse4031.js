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
    define(['ApiClient', 'model/InlineResponse4031AccessTokenExpired'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse4031AccessTokenExpired'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.InlineResponse4031 = factory(root.Persona.ApiClient, root.Persona.InlineResponse4031AccessTokenExpired);
  }
}(this, function(ApiClient, InlineResponse4031AccessTokenExpired) {
  'use strict';



  /**
   * The InlineResponse4031 model module.
   * @module model/InlineResponse4031
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>InlineResponse4031</code>.
   * @alias module:model/InlineResponse4031
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse4031</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4031} obj Optional instance to populate.
   * @return {module:model/InlineResponse4031} The populated <code>InlineResponse4031</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('http_code')) {
        obj['http_code'] = ApiClient.convertToType(data['http_code'], 'Number');
      }
      if (data.hasOwnProperty('access_token_expired')) {
        obj['access_token_expired'] = InlineResponse4031AccessTokenExpired.constructFromObject(data['access_token_expired']);
      }
      if (data.hasOwnProperty('http_status')) {
        obj['http_status'] = ApiClient.convertToType(data['http_status'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} http_code
   */
  exports.prototype['http_code'] = undefined;
  /**
   * @member {module:model/InlineResponse4031AccessTokenExpired} access_token_expired
   */
  exports.prototype['access_token_expired'] = undefined;
  /**
   * @member {module:model/InlineResponse4031.HttpStatusEnum} http_status
   */
  exports.prototype['http_status'] = undefined;


  /**
   * Allowed values for the <code>http_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HttpStatusEnum = {
    /**
     * value: "Forbidden"
     * @const
     */
    "Forbidden": "Forbidden"  };


  return exports;
}));


