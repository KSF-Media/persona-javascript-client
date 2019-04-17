# Persona.UsersApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersPost**](UsersApi.md#usersPost) | **POST** /users | Create a new user.
[**usersUuidEntitlementGet**](UsersApi.md#usersUuidEntitlementGet) | **GET** /users/{uuid}/entitlement | Get users entitlements.
[**usersUuidGdprPut**](UsersApi.md#usersUuidGdprPut) | **PUT** /users/{uuid}/gdpr | Updates the GDPR consent settings for a given user.
[**usersUuidGet**](UsersApi.md#usersUuidGet) | **GET** /users/{uuid} | Get user by UUID.
[**usersUuidLegalPut**](UsersApi.md#usersUuidLegalPut) | **PUT** /users/{uuid}/legal | Updates the legal consent settings for a given user.
[**usersUuidPatch**](UsersApi.md#usersUuidPatch) | **PATCH** /users/{uuid} | Update a user
[**usersUuidSubscriptionsSubsnoPausePost**](UsersApi.md#usersUuidSubscriptionsSubsnoPausePost) | **POST** /users/{uuid}/subscriptions/{subsno}/pause | Pause users subscription



## usersPost

> LoginResponse usersPost(body)

Create a new user.

### Example

```javascript
import Persona from 'persona';

let apiInstance = new Persona.UsersApi();
let body = new Persona.NewUser(); // NewUser | 
apiInstance.usersPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## usersUuidEntitlementGet

> [String] usersUuidEntitlementGet(uuid, opts)

Get users entitlements.

### Example

```javascript
import Persona from 'persona';

let apiInstance = new Persona.UsersApi();
let uuid = null; // String | 
let opts = {
  'authorization': "authorization_example", // String | 
  'cacheControl': "cacheControl_example" // String | 
};
apiInstance.usersUuidEntitlementGet(uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Persona from 'persona';

let apiInstance = new Persona.UsersApi();
let uuid = null; // String | 
let body = [new Persona.GdprConsent()]; // [GdprConsent] | 
let opts = {
  'authorization': "authorization_example" // String | 
};
apiInstance.usersUuidGdprPut(uuid, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Persona from 'persona';

let apiInstance = new Persona.UsersApi();
let uuid = null; // String | 
let opts = {
  'authorization': "authorization_example", // String | 
  'cacheControl': "cacheControl_example" // String | 
};
apiInstance.usersUuidGet(uuid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Persona from 'persona';

let apiInstance = new Persona.UsersApi();
let uuid = null; // String | 
let body = [new Persona.LegalConsent()]; // [LegalConsent] | 
let opts = {
  'authorization': "authorization_example" // String | 
};
apiInstance.usersUuidLegalPut(uuid, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
import Persona from 'persona';

let apiInstance = new Persona.UsersApi();
let uuid = null; // String | 
let body = new Persona.UserUpdate(); // UserUpdate | 
let opts = {
  'authorization': "authorization_example" // String | 
};
apiInstance.usersUuidPatch(uuid, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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


## usersUuidSubscriptionsSubsnoPausePost

> [PausedSubscription] usersUuidSubscriptionsSubsnoPausePost(uuid, subsno, body, opts)

Pause users subscription

### Example

```javascript
import Persona from 'persona';

let apiInstance = new Persona.UsersApi();
let uuid = null; // String | 
let subsno = 56; // Number | 
let body = new Persona.SubscriptionPauseDates(); // SubscriptionPauseDates | 
let opts = {
  'authorization': "authorization_example" // String | 
};
apiInstance.usersUuidSubscriptionsSubsnoPausePost(uuid, subsno, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **subsno** | **Number**|  | 
 **body** | [**SubscriptionPauseDates**](SubscriptionPauseDates.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**[PausedSubscription]**](PausedSubscription.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8

