# Persona.IdentificationApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**identificationLoginGet**](IdentificationApi.md#identificationLoginGet) | **GET** /identification/login | Authenticate with OpenID Connect
[**identificationLoginMonitorGet**](IdentificationApi.md#identificationLoginMonitorGet) | **GET** /identification/login/monitor | Get token for off band response login flow monitor
[**identificationLoginReturnGet**](IdentificationApi.md#identificationLoginReturnGet) | **GET** /identification/login/return | Redirect endpoint for OpenID Connect
[**identificationUserStampUuidPost**](IdentificationApi.md#identificationUserStampUuidPost) | **POST** /identification/user/stamp/{uuid} | Query when the strong identification was last updated



## identificationLoginGet

> identificationLoginGet(opts)

Authenticate with OpenID Connect

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.IdentificationApi();
var opts = {
  'monitor': "monitor_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.identificationLoginGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **monitor** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## identificationLoginMonitorGet

> identificationLoginMonitorGet()

Get token for off band response login flow monitor

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.IdentificationApi();
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.identificationLoginMonitorGet(callback);
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## identificationLoginReturnGet

> String identificationLoginReturnGet(code, state, cookie, cookie2)

Redirect endpoint for OpenID Connect

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.IdentificationApi();
var code = "code_example"; // String | 
var state = "state_example"; // String | 
var cookie = "/path/to/file"; // File | 
var cookie2 = "/path/to/file"; // File | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.identificationLoginReturnGet(code, state, cookie, cookie2, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**|  | 
 **state** | **String**|  | 
 **cookie** | **File**|  | 
 **cookie2** | **File**|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html;charset=utf-8


## identificationUserStampUuidPost

> String identificationUserStampUuidPost(uuid, opts)

Query when the strong identification was last updated

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.IdentificationApi();
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
apiInstance.identificationUserStampUuidPost(uuid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

