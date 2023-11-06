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
    define(['ApiClient', 'model/AdminNewUser', 'model/FreePass', 'model/FreePassInput', 'model/InlineResponse400', 'model/InlineResponse415', 'model/LoginResponse', 'model/SearchQuery', 'model/SearchResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AdminNewUser'), require('../model/FreePass'), require('../model/FreePassInput'), require('../model/InlineResponse400'), require('../model/InlineResponse415'), require('../model/LoginResponse'), require('../model/SearchQuery'), require('../model/SearchResult'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.AdminApi = factory(root.Persona.ApiClient, root.Persona.AdminNewUser, root.Persona.FreePass, root.Persona.FreePassInput, root.Persona.InlineResponse400, root.Persona.InlineResponse415, root.Persona.LoginResponse, root.Persona.SearchQuery, root.Persona.SearchResult);
  }
}(this, function(ApiClient, AdminNewUser, FreePass, FreePassInput, InlineResponse400, InlineResponse415, LoginResponse, SearchQuery, SearchResult) {
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
     * Callback function to receive the result of the adminFreePassDelete operation.
     * @callback module:api/AdminApi~adminFreePassDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revokes an existing free pass
     * Marks a free pass as being revoked so that it can't be used anymore. Currently, revoked free passes can't be reinstated through Persona API (though it's possible to do so with an SQL query).
     * @param {String} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/AdminApi~adminFreePassDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.adminFreePassDelete = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminFreePassDelete");
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
      var accepts = [];
      var returnType = null;
      return this.apiClient.callApi(
        '/admin/free-pass', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the adminFreePassPost operation.
     * @callback module:api/AdminApi~adminFreePassPostCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a free pass to an article
     * Free passes can be used to temporarily bypass the paywall for individual articles.
     * @param {module:model/FreePassInput} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/AdminApi~adminFreePassPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */
    this.adminFreePassPost = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminFreePassPost");
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
      var returnType = 'String';
      return this.apiClient.callApi(
        '/admin/free-pass', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the adminFreePassesGet operation.
     * @callback module:api/AdminApi~adminFreePassesGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FreePass>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists all free passes
     * This end point returns the list of all free passes, including those that have been expired or revoked.
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/AdminApi~adminFreePassesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/FreePass>}
     */
    this.adminFreePassesGet = function(opts, callback) {
      opts = opts || {};
      var postBody = null;

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
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = [FreePass];
      return this.apiClient.callApi(
        '/admin/free-passes', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

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

    /**
     * Callback function to receive the result of the adminTransferPassiveSubscribersListidPost operation.
     * @callback module:api/AdminApi~adminTransferPassiveSubscribersListidPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Transfers passive customers from Kayak to Mailchimp
     * Passive subscribers/members/customers are users who don't have active entitlements and haven't opted out from email marketing. For the given list (audience) ID, this endpoint transfers the list of passive subscribers from Kayak to Mailchimp (via Faro).
     * @param {String} listid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/AdminApi~adminTransferPassiveSubscribersListidPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.adminTransferPassiveSubscribersListidPost = function(listid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'listid' is set
      if (listid === undefined || listid === null) {
        throw new Error("Missing the required parameter 'listid' when calling adminTransferPassiveSubscribersListidPost");
      }

      var pathParams = {
        'listid': listid
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
      var returnType = Object;
      return this.apiClient.callApi(
        '/admin/transfer-passive-subscribers/{listid}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the adminUserPost operation.
     * @callback module:api/AdminApi~adminUserPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new user with admin options.
     * @param {module:model/AdminNewUser} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authUser 
     * @param {String} opts.authorization 
     * @param {module:api/AdminApi~adminUserPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoginResponse}
     */
    this.adminUserPost = function(body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling adminUserPost");
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
      var returnType = LoginResponse;
      return this.apiClient.callApi(
        '/admin/user', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
