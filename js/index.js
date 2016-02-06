jQuery(document).ready(function($) {
  // Function to set size for landing-image
  function fullscreen() {
    jQuery('.landing-image').css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });
  }
  // Run the function at page load
  fullscreen();
  // Run the function if window resized
  jQuery(window).resize(function() {
    fullscreen();
  });
});