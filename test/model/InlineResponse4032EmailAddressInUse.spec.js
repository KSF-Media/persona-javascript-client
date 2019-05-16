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
    instance = new Persona.InlineResponse4032EmailAddressInUse();
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

  describe('InlineResponse4032EmailAddressInUse', function() {
    it('should create an instance of InlineResponse4032EmailAddressInUse', function() {
      // uncomment below and update the code to test InlineResponse4032EmailAddressInUse
      //var instance = new Persona.InlineResponse4032EmailAddressInUse();
      //expect(instance).to.be.a(Persona.InlineResponse4032EmailAddressInUse);
    });

    it('should have the property mergeToken (base name: "merge_token")', function() {
      // uncomment below and update the code to test the property mergeToken
      //var instance = new Persona.InlineResponse4032EmailAddressInUse();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new Persona.InlineResponse4032EmailAddressInUse();
      //expect(instance).to.be();
    });

    it('should have the property existingProvider (base name: "existing_provider")', function() {
      // uncomment below and update the code to test the property existingProvider
      //var instance = new Persona.InlineResponse4032EmailAddressInUse();
      //expect(instance).to.be();
    });

  });

}));
