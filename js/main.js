$(document).ready(function(){
  
$('header .slide1 .slick-prev').click(function(){
  $('header .slide1 h1').addClass('animate__animated animate__zoomIn animate__slower')
});


  $('.menu-button').click(function(){
    $('aside').animate({"left":"0px"},1000);
  });


  $('.close').click(function(){
    $('aside').animate({"left":"-50%"},1000);
  });

  $('.sub').slideUp();
  $('.mans .man').click(function(){
    $(this).find('.sub').slideToggle();
    $(this).siblings().find('.sub').slideUp()
  })

  $('.slide1').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay:true
    });

    $('.slide2').slick({
        // dots:true,
        autoplay:true,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    $(document).on('click','.col-sm-4 .apartment-single',function(){
        $(this).addClass('bgClick2')
        $(this).parent().siblings().find('.apartment-single').removeClass('bgClick2')
    })
    $('.slide3').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
    $('.part div').slideUp();
    $(document).on('click','.part h5',function(){
        $(this).next().slideDown();
        $(this).parent().siblings().find('div').slideUp();
        $('.part h5:after').animation({
            'color':"#ddd"
        })
    })
    // $('.eslam-elaaq .one').fadeOut();
    // $('.only-open').fadeIn()
    $(document).on('click','.list-item li',function(){
        var myId = $(this).attr('id') 
        $(this).addClass('bgClick').siblings().removeClass('bgClick');
        $('#'+myId+'-content').addClass('hide')
    });




    //   العاق 
    // $(document).on('click', '.list-item a', function() {
    //     setTimeout(()=>{
    //     var Link = window.location.href;
    //     var value = Link.split("#")
    //     var selectDiv = '#' + value[1];
    //     var selector = '.eslam-elaaq ' + selectDiv;
    //     console.log(selector);
    //     $(selector).fadeIn();
    //     $(selector).siblings().fadeOut()
    //     }, 500)
    // })
$('.eslam-elaaq .one').hide();
    $('.only-open').show();
    $(document).on('click','.list-item a',function(){
        // console.log($(this).attr('href'));
        var selectDiv = $(this).attr('href');
        var slice = selectDiv.slice(1);
        // console.log(slice);
        var selector = '.eslam-elaaq ' +'.'+slice;
        // console.log(selector)
            console.log(selector);
            $(selector).show();
            $(selector).siblings().hide()
    });






    $('.apartment-single').click(function(){
      var imgSrc = $('.slide2 .sell').find('img').attr('src')
      // console.log($(this).attr('src'))
      console.log(imgSrc)
    })
    
})