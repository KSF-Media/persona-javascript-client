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
    factory(root.expect, root.Persona);
  }
}(this, function(expect, Persona) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Persona.PackageOffer();
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

  describe('PackageOffer', function() {
    it('should create an instance of PackageOffer', function() {
      // uncomment below and update the code to test PackageOffer
      //var instance = new Persona.PackageOffer();
      //expect(instance).to.be.a(Persona.PackageOffer);
    });

    it('should have the property months (base name: "months")', function() {
      // uncomment below and update the code to test the property months
      //var instance = new Persona.PackageOffer();
      //expect(instance).to.be();
    });

    it('should have the property totalPrice (base name: "totalPrice")', function() {
      // uncomment below and update the code to test the property totalPrice
      //var instance = new Persona.PackageOffer();
      //expect(instance).to.be();
    });

    it('should have the property monthlyPrice (base name: "monthlyPrice")', function() {
      // uncomment below and update the code to test the property monthlyPrice
      //var instance = new Persona.PackageOffer();
      //expect(instance).to.be();
    });

  });

}));