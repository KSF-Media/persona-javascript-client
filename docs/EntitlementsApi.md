# Persona.EntitlementsApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entitlementsAllowPost**](EntitlementsApi.md#entitlementsAllowPost) | **POST** /entitlements/allow | 
[**entitlementsAllowUuidPost**](EntitlementsApi.md#entitlementsAllowUuidPost) | **POST** /entitlements/allow/{uuid} | Grant product access to a customer
[**entitlementsGet**](EntitlementsApi.md#entitlementsGet) | **GET** /entitlements | List all entitlements



## entitlementsAllowPost

> [Object] entitlementsAllowPost(body, opts)



### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.EntitlementsApi();
var body = new Persona.EntitlementAccess(); // EntitlementAccess | 
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
apiInstance.entitlementsAllowPost(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**EntitlementAccess**](EntitlementAccess.md)|  | 
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

