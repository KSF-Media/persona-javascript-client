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
    root.Persona.InlineResponse4032OauthFailed = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InlineResponse4032OauthFailed model module.
   * @module model/InlineResponse4032OauthFailed
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse4032OauthFailed</code>.
   * @alias module:model/InlineResponse4032OauthFailed
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse4032OauthFailed</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4032OauthFailed} obj Optional instance to populate.
   * @return {module:model/InlineResponse4032OauthFailed} The populated <code>InlineResponse4032OauthFailed</code> instance.
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
   * @member {module:model/InlineResponse4032OauthFailed.DescriptionEnum} description
   */
  exports.prototype['description'] = undefined;


  /**
   * Allowed values for the <code>description</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DescriptionEnum = {
    /**
     * value: "Something wrong happened while authenticating Janrain with OAuth"
     * @const
     */
    "Something wrong happened while authenticating Janrain with OAuth": "Something wrong happened while authenticating Janrain with OAuth"  };


  return exports;
}));


