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
    instance = new Persona.InlineResponse415();
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

  describe('InlineResponse415', function() {
    it('should create an instance of InlineResponse415', function() {
      // uncomment below and update the code to test InlineResponse415
      //var instance = new Persona.InlineResponse415();
      //expect(instance).to.be.a(Persona.InlineResponse415);
    });

    it('should have the property httpCode (base name: "http_code")', function() {
      // uncomment below and update the code to test the property httpCode
      //var instance = new Persona.InlineResponse415();
      //expect(instance).to.be();
    });

    it('should have the property unsupportedMediaType (base name: "unsupported_media_type")', function() {
      // uncomment below and update the code to test the property unsupportedMediaType
      //var instance = new Persona.InlineResponse415();
      //expect(instance).to.be();
    });

    it('should have the property httpStatus (base name: "http_status")', function() {
      // uncomment below and update the code to test the property httpStatus
      //var instance = new Persona.InlineResponse415();
      //expect(instance).to.be();
    });

  });

}));
