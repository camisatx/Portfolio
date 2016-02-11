jQuery(document).ready(function($) {
  // Function to set size for landing-image
  function fullscreen() {
    jQuery('.landing-image').css({
      width: jQuery(window).width(),
      height: jQuery(window).height()
    });
  }
  fullscreen();

  // This staggers the load times of all images one after the other, meaning
  // that the main page elements will load quicker while still pre-downloading
  // the other pictures on the page. Alternate to lazy-load.
  function deferImages() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i=0; i<imgDefer.length; i++) {
      if (imgDefer[i].getAttribute('data-src')) {
        imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
    }}
  }
  // On page load, stagger the image load time until after the main page
  // components finish loading.
  //window.onload = deferImages;

  // Instead of using the deferImages (stagger) function, this only loads the
  // image when the window is within 300px from it.
  jQuery('img').unveil(300);

  // Run the function if window resized
  jQuery(window).resize(function() {
    fullscreen();
  });
});