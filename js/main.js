$(function(){
  
  
  $('.mv_title').addClass('mvBlur');
  setTimeout(() => {
    $('.mv_div').css('filter', 'blur(2px)');
  }, 7000);

  // $(window).scroll(function(){
  //   $(".titleTrigger").each(function(){
  //     let nowScroll = $(window).scrollTop();
  //     let windowHeight = $(window).height();
  //     let servicePoint = $(this).offset().top;
  //     let triggerPoint = servicePoint - windowHeight / 2;
  //     if(nowScroll > triggerPoint) {
  //       $(".box").addClass("fadeUp");
  //     } else {
  //       $(".box").removeClass("fadeUp");
  //     }
  //   });
  // });
  // function TextRandomAnimeControl() {
  //   $('.TextRandomAnime').each(function(){
  //     let nowScroll = $(window).scrollTop();
  //     let windowHeight = $(window).height();
  //     let servicePoint = $(this).offset().top;
  //     let triggerPoint = servicePoint - windowHeight / 2;
  //     if (nowScroll > triggerPoint) {
  //       $(this).addClass('Randomtext');
  //     } else {
  //       $(this).removeClass('Randomtext');
  //     }
  //   });
  // }
  // $(window).scroll(function(){
  //   TextRandomAnimeControl();
  // });


  function TextTypingAnime() {
    $('.TextTyping').each(function() {
      var elemPos = $(this).offset().top - 50;
      let nowScroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      var thisChild = "";
      if(nowScroll > elemPos - windowHeight) {
        thisChild = $(this).children();
        thisChild.each(function(i) {
          var time = 500;
          $(this).delay(time * i).fadeIn(time);
        });
      } else {
        thisChild = $(this).children();
        thisChild.each(function() {
          $(this).stop();
          $(this).css("display", "none");
        });
      }
    });
  }

  $(window).on('load', function(){
    var element = $(".TextTyping");
    element.each(function() {
      var text = $(this).html();
      var textbox = "";
      text.split('').forEach(function(t) {
        if (t !== "") {
          textbox += '<span>' + t + '</span>';
        } else {
          textbox += t;
        }
      });
      $(this).html(textbox);
    });
    TextTypingAnime();
  });



  function BlurTextAnimeControl() {
    $('.blurTrigger').each(function(){
      let nowScroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      let blurPoint = $(this).offset().top;
      let blurTriggerPoint = blurPoint - windowHeight / 1.5;
      if (nowScroll > blurTriggerPoint) {
        $(this).addClass('blur');
      } else if (nowScroll < windowHeight) {
        $(this).removeClass('blur');
      }
    });
  }
  $(window).scroll(function(){
    BlurTextAnimeControl();
  });
  
  $(window).on('load', function(){
    BlurTextAnimeControl();
  })


  $(window).scroll(function(){
    let nowScroll = $(window).scrollTop();
    let value = - nowScroll / 30;
    let blane = - nowScroll / 80;
    let fast = - nowScroll / 10;
    $(".parallax").css({
      transform: "translateY(" + value + "%)",
    });
    $(".parallax_2").css({
      transform: "translateY(" + blane + "%)",
    });
    $(".parallax_3").css({
      transform: "translateY(" + fast + "%)",
    });
  })

  $(window).scroll(function(){
    $(".js-trigger").each(function(){
      let nowScroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      let servicePoint = $(this).offset().top;
      let triggerPoint = servicePoint - windowHeight / 2;
      if(nowScroll > triggerPoint) {
        $(this).addClass("flipLeftTop");
      } else if(nowScroll < windowHeight) {
        $(this).removeClass("flipLeftTop");
      }
    });

    
  });
  $(window).scroll(function(){
   
      let nowScroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      let footerPoint = $('.footer_area').offset().top;
      let footerTriggerPoint = footerPoint - windowHeight / 4;
      if (nowScroll > footerTriggerPoint) {
        
        document.body.style.backgroundColor = '#333';
        $('.footer_area, .small').css('color', '#fff');
      } else {
        $('body').css('background-color', '#fff');
        $('.footer_area, .small').css('color', '#333');
      }
  });
  $('.footer_area_right_bottom').hover('.icon_ul_li', function(){
      $(this).addClass('is-active');
  });
  

});
