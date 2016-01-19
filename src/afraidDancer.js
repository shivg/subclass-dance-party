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
    // var itemOffset = that.$.offset();
    var itemTop = that.top;
    var itemLeft = that.left;


    makeDancer.prototype.step.call(this);

    $( 'body' ).mousemove(function( event ) {
      var msg = "Handler for .mousemove() called at ";
      msg += event.pageX + ", " + event.pageY;
      // console.log(msg);  
      checkMouse(event.pageX, event.pageY);
    });

    var top = itemTop + 200;
    var left = itemLeft+ 200;
    var height = $(window).height();
    var width = $(window).width();

    top = top > height || top < 0 ? Math.round(height/2) : top;
    left = left > width || left < 0 ? Math.round(width/2) : left;
 
    function checkMouse(mouseX, mouseY) {
      if (Math.abs(mouseX - itemLeft) < 50 && Math.abs(mouseY - itemTop) < 50){
        console.log("animate");
        console.log("top" + top);
         that.$node.animate({
              top: "" + top,
              left: "" + left
            });
      }
    }
};