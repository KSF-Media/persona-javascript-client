# Persona.LoginApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**loginPost**](LoginApi.md#loginPost) | **POST** /login | Login with email and password
[**loginSomePost**](LoginApi.md#loginSomePost) | **POST** /login/some | Login with social media
[**loginSsoPost**](LoginApi.md#loginSsoPost) | **POST** /login/sso | Login with the AccessToken given by the SSO auth
[**loginUuidDelete**](LoginApi.md#loginUuidDelete) | **DELETE** /login/{uuid} | Logout



## loginPost

> LoginResponse loginPost(body)

Login with email and password

### Example

```javascript
import Persona from 'persona';

let apiInstance = new Persona.LoginApi();
let body = new Persona.LoginData(); // LoginData | 
apiInstance.loginPost(body, (error, data, response) => {
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
 **body** | [**LoginData**](LoginData.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## loginSomePost

> LoginResponse loginSomePost(body)

Login with social media

### Example

```javascript
import Persona from 'persona';

let apiInstance = new Persona.LoginApi();
let body = new Persona.LoginDataSoMe(); // LoginDataSoMe | 
apiInstance.loginSomePost(body, (error, data, response) => {
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
 **body** | [**LoginDataSoMe**](LoginDataSoMe.md)|  | 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## loginSsoPost

> LoginResponse loginSsoPost(body)

Login with the AccessToken given by the SSO auth

### Example

```javascript
import Persona from 'persona';

let apiInstance = new Persona.LoginApi();
let body = new Persona.LoginDataSSO(); // LoginDataSSO | 
apiInstance.loginSsoPost(body, (error, data, response) => {
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
import Persona from 'persona';

let apiInstance = new Persona.LoginApi();
let uuid = null; // String | 
let opts = {
  'authorization': "authorization_example" // String | 
};
apiInstance.loginUuidDelete(uuid, opts, (error, data, response) => {
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

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

