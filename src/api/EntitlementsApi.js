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
    define(['ApiClient', 'model/GlobalEntitlementAccess', 'model/InlineResponse400', 'model/InlineResponse415'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/GlobalEntitlementAccess'), require('../model/InlineResponse400'), require('../model/InlineResponse415'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.EntitlementsApi = factory(root.Persona.ApiClient, root.Persona.GlobalEntitlementAccess, root.Persona.InlineResponse400, root.Persona.InlineResponse415);
  }
}(this, function(ApiClient, GlobalEntitlementAccess, InlineResponse400, InlineResponse415) {
  'use strict';

  /**
   * Entitlements service.
   * @module api/EntitlementsApi
   * @version 1.3.0
   */

  /**
   * Constructs a new EntitlementsApi. 
   * @alias module:api/EntitlementsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the entitlementsAllowPost operation.
     * @callback module:api/EntitlementsApi~entitlementsAllowPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/GlobalEntitlementAccess} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/EntitlementsApi~entitlementsAllowPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */
    this.entitlementsAllowPost = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling entitlementsAllowPost");
      }

      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [Object];
      return this.apiClient.callApi(
        '/entitlements/allow', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the entitlementsGet operation.
     * @callback module:api/EntitlementsApi~entitlementsGetCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {String: [String]}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all entitlements
     * @param {module:api/EntitlementsApi~entitlementsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object.<String, {String: [String]}>}
     */
    this.entitlementsGet = function(callback) {
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
      var accepts = ['application/json;charset=utf-8'];
      var returnType = {'String': ['String']};
      return this.apiClient.callApi(
        '/entitlements', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
