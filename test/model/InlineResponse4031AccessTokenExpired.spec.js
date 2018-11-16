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
    instance = new Persona.InlineResponse4031AccessTokenExpired();
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

  describe('InlineResponse4031AccessTokenExpired', function() {
    it('should create an instance of InlineResponse4031AccessTokenExpired', function() {
      // uncomment below and update the code to test InlineResponse4031AccessTokenExpired
      //var instance = new Persona.InlineResponse4031AccessTokenExpired();
      //expect(instance).to.be.a(Persona.InlineResponse4031AccessTokenExpired);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Persona.InlineResponse4031AccessTokenExpired();
      //expect(instance).to.be();
    });

  });

}));
