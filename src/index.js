/**
 * Persona
 * KSF Media unified login service
 *
 * The version of the OpenAPI document: 1.3.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.1-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ActiveDays', 'model/Address', 'model/Campaign', 'model/CodeForTokenData', 'model/DeliveryAddress', 'model/DeliveryReclamation', 'model/DescriptionFrequency', 'model/ForgotPasswordData', 'model/ForgotPasswordResponse', 'model/GdprConsent', 'model/GlobalEntitlementAccess', 'model/InlineResponse400', 'model/InlineResponse400InvalidRequestBody', 'model/InlineResponse403', 'model/InlineResponse4031', 'model/InlineResponse4031AccessTokenExpired', 'model/InlineResponse4032', 'model/InlineResponse4032EmailAddressInUse', 'model/InlineResponse4032EmailNotAuthorized', 'model/InlineResponse4032OauthFailed', 'model/InlineResponse403InvalidCredentials', 'model/InlineResponse415', 'model/InlineResponse415UnsupportedMediaType', 'model/InlineResponse500', 'model/InlineResponse500InternalServerError', 'model/LegalConsent', 'model/LoginData', 'model/LoginDataSSO', 'model/LoginDataSoMe', 'model/LoginResponse', 'model/ModelPackage', 'model/NewDeliveryReclamation', 'model/NewUser', 'model/PackageDescription', 'model/PackageOffer', 'model/Paper', 'model/PausedSubscription', 'model/PendingAddressChange', 'model/Product', 'model/Subscription', 'model/SubscriptionDates', 'model/SubscriptionPauseDates', 'model/TemporaryAddressChange', 'model/TokenResponse', 'model/UpdatePasswordData', 'model/User', 'model/UserUpdate', 'model/UserUpdateAddress', 'api/AccountApi', 'api/EntitlementsApi', 'api/LoginApi', 'api/UsersApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/ActiveDays'), require('./model/Address'), require('./model/Campaign'), require('./model/CodeForTokenData'), require('./model/DeliveryAddress'), require('./model/DeliveryReclamation'), require('./model/DescriptionFrequency'), require('./model/ForgotPasswordData'), require('./model/ForgotPasswordResponse'), require('./model/GdprConsent'), require('./model/GlobalEntitlementAccess'), require('./model/InlineResponse400'), require('./model/InlineResponse400InvalidRequestBody'), require('./model/InlineResponse403'), require('./model/InlineResponse4031'), require('./model/InlineResponse4031AccessTokenExpired'), require('./model/InlineResponse4032'), require('./model/InlineResponse4032EmailAddressInUse'), require('./model/InlineResponse4032EmailNotAuthorized'), require('./model/InlineResponse4032OauthFailed'), require('./model/InlineResponse403InvalidCredentials'), require('./model/InlineResponse415'), require('./model/InlineResponse415UnsupportedMediaType'), require('./model/InlineResponse500'), require('./model/InlineResponse500InternalServerError'), require('./model/LegalConsent'), require('./model/LoginData'), require('./model/LoginDataSSO'), require('./model/LoginDataSoMe'), require('./model/LoginResponse'), require('./model/ModelPackage'), require('./model/NewDeliveryReclamation'), require('./model/NewUser'), require('./model/PackageDescription'), require('./model/PackageOffer'), require('./model/Paper'), require('./model/PausedSubscription'), require('./model/PendingAddressChange'), require('./model/Product'), require('./model/Subscription'), require('./model/SubscriptionDates'), require('./model/SubscriptionPauseDates'), require('./model/TemporaryAddressChange'), require('./model/TokenResponse'), require('./model/UpdatePasswordData'), require('./model/User'), require('./model/UserUpdate'), require('./model/UserUpdateAddress'), require('./api/AccountApi'), require('./api/EntitlementsApi'), require('./api/LoginApi'), require('./api/UsersApi'));
  }
}(function(ApiClient, ActiveDays, Address, Campaign, CodeForTokenData, DeliveryAddress, DeliveryReclamation, DescriptionFrequency, ForgotPasswordData, ForgotPasswordResponse, GdprConsent, GlobalEntitlementAccess, InlineResponse400, InlineResponse400InvalidRequestBody, InlineResponse403, InlineResponse4031, InlineResponse4031AccessTokenExpired, InlineResponse4032, InlineResponse4032EmailAddressInUse, InlineResponse4032EmailNotAuthorized, InlineResponse4032OauthFailed, InlineResponse403InvalidCredentials, InlineResponse415, InlineResponse415UnsupportedMediaType, InlineResponse500, InlineResponse500InternalServerError, LegalConsent, LoginData, LoginDataSSO, LoginDataSoMe, LoginResponse, ModelPackage, NewDeliveryReclamation, NewUser, PackageDescription, PackageOffer, Paper, PausedSubscription, PendingAddressChange, Product, Subscription, SubscriptionDates, SubscriptionPauseDates, TemporaryAddressChange, TokenResponse, UpdatePasswordData, User, UserUpdate, UserUpdateAddress, AccountApi, EntitlementsApi, LoginApi, UsersApi) {
  'use strict';

  /**
   * KSF_Media_unified_login_service.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Persona = require('index'); // See note below*.
   * var xxxSvc = new Persona.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Persona.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Persona.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Persona.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 1.3.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The ActiveDays model constructor.
     * @property {module:model/ActiveDays}
     */
    ActiveDays: ActiveDays,
    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address: Address,
    /**
     * The Campaign model constructor.
     * @property {module:model/Campaign}
     */
    Campaign: Campaign,
    /**
     * The CodeForTokenData model constructor.
     * @property {module:model/CodeForTokenData}
     */
    CodeForTokenData: CodeForTokenData,
    /**
     * The DeliveryAddress model constructor.
     * @property {module:model/DeliveryAddress}
     */
    DeliveryAddress: DeliveryAddress,
    /**
     * The DeliveryReclamation model constructor.
     * @property {module:model/DeliveryReclamation}
     */
    DeliveryReclamation: DeliveryReclamation,
    /**
     * The DescriptionFrequency model constructor.
     * @property {module:model/DescriptionFrequency}
     */
    DescriptionFrequency: DescriptionFrequency,
    /**
     * The ForgotPasswordData model constructor.
     * @property {module:model/ForgotPasswordData}
     */
    ForgotPasswordData: ForgotPasswordData,
    /**
     * The ForgotPasswordResponse model constructor.
     * @property {module:model/ForgotPasswordResponse}
     */
    ForgotPasswordResponse: ForgotPasswordResponse,
    /**
     * The GdprConsent model constructor.
     * @property {module:model/GdprConsent}
     */
    GdprConsent: GdprConsent,
    /**
     * The GlobalEntitlementAccess model constructor.
     * @property {module:model/GlobalEntitlementAccess}
     */
    GlobalEntitlementAccess: GlobalEntitlementAccess,
    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400: InlineResponse400,
    /**
     * The InlineResponse400InvalidRequestBody model constructor.
     * @property {module:model/InlineResponse400InvalidRequestBody}
     */
    InlineResponse400InvalidRequestBody: InlineResponse400InvalidRequestBody,
    /**
     * The InlineResponse403 model constructor.
     * @property {module:model/InlineResponse403}
     */
    InlineResponse403: InlineResponse403,
    /**
     * The InlineResponse4031 model constructor.
     * @property {module:model/InlineResponse4031}
     */
    InlineResponse4031: InlineResponse4031,
    /**
     * The InlineResponse4031AccessTokenExpired model constructor.
     * @property {module:model/InlineResponse4031AccessTokenExpired}
     */
    InlineResponse4031AccessTokenExpired: InlineResponse4031AccessTokenExpired,
    /**
     * The InlineResponse4032 model constructor.
     * @property {module:model/InlineResponse4032}
     */
    InlineResponse4032: InlineResponse4032,
    /**
     * The InlineResponse4032EmailAddressInUse model constructor.
     * @property {module:model/InlineResponse4032EmailAddressInUse}
     */
    InlineResponse4032EmailAddressInUse: InlineResponse4032EmailAddressInUse,
    /**
     * The InlineResponse4032EmailNotAuthorized model constructor.
     * @property {module:model/InlineResponse4032EmailNotAuthorized}
     */
    InlineResponse4032EmailNotAuthorized: InlineResponse4032EmailNotAuthorized,
    /**
     * The InlineResponse4032OauthFailed model constructor.
     * @property {module:model/InlineResponse4032OauthFailed}
     */
    InlineResponse4032OauthFailed: InlineResponse4032OauthFailed,
    /**
     * The InlineResponse403InvalidCredentials model constructor.
     * @property {module:model/InlineResponse403InvalidCredentials}
     */
    InlineResponse403InvalidCredentials: InlineResponse403InvalidCredentials,
    /**
     * The InlineResponse415 model constructor.
     * @property {module:model/InlineResponse415}
     */
    InlineResponse415: InlineResponse415,
    /**
     * The InlineResponse415UnsupportedMediaType model constructor.
     * @property {module:model/InlineResponse415UnsupportedMediaType}
     */
    InlineResponse415UnsupportedMediaType: InlineResponse415UnsupportedMediaType,
    /**
     * The InlineResponse500 model constructor.
     * @property {module:model/InlineResponse500}
     */
    InlineResponse500: InlineResponse500,
    /**
     * The InlineResponse500InternalServerError model constructor.
     * @property {module:model/InlineResponse500InternalServerError}
     */
    InlineResponse500InternalServerError: InlineResponse500InternalServerError,
    /**
     * The LegalConsent model constructor.
     * @property {module:model/LegalConsent}
     */
    LegalConsent: LegalConsent,
    /**
     * The LoginData model constructor.
     * @property {module:model/LoginData}
     */
    LoginData: LoginData,
    /**
     * The LoginDataSSO model constructor.
     * @property {module:model/LoginDataSSO}
     */
    LoginDataSSO: LoginDataSSO,
    /**
     * The LoginDataSoMe model constructor.
     * @property {module:model/LoginDataSoMe}
     */
    LoginDataSoMe: LoginDataSoMe,
    /**
     * The LoginResponse model constructor.
     * @property {module:model/LoginResponse}
     */
    LoginResponse: LoginResponse,
    /**
     * The ModelPackage model constructor.
     * @property {module:model/ModelPackage}
     */
    ModelPackage: ModelPackage,
    /**
     * The NewDeliveryReclamation model constructor.
     * @property {module:model/NewDeliveryReclamation}
     */
    NewDeliveryReclamation: NewDeliveryReclamation,
    /**
     * The NewUser model constructor.
     * @property {module:model/NewUser}
     */
    NewUser: NewUser,
    /**
     * The PackageDescription model constructor.
     * @property {module:model/PackageDescription}
     */
    PackageDescription: PackageDescription,
    /**
     * The PackageOffer model constructor.
     * @property {module:model/PackageOffer}
     */
    PackageOffer: PackageOffer,
    /**
     * The Paper model constructor.
     * @property {module:model/Paper}
     */
    Paper: Paper,
    /**
     * The PausedSubscription model constructor.
     * @property {module:model/PausedSubscription}
     */
    PausedSubscription: PausedSubscription,
    /**
     * The PendingAddressChange model constructor.
     * @property {module:model/PendingAddressChange}
     */
    PendingAddressChange: PendingAddressChange,
    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product: Product,
    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription: Subscription,
    /**
     * The SubscriptionDates model constructor.
     * @property {module:model/SubscriptionDates}
     */
    SubscriptionDates: SubscriptionDates,
    /**
     * The SubscriptionPauseDates model constructor.
     * @property {module:model/SubscriptionPauseDates}
     */
    SubscriptionPauseDates: SubscriptionPauseDates,
    /**
     * The TemporaryAddressChange model constructor.
     * @property {module:model/TemporaryAddressChange}
     */
    TemporaryAddressChange: TemporaryAddressChange,
    /**
     * The TokenResponse model constructor.
     * @property {module:model/TokenResponse}
     */
    TokenResponse: TokenResponse,
    /**
     * The UpdatePasswordData model constructor.
     * @property {module:model/UpdatePasswordData}
     */
    UpdatePasswordData: UpdatePasswordData,
    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User: User,
    /**
     * The UserUpdate model constructor.
     * @property {module:model/UserUpdate}
     */
    UserUpdate: UserUpdate,
    /**
     * The UserUpdateAddress model constructor.
     * @property {module:model/UserUpdateAddress}
     */
    UserUpdateAddress: UserUpdateAddress,
    /**
     * The AccountApi service constructor.
     * @property {module:api/AccountApi}
     */
    AccountApi: AccountApi,
    /**
     * The EntitlementsApi service constructor.
     * @property {module:api/EntitlementsApi}
     */
    EntitlementsApi: EntitlementsApi,
    /**
     * The LoginApi service constructor.
     * @property {module:api/LoginApi}
     */
    LoginApi: LoginApi,
    /**
     * The UsersApi service constructor.
     * @property {module:api/UsersApi}
     */
    UsersApi: UsersApi
  };

  return exports;
}));
