# Persona.AdminApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminUuidGet**](AdminApi.md#adminUuidGet) | **GET** /admin/{uuid} | Get user by admin credentials.



## adminUuidGet

> User adminUuidGet(uuid, opts)

Get user by admin credentials.

Authorization header expects the following format ‘OAuth {token}’

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AdminApi();
var uuid = null; // String | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example", // String | 
  'cacheControl': "cacheControl_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.adminUuidGet(uuid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **uuid** | [**String**](.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **cacheControl** | **String**|  | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

