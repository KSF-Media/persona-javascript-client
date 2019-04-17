# Persona.EntitlementsApi

All URIs are relative to *http://http:/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**entitlementsGet**](EntitlementsApi.md#entitlementsGet) | **GET** /entitlements | List all entitlements



## entitlementsGet

> {String: [String]} entitlementsGet()

List all entitlements

### Example

```javascript
import Persona from 'persona';

let apiInstance = new Persona.EntitlementsApi();
apiInstance.entitlementsGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

**{String: [String]}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=utf-8

