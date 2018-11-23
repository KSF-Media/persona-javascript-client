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
    root.PersonaClient.InlineResponse400InvalidRequestBody = factory(root.PersonaClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InlineResponse400InvalidRequestBody model module.
   * @module model/InlineResponse400InvalidRequestBody
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse400InvalidRequestBody</code>.
   * @alias module:model/InlineResponse400InvalidRequestBody
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse400InvalidRequestBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse400InvalidRequestBody} obj Optional instance to populate.
   * @return {module:model/InlineResponse400InvalidRequestBody} The populated <code>InlineResponse400InvalidRequestBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse400InvalidRequestBody.DescriptionEnum} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;


  /**
   * Allowed values for the <code>description</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DescriptionEnum = {
    /**
     * value: "Couldn't parse the request body."
     * @const
     */
    "Couldn&#39;t parse the request body.": "Couldn't parse the request body."  };


  return exports;
}));


