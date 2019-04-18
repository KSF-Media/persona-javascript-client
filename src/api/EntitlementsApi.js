/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.3.0
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
    root.Persona.EntitlementsApi = factory(root.Persona.ApiClient);
  }
}(this, function(ApiClient) {
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
