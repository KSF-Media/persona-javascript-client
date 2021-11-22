# Persona.AccountApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountPasswordForgotGet**](AccountApi.md#accountPasswordForgotGet) | **GET** /account/password/forgot | Request password reset link
[**accountPasswordForgotPost**](AccountApi.md#accountPasswordForgotPost) | **POST** /account/password/forgot | Request password reset link
[**accountPasswordResetPost**](AccountApi.md#accountPasswordResetPost) | **POST** /account/password/reset | Reset a forgotten password with a token



## accountPasswordForgotGet

> [Object] accountPasswordForgotGet(email, opts)

Request password reset link

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AccountApi();
var email = "email_example"; // String | 
var opts = {
  'redir': true // Boolean | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountPasswordForgotGet(email, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **redir** | **Boolean**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## accountPasswordForgotPost

> [Object] accountPasswordForgotPost(body)

Request password reset link

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AccountApi();
var body = new Persona.ForgotPasswordData(); // ForgotPasswordData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountPasswordForgotPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ForgotPasswordData**](ForgotPasswordData.md)|  | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## accountPasswordResetPost

> [Object] accountPasswordResetPost(body)

Reset a forgotten password with a token

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AccountApi();
var body = new Persona.UpdatePasswordData(); // UpdatePasswordData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountPasswordResetPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdatePasswordData**](UpdatePasswordData.md)|  | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8

