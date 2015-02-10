
var isMobileDevice = false;

if (eleks.browserType.isMobile() || eleks.browserType.isTablet() || eleks.browserType.isWindowsPhone()) {
  isMobileDevice = true;
  $('<img/>', {
    src: 'images/mobile_invisibles.gif',
    alt: 'invisibles'
  }).appendTo($('.text_masc'));
} else {
  isMobileDevice = false;
  $('<video/>', {
    id: 'cloud_video',
    loop: 'loop',
    autoplay: 'autoplay',
    html:  '<source type="video/mp4" src="http://media.eleks.com/media/Default/invisibles/video/cloud.mp4">'
  }).appendTo($('.video_wrap'));
  /*Play home page video*/
  setTimeout(function () {
    document.querySelector('#cloud_video').play();
  }, 1000);
}

$(document).ready(function() {
  var scrollAllow = true,
    $cloud_video = $('#cloud_video'),
    $header_inner = $('.header_inner'),
    $toggle_menu = $('.toggle_menu'),
    $play_video = $('.play_video'),
    $popup = $(".popup"),
    $popup_video = $(".popup_video"),
    $popup_share = $('.popup_share'),
    $popup_form = $(".popup_form"),
    $close_popup = $(".popup .icon-close"),
    $btn_preorder_now  = $('.preorder_now'),
    $preorder_now_link = $('.preorder_now_link'),
    $section_home = $('#section_home'),
    $step_1 = $('.popup_form .step_1'),
    $step_2 = $('.popup_form .step_2'),
    $step_3 = $('.popup_form .step_3'),
    $step_4 = $('.popup_form .step_4'),
    $close_popup_form = $('.popup_form .close_popup_form');

  /*show/hide menu*/
  $toggle_menu.click(function () {
    scrollAllow = !scrollAllow;
    $header_inner.fadeToggle(200);
    $(this).toggleClass('open');
    $.fn.fullpage.setAllowScrolling(scrollAllow);
  });



  $( "body" ).delegate( "#home_link, .open + div + div .top-menu ul li a, .open + div + div .preorder_now", "click", function() {
    scrollAllow = true;
    $header_inner.fadeOut(200);
    $toggle_menu.removeClass('open');
    $.fn.fullpage.setAllowScrolling(scrollAllow);
  });

  /*show share popup*/
  $('#share_btn').click(function () {
    $popup_share.fadeIn(200);
    $popup_share.addClass('active');
  });

  /*show video*/
  $play_video.click(function () {
    $popup_video.fadeIn();
    $popup_video.addClass('active');
    $section_home.addClass('play_video_popup');
    $.fn.fullpage.setAllowScrolling(false);
  });

  /*pusle preorder now link */
  /*$btn_preorder_now.mousedown(function(){
    $preorder_now_link.addClass('pulse');
  });
  $btn_preorder_now.mouseup(function(){
    $preorder_now_link.removeClass('pulse');
  });*/

  /*close popup*/
  $close_popup.click(function () {
    $popup.fadeOut(300);
    $popup.removeClass('active');
    $section_home.removeClass('play_video_popup');
    $.fn.fullpage.setAllowScrolling(true);
  });

  /*Preorder Popups*/
  $( "html" ).delegate( ".preorder_now_link, .fp-viewing-products .preorder_now", "click", function() {
    $popup_form.fadeIn(200);
    $popup_form.addClass('active');
    setTimeout( function() {
    }, 1000);
  });
  $('#nope_preorder').click(function () {
    $popup_form.fadeOut();
  });
  $('#yep_preorder').click(function () {
    $step_1.fadeOut(500);
    $close_popup_form.fadeOut(500);

    setTimeout(function () {
      $step_2.fadeIn(200);
      $step_2.addClass('show_step_2');
    }, 500);
    setTimeout(function () {
      $step_2.fadeOut(500);
    }, 2000);
    setTimeout(function () {
      $step_2.removeClass('show_step_2');
    }, 2500);
    setTimeout(function () {
      $step_3.fadeIn(500);
      $step_3.addClass('show_step_3');
    }, 1300);
    setTimeout(function () {
      $step_3.fadeOut(500);
      $step_4.addClass('show_step_4');
      $step_3.removeClass('show_step_3');
      $step_4.fadeIn(500);
    }, 4500);
  });

  $('#fullpage').fullpage({
    anchors: ['home', 'about', '', '', 'features', 'products'],
    menu: '#menu',
    paddingTop: '30px',
    paddingBottom: '30px',
    scrollOverflow: true,
    responsive: 300,
    afterLoad: function(anchorLink, index){
      //first slide of the second section
      if (($cloud_video.length > 0)) {
        if(index == 1){
          document.querySelector('#cloud_video').play();
          $cloud_video.fadeIn(2000);
        } else {
          $cloud_video.fadeOut(500);
          document.querySelector('#cloud_video').pause();
        }
      }
    }
  });

  /*move Section Down*/
  $('.icon_down').click(function () {
    $.fn.fullpage.moveSectionDown();
  });

  /*move to Home Section*/
  $('#home_link').click(function () {
    $.fn.fullpage.moveTo('home');
  });

  /*Top arrow*/
  $('.step_4 .icon_down').click(function () {
    $.fn.fullpage.moveTo('home');
    $step_4.fadeOut(500);
    $step_4.removeClass('show_step_4');
    setTimeout(function () {
      $popup_form.fadeOut(500);
      $step_1.fadeIn(5000);
    }, 500);
  });


  /*slick Sliders*/
  /*features slider*/
  $('.single-item').slick();

  /*product slider*/
  $('.product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.product-slider-nav'
  });
  $('.product-slider-nav').slick({
    centerMode: true,
    centerPadding: '50px',
    slidesToShow: 3,
    slidesToScroll: 0,
    asNavFor: '.product-slider',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          centerPadding: '5px',
          slidesToShow: 1
        }
      }
    ]
  });

  /*added body class load*/
  window.onload = function() {
    $('body').addClass('loaded');
  };
});



// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {

  var ytplayer = new YT.Player('video', {
    /*          videoId: 'Q1sfkm6WogQ',*/
    height: '480',
    width: '853',
    events: {
      'onReady': onPlayerReady
    },
    playerVars: {
      'showinfo': 0,
      'rel': 0
    }
  });
}

function onPlayerReady(event) {

  var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    if (!isMobileDevice) {
      // mobile devices often don't support autoplay etc
      // https://developers.google.com/youtube/iframe_api_reference#Mobile_considerations
      event.target.playVideo();
    }
  });

  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    event.target.pauseVideo();
  });
}