$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $('.lineUp').on('click', function (event) {
    lineUp();
  });

  $( 'body' ).on('mousemove', function( event ) {
    console.log($(event.target));
    if ($(event.target).hasClass('afraid-dancer')) {
      // console.log($(this));
      var top = (Math.random()*200) - 100;
      var left = (Math.random()*300) - 150;
      var height = $(window).height();
      var width = $(window).width();

      top = top > height || top < 0 ? Math.round(height/2) : top;
      left = left > width || left < 0 ? Math.round(width/2) : left;
      
      $(event.target).animate({
        top: "" + top,
        left: "" + left
      }, 1000);

      setTimeout(function () {
        $(this).stop();
        }.bind(event.target), 1000);
      }
   });

  $( '.clear' ).click(function() {
    _.each(window.dancers, function (node) {
      $(node).remove();
    });
    window.dancers = [];

  });
  
});

