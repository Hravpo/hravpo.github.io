var name = "Ivan";

let number = 7;
const pi = 3.14;

number = 4;

let leftBorderWidth = 200;

/* if (2*6 == 8*1) {
    console.log ('Верно')
} else {
    console.log ('Ошибка')
}
let answer = confirm("Вам есть 18?")
if (answer) {
    console.log ('Проходите')
} else {
    console.log ('Уходи')
} */

/* const num = 50;

if (num < 49) {
    console.log ('Неправильно')
} else if (num > 100) {
    console.log ('Много')
} else {
    console.log ('Правильно')
} */
/* for (let i=1; i<8; i++) {
    console.log(i);
} */

/* function logging (a, b) {
    console.log (a + b)
}
logging(3,6); */


/* $(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.png"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
                arrows: false,
                dots: true
                }
            }
        ]
      }); */
    $(document).ready(function(){

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
  
      $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      })
      $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
          })
      $('.review__content').each(function(i) {
        $(this).on('click', function(e){
          e.preventDefault();
          $('.review__link').eq(i).toggleClass('review__link_active');
          $('.review-item__content').eq(i).toggleClass('review-item__content_active');
        })
      })

    //Modal

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
       $(this).on('click', function() {
        $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
        $('.overlay, #order').fadeIn('slow');
      }); 
    });

    function validateForms(form){
        $(form).validate({
          rules: {
              name:{
                  required: true,
                  minlength: 2
                },
              phone: "required",
              email: {
                  required: true,
                  email:true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символов")
                },
              phone: "Пожалуйста введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен почтовый адрес"
              }
            }
      });
    };
    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7(999) 999-9999");

    $('form').submit(function(e)  {
      e.preventDefault();

      if (!$(this).valid()) {
        return;
      }

      $.ajax({
        type: "POST",
        url:"mailer/smart.php",
        data: $(this).serialize()
      }).done(function()  {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('.overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
      });
      return false;
  });


  //Smooth scroll and pageup

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  }); 

  $("a[href=#up]").click(function(){
    const _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });
  new WOW().init();
});






const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

  document.querySelector('.prev').addEventListener ('click', function () {
    slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener ('click', function () {
    slider.goTo('next');

}); 