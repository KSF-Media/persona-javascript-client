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
    root.PersonaClient.ActiveDays = factory(root.PersonaClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The ActiveDays model module.
   * @module model/ActiveDays
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>ActiveDays</code>.
   * @alias module:model/ActiveDays
   * @class
   * @param mon {Boolean} 
   * @param tue {Boolean} 
   * @param wed {Boolean} 
   * @param thu {Boolean} 
   * @param fri {Boolean} 
   * @param sat {Boolean} 
   * @param sun {Boolean} 
   */
  var exports = function(mon, tue, wed, thu, fri, sat, sun) {
    var _this = this;

    _this['mon'] = mon;
    _this['tue'] = tue;
    _this['wed'] = wed;
    _this['thu'] = thu;
    _this['fri'] = fri;
    _this['sat'] = sat;
    _this['sun'] = sun;
  };

  /**
   * Constructs a <code>ActiveDays</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActiveDays} obj Optional instance to populate.
   * @return {module:model/ActiveDays} The populated <code>ActiveDays</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('mon')) {
        obj['mon'] = ApiClient.convertToType(data['mon'], 'Boolean');
      }
      if (data.hasOwnProperty('tue')) {
        obj['tue'] = ApiClient.convertToType(data['tue'], 'Boolean');
      }
      if (data.hasOwnProperty('wed')) {
        obj['wed'] = ApiClient.convertToType(data['wed'], 'Boolean');
      }
      if (data.hasOwnProperty('thu')) {
        obj['thu'] = ApiClient.convertToType(data['thu'], 'Boolean');
      }
      if (data.hasOwnProperty('fri')) {
        obj['fri'] = ApiClient.convertToType(data['fri'], 'Boolean');
      }
      if (data.hasOwnProperty('sat')) {
        obj['sat'] = ApiClient.convertToType(data['sat'], 'Boolean');
      }
      if (data.hasOwnProperty('sun')) {
        obj['sun'] = ApiClient.convertToType(data['sun'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} mon
   */
  exports.prototype['mon'] = undefined;
  /**
   * @member {Boolean} tue
   */
  exports.prototype['tue'] = undefined;
  /**
   * @member {Boolean} wed
   */
  exports.prototype['wed'] = undefined;
  /**
   * @member {Boolean} thu
   */
  exports.prototype['thu'] = undefined;
  /**
   * @member {Boolean} fri
   */
  exports.prototype['fri'] = undefined;
  /**
   * @member {Boolean} sat
   */
  exports.prototype['sat'] = undefined;
  /**
   * @member {Boolean} sun
   */
  exports.prototype['sun'] = undefined;



  return exports;
}));


