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
[**usersUuidNewslettersGet**](UsersApi.md#usersUuidNewslettersGet) | **GET** /users/{uuid}/newsletters | Get newsletter subscriptions
[**usersUuidNewslettersPut**](UsersApi.md#usersUuidNewslettersPut) | **PUT** /users/{uuid}/newsletters | Update newsletter subscriptions
[**usersUuidPasswordPut**](UsersApi.md#usersUuidPasswordPut) | **PUT** /users/{uuid}/password | Set / Change user password
[**usersUuidPatch**](UsersApi.md#usersUuidPatch) | **PATCH** /users/{uuid} | Update a user
[**usersUuidPaymentsGet**](UsersApi.md#usersUuidPaymentsGet) | **GET** /users/{uuid}/payments | Get user&#39;s subscriptions and payment events
[**usersUuidSubscriptionsSubsnoAddressChangeDelete**](UsersApi.md#usersUuidSubscriptionsSubsnoAddressChangeDelete) | **DELETE** /users/{uuid}/subscriptions/{subsno}/addressChange | Delete temporary address change for subscription
[**usersUuidSubscriptionsSubsnoAddressChangePatch**](UsersApi.md#usersUuidSubscriptionsSubsnoAddressChangePatch) | **PATCH** /users/{uuid}/subscriptions/{subsno}/addressChange | Edit temporary address change dates of a subscription
[**usersUuidSubscriptionsSubsnoAddressChangePost**](UsersApi.md#usersUuidSubscriptionsSubsnoAddressChangePost) | **POST** /users/{uuid}/subscriptions/{subsno}/addressChange | Make a temporary address change for a subscription
[**usersUuidSubscriptionsSubsnoCancelPut**](UsersApi.md#usersUuidSubscriptionsSubsnoCancelPut) | **PUT** /users/{uuid}/subscriptions/{subsno}/cancel | Cancels user subscription
[**usersUuidSubscriptionsSubsnoPausePatch**](UsersApi.md#usersUuidSubscriptionsSubsnoPausePatch) | **PATCH** /users/{uuid}/subscriptions/{subsno}/pause | Edit pause duration
[**usersUuidSubscriptionsSubsnoPausePost**](UsersApi.md#usersUuidSubscriptionsSubsnoPausePost) | **POST** /users/{uuid}/subscriptions/{subsno}/pause | Pause users subscription
[**usersUuidSubscriptionsSubsnoReclamationPost**](UsersApi.md#usersUuidSubscriptionsSubsnoReclamationPost) | **POST** /users/{uuid}/subscriptions/{subsno}/reclamation | Create a new delivery reclamation for a subscription
[**usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet**](UsersApi.md#usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet) | **GET** /users/{uuid}/subscriptions/{subsno}/reclamations/{reclaimno} | Get a delivery reclamation
[**usersUuidSubscriptionsSubsnoUnpausePost**](UsersApi.md#usersUuidSubscriptionsSubsnoUnpausePost) | **POST** /users/{uuid}/subscriptions/{subsno}/unpause | Pause users subscription



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

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var opts = {
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
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
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
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
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
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
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidNewslettersGet

> NewsletterSubscriptions usersUuidNewslettersGet(uuid, opts)

Get newsletter subscriptions

Get list of newsletter subscriptions from mailchimp

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidNewslettersGet(uuid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**NewsletterSubscriptions**](NewsletterSubscriptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## usersUuidNewslettersPut

> NewsletterSubscriptions usersUuidNewslettersPut(uuid, body, opts)

Update newsletter subscriptions

Get list of newsletter subscriptions from mailchimp

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var body = new Persona.NewsletterSubscriptions(); // NewsletterSubscriptions | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidNewslettersPut(uuid, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **body** | [**NewsletterSubscriptions**](NewsletterSubscriptions.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**NewsletterSubscriptions**](NewsletterSubscriptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidPasswordPut

> User usersUuidPasswordPut(uuid, body, opts)

Set / Change user password

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var body = new Persona.UserUpdatePassword(); // UserUpdatePassword | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidPasswordPut(uuid, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **body** | [**UserUpdatePassword**](UserUpdatePassword.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
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
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidPaymentsGet

> [SubscriptionPayments] usersUuidPaymentsGet(uuid, opts)

Get user&#39;s subscriptions and payment events

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidPaymentsGet(uuid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**[SubscriptionPayments]**](SubscriptionPayments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoAddressChangeDelete

> Subscription usersUuidSubscriptionsSubsnoAddressChangeDelete(uuid, subsno, body, opts)

Delete temporary address change for subscription

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.DeleteTempAddressChangeDates(); // DeleteTempAddressChangeDates | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoAddressChangeDelete(uuid, subsno, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **body** | [**DeleteTempAddressChangeDates**](DeleteTempAddressChangeDates.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoAddressChangePatch

> Subscription usersUuidSubscriptionsSubsnoAddressChangePatch(uuid, subsno, body, opts)

Edit temporary address change dates of a subscription

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.TemporaryAddressChangeDates(); // TemporaryAddressChangeDates | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoAddressChangePatch(uuid, subsno, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **body** | [**TemporaryAddressChangeDates**](TemporaryAddressChangeDates.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoAddressChangePost

> Subscription usersUuidSubscriptionsSubsnoAddressChangePost(uuid, subsno, body, opts)

Make a temporary address change for a subscription

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.TemporaryAddressChange(); // TemporaryAddressChange | 
var opts = {
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoCancelPut

> Subscription usersUuidSubscriptionsSubsnoCancelPut(uuid, subsno, body, opts)

Cancels user subscription

The subscription continues to be valid until the end of the billing period. Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.CancelSubscriptionReason(); // CancelSubscriptionReason | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoCancelPut(uuid, subsno, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **body** | [**CancelSubscriptionReason**](CancelSubscriptionReason.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoPausePatch

> Subscription usersUuidSubscriptionsSubsnoPausePatch(uuid, subsno, body, opts)

Edit pause duration

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.SubscriptionPauseEdit(); // SubscriptionPauseEdit | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoPausePatch(uuid, subsno, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **body** | [**SubscriptionPauseEdit**](SubscriptionPauseEdit.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
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

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.SubscriptionPauseDates(); // SubscriptionPauseDates | 
var opts = {
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
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

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var body = new Persona.NewDeliveryReclamation(); // NewDeliveryReclamation | 
var opts = {
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
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

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var reclaimno = 56; // Number | 
var opts = {
  'authUser': null, // String | 
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
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**DeliveryReclamation**](DeliveryReclamation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## usersUuidSubscriptionsSubsnoUnpausePost

> Subscription usersUuidSubscriptionsSubsnoUnpausePost(uuid, subsno, opts)

Pause users subscription

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var subsno = 56; // Number | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersUuidSubscriptionsSubsnoUnpausePost(uuid, subsno, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**Subscription**](Subscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

