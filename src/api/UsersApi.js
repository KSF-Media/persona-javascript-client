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
    define(['ApiClient', 'model/DeliveryReclamation', 'model/DeliveryReclamationUpdate', 'model/GdprConsent', 'model/InlineResponse400', 'model/InlineResponse415', 'model/LegalConsent', 'model/LoginResponse', 'model/NewDeliveryReclamation', 'model/NewUser', 'model/Subscription', 'model/SubscriptionPauseDates', 'model/TemporaryAddressChange', 'model/User', 'model/UserUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DeliveryReclamation'), require('../model/DeliveryReclamationUpdate'), require('../model/GdprConsent'), require('../model/InlineResponse400'), require('../model/InlineResponse415'), require('../model/LegalConsent'), require('../model/LoginResponse'), require('../model/NewDeliveryReclamation'), require('../model/NewUser'), require('../model/Subscription'), require('../model/SubscriptionPauseDates'), require('../model/TemporaryAddressChange'), require('../model/User'), require('../model/UserUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.UsersApi = factory(root.Persona.ApiClient, root.Persona.DeliveryReclamation, root.Persona.DeliveryReclamationUpdate, root.Persona.GdprConsent, root.Persona.InlineResponse400, root.Persona.InlineResponse415, root.Persona.LegalConsent, root.Persona.LoginResponse, root.Persona.NewDeliveryReclamation, root.Persona.NewUser, root.Persona.Subscription, root.Persona.SubscriptionPauseDates, root.Persona.TemporaryAddressChange, root.Persona.User, root.Persona.UserUpdate);
  }
}(this, function(ApiClient, DeliveryReclamation, DeliveryReclamationUpdate, GdprConsent, InlineResponse400, InlineResponse415, LegalConsent, LoginResponse, NewDeliveryReclamation, NewUser, Subscription, SubscriptionPauseDates, TemporaryAddressChange, User, UserUpdate) {
  'use strict';

  /**
   * Users service.
   * @module api/UsersApi
   * @version 1.3.0
   */

  /**
   * Constructs a new UsersApi. 
   * @alias module:api/UsersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the usersPost operation.
     * @callback module:api/UsersApi~usersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/LoginResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new user.
     * @param {module:model/NewUser} body 
     * @param {module:api/UsersApi~usersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/LoginResponse}
     */
    this.usersPost = function(body, callback) {
      var postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling usersPost");
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
      var returnType = LoginResponse;
      return this.apiClient.callApi(
        '/users', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidEntitlementGet operation.
     * @callback module:api/UsersApi~usersUuidEntitlementGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<String>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get users entitlements.
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts.cacheControl 
     * @param {module:api/UsersApi~usersUuidEntitlementGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<String>}
     */
    this.usersUuidEntitlementGet = function(uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidEntitlementGet");
      }

      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'Cache-Control': opts['cacheControl']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = ['String'];
      return this.apiClient.callApi(
        '/users/{uuid}/entitlement', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidGdprPut operation.
     * @callback module:api/UsersApi~usersUuidGdprPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the GDPR consent settings for a given user.
     * Authorization header expects the following format ‘OAuth {token}’
     * @param {String} uuid 
     * @param {Array.<GdprConsent>} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/UsersApi~usersUuidGdprPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.usersUuidGdprPut = function(uuid, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidGdprPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling usersUuidGdprPut");
      }

      var pathParams = {
        'uuid': uuid
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
      var returnType = User;
      return this.apiClient.callApi(
        '/users/{uuid}/gdpr', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidGet operation.
     * @callback module:api/UsersApi~usersUuidGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user by UUID.
     * Authorization header expects the following format ‘OAuth {token}’
     * @param {String} uuid 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {String} opts.cacheControl 
     * @param {module:api/UsersApi~usersUuidGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.usersUuidGet = function(uuid, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidGet");
      }

      var pathParams = {
        'uuid': uuid
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'Authorization': opts['authorization'],
        'Cache-Control': opts['cacheControl']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = User;
      return this.apiClient.callApi(
        '/users/{uuid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidLegalPut operation.
     * @callback module:api/UsersApi~usersUuidLegalPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the legal consent settings for a given user.
     * Authorization header expects the following format ‘OAuth {token}’
     * @param {String} uuid 
     * @param {Array.<LegalConsent>} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/UsersApi~usersUuidLegalPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.usersUuidLegalPut = function(uuid, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidLegalPut");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling usersUuidLegalPut");
      }

      var pathParams = {
        'uuid': uuid
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
      var returnType = User;
      return this.apiClient.callApi(
        '/users/{uuid}/legal', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidPatch operation.
     * @callback module:api/UsersApi~usersUuidPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user
     * Authorization header expects the following format ‘OAuth {token}’
     * @param {String} uuid 
     * @param {module:model/UserUpdate} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/UsersApi~usersUuidPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.usersUuidPatch = function(uuid, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidPatch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling usersUuidPatch");
      }

      var pathParams = {
        'uuid': uuid
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
      var returnType = User;
      return this.apiClient.callApi(
        '/users/{uuid}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidSubscriptionsSubsnoAddressChangePost operation.
     * @callback module:api/UsersApi~usersUuidSubscriptionsSubsnoAddressChangePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Make a temporary address change for a subscription
     * @param {String} uuid 
     * @param {Number} subsno 
     * @param {module:model/TemporaryAddressChange} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/UsersApi~usersUuidSubscriptionsSubsnoAddressChangePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.usersUuidSubscriptionsSubsnoAddressChangePost = function(uuid, subsno, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidSubscriptionsSubsnoAddressChangePost");
      }
      // verify the required parameter 'subsno' is set
      if (subsno === undefined || subsno === null) {
        throw new Error("Missing the required parameter 'subsno' when calling usersUuidSubscriptionsSubsnoAddressChangePost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling usersUuidSubscriptionsSubsnoAddressChangePost");
      }

      var pathParams = {
        'uuid': uuid,
        'subsno': subsno
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
      var returnType = Subscription;
      return this.apiClient.callApi(
        '/users/{uuid}/subscriptions/{subsno}/addressChange', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidSubscriptionsSubsnoPausePost operation.
     * @callback module:api/UsersApi~usersUuidSubscriptionsSubsnoPausePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Subscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause users subscription
     * @param {String} uuid 
     * @param {Number} subsno 
     * @param {module:model/SubscriptionPauseDates} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/UsersApi~usersUuidSubscriptionsSubsnoPausePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Subscription}
     */
    this.usersUuidSubscriptionsSubsnoPausePost = function(uuid, subsno, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidSubscriptionsSubsnoPausePost");
      }
      // verify the required parameter 'subsno' is set
      if (subsno === undefined || subsno === null) {
        throw new Error("Missing the required parameter 'subsno' when calling usersUuidSubscriptionsSubsnoPausePost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling usersUuidSubscriptionsSubsnoPausePost");
      }

      var pathParams = {
        'uuid': uuid,
        'subsno': subsno
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
      var returnType = Subscription;
      return this.apiClient.callApi(
        '/users/{uuid}/subscriptions/{subsno}/pause', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidSubscriptionsSubsnoReclamationPost operation.
     * @callback module:api/UsersApi~usersUuidSubscriptionsSubsnoReclamationPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeliveryReclamation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new delivery reclamation for a subscription
     * @param {String} uuid 
     * @param {Number} subsno 
     * @param {module:model/NewDeliveryReclamation} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/UsersApi~usersUuidSubscriptionsSubsnoReclamationPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeliveryReclamation}
     */
    this.usersUuidSubscriptionsSubsnoReclamationPost = function(uuid, subsno, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidSubscriptionsSubsnoReclamationPost");
      }
      // verify the required parameter 'subsno' is set
      if (subsno === undefined || subsno === null) {
        throw new Error("Missing the required parameter 'subsno' when calling usersUuidSubscriptionsSubsnoReclamationPost");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling usersUuidSubscriptionsSubsnoReclamationPost");
      }

      var pathParams = {
        'uuid': uuid,
        'subsno': subsno
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
      var returnType = DeliveryReclamation;
      return this.apiClient.callApi(
        '/users/{uuid}/subscriptions/{subsno}/reclamation', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet operation.
     * @callback module:api/UsersApi~usersUuidSubscriptionsSubsnoReclamationsReclaimnoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeliveryReclamation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a delivery reclamation
     * @param {String} uuid 
     * @param {Number} subsno 
     * @param {Number} reclaimno 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/UsersApi~usersUuidSubscriptionsSubsnoReclamationsReclaimnoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeliveryReclamation}
     */
    this.usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet = function(uuid, subsno, reclaimno, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet");
      }
      // verify the required parameter 'subsno' is set
      if (subsno === undefined || subsno === null) {
        throw new Error("Missing the required parameter 'subsno' when calling usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet");
      }
      // verify the required parameter 'reclaimno' is set
      if (reclaimno === undefined || reclaimno === null) {
        throw new Error("Missing the required parameter 'reclaimno' when calling usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet");
      }

      var pathParams = {
        'uuid': uuid,
        'subsno': subsno,
        'reclaimno': reclaimno
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
      var contentTypes = [];
      var accepts = ['application/json;charset=utf-8'];
      var returnType = DeliveryReclamation;
      return this.apiClient.callApi(
        '/users/{uuid}/subscriptions/{subsno}/reclamations/{reclaimno}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch operation.
     * @callback module:api/UsersApi~usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatchCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeliveryReclamation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a delivery reclamation
     * @param {String} uuid 
     * @param {Number} subsno 
     * @param {Number} reclaimno 
     * @param {module:model/DeliveryReclamationUpdate} body 
     * @param {Object} opts Optional parameters
     * @param {String} opts.authorization 
     * @param {module:api/UsersApi~usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DeliveryReclamation}
     */
    this.usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch = function(uuid, subsno, reclaimno, body, opts, callback) {
      opts = opts || {};
      var postBody = body;
      // verify the required parameter 'uuid' is set
      if (uuid === undefined || uuid === null) {
        throw new Error("Missing the required parameter 'uuid' when calling usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch");
      }
      // verify the required parameter 'subsno' is set
      if (subsno === undefined || subsno === null) {
        throw new Error("Missing the required parameter 'subsno' when calling usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch");
      }
      // verify the required parameter 'reclaimno' is set
      if (reclaimno === undefined || reclaimno === null) {
        throw new Error("Missing the required parameter 'reclaimno' when calling usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch");
      }
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch");
      }

      var pathParams = {
        'uuid': uuid,
        'subsno': subsno,
        'reclaimno': reclaimno
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
      var returnType = DeliveryReclamation;
      return this.apiClient.callApi(
        '/users/{uuid}/subscriptions/{subsno}/reclamations/{reclaimno}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }
  };

  return exports;
}));
