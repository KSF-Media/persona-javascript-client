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
    define(['ApiClient', 'model/InlineResponse415UnsupportedMediaType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse415UnsupportedMediaType'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.InlineResponse415 = factory(root.Persona.ApiClient, root.Persona.InlineResponse415UnsupportedMediaType);
  }
}(this, function(ApiClient, InlineResponse415UnsupportedMediaType) {
  'use strict';



  /**
   * The InlineResponse415 model module.
   * @module model/InlineResponse415
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse415</code>.
   * @alias module:model/InlineResponse415
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse415</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse415} obj Optional instance to populate.
   * @return {module:model/InlineResponse415} The populated <code>InlineResponse415</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('http_code')) {
        obj['http_code'] = ApiClient.convertToType(data['http_code'], 'Number');
      }
      if (data.hasOwnProperty('unsupported_media_type')) {
        obj['unsupported_media_type'] = InlineResponse415UnsupportedMediaType.constructFromObject(data['unsupported_media_type']);
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
   * @member {module:model/InlineResponse415UnsupportedMediaType} unsupported_media_type
   */
  exports.prototype['unsupported_media_type'] = undefined;
  /**
   * @member {module:model/InlineResponse415.HttpStatusEnum} http_status
   */
  exports.prototype['http_status'] = undefined;


  /**
   * Allowed values for the <code>http_status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.HttpStatusEnum = {
    /**
     * value: "Unsupported media type"
     * @const
     */
    "Unsupported media type": "Unsupported media type"  };


  return exports;
}));


