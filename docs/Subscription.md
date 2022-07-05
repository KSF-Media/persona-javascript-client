# Persona.Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subsno** | **Number** | Subscription Id - primary key together with extno | 
**extno** | **Number** | Subscription Extension Id - how many times a subscription has been extended | 
**cusno** | **Number** | Customer getting the subscription | 
**paycusno** | **Number** | Customer paying for the subscription | 
**kind** | **String** |  | 
**state** | **String** |  | 
**pricegroup** | **String** |  | [optional] 
**_package** | [**ModelPackage**](ModelPackage.md) |  | 
**dates** | [**SubscriptionDates**](SubscriptionDates.md) |  | 
**extsubsexists** | **Boolean** | If the extension of this subscription exists | 
**campaign** | [**PackageCampaign**](PackageCampaign.md) |  | [optional] 
**paused** | [**[PausedSubscription]**](PausedSubscription.md) | Pause periods of this subscription | [optional] 
**receiver** | **String** | The name of subscription receiver | [optional] 
**deliveryAddress** | [**DeliveryAddress**](DeliveryAddress.md) |  | [optional] 
**pendingAddressChanges** | [**[PendingAddressChange]**](PendingAddressChange.md) | Pending and ongoing temporary address changes | [optional] 
**orderNumber** | **String** | Order number of subscription | [optional] 
**paymentMethod** | **String** |  | [optional] 
**paymentMethodId** | **Number** |  | [optional] 
**deliveryTroubleEnd** | **String** |  | [optional] 



## Enum: KindEnum


* `StandingOrder` (value: `"StandingOrder"`)

* `TimeLimitedOrder` (value: `"TimeLimitedOrder"`)

* `NewsStandOrder` (value: `"NewsStandOrder"`)

* `FreeOrder` (value: `"FreeOrder"`)

* `Testing1` (value: `"Testing1"`)

* `Testing2` (value: `"Testing2"`)





## Enum: StateEnum


* `Upcoming` (value: `"Upcoming"`)

* `Active` (value: `"Active"`)

* `Paused` (value: `"Paused"`)

* `Ended` (value: `"Ended"`)

* `UnpaidAndCanceled` (value: `"UnpaidAndCanceled"`)

* `Canceled` (value: `"Canceled"`)

* `CanceledWithLatePayment` (value: `"CanceledWithLatePayment"`)

* `RestartedAfterLatePayment` (value: `"RestartedAfterLatePayment"`)

* `DeactivatedRecently` (value: `"DeactivatedRecently"`)

* `Unknown` (value: `"Unknown"`)





## Enum: PricegroupEnum


* `Normal` (value: `"Normal"`)

* `Campaign` (value: `"Campaign"`)

* `Flex` (value: `"Flex"`)

* `Company` (value: `"Company"`)

* `CompanyFlex` (value: `"CompanyFlex"`)

* `Student` (value: `"Student"`)

* `HBL365Discount` (value: `"HBL365Discount"`)





## Enum: PaymentMethodEnum


* `PaperInvoice` (value: `"PaperInvoice"`)

* `CreditCard` (value: `"CreditCard"`)

* `Email` (value: `"Email"`)

* `NetBank` (value: `"NetBank"`)

* `ElectronicInvoice` (value: `"ElectronicInvoice"`)

* `DirectPayment` (value: `"DirectPayment"`)

* `UnknownPaymentMethod` (value: `"UnknownPaymentMethod"`)




