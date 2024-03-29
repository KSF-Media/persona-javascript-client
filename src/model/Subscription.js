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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/DeliveryAddress', 'model/ModelPackage', 'model/PackageCampaign', 'model/PausedSubscription', 'model/PendingAddressChange', 'model/SubscriptionDates'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeliveryAddress'), require('./ModelPackage'), require('./PackageCampaign'), require('./PausedSubscription'), require('./PendingAddressChange'), require('./SubscriptionDates'));
  } else {
    // Browser globals (root is window)
    if (!root.Persona) {
      root.Persona = {};
    }
    root.Persona.Subscription = factory(root.Persona.ApiClient, root.Persona.DeliveryAddress, root.Persona.ModelPackage, root.Persona.PackageCampaign, root.Persona.PausedSubscription, root.Persona.PendingAddressChange, root.Persona.SubscriptionDates);
  }
}(this, function(ApiClient, DeliveryAddress, ModelPackage, PackageCampaign, PausedSubscription, PendingAddressChange, SubscriptionDates) {
  'use strict';



  /**
   * The Subscription model module.
   * @module model/Subscription
   * @version 1.3.0
   */

  /**
   * Constructs a new <code>Subscription</code>.
   * @alias module:model/Subscription
   * @class
   * @param subsno {Number} Subscription Id - primary key together with extno
   * @param extno {Number} Subscription Extension Id - how many times a subscription has been extended
   * @param cusno {Number} Customer getting the subscription
   * @param paycusno {Number} Customer paying for the subscription
   * @param kind {module:model/Subscription.KindEnum} 
   * @param state {module:model/Subscription.StateEnum} 
   * @param _package {module:model/ModelPackage} 
   * @param dates {module:model/SubscriptionDates} 
   * @param extsubsexists {Boolean} If the extension of this subscription exists
   */
  var exports = function(subsno, extno, cusno, paycusno, kind, state, _package, dates, extsubsexists) {
    var _this = this;

    _this['subsno'] = subsno;
    _this['extno'] = extno;
    _this['cusno'] = cusno;
    _this['paycusno'] = paycusno;
    _this['kind'] = kind;
    _this['state'] = state;
    _this['package'] = _package;
    _this['dates'] = dates;
    _this['extsubsexists'] = extsubsexists;
  };

  /**
   * Constructs a <code>Subscription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Subscription} obj Optional instance to populate.
   * @return {module:model/Subscription} The populated <code>Subscription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('subsno')) {
        obj['subsno'] = ApiClient.convertToType(data['subsno'], 'Number');
      }
      if (data.hasOwnProperty('extno')) {
        obj['extno'] = ApiClient.convertToType(data['extno'], 'Number');
      }
      if (data.hasOwnProperty('cusno')) {
        obj['cusno'] = ApiClient.convertToType(data['cusno'], 'Number');
      }
      if (data.hasOwnProperty('paycusno')) {
        obj['paycusno'] = ApiClient.convertToType(data['paycusno'], 'Number');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
      if (data.hasOwnProperty('pricegroup')) {
        obj['pricegroup'] = ApiClient.convertToType(data['pricegroup'], 'String');
      }
      if (data.hasOwnProperty('package')) {
        obj['package'] = ModelPackage.constructFromObject(data['package']);
      }
      if (data.hasOwnProperty('dates')) {
        obj['dates'] = SubscriptionDates.constructFromObject(data['dates']);
      }
      if (data.hasOwnProperty('extsubsexists')) {
        obj['extsubsexists'] = ApiClient.convertToType(data['extsubsexists'], 'Boolean');
      }
      if (data.hasOwnProperty('campaign')) {
        obj['campaign'] = PackageCampaign.constructFromObject(data['campaign']);
      }
      if (data.hasOwnProperty('paused')) {
        obj['paused'] = ApiClient.convertToType(data['paused'], [PausedSubscription]);
      }
      if (data.hasOwnProperty('receiver')) {
        obj['receiver'] = ApiClient.convertToType(data['receiver'], 'String');
      }
      if (data.hasOwnProperty('deliveryAddress')) {
        obj['deliveryAddress'] = DeliveryAddress.constructFromObject(data['deliveryAddress']);
      }
      if (data.hasOwnProperty('pendingAddressChanges')) {
        obj['pendingAddressChanges'] = ApiClient.convertToType(data['pendingAddressChanges'], [PendingAddressChange]);
      }
      if (data.hasOwnProperty('orderNumber')) {
        obj['orderNumber'] = ApiClient.convertToType(data['orderNumber'], 'String');
      }
      if (data.hasOwnProperty('paymentMethod')) {
        obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
      }
      if (data.hasOwnProperty('paymentMethodId')) {
        obj['paymentMethodId'] = ApiClient.convertToType(data['paymentMethodId'], 'Number');
      }
      if (data.hasOwnProperty('deliveryTroubleEnd')) {
        obj['deliveryTroubleEnd'] = ApiClient.convertToType(data['deliveryTroubleEnd'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Subscription Id - primary key together with extno
   * @member {Number} subsno
   */
  exports.prototype['subsno'] = undefined;
  /**
   * Subscription Extension Id - how many times a subscription has been extended
   * @member {Number} extno
   */
  exports.prototype['extno'] = undefined;
  /**
   * Customer getting the subscription
   * @member {Number} cusno
   */
  exports.prototype['cusno'] = undefined;
  /**
   * Customer paying for the subscription
   * @member {Number} paycusno
   */
  exports.prototype['paycusno'] = undefined;
  /**
   * @member {module:model/Subscription.KindEnum} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * @member {module:model/Subscription.StateEnum} state
   */
  exports.prototype['state'] = undefined;
  /**
   * @member {module:model/Subscription.PricegroupEnum} pricegroup
   */
  exports.prototype['pricegroup'] = undefined;
  /**
   * @member {module:model/ModelPackage} package
   */
  exports.prototype['package'] = undefined;
  /**
   * @member {module:model/SubscriptionDates} dates
   */
  exports.prototype['dates'] = undefined;
  /**
   * If the extension of this subscription exists
   * @member {Boolean} extsubsexists
   */
  exports.prototype['extsubsexists'] = undefined;
  /**
   * @member {module:model/PackageCampaign} campaign
   */
  exports.prototype['campaign'] = undefined;
  /**
   * Pause periods of this subscription
   * @member {Array.<module:model/PausedSubscription>} paused
   */
  exports.prototype['paused'] = undefined;
  /**
   * The name of subscription receiver
   * @member {String} receiver
   */
  exports.prototype['receiver'] = undefined;
  /**
   * @member {module:model/DeliveryAddress} deliveryAddress
   */
  exports.prototype['deliveryAddress'] = undefined;
  /**
   * Pending and ongoing temporary address changes
   * @member {Array.<module:model/PendingAddressChange>} pendingAddressChanges
   */
  exports.prototype['pendingAddressChanges'] = undefined;
  /**
   * Order number of subscription
   * @member {String} orderNumber
   */
  exports.prototype['orderNumber'] = undefined;
  /**
   * @member {module:model/Subscription.PaymentMethodEnum} paymentMethod
   */
  exports.prototype['paymentMethod'] = undefined;
  /**
   * @member {Number} paymentMethodId
   */
  exports.prototype['paymentMethodId'] = undefined;
  /**
   * @member {Date} deliveryTroubleEnd
   */
  exports.prototype['deliveryTroubleEnd'] = undefined;


  /**
   * Allowed values for the <code>kind</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KindEnum = {
    /**
     * value: "StandingOrder"
     * @const
     */
    "StandingOrder": "StandingOrder",
    /**
     * value: "TimeLimitedOrder"
     * @const
     */
    "TimeLimitedOrder": "TimeLimitedOrder",
    /**
     * value: "NewsStandOrder"
     * @const
     */
    "NewsStandOrder": "NewsStandOrder",
    /**
     * value: "FreeOrder"
     * @const
     */
    "FreeOrder": "FreeOrder",
    /**
     * value: "Testing1"
     * @const
     */
    "Testing1": "Testing1",
    /**
     * value: "Testing2"
     * @const
     */
    "Testing2": "Testing2"  };

  /**
   * Allowed values for the <code>state</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StateEnum = {
    /**
     * value: "Upcoming"
     * @const
     */
    "Upcoming": "Upcoming",
    /**
     * value: "Active"
     * @const
     */
    "Active": "Active",
    /**
     * value: "Paused"
     * @const
     */
    "Paused": "Paused",
    /**
     * value: "Ended"
     * @const
     */
    "Ended": "Ended",
    /**
     * value: "UnpaidAndCanceled"
     * @const
     */
    "UnpaidAndCanceled": "UnpaidAndCanceled",
    /**
     * value: "Canceled"
     * @const
     */
    "Canceled": "Canceled",
    /**
     * value: "CanceledWithLatePayment"
     * @const
     */
    "CanceledWithLatePayment": "CanceledWithLatePayment",
    /**
     * value: "RestartedAfterLatePayment"
     * @const
     */
    "RestartedAfterLatePayment": "RestartedAfterLatePayment",
    /**
     * value: "DeactivatedRecently"
     * @const
     */
    "DeactivatedRecently": "DeactivatedRecently",
    /**
     * value: "Unknown"
     * @const
     */
    "Unknown": "Unknown"  };

  /**
   * Allowed values for the <code>pricegroup</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PricegroupEnum = {
    /**
     * value: "Normal"
     * @const
     */
    "Normal": "Normal",
    /**
     * value: "Campaign"
     * @const
     */
    "Campaign": "Campaign",
    /**
     * value: "Flex"
     * @const
     */
    "Flex": "Flex",
    /**
     * value: "Company"
     * @const
     */
    "Company": "Company",
    /**
     * value: "CompanyFlex"
     * @const
     */
    "CompanyFlex": "CompanyFlex",
    /**
     * value: "Student"
     * @const
     */
    "Student": "Student",
    /**
     * value: "HBL365Discount"
     * @const
     */
    "HBL365Discount": "HBL365Discount"  };

  /**
   * Allowed values for the <code>paymentMethod</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PaymentMethodEnum = {
    /**
     * value: "PaperInvoice"
     * @const
     */
    "PaperInvoice": "PaperInvoice",
    /**
     * value: "CreditCard"
     * @const
     */
    "CreditCard": "CreditCard",
    /**
     * value: "Email"
     * @const
     */
    "Email": "Email",
    /**
     * value: "NetBank"
     * @const
     */
    "NetBank": "NetBank",
    /**
     * value: "ElectronicInvoice"
     * @const
     */
    "ElectronicInvoice": "ElectronicInvoice",
    /**
     * value: "DirectPayment"
     * @const
     */
    "DirectPayment": "DirectPayment",
    /**
     * value: "Klarna"
     * @const
     */
    "Klarna": "Klarna",
    /**
     * value: "UnknownPaymentMethod"
     * @const
     */
    "UnknownPaymentMethod": "UnknownPaymentMethod"  };


  return exports;
}));


