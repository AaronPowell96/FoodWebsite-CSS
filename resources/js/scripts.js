$(document).ready(function () {

  $('.section-features').waypoint(function (direction) {
    if (direction == "down") {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  }, {
      offset: '100px;'
    });


  $('.hungryBtn').click(function () {
    $('html, body').animate({ scrollTop: $('.section-plans').offset().top }, 1000);
  });

  $('.showmeBtn').click(function () {
    $('html, body').animate({ scrollTop: $('.section-features').offset().top }, 500);
  });

  $(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault(); //try removing and add stopPropogation?
    //e.stopPropogation();
    // top position relative to the document, offset by menuheight
    var pos = $id.offset().top - 40;

    // animated top scrolling
    $('html').animate({ scrollTop: pos });
  });

  /*Animations on scroll*/

  $('.js--wp-1').waypoint(function () {
    $('.js--wp-1').addClass('animated fadeIn');
  }, { offset: '50%;' });

  $('.js--wp-2').waypoint(function () {
    $('.js--wp-2').addClass('animated fadeInUp');
  }, { offset: '50%;' });

  $('.js--wp-3').waypoint(function () {
    $('.js--wp-3').addClass('animated fadeInUp');
  }, { offset: '50%;' });

  $('.js--wp-4').waypoint(function () {
    $('.js--wp-4').addClass('animated pulse');
  }, { offset: '50%;' });
});