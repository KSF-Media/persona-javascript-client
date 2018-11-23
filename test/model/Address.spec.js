/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.2.0
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 *
 * OpenAPI Generator version: 4.0.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.PersonaClient);
  }
}(this, function(expect, PersonaClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new PersonaClient.Address();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Address', function() {
    it('should create an instance of Address', function() {
      // uncomment below and update the code to test Address
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be.a(PersonaClient.Address);
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property zipCode (base name: "zipCode")', function() {
      // uncomment below and update the code to test the property zipCode
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetAddress (base name: "streetAddress")', function() {
      // uncomment below and update the code to test the property streetAddress
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property streetName (base name: "streetName")', function() {
      // uncomment below and update the code to test the property streetName
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property houseNo (base name: "houseNo")', function() {
      // uncomment below and update the code to test the property houseNo
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property staircase (base name: "staircase")', function() {
      // uncomment below and update the code to test the property staircase
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be();
    });

    it('should have the property apartment (base name: "apartment")', function() {
      // uncomment below and update the code to test the property apartment
      //var instance = new PersonaClient.Address();
      //expect(instance).to.be();
    });

  });

}));
