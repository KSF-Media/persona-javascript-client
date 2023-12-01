# Persona.AccountApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**accountPasswordCheckTokenPost**](AccountApi.md#accountPasswordCheckTokenPost) | **POST** /account/password/check-token | Validate password reset token
[**accountPasswordForgotPost**](AccountApi.md#accountPasswordForgotPost) | **POST** /account/password/forgot | Request password reset link
[**accountPasswordResetPost**](AccountApi.md#accountPasswordResetPost) | **POST** /account/password/reset | Reset a forgotten password with a token



## accountPasswordCheckTokenPost

> accountPasswordCheckTokenPost(body)

Validate password reset token

The second step in the forgotten password reset procedure is to ensure that the password reset token is still valid. Each token can be used at most once and it is valid for a limited duration.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AccountApi();
var body = "body_example"; // String | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountPasswordCheckTokenPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: */*


## accountPasswordForgotPost

> accountPasswordForgotPost(body)

Request password reset link

This is the starting point of the forgotten password recovery process. It sends a password reset link with a pasword reset token to the given user&#39;s email address if such user and email address exist.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AccountApi();
var body = new Persona.ForgotPasswordData(); // ForgotPasswordData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountPasswordForgotPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ForgotPasswordData**](ForgotPasswordData.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: */*


## accountPasswordResetPost

> accountPasswordResetPost(body)

Reset a forgotten password with a token

The final step of the forgotten password reset procedure performs password reset with a token obtained from the email message sent by the POST /password/forgot endpoint and the new password and its confirmation.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AccountApi();
var body = new Persona.UpdatePasswordData(); // UpdatePasswordData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.accountPasswordResetPost(body, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UpdatePasswordData**](UpdatePasswordData.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: */*

