/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.3.0
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
    instance = new Persona.SubscriptionDates();
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

  describe('SubscriptionDates', function() {
    it('should create an instance of SubscriptionDates', function() {
      // uncomment below and update the code to test SubscriptionDates
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be.a(Persona.SubscriptionDates);
    });

    it('should have the property lenMonths (base name: "lenMonths")', function() {
      // uncomment below and update the code to test the property lenMonths
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be();
    });

    it('should have the property lenDays (base name: "lenDays")', function() {
      // uncomment below and update the code to test the property lenDays
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be();
    });

    it('should have the property start (base name: "start")', function() {
      // uncomment below and update the code to test the property start
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be();
    });

    it('should have the property end (base name: "end")', function() {
      // uncomment below and update the code to test the property end
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be();
    });

    it('should have the property unpaidBreak (base name: "unpaidBreak")', function() {
      // uncomment below and update the code to test the property unpaidBreak
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be();
    });

    it('should have the property invoicingStart (base name: "invoicingStart")', function() {
      // uncomment below and update the code to test the property invoicingStart
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be();
    });

    it('should have the property paidUntil (base name: "paidUntil")', function() {
      // uncomment below and update the code to test the property paidUntil
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be();
    });

    it('should have the property suspend (base name: "suspend")', function() {
      // uncomment below and update the code to test the property suspend
      //var instance = new Persona.SubscriptionDates();
      //expect(instance).to.be();
    });

  });

}));
