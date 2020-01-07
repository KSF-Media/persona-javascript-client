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
    define(['ApiClient', 'model/CodeForTokenData', 'model/ForgotPasswordData', 'model/ForgotPasswordResponse', 'model/InlineResponse400', 'model/InlineResponse415', 'model/TokenResponse', 'model/UpdatePasswordData'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CodeForTokenData'), require('../model/ForgotPasswordData'), require('../model/ForgotPasswordResponse'), require('../model/InlineResponse400'), require('../model/InlineResponse415'), require('../model/TokenResponse'), require('../model/UpdatePasswordData'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.AccountApi = factory(root.Persona.ApiClient, root.Persona.CodeForTokenData, root.Persona.ForgotPasswordData, root.Persona.ForgotPasswordResponse, root.Persona.InlineResponse400, root.Persona.InlineResponse415, root.Persona.TokenResponse, root.Persona.UpdatePasswordData);
  }
}(this, function(ApiClient, CodeForTokenData, ForgotPasswordData, ForgotPasswordResponse, InlineResponse400, InlineResponse415, TokenResponse, UpdatePasswordData) {
  'use strict';

  /**
   * Account service.
   * @module api/AccountApi
   * @version 1.3.0
   */

  /**
   * Constructs a new AccountApi. 
   * @alias module:api/AccountApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the accountCodeForTokenPost operation.
     * @callback module:api/AccountApi~accountCodeForTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TokenResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a password reset token
     * @param {module:model/CodeForTokenData} body 
     * @param {module:api/AccountApi~accountCodeForTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/TokenResponse}
     */
    this.accountCodeForTokenPost = function(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountCodeForTokenPost");
      }

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
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = TokenResponse;
      return this.apiClient.callApi(
        '/account/codeForToken', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountForgotPassPost operation.
     * @callback module:api/AccountApi~accountForgotPassPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ForgotPasswordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Forgot Password
     * @param {module:model/ForgotPasswordData} body 
     * @param {module:api/AccountApi~accountForgotPassPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ForgotPasswordResponse}
     */
    this.accountForgotPassPost = function(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountForgotPassPost");
      }

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
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ForgotPasswordResponse;
      return this.apiClient.callApi(
        '/account/forgotPass', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the accountResetForgottenPasswordPost operation.
     * @callback module:api/AccountApi~accountResetForgottenPasswordPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ForgotPasswordResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reset a forgotten password with a token
     * @param {module:model/UpdatePasswordData} body 
     * @param {module:api/AccountApi~accountResetForgottenPasswordPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ForgotPasswordResponse}
     */
    this.accountResetForgottenPasswordPost = function(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling accountResetForgottenPasswordPost");
      }

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
      var contentTypes = ['application/json;charset=utf-8'];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ForgotPasswordResponse;
      return this.apiClient.callApi(
        '/account/resetForgottenPassword', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
