describe("lonelyDancer", function() {

  var lonelyDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    lonelyDancer = new LonelyDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function() {
    expect(lonelyDancer.$node).to.be.an.instanceof(jQuery);
  });


  describe("dance", function() {
    it("should call step at least once per second", function() {
      sinon.spy(lonelyDancer, "step");
      expect(lonelyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(lonelyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(lonelyDancer.step.callCount).to.be.equal(2);
    });
  });
});
