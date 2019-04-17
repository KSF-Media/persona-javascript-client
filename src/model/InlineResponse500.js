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
import InlineResponse500InternalServerError from './InlineResponse500InternalServerError';

/**
 * The InlineResponse500 model module.
 * @module model/InlineResponse500
 * @version 1.3.0
 */
class InlineResponse500 {
    /**
     * Constructs a new <code>InlineResponse500</code>.
     * @alias module:model/InlineResponse500
     */
    constructor() { 
        
        InlineResponse500.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse500</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse500} obj Optional instance to populate.
     * @return {module:model/InlineResponse500} The populated <code>InlineResponse500</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse500();

            if (data.hasOwnProperty('http_code')) {
                obj['http_code'] = ApiClient.convertToType(data['http_code'], 'Number');
            }
            if (data.hasOwnProperty('http_status')) {
                obj['http_status'] = ApiClient.convertToType(data['http_status'], 'String');
            }
            if (data.hasOwnProperty('internal_server_error')) {
                obj['internal_server_error'] = InlineResponse500InternalServerError.constructFromObject(data['internal_server_error']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} http_code
 */
InlineResponse500.prototype['http_code'] = undefined;

/**
 * @member {module:model/InlineResponse500.HttpStatusEnum} http_status
 */
InlineResponse500.prototype['http_status'] = undefined;

/**
 * @member {module:model/InlineResponse500InternalServerError} internal_server_error
 */
InlineResponse500.prototype['internal_server_error'] = undefined;





/**
 * Allowed values for the <code>http_status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse500['HttpStatusEnum'] = {

    /**
     * value: "Internal server error"
     * @const
     */
    "Internal server error": "Internal server error"
};



export default InlineResponse500;

