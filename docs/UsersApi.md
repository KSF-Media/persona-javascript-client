# Persona.UsersApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Create a new user.
[**usersTemporaryPost**](UsersApi.md#usersTemporaryPost) | **POST** /users/temporary | Create a new user with email.
[**usersUuidEntitlementGet**](UsersApi.md#usersUuidEntitlementGet) | **GET** /users/{uuid}/entitlement | Get users entitlements.
[**usersUuidGdprPut**](UsersApi.md#usersUuidGdprPut) | **PUT** /users/{uuid}/gdpr | Updates the GDPR consent settings for a given user.
[**usersUuidGet**](UsersApi.md#usersUuidGet) | **GET** /users/{uuid} | Get user by UUID.
[**usersUuidLegalPut**](UsersApi.md#usersUuidLegalPut) | **PUT** /users/{uuid}/legal | Updates the legal consent settings for a given user.
[**usersUuidPatch**](UsersApi.md#usersUuidPatch) | **PATCH** /users/{uuid} | Update a user
[**usersUuidSubscriptionsSubsnoAddressChangePost**](UsersApi.md#usersUuidSubscriptionsSubsnoAddressChangePost) | **POST** /users/{uuid}/subscriptions/{subsno}/addressChange | Make a temporary address change for a subscription
[**usersUuidSubscriptionsSubsnoPausePost**](UsersApi.md#usersUuidSubscriptionsSubsnoPausePost) | **POST** /users/{uuid}/subscriptions/{subsno}/pause | Pause users subscription
[**usersUuidSubscriptionsSubsnoReclamationPost**](UsersApi.md#usersUuidSubscriptionsSubsnoReclamationPost) | **POST** /users/{uuid}/subscriptions/{subsno}/reclamation | Create a new delivery reclamation for a subscription
[**usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet**](UsersApi.md#usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet) | **GET** /users/{uuid}/subscriptions/{subsno}/reclamations/{reclaimno} | Get a delivery reclamation
[**usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch**](UsersApi.md#usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch) | **PATCH** /users/{uuid}/subscriptions/{subsno}/reclamations/{reclaimno} | Update a delivery reclamation



## usersPost

> LoginResponse usersPost(body)

Create a new user.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var body = new Persona.NewUser(); // NewUser | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewUser**](NewUser.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersTemporaryPost

> LoginResponse usersTemporaryPost(body)

Create a new user with email.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var body = new Persona.NewTemporaryUser(); // NewTemporaryUser | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersTemporaryPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**NewTemporaryUser**](NewTemporaryUser.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidEntitlementGet

> [String] usersUuidEntitlementGet(uuid, opts)

Get users entitlements.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var opts = {
  'authorization': "authorization_example", // String | 
  'cacheControl': "cacheControl_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidEntitlementGet(uuid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authorization** | **String**|  | [optional] 
 **cacheControl** | **String**|  | [optional] 

### Return type

**[String]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## usersUuidGdprPut

> User usersUuidGdprPut(uuid, body, opts)

Updates the GDPR consent settings for a given user.

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var body = [new Persona.GdprConsent()]; // [GdprConsent] | 
var opts = {
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidGdprPut(uuid, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **body** | [**[GdprConsent]**](Array.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidGet

> User usersUuidGet(uuid, opts)

Get user by UUID.

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var opts = {
  'authorization': "authorization_example", // String | 
  'cacheControl': "cacheControl_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidGet(uuid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authorization** | **String**|  | [optional] 
 **cacheControl** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## usersUuidLegalPut

> User usersUuidLegalPut(uuid, body, opts)

Updates the legal consent settings for a given user.

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var body = [new Persona.LegalConsent()]; // [LegalConsent] | 
var opts = {
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidLegalPut(uuid, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **body** | [**[LegalConsent]**](Array.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidPatch

> User usersUuidPatch(uuid, body, opts)

Update a user

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var body = new Persona.UserUpdate(); // UserUpdate | 
var opts = {
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidPatch(uuid, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **body** | [**UserUpdate**](UserUpdate.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoAddressChangePost

> Subscription usersUuidSubscriptionsSubsnoAddressChangePost(uuid, subsno, body, opts)

Make a temporary address change for a subscription

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.TemporaryAddressChange(); // TemporaryAddressChange | 
var opts = {
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoAddressChangePost(uuid, subsno, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **body** | [**TemporaryAddressChange**](TemporaryAddressChange.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoPausePost

> Subscription usersUuidSubscriptionsSubsnoPausePost(uuid, subsno, body, opts)

Pause users subscription

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.SubscriptionPauseDates(); // SubscriptionPauseDates | 
var opts = {
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoPausePost(uuid, subsno, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **body** | [**SubscriptionPauseDates**](SubscriptionPauseDates.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoReclamationPost

> DeliveryReclamation usersUuidSubscriptionsSubsnoReclamationPost(uuid, subsno, body, opts)

Create a new delivery reclamation for a subscription

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.NewDeliveryReclamation(); // NewDeliveryReclamation | 
var opts = {
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoReclamationPost(uuid, subsno, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **body** | [**NewDeliveryReclamation**](NewDeliveryReclamation.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**DeliveryReclamation**](DeliveryReclamation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet

> DeliveryReclamation usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet(uuid, subsno, reclaimno, opts)

Get a delivery reclamation

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var reclaimno = 56; // Number | 
var opts = {
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet(uuid, subsno, reclaimno, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **reclaimno** | **Number**|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**DeliveryReclamation**](DeliveryReclamation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch

> DeliveryReclamation usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch(uuid, subsno, reclaimno, body, opts)

Update a delivery reclamation

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var reclaimno = 56; // Number | 
var body = new Persona.DeliveryReclamationUpdate(); // DeliveryReclamationUpdate | 
var opts = {
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoReclamationsReclaimnoPatch(uuid, subsno, reclaimno, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **reclaimno** | **Number**|  | 
 **body** | [**DeliveryReclamationUpdate**](DeliveryReclamationUpdate.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**DeliveryReclamation**](DeliveryReclamation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8

