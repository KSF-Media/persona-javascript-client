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
import InlineResponse403InvalidCredentials from './InlineResponse403InvalidCredentials';

/**
 * The InlineResponse403 model module.
 * @module model/InlineResponse403
 * @version 1.3.0
 */
class InlineResponse403 {
    /**
     * Constructs a new <code>InlineResponse403</code>.
     * @alias module:model/InlineResponse403
     */
    constructor() { 
        
        InlineResponse403.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InlineResponse403</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse403} obj Optional instance to populate.
     * @return {module:model/InlineResponse403} The populated <code>InlineResponse403</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse403();

            if (data.hasOwnProperty('http_code')) {
                obj['http_code'] = ApiClient.convertToType(data['http_code'], 'Number');
            }
            if (data.hasOwnProperty('http_status')) {
                obj['http_status'] = ApiClient.convertToType(data['http_status'], 'String');
            }
            if (data.hasOwnProperty('invalid_credentials')) {
                obj['invalid_credentials'] = InlineResponse403InvalidCredentials.constructFromObject(data['invalid_credentials']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} http_code
 */
InlineResponse403.prototype['http_code'] = undefined;

/**
 * @member {module:model/InlineResponse403.HttpStatusEnum} http_status
 */
InlineResponse403.prototype['http_status'] = undefined;

/**
 * @member {module:model/InlineResponse403InvalidCredentials} invalid_credentials
 */
InlineResponse403.prototype['invalid_credentials'] = undefined;





/**
 * Allowed values for the <code>http_status</code> property.
 * @enum {String}
 * @readonly
 */
InlineResponse403['HttpStatusEnum'] = {

    /**
     * value: "Forbidden"
     * @const
     */
    "Forbidden": "Forbidden"
};



export default InlineResponse403;

