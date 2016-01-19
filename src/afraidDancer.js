var makeAfraidDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="afraid-dancer"><img src="assets/mummy.gif" class="afraid-dancer" alt="Dancing Cat"></span>');

  this.setPosition(top, left);
  this.step();
};

makeAfraidDancer.prototype = Object.create(makeDancer.prototype);
makeAfraidDancer.prototype.constructor = makeAfraidDancer;

makeAfraidDancer.prototype.step = function() {
    var that = this;
    // var itemOffset = that.$.offset();
    var itemTop = that.top;
    var itemLeft = that.left;


    makeDancer.prototype.step.call(this);
};