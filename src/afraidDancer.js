var makeAfraidDancer = function(top, left, timeBetweenSteps) {
  
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="afraid-dancer"><img src="assets/giphy.gif" class="afraid-dancer" alt="Dancing Cat"></span>');

  this.setPosition(top, left);
  this.step();
};

makeAfraidDancer.prototype = Object.create(makeDancer.prototype);
makeAfraidDancer.prototype.constructor = makeAfraidDancer;

makeAfraidDancer.prototype.step = function() {
    var that = this;
    var itemOffset = that.$node.offset();

    makeDancer.prototype.step.call(this);

    $( 'body' ).mousemove(function( event ) {
      var msg = "Handler for .mousemove() called at ";
      msg += event.pageX + ", " + event.pageY;
      console.log(msg);
    });
 
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
      });
    }
    // checkOtherDancers();
};