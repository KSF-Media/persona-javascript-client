# Persona.UsersApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersUuidGdprPut**](UsersApi.md#usersUuidGdprPut) | **PUT** /users/{uuid}/gdpr | Updates the GDPR consent settings for a given user.
[**usersUuidGet**](UsersApi.md#usersUuidGet) | **GET** /users/{uuid} | Get user by UUID.


<a name="usersUuidGdprPut"></a>
# **usersUuidGdprPut**
> [Object] usersUuidGdprPut(uuid, gdprConsent, opts)

Updates the GDPR consent settings for a given user.

Authorization header expects the following format ‘OAuth {token}’

### Example
```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
var gdprConsent = [new Persona.GdprConsent()]; // [GdprConsent] | 
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
apiInstance.usersUuidGdprPut(uuid, gdprConsent, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **gdprConsent** | [**[GdprConsent]**](Array.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json;charset=utf-8
 - **Accept**: application/json;charset=utf-8

<a name="usersUuidGet"></a>
# **usersUuidGet**
> User usersUuidGet(uuid, opts)

Get user by UUID.

Authorization header expects the following format ‘OAuth {token}’

### Example
```javascript
var Persona = require('persona');

var apiInstance = new Persona.UsersApi();
var uuid = null; // String | 
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
apiInstance.usersUuidGet(uuid, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=utf-8
