# Persona.DeliveryReclamation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**_number** | **Number** | The reclamation identifier | 
**customerNumber** | **Number** | The identifier of the customer that made reclamation | 
**subscriptionNumber** | **Number** | The identifier of the subscription for which reclamation was made | 
**_date** | **Date** |  | 
**paper** | **String** |  | [optional] 
**publicationDate** | **Date** |  | 
**claim** | **String** |  | 
**doorCode** | **String** | Door code for redelivery | [optional] 
**reason** | **String** |  | [optional] 



## Enum: ClaimEnum


* `Extension` (value: `"Extension"`)

* `NewDelivery` (value: `"NewDelivery"`)





## Enum: ReasonEnum


* `MissingDelivery` (value: `"MissingDelivery"`)

* `WrongPaper` (value: `"WrongPaper"`)

* `DamagedPaper` (value: `"DamagedPaper"`)

* `OlderReclamation` (value: `"OlderReclamation"`)




