'use strict';

describe('features', function() {
    
  let plane;
  let airport;
  
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
});