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
    root.Persona.GlobalEntitlementAccess = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The GlobalEntitlementAccess model module.
   * @module model/GlobalEntitlementAccess
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>GlobalEntitlementAccess</code>.
   * @alias module:model/GlobalEntitlementAccess
   * @class
   * @param userUuid {String} 
   * @param startAt {String} 
   * @param endAt {String} 
   */
  var exports = function(userUuid, startAt, endAt) {
    var _this = this;

    _this['userUuid'] = userUuid;
    _this['startAt'] = startAt;
    _this['endAt'] = endAt;
  };

  /**
   * Constructs a <code>GlobalEntitlementAccess</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GlobalEntitlementAccess} obj Optional instance to populate.
   * @return {module:model/GlobalEntitlementAccess} The populated <code>GlobalEntitlementAccess</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('userUuid')) {
        obj['userUuid'] = ApiClient.convertToType(data['userUuid'], 'String');
      }
      if (data.hasOwnProperty('startAt')) {
        obj['startAt'] = ApiClient.convertToType(data['startAt'], 'String');
      }
      if (data.hasOwnProperty('endAt')) {
        obj['endAt'] = ApiClient.convertToType(data['endAt'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} userUuid
   */
  exports.prototype['userUuid'] = undefined;
  /**
   * @member {String} startAt
   */
  exports.prototype['startAt'] = undefined;
  /**
   * @member {String} endAt
   */
  exports.prototype['endAt'] = undefined;



  return exports;
}));

