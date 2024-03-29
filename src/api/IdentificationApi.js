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
    root.Persona.IdentificationApi = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Identification service.
   * @module api/IdentificationApi
   * @version 1.3.0
   */

  /**
   * Constructs a new IdentificationApi. 
   * @alias module:api/IdentificationApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the identificationLoginGet operation.
     * @callback module:api/IdentificationApi~identificationLoginGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Authenticate with OpenID Connect
     * @param {Object} opts Optional parameters
     * @param {String} opts.monitor 
     * @param {module:api/IdentificationApi~identificationLoginGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.identificationLoginGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
        'monitor': opts['monitor'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/identification/login', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the identificationLoginMonitorGet operation.
     * @callback module:api/IdentificationApi~identificationLoginMonitorGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get token for off band response login flow monitor
     * @param {module:api/IdentificationApi~identificationLoginMonitorGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.identificationLoginMonitorGet = function(callback) {
      var postBody = null;

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/identification/login/monitor', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the identificationLoginReturnGet operation.
     * @callback module:api/IdentificationApi~identificationLoginReturnGetCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Redirect endpoint for OpenID Connect
     * @param {String} code 
     * @param {String} state 
     * @param {File} cookie 
     * @param {File} cookie2 
     * @param {module:api/IdentificationApi~identificationLoginReturnGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    this.identificationLoginReturnGet = function(code, state, cookie, cookie2, callback) {
      var postBody = null;
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling identificationLoginReturnGet");
      }
      // verify the required parameter 'state' is set
      if (state === undefined || state === null) {
        throw new Error("Missing the required parameter 'state' when calling identificationLoginReturnGet");
      }
      // verify the required parameter 'cookie' is set
      if (cookie === undefined || cookie === null) {
        throw new Error("Missing the required parameter 'cookie' when calling identificationLoginReturnGet");
      }
      // verify the required parameter 'cookie2' is set
      if (cookie2 === undefined || cookie2 === null) {
        throw new Error("Missing the required parameter 'cookie2' when calling identificationLoginReturnGet");
      }

      var pathParams = {
      };
      var queryParams = {
        'code': code,
        'state': state,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'cookie': cookie,
        'cookie': cookie2
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html;charset=utf-8'];
      var returnType = 'String';
      return this.apiClient.callApi(
        '/identification/login/return', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the identificationUserStampUuidPost operation.
     * @callback module:api/IdentificationApi~identificationUserStampUuidPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Query when the strong identification was last updated
     * Authorization header expects the following format ‘OAuth {token}’
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/IdentificationApi~identificationUserStampUuidPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    this.identificationUserStampUuidPost = function(uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling identificationUserStampUuidPost");
      }

      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'AuthUser': opts['authUser'],
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = 'String';
      return this.apiClient.callApi(
        '/identification/user/stamp/{uuid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
