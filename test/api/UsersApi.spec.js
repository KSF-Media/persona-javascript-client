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
    instance = new Persona.UsersApi();
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

  describe('UsersApi', function() {
    describe('usersPost', function() {
      it('should call usersPost successfully', function(done) {
        //uncomment below and update the code to test usersPost
        //instance.usersPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersTemporaryPost', function() {
      it('should call usersTemporaryPost successfully', function(done) {
        //uncomment below and update the code to test usersTemporaryPost
        //instance.usersTemporaryPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidEntitlementGet', function() {
      it('should call usersUuidEntitlementGet successfully', function(done) {
        //uncomment below and update the code to test usersUuidEntitlementGet
        //instance.usersUuidEntitlementGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidGdprPut', function() {
      it('should call usersUuidGdprPut successfully', function(done) {
        //uncomment below and update the code to test usersUuidGdprPut
        //instance.usersUuidGdprPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidGet', function() {
      it('should call usersUuidGet successfully', function(done) {
        //uncomment below and update the code to test usersUuidGet
        //instance.usersUuidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidLegalPut', function() {
      it('should call usersUuidLegalPut successfully', function(done) {
        //uncomment below and update the code to test usersUuidLegalPut
        //instance.usersUuidLegalPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidNewslettersGet', function() {
      it('should call usersUuidNewslettersGet successfully', function(done) {
        //uncomment below and update the code to test usersUuidNewslettersGet
        //instance.usersUuidNewslettersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidNewslettersPut', function() {
      it('should call usersUuidNewslettersPut successfully', function(done) {
        //uncomment below and update the code to test usersUuidNewslettersPut
        //instance.usersUuidNewslettersPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidPasswordPut', function() {
      it('should call usersUuidPasswordPut successfully', function(done) {
        //uncomment below and update the code to test usersUuidPasswordPut
        //instance.usersUuidPasswordPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidPatch', function() {
      it('should call usersUuidPatch successfully', function(done) {
        //uncomment below and update the code to test usersUuidPatch
        //instance.usersUuidPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidPaymentsGet', function() {
      it('should call usersUuidPaymentsGet successfully', function(done) {
        //uncomment below and update the code to test usersUuidPaymentsGet
        //instance.usersUuidPaymentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidScopeGet', function() {
      it('should call usersUuidScopeGet successfully', function(done) {
        //uncomment below and update the code to test usersUuidScopeGet
        //instance.usersUuidScopeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoAddressChangeDelete', function() {
      it('should call usersUuidSubscriptionsSubsnoAddressChangeDelete successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoAddressChangeDelete
        //instance.usersUuidSubscriptionsSubsnoAddressChangeDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoAddressChangePatch', function() {
      it('should call usersUuidSubscriptionsSubsnoAddressChangePatch successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoAddressChangePatch
        //instance.usersUuidSubscriptionsSubsnoAddressChangePatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoAddressChangePost', function() {
      it('should call usersUuidSubscriptionsSubsnoAddressChangePost successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoAddressChangePost
        //instance.usersUuidSubscriptionsSubsnoAddressChangePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoCancelPut', function() {
      it('should call usersUuidSubscriptionsSubsnoCancelPut successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoCancelPut
        //instance.usersUuidSubscriptionsSubsnoCancelPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoPausePatch', function() {
      it('should call usersUuidSubscriptionsSubsnoPausePatch successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoPausePatch
        //instance.usersUuidSubscriptionsSubsnoPausePatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoPausePost', function() {
      it('should call usersUuidSubscriptionsSubsnoPausePost successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoPausePost
        //instance.usersUuidSubscriptionsSubsnoPausePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoReclamationPost', function() {
      it('should call usersUuidSubscriptionsSubsnoReclamationPost successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoReclamationPost
        //instance.usersUuidSubscriptionsSubsnoReclamationPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet', function() {
      it('should call usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet
        //instance.usersUuidSubscriptionsSubsnoReclamationsReclaimnoGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersUuidSubscriptionsSubsnoUnpausePost', function() {
      it('should call usersUuidSubscriptionsSubsnoUnpausePost successfully', function(done) {
        //uncomment below and update the code to test usersUuidSubscriptionsSubsnoUnpausePost
        //instance.usersUuidSubscriptionsSubsnoUnpausePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
