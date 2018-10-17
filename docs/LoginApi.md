# Persona.LoginApi

All URIs are relative to *http://localhost/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPost**](LoginApi.md#loginPost) | **POST** /login | Login with email and password
[**loginSomePost**](LoginApi.md#loginSomePost) | **POST** /login/some | Login with social media
[**loginSsoPost**](LoginApi.md#loginSsoPost) | **POST** /login/sso | Login with the AccessToken given by the SSO auth


<a name="loginPost"></a>
# **loginPost**
> LoginResponse loginPost(loginData)

Login with email and password

### Example
```javascript
var Persona = require('persona');

var apiInstance = new Persona.LoginApi();
var loginData = new Persona.LoginData(); // LoginData | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginPost(loginData, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginData** | [**LoginData**](LoginData.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="loginSomePost"></a>
# **loginSomePost**
> LoginResponse loginSomePost(loginDataSoMe)

Login with social media

### Example
```javascript
var Persona = require('persona');

var apiInstance = new Persona.LoginApi();
var loginDataSoMe = new Persona.LoginDataSoMe(); // LoginDataSoMe | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginSomePost(loginDataSoMe, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginDataSoMe** | [**LoginDataSoMe**](LoginDataSoMe.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="loginSsoPost"></a>
# **loginSsoPost**
> LoginResponse loginSsoPost(loginDataSSO)

Login with the AccessToken given by the SSO auth

### Example
```javascript
var Persona = require('persona');

var apiInstance = new Persona.LoginApi();
var loginDataSSO = new Persona.LoginDataSSO(); // LoginDataSSO | 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginSsoPost(loginDataSSO, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginDataSSO** | [**LoginDataSSO**](LoginDataSSO.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

