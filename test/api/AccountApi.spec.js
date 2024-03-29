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
    instance = new Persona.AccountApi();
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

  describe('AccountApi', function() {
    describe('accountPasswordCheckTokenPost', function() {
      it('should call accountPasswordCheckTokenPost successfully', function(done) {
        //uncomment below and update the code to test accountPasswordCheckTokenPost
        //instance.accountPasswordCheckTokenPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountPasswordForgotPost', function() {
      it('should call accountPasswordForgotPost successfully', function(done) {
        //uncomment below and update the code to test accountPasswordForgotPost
        //instance.accountPasswordForgotPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('accountPasswordResetPost', function() {
      it('should call accountPasswordResetPost successfully', function(done) {
        //uncomment below and update the code to test accountPasswordResetPost
        //instance.accountPasswordResetPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
