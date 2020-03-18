'use strict';

$(document).ready(function() {

  // dev script
  if (document.querySelector('.cms-toolbar')) {
    document.querySelector('.nav-container.fixed-header').style = 'padding-top: 46px;';
    document.querySelector('.main-header .nav-container.full').style = 'padding-top: 46px;';
    document.querySelector('.popup') ? document.querySelector('.popup').style = 'padding-top: 46px;' : '';
  }

  // Video
  var video = document.querySelector('.top-video-section video');
  var videoWrap = document.querySelector('.top-video-section .video-wrap-inner');

  // // video file fullscreen
  // $(videoWrap).click(function() {
  //     video.requestFullscreen();
  //     $(videoWrap).removeClass('pause');
  // });

  // // exit video file fullscreen
  // $(video).click(function() {
  //     document.exitFullscreen();
  // });

  // // play video file after exit fullscreen
  // if (document.querySelector('.top-video-section video')) {
  //   video.addEventListener(
  //     'fullscreenchange',
  //     function(event) {
  //       if (!document.fullscreenElement) {
  //         video.play();
  //         $(videoWrap).addClass('pause');
  //       }
  //     },
  //     false
  //   );
  // }

  // Vimeo video
  $(videoWrap).click(function() {
    $('body').append('<div class="fullscreen-wrap">' +
      '<div class="fullscreen-video-container" onClick="closeVideo(event)">' +
        '<iframe src="https://player.vimeo.com/video/395674523" width="640" height="480" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>' +
        '<div class="close" onClick="closeVideo(event)"></div>'+
      '</div>' +
    '</div>'
    )
    $(videoWrap).removeClass('pause');
  });

  

  // Slider
  var sliderPrevArrow = '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="26.815" height="14.595" viewBox="0 0 26.815 14.595"><path d="M26.744,0,0-.007,1.972,2H26.744Z" transform="translate(0.071 1.424)"/><path d="M0,2.014l16.615,0L18.626,0,0,.014Z" transform="translate(13.171 14.595) rotate(-135)"/></svg></button>';
  var sliderNextArrow = '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="26.815" height="14.595" viewBox="0 0 26.815 14.595"><g transform="translate(-228 -1139.576)"><path d="M0,0,26.744-.007,24.772,2H0Z" transform="translate(228 1141)"/><path d="M7.385,0,24,0l2.012,2.012L7.385,2Z" transform="translate(235 1157.971) rotate(-45)"/></g></svg></button>';

  $('.text-blocks-slider .slider').slick({
    prevArrow: sliderPrevArrow,
    nextArrow: sliderNextArrow,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendArrows: $('.text-blocks-slider .slider-btns.desktop'),
    infinite: true,
    centerMode: true,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
          centerMode: true,
          appendArrows: $('.text-blocks-slider .slider-btns.mobile'),
          infinite: true,
          adaptiveHeight: false,
        }
      },
  ]
  });

  // Set text slider number func
  function setTextSliderNum() {
    var currentNum = +$('.text-blocks-slider .slider').slick('slickCurrentSlide') + 1;
    var count = $('.text-blocks-slider .slider').slick('getSlick').slideCount;

    if (+currentNum < 10) {
      currentNum = "0" + currentNum;
    }
    if (+count < 10) {
      count = "0" + count;
    }

    $('.text-blocks-slider .slider-btns .num .current').text(currentNum);
    $('.text-blocks-slider .slider-btns .num .all').text(count);
  };
  
  // init set text slider number func
  if (document.querySelector('.text-blocks-slider .slider')) {
    setTextSliderNum();
  

  // small-img-slider add active class to pagination numbers
    $('.text-blocks-slider .slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
      setTextSliderNum();
    });
  }

  // Slider with descripion
  $('.descr-img-slider.mobile .slider').slick({
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToShow: 1,
          dots: false,
          centerMode: true,
          prevArrow: $('.descr-img-slider .slider-btns.mobile .slick-prev'),
          nextArrow: $('.descr-img-slider .slider-btns.mobile .slick-next'),
          infinite: true,
          adaptiveHeight: true,
  });

  // Footer slider
  $('footer .slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: false,
    appendDots: $('footer .dots-wrap'),
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
        }
      },
    ]
  });

  // big-img-slider-section
  $('.big-img-slider-section .slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: $('.big-img-slider-section .pagination'),
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>0'+ (i+1) +'</a>';
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('.big-img-slider-section .slider'),
          customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a></a>';
          },
        }
      },
    ]
  });

  // big-img-slider-section-min
  $('.big-img-slider-section-min .slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    adaptiveHeight: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: $('.big-img-slider-section-min .pagination'),
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>0'+ (i+1) +'</a>';
              },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          dots: true,
          appendDots: $('.big-img-slider-section-min .slider'),
          customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();
            return '<a></a>';
          },
        }
      },
    ]
  });

  // text-slider-titled-items
  $('.text-slider-titled-items .slider').slick({
    prevArrow: sliderPrevArrow,
    nextArrow: sliderNextArrow,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.text-slider-titled-items .slider-btns.desktop .slick-prev'),
    nextArrow: $('.text-slider-titled-items .slider-btns.desktop .slick-next'),
    infinite: true,
    draggable: true,
    autoplay: true,
    adaptiveHeight: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
          centerMode: true,
          prevArrow: $('.text-slider-titled-items .slider-btns.mobile .slick-prev'),
          nextArrow: $('.text-slider-titled-items .slider-btns.mobile .slick-next'),
          infinite: true,
          adaptiveHeight: false,
        }
      },
    ]
  });
  // $('.text-slider-titled-items .slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //   $('.text-slider-titled-items .slider').slick({
  //     appendArrows: $('.text-slider-titled-items .slider .slick-current')
  //   })
  // });

  // input
  $('input').focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });
  // textarea
  $('textarea').focus(function(){
    $(this).parents('.form-group').addClass('focused');
  });

  $('input').blur(function(){
    var inputValue = $(this).val();
    if ( inputValue == "" ) {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');  
    } else {
        $(this).addClass('filled');
    }
  });
  $('textarea').blur(function(){
    var textareaValue = $(this).val();
    if ( textareaValue == "" ) {
        $(this).removeClass('filled');
        $(this).parents('.form-group').removeClass('focused');  
    } else {
        $(this).addClass('filled');
    }
  });

  // Custom select
  var x, i, j, selElmnt, a, b, c;
  x = document.getElementsByClassName("custom-select");
  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected default");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
      c = document.createElement("DIV");
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener("click", function(e) {
          var y, i, k, s, h;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          h = this.parentNode.previousSibling;
          for (i = 0; i < s.length; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              for (k = 0; k < y.length; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              break;
            }
          }
          h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");

        this.classList.remove("default");
    });
  }
  function closeAllSelect(elmnt) {
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i)
      } else {
        y[i].classList.remove("select-arrow-active");
      }
    }
    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add("select-hide");
      }
    }
  }
  document.addEventListener("click", closeAllSelect);
  // end custom select

  // inputRequireValidation
  function inputRequireValidation(inputWrapSelector) {
    if ($(inputWrapSelector).find('input').val().length > 0) {
      $(inputWrapSelector).addClass('valid');
      if ($(inputWrapSelector).hasClass('is-required')) {
        $(inputWrapSelector).removeClass('is-required');
        $(inputWrapSelector).addClass('valid');
        if ($(inputWrapSelector + ' .required-msg')) {
          $(inputWrapSelector + ' .required-msg').remove();
        }
      }
    } else {
      $(inputWrapSelector).addClass('is-required');
      if (document.querySelector(inputWrapSelector + ' .required-msg')) {
        return;
      } else {
        $(inputWrapSelector).append('<div class="required-msg">This field is required</div>');
      }
      if ($(inputWrapSelector).hasClass('valid')) {
        $(inputWrapSelector).removeClass('valid');
      }
    }
  }

  // emailValidation
  var regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,10})$/;
  function emailValidation(emailWrapperSelector) {
    // is required validation
    if ($(emailWrapperSelector + ' input').val().length > 0) {
      $(emailWrapperSelector).addClass('valid');
      if ($(emailWrapperSelector).hasClass('is-required')) {
        $(emailWrapperSelector).removeClass('is-required');
        $(emailWrapperSelector).addClass('valid');
        if ($(emailWrapperSelector + ' .required-msg')) {
          $(emailWrapperSelector + ' .required-msg').remove();
        }
      }
      // email regexp validation
      if (regEmail.test($(emailWrapperSelector + ' input').val()) === false) {
        if ($(emailWrapperSelector).hasClass('valid')) {
          $(emailWrapperSelector).removeClass('valid');
        }
        if ($(emailWrapperSelector + ' .required-msg')) {
          $(emailWrapperSelector + ' .required-msg').remove();
        }
        $(emailWrapperSelector + ' .required-msg').remove();

        if (document.querySelector(emailWrapperSelector + ' .email-err-msg')) {
          return;
        } else {
          $(emailWrapperSelector).append('<div class="email-err-msg">Enter valid email</div>');
          $(emailWrapperSelector).addClass('is-required');
        }
      } else {
        if ($(emailWrapperSelector + ' .email-err-msg')) {
          $(emailWrapperSelector + ' .email-err-msg').remove();
        }
      }
      // email regexp validation
    } else {
      $(emailWrapperSelector).addClass('is-required');
      if ($(emailWrapperSelector + ' .email-err-msg')) {
        $(emailWrapperSelector + ' .email-err-msg').remove();
      }
      if (document.querySelector(emailWrapperSelector + ' .required-msg')) {
        return;
      } else {
        $(emailWrapperSelector).append('<div class="required-msg">This field is required</div>');
      }
      if ($(emailWrapperSelector).hasClass('valid')) {
        $(emailWrapperSelector).removeClass('valid');
      }
    }
  }


    // form handler
    function formHandler (formSelector) {
      var token = $('input[name=csrfmiddlewaretoken]').val();
      var url = '/en/api/contact/';
      var name = $(formSelector).find('.name input').val();
      var email = $(formSelector).find('.email input').val();
      var subject = $(formSelector).find('.subject input').val();
      
      if (document.querySelector(formSelector + (' .message input'))) {
        var body = document.querySelector(formSelector + (' .message input')).value;
      } else if (document.querySelector(formSelector + (' .message textarea'))) {
        var body = document.querySelector(formSelector + (' .message textarea')).value;
      }
  
      var data = {
          name: name,
          email: email,
          subject: subject,
          body: body,
          csrfmiddlewaretoken: token
      };
      // console.log(data);

  
      if ($(formSelector).find('.is-required').length === 0 && $(formSelector).find('.email-err-msg').length === 0) {
        $.ajax({
            url: url,
            type: "POST",
            data: {
                csrfmiddlewaretoken: token,
                data: data
            },
            dataType: "json",
            success: function (data) {
              $(formSelector).children().css({'opacity': '0'});
              $(formSelector).append('<div class="send">' +
              '<h2>Thank you for contacting Odore.</h2>' +
              '<h2>Someone from the team will be in touch as soon as possible</h2>' +
            '</div>')
            },
            error: function (error_data) {
              console.log(error_data);
    
              if (error_data.status >= 400 && error_data.status < 500) {
                $(formSelector).children().css({'opacity': '0'});
                $(formSelector).append('<div class="send">' +
                '<h2>An error occurred while sending a message</h2>' +
                '<h2>Please, try later</h2>' +
              '</div>')
              }
            }
        });
      }
    };
  
  // init validation
  function contactHandler(e) {
    e.preventDefault();

    inputRequireValidation('.map-and-form-section .inputs-wrap .form-group.name');
    emailValidation('.map-and-form-section .inputs-wrap .form-group.email');

    formHandler('.form-block form');
  };

  $('.map-and-form-section .btn').click(contactHandler);
  $('.map-and-form-section .inputs-wrap .form-group.name').keyup(function() {
    inputRequireValidation('.map-and-form-section .inputs-wrap .form-group.name');
  });
  $('.map-and-form-section .inputs-wrap .form-group.email').keyup(function() {
    emailValidation('.map-and-form-section .inputs-wrap .form-group.email');
  });

  // disable scrolling
  function disableScroll() {
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
  }
  function enableScroll(){
    window.onscroll=function(){
      parallax();
      bigParallax();
    };
  }

  // popup open
  $('.additionl').click(function(e) {
    e.preventDefault();

    if ($('.popup.decored-title').is(":visible")) {
      $('.popup.decored-title').removeClass('fade');
      // setTimeout(function() {
        $('.popup.decored-title').removeClass('popup-open');
      // }, 400);
      enableScroll();
    } else {
      $('.popup.decored-title').addClass('popup-open');
      if ($('.popup.decored-title').hasClass('fade-out')) {
        $('.popup.decored-title').removeClass('fade-out')
      }
      $('.popup.decored-title').addClass('fade-in');
      disableScroll();
    }
    // sampling device slider pause when popup is opened
    $('.big-img-slider-section .slider').slick('slickPause');
    // online campaign slider pause when popup is opened
    $('.big-img-slider-section-min .slider').slick('slickPause');
  })

  // popup close
  $('.popup.decored-title button').click(function(e) {
    e.preventDefault();
    if ($('.popup.decored-title').hasClass('fade-in')) {
      $('.popup.decored-title').removeClass('fade-in')
    }
    $('.popup.decored-title').addClass('fade-out');
      setTimeout(function() {
        $('.popup.decored-title').removeClass('popup-open');
      }, 400);
      $('body').removeClass('fixed');
      enableScroll();

    // sampling device slider play when popup is closed
    $('.big-img-slider-section .slider').slick('slickPlay');
    // online campaign slider play when popup is closed
    $('.big-img-slider-section-min .slider').slick('slickPlay');

  })

  // small-img-slider-section
  $('.small-img-slider-section .slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 1,
    // adaptiveHeight: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: $('.small-img-slider-section .pagination'),
    customPaging : function(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>0'+ (i+1) +'</a>';
              },
    responsive: [
      {
        breakpoint: 530,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });
  // small-img-slider add active class to pagination numbers
  $('.small-img-slider-section .slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $($('.small-img-slider-section .slick-current .pagination li')[currentSlide]).addClass('slick-active active');
  });

  // check if element in view border
  function visible(elem) {
    var docViewTop = $(window).scrollTop(),
      docViewBottom = docViewTop + $(window).height(),
      elemTop = $(elem).offset().top,
      elemBottom = elemTop + $(elem).height();
  
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

  // parallax
  function parallax() {
    const speed_1 = 20;
    const speed_2 = 40;
    const speed_2_1 = 40;
    const speed_3 = 60;
    const speed_4 = 70;
    const speed_5 = 80;
    const speed_1_reversed = -20;
    const speed_1_2_reversed = -30;
    const speed_2_reversed = -40;
    const speed_2_1_reversed = -45;
    const speed_3_reversed = -60;
    const speed_4_reversed = -80;

    function initParallax(element, speed) {
        $(element).each(function() {
          var docViewTop = $(window).scrollTop(),
              docViewBottom = docViewTop + $(window).height(),
              elemTop = $(this).offset().top,
              elemBottom = elemTop + $(this).height();

    
          if (visible(this)) {
            var pageMid = docViewTop + $(window).height()/2;
            var rate = (elemTop - pageMid) *  2/speed;

            $(this).css({
              'transform': `translateY(${rate}px)`
            })
          }
        })
    }

    initParallax('.parallax-1', speed_1);
    initParallax('.parallax-2', speed_2);
    initParallax('.parallax-2-1', speed_2_1);
    initParallax('.parallax-3', speed_3);
    initParallax('.parallax-4', speed_4);
    initParallax('.parallax-5', speed_5);
    initParallax('.parallax-1-rev', speed_1_reversed);
    initParallax('.parallax-1-2-rev', speed_1_2_reversed);
    initParallax('.parallax-2-rev', speed_2_reversed);
    initParallax('.parallax-2-1-rev', speed_2_1_reversed);
    initParallax('.parallax-3-rev', speed_3_reversed);
    initParallax('.parallax-4-rev', speed_4_reversed);

  }

  // video parallax
  function bigParallax() {
    const speed_1 = -20;
    const speed_2 = -40;
    const speed_2_rev = 40;

    function initParallax(element, speed) {
        $(element).each(function() {
          var docViewTop = $(window).scrollTop(),
              docViewBottom = docViewTop + $(window).height(),
              elemTop = $(element).offset().top,
              elemBottom = elemTop + $(element).height();

          var scrolled = elemBottom - docViewBottom;
          var rate = scrolled *  2/speed;

            $(this).css({
              'transform': `translate3d(0px, ${rate}px, 0px)`
            })
        })
    }

    initParallax('.parallax-big-elem', speed_1);
    initParallax('.parallax-big-elem-2', speed_2);
    initParallax('.parallax-big-elem-2-rev', speed_2_rev); 
  };

  // video parallax
  function popupParallax() {
    const speed_1_reversed = -20;
    const speed_2_reversed = -40;

    function initParallax(element, speed) {
        $(element).each(function() {
          var docViewTop = $(window).scrollTop(),
              docViewBottom = docViewTop + $(window).height(),
              elemTop = $(element).offset().top,
              elemBottom = elemTop + $(element).height();

          var scrolled = elemBottom - docViewBottom;
          var rate = scrolled *  2/speed;

            $(this).css({
              'transform': `translate3d(0px, ${rate}px, 0px)`
            })
        })
    }

    initParallax('.popup .parallax-1-rev', speed_1_reversed);
    initParallax('.popup .parallax-2-rev', speed_2_reversed);
  }

  // Show fixed menu
  if ($(window).scrollTop() > $('.main-header .main-nav').height()) {
    $('.main-header .fixed-header .main-nav').removeClass('hidden-nav');
  }

  $(document).scroll(function() {
    // Show fixed menu
    if ($(window).scrollTop() > $('.main-header .main-nav').height()) {
      $('.main-header .fixed-header .main-nav').removeClass('hidden-nav');
    } else if ($(window).scrollTop() < $('.main-header .main-nav').height()) {
      $('.main-header .fixed-header .main-nav').addClass('hidden-nav');
    }

    if (window.screen.width >= 1024) {
      parallax();
      bigParallax();
    }
  })

  // popup scroll parallax
  $('.popup.decored-title').scroll(function() {
    if (window.screen.width >= 1024) {
      popupParallax();
    }
  })

  // menu
  $('.menu').click(function() {
    $('.main-header .nav-container.full').toggleClass('show-menu');
    $('.main-header .nav-container.full').removeClass('fade-out');
    $('.main-header .nav-container.full').addClass('fade-in');
      disableScroll();
  });
  $('.main-header .nav-container.full .top .menu-close').click(function() {
    $('.main-header .nav-container.full').removeClass('fade-in');
    $('.main-header .nav-container.full').addClass('fade-out');
    setTimeout(function() {
      $('.main-header .nav-container.full').removeClass('show-menu');
    }, 500);
    enableScroll();
  });

  // mobile scripts
  if (window.screen.width <= 1024) {
    $('.imgs-block .slider').slick({
      infinite: true,
      draggable: false,
      appendArrows: false,
      slidesToShow: 2,
      autoplay: true,
      centerMode: true,
      speed: 10000,
      autoplaySpeed: 0,
      cssEase: 'linear',
    });

    // results-tabs-section .tabs-block .tab
    $('.results-tabs-section .tabs-block > .tab').slick({
      draggable: true,
      appendArrows: false,
      slidesToShow: 1,
      infinite: false,
      // autoplay: true,
      // autoplaySpeed: 2000,
      centerMode: true
    });

    $('.results-tabs-section .tabs-block .tablinks').click(function() {
      // if next slide clicked
      if (+$(this).attr("data-slick-index") === (+$('.results-tabs-section .tabs-block .slick-current').attr("data-slick-index") + 1)) {
        $('.results-tabs-section .tabs-block > .tab').slick('slickNext');
      }
      // if prev slide clicked
      if (+$(this).attr("data-slick-index") === (+$('.results-tabs-section .tabs-block .slick-current').attr("data-slick-index") - 1)) {
        $('.results-tabs-section .tabs-block > .tab').slick('slickPrev');
      }
      // highlight tab
      $('.results-tabs-section .tabs-block .tablinks').each(function() {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
        }
      });
      $(this).addClass('active');
    });
    // small-img-slider add active class to pagination numbers
    $('.results-tabs-section .tabs-block .tab').on('afterChange', function(event, slick, currentSlide, nextSlide){
      $('.results-tabs-section .tabs-block .slick-current').click();

      // prev slide add prev class
      $('.results-tabs-section .tabs-block .tablinks').removeClass('prev');
      $('.results-tabs-section .tabs-block .tablinks').each(function() {
        if (+$(this).attr("data-slick-index") === (+$('.results-tabs-section .tabs-block .slick-current').attr("data-slick-index") - 1)) {
          $(this).addClass('prev')
        }
      });

      // highlight tab
      $('.results-tabs-section .tabs-block .tablinks').each(function() {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active')
        }
      });
      $('.slick-current').addClass('active');
    });


    $('.results-tabs-section.clarins-results-tabs-section .tabs-block > .tab').slick('unslick');

  //  end window.screen.width <= 1024
  }

  // expand-items-section mobile expand
  $('.expand-items-section .items>div .expand').click(function() {
    if ($(this).hasClass('expanded') === false) {
      $('.expand-items-section .items>div .expanded').removeClass('expanded');
      $(this).addClass('expanded');
    } else if ($(this).hasClass('expanded') === true) {
      $('.expand-items-section .items>div .expanded').removeClass('expanded');
    }
  });

  // tooltip block Miller Harris mobile expand
  $('.tooltip-items-section .items>div .icon.mobile').click(function() {
    $('.tooltip-items-section .items>div .expanded').removeClass('expanded');
    $($(this).parent().find('.expand')).addClass('expanded');
  });
  // tooltip block Miller Harris mobile close
  $('.tooltip-items-section .items>div .expand .btn').click(function() {
    $($(this).parent().parent()).removeClass('expanded');
  })

  // menu highlight
  $('header .nav-container > .main-nav.desktop li a').each(function() {

    if (window.location.href.split('/')[4].split('-').length === 2) {
      // top nav
      if ($(this).text().toLowerCase().split(' ')[1] === window.location.href.split('/')[4].split('-')[1]) {
        $(this).addClass('active');
      }
    }

    if (window.location.href.split('/')[4].split('-').length === 1) {
      // top nav
      if ($(this).text().toLowerCase().split(' ')[0] === window.location.href.split('/')[4].split('-')[0]) {
        $(this).addClass('active');
      }
    }
  })
  
  $('header .nav-container.fixed-header .main-nav li a').each(function() {
    // fixed nav
    if (window.location.href.split('/')[4].split('-').length === 2) {
      // top nav
      if ($(this).text().toLowerCase().split(' ')[1] === window.location.href.split('/')[4].split('-')[1]) {
        $(this).addClass('active');
      }
    }

    if (window.location.href.split('/')[4].split('-').length === 1) {
      // top nav
      if ($(this).text().toLowerCase().split(' ')[0] === window.location.href.split('/')[4].split('-')[0]) {
        $(this).addClass('active');
      }
    }
  })

  // descr-img-slider desctop
  $('.description-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    asNavFor: '.preview-slider'
  });

  $('.preview-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    asNavFor: '.description-slider',
    prevArrow: sliderPrevArrow,
    nextArrow: sliderNextArrow,
    appendArrows: $(".descr-img-slider.desktop .wrapper-sliders .slider-title-block .slider-btns")
  });

  // end document ready
});



if (document.querySelector('.defaultOpen')) {
  document.querySelector(".defaultOpen").click();
}

function openTab(evt, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  if (document.getElementsByClassName("tabcontent")) {
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  }

  // Get all elements with class="tablinks" and remove the class "active"
  if (document.getElementsByClassName("tablinks")) {
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  if (document.getElementById(name)) {
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
  }

  if (name === "tab3") {
    document.querySelector(".inner-tab .defaultOpen").click();
  }
}

function openInnerTab(evt, name) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  if (document.getElementsByClassName("tinner-abcontent")) {
    tabcontent = document.getElementsByClassName("inner-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  }

  // Get all elements with class="tablinks" and remove the class "active"
  if (document.getElementsByClassName("inner-tablinks")) {
    tablinks = document.getElementsByClassName("inner-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  if (document.getElementById(name)) {
    document.getElementById(name).style.display = "block";
    evt.currentTarget.className += " active";
  }
}

function closeVideo(event) {
  $('.fullscreen-wrap').remove();
  document.location.reload();
}