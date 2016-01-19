var makeLonelyDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="lonely-dancer"><img src="assets/giphy.gif" class="lonely-dancer" alt="Dancing Cat"></span>');

  this.setPosition(top, left);
  this.step();
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeLonelyDancer.prototype = Object.create(makeDancer.prototype);
makeLonelyDancer.prototype.constructor = makeLonelyDancer;

makeLonelyDancer.prototype.step = function() {
    var that = this;
    var itemOffset = that.$node.offset();

    // call the old version of step at the beginning of any call to this new version of step
    makeDancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    // this.$node.toggle();
    function checkOtherDancers() {
      _.each(window.dancers, function(jqNode) {
        var offset = jqNode.offset();
        var diffTop = itemOffset.top - offset.top;
        var moveTop;
        var moveLeft;
        if (diffTop) {
          var diffLeft = itemOffset.left - offset.left;
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
        // console.log(diffTop);
        // console.log(diffLeft);
      });
    }

    checkOtherDancers();
};