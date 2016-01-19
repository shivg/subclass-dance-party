var ScaredDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="afraid-dancer"><img src="assets/mummy.gif" class="afraid-dancer" alt="Dancing Cat"></span>');

  this.setPosition(top, left);
  this.step();
};

ScaredDancer.prototype = Object.create(Dancer.prototype);
ScaredDancer.prototype.constructor = ScaredDancer;

ScaredDancer.prototype.step = function() {
    var that = this;
    // var itemOffset = that.$.offset();
    var itemTop = that.top;
    var itemLeft = that.left;


    Dancer.prototype.step.call(this);
};