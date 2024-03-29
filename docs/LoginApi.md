# Persona.LoginApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginIpGet**](LoginApi.md#loginIpGet) | **GET** /login/ip | Login with IP
[**loginPost**](LoginApi.md#loginPost) | **POST** /login | Login with email and password
[**loginSsoPost**](LoginApi.md#loginSsoPost) | **POST** /login/sso | Disabled. Always returns 403.
[**loginUuidDelete**](LoginApi.md#loginUuidDelete) | **DELETE** /login/{uuid} | Logout



## loginIpGet

> LoginResponse loginIpGet(xRealIP, paper)

Login with IP

Returns auth &amp; token for customers with IP based entitlement

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.LoginApi();
var xRealIP = "xRealIP_example"; // String | 
var paper = "paper_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginIpGet(xRealIP, paper, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xRealIP** | **String**|  | 
 **paper** | **String**|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## loginPost

> LoginResponse loginPost(body)

Login with email and password

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.LoginApi();
var body = new Persona.LoginData(); // LoginData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginData**](LoginData.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## loginSsoPost

> LoginResponse loginSsoPost(body)

Disabled. Always returns 403.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.LoginApi();
var body = new Persona.LoginDataSSO(); // LoginDataSSO | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginSsoPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**LoginDataSSO**](LoginDataSSO.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## loginUuidDelete

> [Object] loginUuidDelete(uuid, opts)

Logout

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.LoginApi();
var uuid = null; // String | 
var opts = {
  'authorization': "authorization_example", // String | 
  'everywhere': false // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUuidDelete(uuid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authorization** | **String**|  | [optional] 
 **everywhere** | **Boolean**|  | [optional] [default to false]

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

