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
    define(['ApiClient', 'model/InlineResponse400InvalidRequestBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse400InvalidRequestBody'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.InlineResponse400 = factory(root.Persona.ApiClient, root.Persona.InlineResponse400InvalidRequestBody);
  }
}(this, function(ApiClient, InlineResponse400InvalidRequestBody) {
  'use strict';



  /**
   * The InlineResponse400 model module.
   * @module model/InlineResponse400
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse400</code>.
   * @alias module:model/InlineResponse400
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse400</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse400} obj Optional instance to populate.
   * @return {module:model/InlineResponse400} The populated <code>InlineResponse400</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('http_code')) {
        obj['http_code'] = ApiClient.convertToType(data['http_code'], 'Number');
      }
      if (data.hasOwnProperty('invalid_request_body')) {
        obj['invalid_request_body'] = InlineResponse400InvalidRequestBody.constructFromObject(data['invalid_request_body']);
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
   * @member {module:model/InlineResponse400InvalidRequestBody} invalid_request_body
   */
  exports.prototype['invalid_request_body'] = undefined;
  /**
   * @member {module:model/InlineResponse400.HttpStatusEnum} http_status
   */
  exports.prototype['http_status'] = undefined;


  /**
   * Allowed values for the <code>http_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HttpStatusEnum = {
    /**
     * value: "Bad request"
     * @const
     */
    "Bad request": "Bad request"  };


  return exports;
}));


