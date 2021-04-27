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
    define(['ApiClient', 'model/InlineResponse400', 'model/InlineResponse415', 'model/SearchQuery', 'model/SearchResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse400'), require('../model/InlineResponse415'), require('../model/SearchQuery'), require('../model/SearchResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.AdminApi = factory(root.Persona.ApiClient, root.Persona.InlineResponse400, root.Persona.InlineResponse415, root.Persona.SearchQuery, root.Persona.SearchResult);
  }
}(this, function(ApiClient, InlineResponse400, InlineResponse415, SearchQuery, SearchResult) {
  'use strict';

  /**
   * Admin service.
   * @module api/AdminApi
   * @version 1.3.0
   */

  /**
   * Constructs a new AdminApi. 
   * @alias module:api/AdminApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the adminSearchPost operation.
     * @callback module:api/AdminApi~adminSearchPostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SearchResult>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search for users
     * @param {module:model/SearchQuery} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/AdminApi~adminSearchPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SearchResult>}
     */
    this.adminSearchPost = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminSearchPost");
      }

      var pathParams = {
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
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [SearchResult];
      return this.apiClient.callApi(
        '/admin/search', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
