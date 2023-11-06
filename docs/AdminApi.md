# Persona.AdminApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**adminFreePassDelete**](AdminApi.md#adminFreePassDelete) | **DELETE** /admin/free-pass | Revokes an existing free pass
[**adminFreePassPost**](AdminApi.md#adminFreePassPost) | **POST** /admin/free-pass | Creates a free pass to an article
[**adminFreePassesGet**](AdminApi.md#adminFreePassesGet) | **GET** /admin/free-passes | Lists all free passes
[**adminSearchPost**](AdminApi.md#adminSearchPost) | **POST** /admin/search | Search for users
[**adminTransferPassiveSubscribersListidPost**](AdminApi.md#adminTransferPassiveSubscribersListidPost) | **POST** /admin/transfer-passive-subscribers/{listid} | Transfers passive customers from Kayak to Mailchimp
[**adminUserPost**](AdminApi.md#adminUserPost) | **POST** /admin/user | Create a new user with admin options.



## adminFreePassDelete

> adminFreePassDelete(body, opts)

Revokes an existing free pass

Marks a free pass as being revoked so that it can&#39;t be used anymore. Currently, revoked free passes can&#39;t be reinstated through Persona API (though it&#39;s possible to do so with an SQL query).

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AdminApi();
var body = "body_example"; // String | 
var opts = {
  'authUser': null, // String | 
  'authorization': "authorization_example" // String | 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.adminFreePassDelete(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: Not defined


## adminFreePassPost

> String adminFreePassPost(body, opts)

Creates a free pass to an article

Free passes can be used to temporarily bypass the paywall for individual articles.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AdminApi();
var body = new Persona.FreePassInput(); // FreePassInput | 
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
apiInstance.adminFreePassPost(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**FreePassInput**](FreePassInput.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## adminFreePassesGet

> [FreePass] adminFreePassesGet(opts)

Lists all free passes

This end point returns the list of all free passes, including those that have been expired or revoked.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AdminApi();
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
apiInstance.adminFreePassesGet(opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**[FreePass]**](FreePass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## adminSearchPost

> [SearchResult] adminSearchPost(body, opts)

Search for users

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AdminApi();
var body = new Persona.SearchQuery(); // SearchQuery | 
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
apiInstance.adminSearchPost(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SearchQuery**](SearchQuery.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**[SearchResult]**](SearchResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8


## adminTransferPassiveSubscribersListidPost

> Object adminTransferPassiveSubscribersListidPost(listid, opts)

Transfers passive customers from Kayak to Mailchimp

Passive subscribers/members/customers are users who don&#39;t have active entitlements and haven&#39;t opted out from email marketing. For the given list (audience) ID, this endpoint transfers the list of passive subscribers from Kayak to Mailchimp (via Faro).

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AdminApi();
var listid = "listid_example"; // String | 
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
apiInstance.adminTransferPassiveSubscribersListidPost(listid, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **listid** | **String**|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8


## adminUserPost

> LoginResponse adminUserPost(body, opts)

Create a new user with admin options.

### Example

```javascript
var Persona = require('persona');

var apiInstance = new Persona.AdminApi();
var body = new Persona.AdminNewUser(); // AdminNewUser | 
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
apiInstance.adminUserPost(body, opts, callback);
```

### Parameters



Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AdminNewUser**](AdminNewUser.md)|  | 
 **authUser** | [**String**](.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=utf-8
- **Accept**: application/json;charset=utf-8

