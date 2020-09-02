describe('airport', function (){

  let airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it('Has an empty plane array', function(){
    expect(airport.planes()).toEqual([]);
  });
});