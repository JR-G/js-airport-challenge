describe('plane', function() {

  let plane;
  let airport;

  beforeEach(function() {
    plane = new Plane();
    airport = jasmine.createSpyObj('airport', ['clearForLanding','clearForTakeOff']);
  });

  it('can land', function() {
    plane.land(airport);
    
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });
  it('can take off', function() {
    plane.land(airport);
    plane.takeoff();
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});