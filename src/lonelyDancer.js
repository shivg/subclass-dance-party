var LonelyDancer = function(top, left, timeBetweenSteps) {
  
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="lonely-dancer"><img src="assets/giphy.gif" class="lonely-dancer" alt="Dancing Cat"></span>');

  this.setPosition(top, left);
  this.step();
  this.isActive = true;
};

LonelyDancer.prototype = Object.create(Dancer.prototype);
LonelyDancer.prototype.constructor = LonelyDancer;

// LonelyDancer.toggleMove = function() {
//   this.isActive = !this.isActive;
// };

LonelyDancer.prototype.step = function() {
    var that = this;
    var thisOffset = that.$node.offset();

    Dancer.prototype.step.call(this);

    function checkOtherDancers() {
      _.each(window.dancers, function(jqNode) {
        var offset = jqNode.offset();
        var diffTop = thisOffset.top - offset.top;
        var moveTop;
        var moveLeft;
        if (diffTop) {
          var diffLeft = thisOffset.left - offset.left;
          if (Math.abs(diffTop) <= 200 && Math.abs(diffLeft) <= 200){
            if (diffTop < 0){
              moveTop = -250;
            } else if (diffTop > 0){
              moveTop = 250;
            }
            if (diffLeft < 0){
              moveLeft = - Math.random()*250;
            } else if (diffLeft > 0){
              moveLeft = Math.random()*250;
            }
            var top = offset.top + moveTop;
            var left = offset.left+ moveLeft;
            var height = $(window).height();
            var width = $(window).width();

            top = top > height|| top < 0 ? Math.round(height/2) : top;
            left = left > width || left < 0 ? Math.round(width/2) : left;

            that.$node.animate({
              top: "" + top,
              left: "" + left
            }, 2000);
          }
        }
      });
    }

    if (that.isActive) {
      checkOtherDancers();
    } else {
      that.$node.stop();
    }
};