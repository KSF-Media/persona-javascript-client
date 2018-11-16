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
    root.Persona.InlineResponse4032EmailAddressInUse = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The InlineResponse4032EmailAddressInUse model module.
   * @module model/InlineResponse4032EmailAddressInUse
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>InlineResponse4032EmailAddressInUse</code>.
   * @alias module:model/InlineResponse4032EmailAddressInUse
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>InlineResponse4032EmailAddressInUse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse4032EmailAddressInUse} obj Optional instance to populate.
   * @return {module:model/InlineResponse4032EmailAddressInUse} The populated <code>InlineResponse4032EmailAddressInUse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('merge_token')) {
        obj['merge_token'] = ApiClient.convertToType(data['merge_token'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('existing_provider')) {
        obj['existing_provider'] = ApiClient.convertToType(data['existing_provider'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} merge_token
   */
  exports.prototype['merge_token'] = undefined;
  /**
   * @member {module:model/InlineResponse4032EmailAddressInUse.DescriptionEnum} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} existing_provider
   */
  exports.prototype['existing_provider'] = undefined;


  /**
   * Allowed values for the <code>description</code> property.
   * @enum {String}
   * @readonly
   */
  exports.DescriptionEnum = {
    /**
     * value: "User has another record registered. Please merge the accounts."
     * @const
     */
    "User has another record registered. Please merge the accounts.": "User has another record registered. Please merge the accounts."  };


  return exports;
}));

