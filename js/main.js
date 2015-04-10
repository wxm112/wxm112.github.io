var removeActive = function() {
  $('.footer-nav').removeClass('active-footer-nav');
}

$(document).ready(function() {

  // Saves a Boolean value which represents whether the user's browser is Safari or not.
  var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;

  // Setup for the flipInX animate.css animation which doesn't run smoothly/at all in Safari.
  if(!isSafari) {
    $('.skills h4').css('visibility', 'hidden');
  }

  // Initialise fullPage.js.
  $('#fullpage').fullpage({
    'navigation': true,
    'navigationPosition': 'right',
    'navigationTooltips': ['Profile', 'Projects', 'Skills', 'Contact & Info'],

    // Get the footer nav and scrolling to play nicely.
    afterLoad: function(anchorLink, index) {
      var loadedSection = $(this);

      if(index == 1) {
        removeActive();
        $('#profile').addClass('active-footer-nav');
      }

      if(index == 2) {
        removeActive();
        $('#projects').addClass('active-footer-nav');
      }

      if(index == 3) {
        removeActive();
        $('#skills').addClass('active-footer-nav');

        // If the user's browser is something other than Safari, run the animation.
        // If they are using Safari, pull the animation from hover.css instead.
        if(!isSafari) {
          $('.skills h4').addClass('animated flipInX').css('visibility', 'visible');
        } else {
          $('.skills h4').addClass('hvr-grow-shadow');
        }
      }

      if(index == 4) {
        removeActive();
        $('#contact').addClass('active-footer-nav');
      }
    }
  });

  // Initialise the stickers.
  Sticker.init('.sticker');

  // Footer nav events.
  $('#profile').click(function() {
    removeActive();
    $('#profile').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(1, 0);
  });

  $('#projects').click(function() {
    removeActive();
    $('#projects').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(2, 0);
  });

  $('#skills').click(function() {
    removeActive();
    $('#skills').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(3, 0);
  });

  $('#contact').click(function() {
    removeActive();
    $('#contact').addClass('active-footer-nav');
    $.fn.fullpage.moveTo(4, 0);
  });

});
