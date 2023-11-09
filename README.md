# persona

Persona - JavaScript client for persona
KSF Media unified login service
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.3.0
- Package version: 1.3.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install persona --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your persona from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('persona')` in javascript files from the directory you ran the last command above from.

### git

If the library is hosted at a git repository, e.g. https://github.com/KSF-Media/persona-javascript-client
then install it via:

```shell
    npm install KSF-Media/persona-javascript-client --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following the above steps with Node.js and installing browserify with `npm install -g browserify`, perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Persona = require('persona');


var api = new Persona.AccountApi()
var email = "email_example"; // {String} 
var opts = {
  'redir': true // {Boolean} 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.accountPasswordForgotGet(email, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *http://http:/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Persona.AccountApi* | [**accountPasswordForgotGet**](docs/AccountApi.md#accountPasswordForgotGet) | **GET** /account/password/forgot | Request password reset link
*Persona.AccountApi* | [**accountPasswordForgotPost**](docs/AccountApi.md#accountPasswordForgotPost) | **POST** /account/password/forgot | Request password reset link
*Persona.AccountApi* | [**accountPasswordResetPost**](docs/AccountApi.md#accountPasswordResetPost) | **POST** /account/password/reset | Reset a forgotten password with a token
*Persona.AdminApi* | [**adminFreePassDelete**](docs/AdminApi.md#adminFreePassDelete) | **DELETE** /admin/free-pass | Revokes an existing free pass
*Persona.AdminApi* | [**adminFreePassPut**](docs/AdminApi.md#adminFreePassPut) | **PUT** /admin/free-pass | Creates a free pass to an article
*Persona.AdminApi* | [**adminFreePassesGet**](docs/AdminApi.md#adminFreePassesGet) | **GET** /admin/free-passes | Lists all free passes
*Persona.AdminApi* | [**adminSearchPost**](docs/AdminApi.md#adminSearchPost) | **POST** /admin/search | Search for users
*Persona.AdminApi* | [**adminTransferPassiveSubscribersListidPost**](docs/AdminApi.md#adminTransferPassiveSubscribersListidPost) | **POST** /admin/transfer-passive-subscribers/{listid} | Transfers passive customers from Kayak to Mailchimp
*Persona.AdminApi* | [**adminUserPost**](docs/AdminApi.md#adminUserPost) | **POST** /admin/user | Create a new user with admin options.
*Persona.EntitlementsApi* | [**entitlementsAllowDelete**](docs/EntitlementsApi.md#entitlementsAllowDelete) | **DELETE** /entitlements/allow | Remove an entitlement
*Persona.EntitlementsApi* | [**entitlementsAllowGet**](docs/EntitlementsApi.md#entitlementsAllowGet) | **GET** /entitlements/allow | Check if global entitlements are enabled
*Persona.EntitlementsApi* | [**entitlementsAllowPost**](docs/EntitlementsApi.md#entitlementsAllowPost) | **POST** /entitlements/allow | Add an entitlement for all users
*Persona.EntitlementsApi* | [**entitlementsAllowUuidPost**](docs/EntitlementsApi.md#entitlementsAllowUuidPost) | **POST** /entitlements/allow/{uuid} | Grant product access to a customer
*Persona.EntitlementsApi* | [**entitlementsFreePassGet**](docs/EntitlementsApi.md#entitlementsFreePassGet) | **GET** /entitlements/free-pass | Verify given free pass hash
*Persona.EntitlementsApi* | [**entitlementsGet**](docs/EntitlementsApi.md#entitlementsGet) | **GET** /entitlements | List all entitlements
*Persona.EntitlementsApi* | [**entitlementsGlobalGet**](docs/EntitlementsApi.md#entitlementsGlobalGet) | **GET** /entitlements/global | Lists all past and future global entitlements
*Persona.IdentificationApi* | [**identificationLoginGet**](docs/IdentificationApi.md#identificationLoginGet) | **GET** /identification/login | Authenticate with OpenID Connect
*Persona.IdentificationApi* | [**identificationLoginMonitorGet**](docs/IdentificationApi.md#identificationLoginMonitorGet) | **GET** /identification/login/monitor | Get token for off band response login flow monitor
*Persona.IdentificationApi* | [**identificationLoginReturnGet**](docs/IdentificationApi.md#identificationLoginReturnGet) | **GET** /identification/login/return | Redirect endpoint for OpenID Connect
*Persona.IdentificationApi* | [**identificationUserStampUuidPost**](docs/IdentificationApi.md#identificationUserStampUuidPost) | **POST** /identification/user/stamp/{uuid} | Query when the strong identification was last updated
*Persona.LoginApi* | [**loginIpGet**](docs/LoginApi.md#loginIpGet) | **GET** /login/ip | Login with IP
*Persona.LoginApi* | [**loginPost**](docs/LoginApi.md#loginPost) | **POST** /login | Login with email and password
*Persona.LoginApi* | [**loginSomePost**](docs/LoginApi.md#loginSomePost) | **POST** /login/some | Login with social media
*Persona.LoginApi* | [**loginSsoPost**](docs/LoginApi.md#loginSsoPost) | **POST** /login/sso | Login with the AccessToken given by the SSO auth
*Persona.LoginApi* | [**loginUuidDelete**](docs/LoginApi.md#loginUuidDelete) | **DELETE** /login/{uuid} | Logout
*Persona.UsersApi* | [**usersPost**](docs/UsersApi.md#usersPost) | **POST** /users | Create a new user.
*Persona.UsersApi* | [**usersTemporaryPost**](docs/UsersApi.md#usersTemporaryPost) | **POST** /users/temporary | Create a new user with email.
*Persona.UsersApi* | [**usersUuidEntitlementGet**](docs/UsersApi.md#usersUuidEntitlementGet) | **GET** /users/{uuid}/entitlement | Get users entitlements.
*Persona.UsersApi* | [**usersUuidGdprPut**](docs/UsersApi.md#usersUuidGdprPut) | **PUT** /users/{uuid}/gdpr | Updates the GDPR consent settings for a given user.
*Persona.UsersApi* | [**usersUuidGet**](docs/UsersApi.md#usersUuidGet) | **GET** /users/{uuid} | Get user by UUID.
*Persona.UsersApi* | [**usersUuidLegalPut**](docs/UsersApi.md#usersUuidLegalPut) | **PUT** /users/{uuid}/legal | Updates the legal consent settings for a given user.
*Persona.UsersApi* | [**usersUuidNewslettersGet**](docs/UsersApi.md#usersUuidNewslettersGet) | **GET** /users/{uuid}/newsletters | Get newsletter subscriptions
*Persona.UsersApi* | [**usersUuidNewslettersPut**](docs/UsersApi.md#usersUuidNewslettersPut) | **PUT** /users/{uuid}/newsletters | Update newsletter subscriptions
*Persona.UsersApi* | [**usersUuidPasswordPut**](docs/UsersApi.md#usersUuidPasswordPut) | **PUT** /users/{uuid}/password | Set / Change user password
*Persona.UsersApi* | [**usersUuidPatch**](docs/UsersApi.md#usersUuidPatch) | **PATCH** /users/{uuid} | Update a user
*Persona.UsersApi* | [**usersUuidPaymentsGet**](docs/UsersApi.md#usersUuidPaymentsGet) | **GET** /users/{uuid}/payments | Get user&#39;s subscriptions and payment events
*Persona.UsersApi* | [**usersUuidScopeGet**](docs/UsersApi.md#usersUuidScopeGet) | **GET** /users/{uuid}/scope | Check if user has valid token for a scope
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoAddressChangeDelete**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoAddressChangeDelete) | **DELETE** /users/{uuid}/subscriptions/{subsno}/addressChange | Delete temporary address change for subscription
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoAddressChangePatch**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoAddressChangePatch) | **PATCH** /users/{uuid}/subscriptions/{subsno}/addressChange | Edit temporary address change dates of a subscription
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoAddressChangePost**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoAddressChangePost) | **POST** /users/{uuid}/subscriptions/{subsno}/addressChange | Make a temporary address change for a subscription
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoCancelPut**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoCancelPut) | **PUT** /users/{uuid}/subscriptions/{subsno}/cancel | Cancels user subscription
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoPausePatch**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoPausePatch) | **PATCH** /users/{uuid}/subscriptions/{subsno}/pause | Edit pause duration
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoPausePost**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoPausePost) | **POST** /users/{uuid}/subscriptions/{subsno}/pause | Pause users subscription
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoReclamationPost**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoReclamationPost) | **POST** /users/{uuid}/subscriptions/{subsno}/reclamation | Create a new delivery reclamation for a subscription
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet) | **GET** /users/{uuid}/subscriptions/{subsno}/reclamations/{reclaimno} | Get a delivery reclamation
*Persona.UsersApi* | [**usersUuidSubscriptionsSubsnoUnpausePost**](docs/UsersApi.md#usersUuidSubscriptionsSubsnoUnpausePost) | **POST** /users/{uuid}/subscriptions/{subsno}/unpause | Unpause users subscription


## Documentation for Models

 - [Persona.ActiveDays](docs/ActiveDays.md)
 - [Persona.Address](docs/Address.md)
 - [Persona.AdminNewUser](docs/AdminNewUser.md)
 - [Persona.CancelSubscriptionReason](docs/CancelSubscriptionReason.md)
 - [Persona.DeleteTempAddressChangeDates](docs/DeleteTempAddressChangeDates.md)
 - [Persona.DeliveryAddress](docs/DeliveryAddress.md)
 - [Persona.DeliveryReclamation](docs/DeliveryReclamation.md)
 - [Persona.EntitlementAccess](docs/EntitlementAccess.md)
 - [Persona.FaroUser](docs/FaroUser.md)
 - [Persona.ForgotPasswordData](docs/ForgotPasswordData.md)
 - [Persona.FreePass](docs/FreePass.md)
 - [Persona.FreePassInput](docs/FreePassInput.md)
 - [Persona.GdprConsent](docs/GdprConsent.md)
 - [Persona.InlineResponse400](docs/InlineResponse400.md)
 - [Persona.InlineResponse400InvalidRequestBody](docs/InlineResponse400InvalidRequestBody.md)
 - [Persona.InlineResponse403](docs/InlineResponse403.md)
 - [Persona.InlineResponse4031](docs/InlineResponse4031.md)
 - [Persona.InlineResponse4031AccessTokenExpired](docs/InlineResponse4031AccessTokenExpired.md)
 - [Persona.InlineResponse4032](docs/InlineResponse4032.md)
 - [Persona.InlineResponse4032EmailAddressInUse](docs/InlineResponse4032EmailAddressInUse.md)
 - [Persona.InlineResponse4032EmailNotAuthorized](docs/InlineResponse4032EmailNotAuthorized.md)
 - [Persona.InlineResponse4032OauthFailed](docs/InlineResponse4032OauthFailed.md)
 - [Persona.InlineResponse403InvalidCredentials](docs/InlineResponse403InvalidCredentials.md)
 - [Persona.InlineResponse415](docs/InlineResponse415.md)
 - [Persona.InlineResponse415UnsupportedMediaType](docs/InlineResponse415UnsupportedMediaType.md)
 - [Persona.InlineResponse500](docs/InlineResponse500.md)
 - [Persona.InlineResponse500InternalServerError](docs/InlineResponse500InternalServerError.md)
 - [Persona.JanrainUser](docs/JanrainUser.md)
 - [Persona.LegalConsent](docs/LegalConsent.md)
 - [Persona.LoginData](docs/LoginData.md)
 - [Persona.LoginDataSSO](docs/LoginDataSSO.md)
 - [Persona.LoginDataSoMe](docs/LoginDataSoMe.md)
 - [Persona.LoginResponse](docs/LoginResponse.md)
 - [Persona.ModelPackage](docs/ModelPackage.md)
 - [Persona.NewDeliveryReclamation](docs/NewDeliveryReclamation.md)
 - [Persona.NewTemporaryUser](docs/NewTemporaryUser.md)
 - [Persona.NewUser](docs/NewUser.md)
 - [Persona.Newsletter](docs/Newsletter.md)
 - [Persona.NewsletterSubscription](docs/NewsletterSubscription.md)
 - [Persona.PackageCampaign](docs/PackageCampaign.md)
 - [Persona.PackageOffer](docs/PackageOffer.md)
 - [Persona.Paper](docs/Paper.md)
 - [Persona.PastTemporaryAddress](docs/PastTemporaryAddress.md)
 - [Persona.PausedSubscription](docs/PausedSubscription.md)
 - [Persona.Payment](docs/Payment.md)
 - [Persona.PendingAddressChange](docs/PendingAddressChange.md)
 - [Persona.PersistedEntitlementAccess](docs/PersistedEntitlementAccess.md)
 - [Persona.Product](docs/Product.md)
 - [Persona.SearchQuery](docs/SearchQuery.md)
 - [Persona.SearchResult](docs/SearchResult.md)
 - [Persona.Subscription](docs/Subscription.md)
 - [Persona.SubscriptionDates](docs/SubscriptionDates.md)
 - [Persona.SubscriptionPauseDates](docs/SubscriptionPauseDates.md)
 - [Persona.SubscriptionPauseEdit](docs/SubscriptionPauseEdit.md)
 - [Persona.SubscriptionPayments](docs/SubscriptionPayments.md)
 - [Persona.TemporaryAddressChange](docs/TemporaryAddressChange.md)
 - [Persona.TemporaryAddressChangeDates](docs/TemporaryAddressChangeDates.md)
 - [Persona.UpdatePasswordData](docs/UpdatePasswordData.md)
 - [Persona.User](docs/User.md)
 - [Persona.UserUpdate](docs/UserUpdate.md)
 - [Persona.UserUpdateAddress](docs/UserUpdateAddress.md)
 - [Persona.UserUpdatePassword](docs/UserUpdatePassword.md)


## Documentation for Authorization

All endpoints do not require authorization.
