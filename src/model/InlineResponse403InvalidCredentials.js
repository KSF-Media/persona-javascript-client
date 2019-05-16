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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.InlineResponse403InvalidCredentials = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InlineResponse403InvalidCredentials model module.
   * @module model/InlineResponse403InvalidCredentials
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>InlineResponse403InvalidCredentials</code>.
   * @alias module:model/InlineResponse403InvalidCredentials
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse403InvalidCredentials</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse403InvalidCredentials} obj Optional instance to populate.
   * @return {module:model/InlineResponse403InvalidCredentials} The populated <code>InlineResponse403InvalidCredentials</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/InlineResponse403InvalidCredentials.DescriptionEnum} description
   */
  exports.prototype['description'] = undefined;


  /**
   * Allowed values for the <code>description</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DescriptionEnum = {
    /**
     * value: "Wrong username or password"
     * @const
     */
    "Wrong username or password": "Wrong username or password"  };


  return exports;
}));


