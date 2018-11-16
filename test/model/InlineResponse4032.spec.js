/**
 * Persona
 * KSF Media unified login service
 *
 * OpenAPI spec version: 1.1.0
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
    instance = new Persona.InlineResponse4032();
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

  describe('InlineResponse4032', function() {
    it('should create an instance of InlineResponse4032', function() {
      // uncomment below and update the code to test InlineResponse4032
      //var instance = new Persona.InlineResponse4032();
      //expect(instance).to.be.a(Persona.InlineResponse4032);
    });

    it('should have the property emailAddressInUse (base name: "email_address_in_use")', function() {
      // uncomment below and update the code to test the property emailAddressInUse
      //var instance = new Persona.InlineResponse4032();
      //expect(instance).to.be();
    });

    it('should have the property httpCode (base name: "http_code")', function() {
      // uncomment below and update the code to test the property httpCode
      //var instance = new Persona.InlineResponse4032();
      //expect(instance).to.be();
    });

    it('should have the property oauthFailed (base name: "oauth_failed")', function() {
      // uncomment below and update the code to test the property oauthFailed
      //var instance = new Persona.InlineResponse4032();
      //expect(instance).to.be();
    });

    it('should have the property httpStatus (base name: "http_status")', function() {
      // uncomment below and update the code to test the property httpStatus
      //var instance = new Persona.InlineResponse4032();
      //expect(instance).to.be();
    });

    it('should have the property emailNotAuthorized (base name: "email_not_authorized")', function() {
      // uncomment below and update the code to test the property emailNotAuthorized
      //var instance = new Persona.InlineResponse4032();
      //expect(instance).to.be();
    });

  });

}));
