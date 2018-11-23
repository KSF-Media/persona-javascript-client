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
    instance = new PersonaClient.InlineResponse500InternalServerError();
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

  describe('InlineResponse500InternalServerError', function() {
    it('should create an instance of InlineResponse500InternalServerError', function() {
      // uncomment below and update the code to test InlineResponse500InternalServerError
      //var instance = new PersonaClient.InlineResponse500InternalServerError();
      //expect(instance).to.be.a(PersonaClient.InlineResponse500InternalServerError);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new PersonaClient.InlineResponse500InternalServerError();
      //expect(instance).to.be();
    });

  });

}));
