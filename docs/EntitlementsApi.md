# Persona.EntitlementsApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entitlementsAllowDelete**](EntitlementsApi.md#entitlementsAllowDelete) | **DELETE** /entitlements/allow | Remove an entitlement
[**entitlementsAllowGet**](EntitlementsApi.md#entitlementsAllowGet) | **GET** /entitlements/allow | Check if global entitlements are enabled
[**entitlementsAllowPost**](EntitlementsApi.md#entitlementsAllowPost) | **POST** /entitlements/allow | Add an entitlement for all users
[**entitlementsAllowUuidPost**](EntitlementsApi.md#entitlementsAllowUuidPost) | **POST** /entitlements/allow/{uuid} | Grant product access to a customer
[**entitlementsGet**](EntitlementsApi.md#entitlementsGet) | **GET** /entitlements | List all entitlements
[**entitlementsGlobalGet**](EntitlementsApi.md#entitlementsGlobalGet) | **GET** /entitlements/global | Lists all past and future global entitlements



## entitlementsAllowDelete

> [Object] entitlementsAllowDelete(body, opts)

Remove an entitlement

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.EntitlementsApi();
var body = 789; // Number | 
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
apiInstance.entitlementsAllowDelete(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Number**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## entitlementsAllowGet

> [PersistedEntitlementAccess] entitlementsAllowGet(opts)

Check if global entitlements are enabled

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.EntitlementsApi();
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example", // String | 
  'ip': "ip_example", // String | 
  'paper': "paper_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.entitlementsAllowGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **ip** | **String**|  | [optional] 
 **paper** | **String**|  | [optional] 

### Return type

[**[PersistedEntitlementAccess]**](PersistedEntitlementAccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## entitlementsAllowPost

> [Object] entitlementsAllowPost(body, opts)

Add an entitlement for all users

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.EntitlementsApi();
var body = new Persona.EntitlementAccess(); // EntitlementAccess | 
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
apiInstance.entitlementsAllowPost(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EntitlementAccess**](EntitlementAccess.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## entitlementsAllowUuidPost

> [Object] entitlementsAllowUuidPost(uuid, body, opts)

Grant product access to a customer

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.EntitlementsApi();
var uuid = null; // String | 
var body = new Persona.EntitlementAccess(); // EntitlementAccess | 
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
apiInstance.entitlementsAllowUuidPost(uuid, body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **body** | [**EntitlementAccess**](EntitlementAccess.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## entitlementsGet

> {String: [String]} entitlementsGet()

List all entitlements

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.EntitlementsApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.entitlementsGet(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

**{String: [String]}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## entitlementsGlobalGet

> [PersistedEntitlementAccess] entitlementsGlobalGet(opts)

Lists all past and future global entitlements

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.EntitlementsApi();
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
apiInstance.entitlementsGlobalGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**[PersistedEntitlementAccess]**](PersistedEntitlementAccess.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

