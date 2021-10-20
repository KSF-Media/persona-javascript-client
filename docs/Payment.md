# Persona.Payment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invno** | **Number** | Payment invoice ID | 
**_date** | **Date** |  | [optional] 
**dueDate** | **Date** |  | [optional] 
**expenses** | **Number** |  | 
**interest** | **Number** |  | 
**vat** | **Number** |  | 
**amount** | **Number** |  | 
**openAmount** | **Number** |  | 
**type** | **String** |  | 
**state** | **String** |  | 
**discPercent** | **Number** |  | [optional] 
**discAmount** | **Number** |  | [optional] 
**reference** | **String** | Reference number | [optional] 



## Enum: TypeEnum


* `NormalState` (value: `"NormalState"`)

* `DirectDebit` (value: `"DirectDebit"`)

* `Reminder1` (value: `"Reminder1"`)

* `Reminder2` (value: `"Reminder2"`)

* `ReservedPaymentType1` (value: `"ReservedPaymentType1"`)

* `Nonpayment` (value: `"Nonpayment"`)

* `ReservedPaymentType2` (value: `"ReservedPaymentType2"`)

* `Reimbursement` (value: `"Reimbursement"`)





## Enum: StateEnum


* `PaymentOpen` (value: `"PaymentOpen"`)

* `PartiallyPaid` (value: `"PartiallyPaid"`)

* `Paid` (value: `"Paid"`)

* `Reminded` (value: `"Reminded"`)

* `Foreclosure` (value: `"Foreclosure"`)

* `ReservedPaymentState` (value: `"ReservedPaymentState"`)

* `Reimbursed` (value: `"Reimbursed"`)

* `CreditLoss` (value: `"CreditLoss"`)




