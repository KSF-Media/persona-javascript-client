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
 * The GdprConsent model module.
 * @module model/GdprConsent
 * @version 1.3.0
 */
class GdprConsent {
    /**
     * Constructs a new <code>GdprConsent</code>.
     * @alias module:model/GdprConsent
     * @param brand {String} 
     * @param consentKey {String} 
     * @param value {Boolean} 
     */
    constructor(brand, consentKey, value) { 
        
        GdprConsent.initialize(this, brand, consentKey, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, brand, consentKey, value) { 
        obj['brand'] = brand;
        obj['consentKey'] = consentKey;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>GdprConsent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdprConsent} obj Optional instance to populate.
     * @return {module:model/GdprConsent} The populated <code>GdprConsent</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GdprConsent();

            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('consentKey')) {
                obj['consentKey'] = ApiClient.convertToType(data['consentKey'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} brand
 */
GdprConsent.prototype['brand'] = undefined;

/**
 * @member {String} consentKey
 */
GdprConsent.prototype['consentKey'] = undefined;

/**
 * @member {Boolean} value
 */
GdprConsent.prototype['value'] = undefined;






export default GdprConsent;

