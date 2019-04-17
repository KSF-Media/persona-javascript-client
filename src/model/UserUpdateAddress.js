/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UserUpdateAddress model module.
 * @module model/UserUpdateAddress
 * @version 1.3.0
 */
class UserUpdateAddress {
    /**
     * Constructs a new <code>UserUpdateAddress</code>.
     * @alias module:model/UserUpdateAddress
     * @param countryCode {String} 
     * @param zipCode {String} 
     * @param streetAddress {String} 
     */
    constructor(countryCode, zipCode, streetAddress) { 
        
        UserUpdateAddress.initialize(this, countryCode, zipCode, streetAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, countryCode, zipCode, streetAddress) { 
        obj['countryCode'] = countryCode;
        obj['zipCode'] = zipCode;
        obj['streetAddress'] = streetAddress;
    }

    /**
     * Constructs a <code>UserUpdateAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserUpdateAddress} obj Optional instance to populate.
     * @return {module:model/UserUpdateAddress} The populated <code>UserUpdateAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserUpdateAddress();

            if (data.hasOwnProperty('countryCode')) {
                obj['countryCode'] = ApiClient.convertToType(data['countryCode'], 'String');
            }
            if (data.hasOwnProperty('zipCode')) {
                obj['zipCode'] = ApiClient.convertToType(data['zipCode'], 'String');
            }
            if (data.hasOwnProperty('streetAddress')) {
                obj['streetAddress'] = ApiClient.convertToType(data['streetAddress'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} countryCode
 */
UserUpdateAddress.prototype['countryCode'] = undefined;

/**
 * @member {String} zipCode
 */
UserUpdateAddress.prototype['zipCode'] = undefined;

/**
 * @member {String} streetAddress
 */
UserUpdateAddress.prototype['streetAddress'] = undefined;






export default UserUpdateAddress;

