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
    root.Persona.NewUser = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';



  /**
   * The NewUser model module.
   * @module model/NewUser
   * @version 1.2.0
   */

  /**
   * Constructs a new <code>NewUser</code>.
   * @alias module:model/NewUser
   * @class
   * @param firstName {String} 
   * @param lastName {String} 
   * @param emailAddress {String} 
   * @param password {String} 
   * @param confirmPassword {String} 
   */
  var exports = function(firstName, lastName, emailAddress, password, confirmPassword) {
    var _this = this;

    _this['firstName'] = firstName;
    _this['lastName'] = lastName;
    _this['emailAddress'] = emailAddress;
    _this['password'] = password;
    _this['confirmPassword'] = confirmPassword;
  };

  /**
   * Constructs a <code>NewUser</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewUser} obj Optional instance to populate.
   * @return {module:model/NewUser} The populated <code>NewUser</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('emailAddress')) {
        obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('confirmPassword')) {
        obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
      }
      if (data.hasOwnProperty('streetAddress')) {
        obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], 'String');
      }
      if (data.hasOwnProperty('zipCode')) {
        obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
      }
      if (data.hasOwnProperty('city')) {
        obj['city'] = ApiClient.convertToType(data['city'], 'String');
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {String} emailAddress
   */
  exports.prototype['emailAddress'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {String} confirmPassword
   */
  exports.prototype['confirmPassword'] = undefined;
  /**
   * @member {String} streetAddress
   */
  exports.prototype['streetAddress'] = undefined;
  /**
   * @member {String} zipCode
   */
  exports.prototype['zipCode'] = undefined;
  /**
   * @member {String} city
   */
  exports.prototype['city'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;



  return exports;
}));


