# Persona.AccountApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountCodeForTokenPost**](AccountApi.md#accountCodeForTokenPost) | **POST** /account/codeForToken | Get a password reset token
[**accountForgotPassPost**](AccountApi.md#accountForgotPassPost) | **POST** /account/forgotPass | Forgot Password
[**accountResetForgottenPasswordPost**](AccountApi.md#accountResetForgottenPasswordPost) | **POST** /account/resetForgottenPassword | Reset a forgotten password with a token



## accountCodeForTokenPost

> TokenResponse accountCodeForTokenPost(body)

Get a password reset token

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AccountApi();
var body = new Persona.CodeForTokenData(); // CodeForTokenData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.accountCodeForTokenPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CodeForTokenData**](CodeForTokenData.md)|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## accountForgotPassPost

> ForgotPasswordResponse accountForgotPassPost(body)

Forgot Password

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
apiInstance.accountForgotPassPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ForgotPasswordData**](ForgotPasswordData.md)|  | 

### Return type

[**ForgotPasswordResponse**](ForgotPasswordResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## accountResetForgottenPasswordPost

> ForgotPasswordResponse accountResetForgottenPasswordPost(body)

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
apiInstance.accountResetForgottenPasswordPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdatePasswordData**](UpdatePasswordData.md)|  | 

### Return type

[**ForgotPasswordResponse**](ForgotPasswordResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8

