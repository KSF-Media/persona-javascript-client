# Persona.AccountApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountPasswordForgotPost**](AccountApi.md#accountPasswordForgotPost) | **POST** /account/password/forgot | Request password reset link
[**accountPasswordResetPost**](AccountApi.md#accountPasswordResetPost) | **POST** /account/password/reset | Reset a forgotten password with a token



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

