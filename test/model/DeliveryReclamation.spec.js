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
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Persona);
  }
}(this, function(expect, Persona) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Persona.DeliveryReclamation();
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

  describe('DeliveryReclamation', function() {
    it('should create an instance of DeliveryReclamation', function() {
      // uncomment below and update the code to test DeliveryReclamation
      //var instance = new Persona.DeliveryReclamation();
      //expect(instance).to.be.a(Persona.DeliveryReclamation);
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instance = new Persona.DeliveryReclamation();
      //expect(instance).to.be();
    });

    it('should have the property customerNumber (base name: "customerNumber")', function() {
      // uncomment below and update the code to test the property customerNumber
      //var instance = new Persona.DeliveryReclamation();
      //expect(instance).to.be();
    });

    it('should have the property subscriptionNumber (base name: "subscriptionNumber")', function() {
      // uncomment below and update the code to test the property subscriptionNumber
      //var instance = new Persona.DeliveryReclamation();
      //expect(instance).to.be();
    });

    it('should have the property _date (base name: "date")', function() {
      // uncomment below and update the code to test the property _date
      //var instance = new Persona.DeliveryReclamation();
      //expect(instance).to.be();
    });

    it('should have the property publicationDate (base name: "publicationDate")', function() {
      // uncomment below and update the code to test the property publicationDate
      //var instance = new Persona.DeliveryReclamation();
      //expect(instance).to.be();
    });

    it('should have the property claim (base name: "claim")', function() {
      // uncomment below and update the code to test the property claim
      //var instance = new Persona.DeliveryReclamation();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new Persona.DeliveryReclamation();
      //expect(instance).to.be();
    });

  });

}));