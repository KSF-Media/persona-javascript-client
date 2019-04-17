/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.3.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import ActiveDays from './model/ActiveDays';
import Address from './model/Address';
import Campaign from './model/Campaign';
import DescriptionFrequency from './model/DescriptionFrequency';
import GdprConsent from './model/GdprConsent';
import InlineResponse400 from './model/InlineResponse400';
import InlineResponse400InvalidRequestBody from './model/InlineResponse400InvalidRequestBody';
import InlineResponse403 from './model/InlineResponse403';
import InlineResponse4031 from './model/InlineResponse4031';
import InlineResponse4031AccessTokenExpired from './model/InlineResponse4031AccessTokenExpired';
import InlineResponse4032 from './model/InlineResponse4032';
import InlineResponse4032EmailAddressInUse from './model/InlineResponse4032EmailAddressInUse';
import InlineResponse4032EmailNotAuthorized from './model/InlineResponse4032EmailNotAuthorized';
import InlineResponse4032OauthFailed from './model/InlineResponse4032OauthFailed';
import InlineResponse403InvalidCredentials from './model/InlineResponse403InvalidCredentials';
import InlineResponse415 from './model/InlineResponse415';
import InlineResponse415UnsupportedMediaType from './model/InlineResponse415UnsupportedMediaType';
import InlineResponse500 from './model/InlineResponse500';
import InlineResponse500InternalServerError from './model/InlineResponse500InternalServerError';
import LegalConsent from './model/LegalConsent';
import LoginData from './model/LoginData';
import LoginDataSSO from './model/LoginDataSSO';
import LoginDataSoMe from './model/LoginDataSoMe';
import LoginResponse from './model/LoginResponse';
import ModelPackage from './model/ModelPackage';
import NewUser from './model/NewUser';
import PackageDescription from './model/PackageDescription';
import PackageOffer from './model/PackageOffer';
import Paper from './model/Paper';
import PausedSubscription from './model/PausedSubscription';
import Product from './model/Product';
import Subscription from './model/Subscription';
import SubscriptionDates from './model/SubscriptionDates';
import SubscriptionPauseDates from './model/SubscriptionPauseDates';
import User from './model/User';
import UserUpdate from './model/UserUpdate';
import UserUpdateAddress from './model/UserUpdateAddress';
import EntitlementsApi from './api/EntitlementsApi';
import LoginApi from './api/LoginApi';
import UsersApi from './api/UsersApi';


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
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ActiveDays model constructor.
     * @property {module:model/ActiveDays}
     */
    ActiveDays,

    /**
     * The Address model constructor.
     * @property {module:model/Address}
     */
    Address,

    /**
     * The Campaign model constructor.
     * @property {module:model/Campaign}
     */
    Campaign,

    /**
     * The DescriptionFrequency model constructor.
     * @property {module:model/DescriptionFrequency}
     */
    DescriptionFrequency,

    /**
     * The GdprConsent model constructor.
     * @property {module:model/GdprConsent}
     */
    GdprConsent,

    /**
     * The InlineResponse400 model constructor.
     * @property {module:model/InlineResponse400}
     */
    InlineResponse400,

    /**
     * The InlineResponse400InvalidRequestBody model constructor.
     * @property {module:model/InlineResponse400InvalidRequestBody}
     */
    InlineResponse400InvalidRequestBody,

    /**
     * The InlineResponse403 model constructor.
     * @property {module:model/InlineResponse403}
     */
    InlineResponse403,

    /**
     * The InlineResponse4031 model constructor.
     * @property {module:model/InlineResponse4031}
     */
    InlineResponse4031,

    /**
     * The InlineResponse4031AccessTokenExpired model constructor.
     * @property {module:model/InlineResponse4031AccessTokenExpired}
     */
    InlineResponse4031AccessTokenExpired,

    /**
     * The InlineResponse4032 model constructor.
     * @property {module:model/InlineResponse4032}
     */
    InlineResponse4032,

    /**
     * The InlineResponse4032EmailAddressInUse model constructor.
     * @property {module:model/InlineResponse4032EmailAddressInUse}
     */
    InlineResponse4032EmailAddressInUse,

    /**
     * The InlineResponse4032EmailNotAuthorized model constructor.
     * @property {module:model/InlineResponse4032EmailNotAuthorized}
     */
    InlineResponse4032EmailNotAuthorized,

    /**
     * The InlineResponse4032OauthFailed model constructor.
     * @property {module:model/InlineResponse4032OauthFailed}
     */
    InlineResponse4032OauthFailed,

    /**
     * The InlineResponse403InvalidCredentials model constructor.
     * @property {module:model/InlineResponse403InvalidCredentials}
     */
    InlineResponse403InvalidCredentials,

    /**
     * The InlineResponse415 model constructor.
     * @property {module:model/InlineResponse415}
     */
    InlineResponse415,

    /**
     * The InlineResponse415UnsupportedMediaType model constructor.
     * @property {module:model/InlineResponse415UnsupportedMediaType}
     */
    InlineResponse415UnsupportedMediaType,

    /**
     * The InlineResponse500 model constructor.
     * @property {module:model/InlineResponse500}
     */
    InlineResponse500,

    /**
     * The InlineResponse500InternalServerError model constructor.
     * @property {module:model/InlineResponse500InternalServerError}
     */
    InlineResponse500InternalServerError,

    /**
     * The LegalConsent model constructor.
     * @property {module:model/LegalConsent}
     */
    LegalConsent,

    /**
     * The LoginData model constructor.
     * @property {module:model/LoginData}
     */
    LoginData,

    /**
     * The LoginDataSSO model constructor.
     * @property {module:model/LoginDataSSO}
     */
    LoginDataSSO,

    /**
     * The LoginDataSoMe model constructor.
     * @property {module:model/LoginDataSoMe}
     */
    LoginDataSoMe,

    /**
     * The LoginResponse model constructor.
     * @property {module:model/LoginResponse}
     */
    LoginResponse,

    /**
     * The ModelPackage model constructor.
     * @property {module:model/ModelPackage}
     */
    ModelPackage,

    /**
     * The NewUser model constructor.
     * @property {module:model/NewUser}
     */
    NewUser,

    /**
     * The PackageDescription model constructor.
     * @property {module:model/PackageDescription}
     */
    PackageDescription,

    /**
     * The PackageOffer model constructor.
     * @property {module:model/PackageOffer}
     */
    PackageOffer,

    /**
     * The Paper model constructor.
     * @property {module:model/Paper}
     */
    Paper,

    /**
     * The PausedSubscription model constructor.
     * @property {module:model/PausedSubscription}
     */
    PausedSubscription,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The Subscription model constructor.
     * @property {module:model/Subscription}
     */
    Subscription,

    /**
     * The SubscriptionDates model constructor.
     * @property {module:model/SubscriptionDates}
     */
    SubscriptionDates,

    /**
     * The SubscriptionPauseDates model constructor.
     * @property {module:model/SubscriptionPauseDates}
     */
    SubscriptionPauseDates,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
     * The UserUpdate model constructor.
     * @property {module:model/UserUpdate}
     */
    UserUpdate,

    /**
     * The UserUpdateAddress model constructor.
     * @property {module:model/UserUpdateAddress}
     */
    UserUpdateAddress,

    /**
    * The EntitlementsApi service constructor.
    * @property {module:api/EntitlementsApi}
    */
    EntitlementsApi,

    /**
    * The LoginApi service constructor.
    * @property {module:api/LoginApi}
    */
    LoginApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi
};
