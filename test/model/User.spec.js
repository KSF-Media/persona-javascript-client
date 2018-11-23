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
    instance = new PersonaClient.User();
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

  describe('User', function() {
    it('should create an instance of User', function() {
      // uncomment below and update the code to test User
      //var instance = new PersonaClient.User();
      //expect(instance).to.be.a(PersonaClient.User);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new PersonaClient.User();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new PersonaClient.User();
      //expect(instance).to.be();
    });

    it('should have the property firstName (base name: "firstName")', function() {
      // uncomment below and update the code to test the property firstName
      //var instance = new PersonaClient.User();
      //expect(instance).to.be();
    });

    it('should have the property lastName (base name: "lastName")', function() {
      // uncomment below and update the code to test the property lastName
      //var instance = new PersonaClient.User();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new PersonaClient.User();
      //expect(instance).to.be();
    });

    it('should have the property cusno (base name: "cusno")', function() {
      // uncomment below and update the code to test the property cusno
      //var instance = new PersonaClient.User();
      //expect(instance).to.be();
    });

    it('should have the property subs (base name: "subs")', function() {
      // uncomment below and update the code to test the property subs
      //var instance = new PersonaClient.User();
      //expect(instance).to.be();
    });

  });

}));
