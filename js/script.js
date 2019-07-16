$(document).ready(function(){
  //появление Popup
    $(document).on("click", '.popup-enter_ref', function(event) {
      event.preventDefault();
      $('.popup-enter').addClass('visible');
      $('body').addClass('popup-open');
    });
    $(document).on("click", '.popup-forget_password_ref', function(event) {
      event.preventDefault();
      $('.visible').removeClass('visible');
      $('.popup-forget_password').addClass('visible');
      $('body').addClass('popup-open');
    });
    
    $(document).on("click", '.popup-forget_password-success_ref', function(event) {
      event.preventDefault();
      $('.visible').removeClass('visible');
      $('.popup-forget_password-success').addClass('visible');
      $('body').addClass('popup-open');
    });
    $(document).on("click", '.popup-register_ref', function(event) {
      event.preventDefault();
      $('.visible').removeClass('visible');
      $('.popup-register').addClass('visible');
      $('body').addClass('popup-open');
    });
    

    $(document).on("click", '.popup-feedback_ref', function(event) {
      event.preventDefault();
      $('.popup-feedback').addClass('visible');
      $('body').addClass('popup-open');
    });
    $(document).on("click", '.popup-choose-city_ref', function(event) {
      event.preventDefault();
      $('.popup-choose-city').addClass('visible');
      $('body').addClass('popup-open');
    });

    /*Закрытие Popup */
    $(document).on("click", ".close", function(event) {
      $('.visible').removeClass('visible');
      $('body').removeClass('popup-open');
    });
      
    $(document).on("click", ".overlay", function(event) {
      $('.visible').removeClass('visible');
      $('body').removeClass('popup-open');
    });

    $(document).keyup(function(e) {            /*По Esc выключение попапов, каталога, поиска, menu1920*/
      if (e.keyCode === 27) {
        $('.searchbar').hide();
        $('.dropdown-inside').hide();
        $('.menu1920_dropdown-block').hide();
        $('.visible').removeClass('visible');
        $('body').removeClass('popup-open');
        return false;
      }
    });
/*Меню*/ 

/*Раскрытие меню по клику на Каталог*/
$(document).on("click", '.catalog', function(event) {
  event.preventDefault();
  $('.dropdown-inside').toggle();
});
/*Раскрытие подменю по клику на пункт меню*/
$(document).on("click", '.dropdown-inside li a', function(event) {
  event.preventDefault();
  $(this).parent().find('.dropdown-inside2').toggle();
});


/*Раскрытие основного меню по пункт Все/Еда/.../ */
$(document).on("click", '.menu1920>li', function(event) {
  
  $(this).find('.menu-triangle').toggle();
  $(this).siblings().find('.menu-triangle').css({"display": "none"});
  $(this).find('.menu1920_dropdown-block').toggle();
  $(this).siblings().find('.menu1920_dropdown-block').css({"display": "none"});
});

/*Закрытие по клику вне меню*/

$(document).mouseup(function (e){ 
  var div = $(".navigation");
  var menu = $(".menu1920_dropdown-block");
  if ((!div.is(e.target) || !menu.is(e.target)) 
    /*&& div.has(e.target).length === 0*/) { 
    menu.hide(); 
    $('.menu-triangle').css({"display": "none"});
  }
});

/*Раскрытие списка городов на мобильной версии*/
$(document).on("click", '.location', function(event) {
  event.preventDefault();
  $('.cities_mobile').toggle();
});
/*Раскрытие инпута поиска по клику на Поиск*/
$(document).on("click", '.search_button', function(event) {
  event.preventDefault();
  $('.search-block').toggle();
});
/*Закрытие по клику вне панели поиска*/
/*Раскрытие меню по клику на Сортировать и выбрать район*/
$(document).on("click", '.button_sort', function(event) {
  event.preventDefault();
  $('.sorting-ul').toggle();
  $('.button_sort .icon_bottom').toggleClass('icon_top');

});
$(document).on("click", '.button_district', function(event) {
  event.preventDefault();
  $('.district-ul').toggle();
  $('.button_district .icon_bottom').toggleClass('icon_top');
});
/*Затенение и описание при наведении на фото карточки*/ 
$('.photo').hover(function(event) {
  event.preventDefault();
  $(this).find('.card-description').toggle();
});
/*Включение предложений на карте*/
$(document).on("click", '.button_map', function(event) {
  event.preventDefault();
  $('.cards-block_map').toggle();
  $('.filters').toggle();
  $('.map-block').toggle();
  
});
/*Включение предложений обратно списком*/
$(document).on("click", '.button_list', function(event) {
  event.preventDefault();
  $('.cards-block_map').toggle();
  $('.filters').toggle();
  $('.map-block').toggle();
});


/*Переключение табов на странице купона*/
$(document).on("click", '#terms', function(event) {
  event.preventDefault();
  $(this).css({"border-bottom": "4px solid #243942"});
  $(this).parent().siblings().children().css({"border-bottom": "none"});
  $('#terms-tab').show();
  $('#description-tab').hide();
  $('#guarantee-tab').hide();
  $('#about_partner-tab').hide();
});
$(document).on("click", '#description', function(event) {
  event.preventDefault();
  $('#terms-tab').hide();
  $('#description-tab').show();
  $(this).css({"border-bottom": "4px solid #243942"});
  $(this).parent().siblings().children().css({"border-bottom": "none"});
  $('#guarantee-tab').hide();
  $('#about_partner-tab').hide();
});
$(document).on("click", '#guarantee', function(event) {
  event.preventDefault();
  $('#terms-tab').hide();
  $('#description-tab').hide();
  $('#guarantee-tab').show();
  $(this).css({"border-bottom": "4px solid #243942"});
  $(this).parent().siblings().children().css({"border-bottom": "none"});
  $('#about_partner-tab').hide();
});
$(document).on("click", '#about_partner', function(event) {
  event.preventDefault();
  $('#terms-tab').hide();
  $('#description-tab').hide();
  $('#guarantee-tab').hide();
  $('#about_partner-tab').show();
  $(this).css({"border-bottom": "4px solid #243942"});
  $(this).parent().siblings().children().css({"border-bottom": "none"});
});


/*Profile page*/ 


/*Раскрытие пунктов меню*/
$(document).on("click", '.option_main', function(event) {
  event.preventDefault();
 $('.dropdown').toggleClass('profile_hidden');
});


$(document).on("click", '.pers_info_ref', function(event) {
  event.preventDefault();
  $('#personal_info').removeClass('profile_hidden'); 
  $('#personal_info').siblings().addClass('profile_hidden'); 
  $('.dropdown').toggleClass('profile_hidden');
  $('.option_main').text('Персональная информация');
  $('.pers_info_ref').parent().addClass('border-left-yellow'); 
  $('.pers_info_ref').parent().siblings().removeClass('border-left-yellow'); 
  $('.pers_cab_dropdown').hide();

});
$(document).on("click", '.my_coupons_ref', function(event) {
  event.preventDefault();
  $('#my_coupons').removeClass('profile_hidden'); 
  $('#my_coupons').siblings().addClass('profile_hidden'); 
  $('.dropdown').toggleClass('profile_hidden');
  $('.option_main').text('Мои купоны');
  $('.my_coupons_ref').parent().addClass('border-left-yellow'); 
  $('.my_coupons_ref').parent().siblings().removeClass('border-left-yellow'); 
  $('.pers_cab_dropdown').hide();
});
$(document).on("click", '.profile_options_ref', function(event) {
  event.preventDefault();
  $('#profile_options').removeClass('profile_hidden');
  $('#profile_options').siblings().addClass('profile_hidden'); 
  $('.dropdown').toggleClass('profile_hidden');
  $('.option_main').text('Настройки профиля');
  $('.profile_options_ref').parent().addClass('border-left-yellow'); 
  $('.profile_options_ref').parent().siblings().removeClass('border-left-yellow'); 
  $('.pers_cab_dropdown').hide();
});

/*Раскрытие пунктов меню Действительные/Просроченные/Мои */
$(document).on("click", '#coupons_actual_ref', function(event) {
  event.preventDefault();
  $('#coupons_actual').removeClass('profile_hidden'); 
  $('#coupons_actual').siblings().addClass('profile_hidden'); 
  $('#coupons_actual_ref').addClass('my_coupons_menu_underlined'); 
  $('#coupons_actual_ref').siblings().removeClass('my_coupons_menu_underlined');
});
$(document).on("click", '#coupons_used_ref', function(event) {
  event.preventDefault();
  $('#coupons_used').removeClass('profile_hidden'); 
  $('#coupons_used').siblings().addClass('profile_hidden'); 
  $('#coupons_used_ref').addClass('my_coupons_menu_underlined'); 
  $('#coupons_used_ref').siblings().removeClass('my_coupons_menu_underlined');
});
$(document).on("click", '#coupons_lated_ref', function(event) {
  event.preventDefault();
  $('#coupons_lated').removeClass('profile_hidden');
  $('#coupons_lated').siblings().addClass('profile_hidden');
  $('#coupons_lated_ref').addClass('my_coupons_menu_underlined'); 
  $('#coupons_lated_ref').siblings().removeClass('my_coupons_menu_underlined'); 
});


/*Раскрытие инпутов для редактирования имени/города по клику на Изменить*/

$(document).on("click", '#change_name_button', function(event) {
  event.preventDefault();
  $('#change_name_block').toggle();
});
$(document).on("click", '#change_city_button', function(event) {
  event.preventDefault();
  $('#change_city_block').toggle();
});
$(document).on("click", '#change_email_button', function(event) {
  event.preventDefault();
  $('#change_email_block').toggle();
});
$(document).on("click", '#change_pass_button', function(event) {
  event.preventDefault();
  $('#change_pass_block').toggle();
});

/*Подтверждение информации в блоке изменения личных данных */
$(document).on("click", '#personal_name_save', function(event) {
  event.preventDefault();
  $('#personal_name').text($(this).siblings().val());
  $(this).parent().toggle();
});

$(document).on("click", '#personal_city_save', function(event) {
  event.preventDefault();
  $('#personal_city').text($(this).siblings().val());
  $(this).parent().toggle();
});

$(document).on("click", '#personal_email_save', function(event) {
  event.preventDefault();
  $('#personal_email').text($(this).siblings().val());
  $(this).parent().toggle();
});

$(document).on("click", '#personal_password_save', function(event) {
  event.preventDefault();
  $('#personal_password').text($(this).siblings().val());
  $(this).parent().toggle();
});
/*Меню личного кабинета*/
$(document).on("click", '.pers_cab_dropdown_ref', function(event) {
  event.preventDefault();
  $('.pers_cab_dropdown').toggle();
});


/*Phone mask*/
  $(function(){
    $("input[type='tel']").mask("+7(999) 999-9999");
  });

/*Плавный переход к якорям*/
  $(document).on("click", 'a[href^="#nav"]', function() {
    var el = $(this).attr('href');
    $('html, body').animate({
    scrollTop: $(el).offset().top}, 1000);
    console.log($(el));
    return false;
  });

//Slick-Слайдер брендов
  $('.slider-brands').slick({
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    appendDots: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          arrows: false
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.kupon_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: '.kupon_slider_nav',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,

        }
      }
    ]
    
  });

  $('.kupon_slider_nav').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.kupon_slider',
    focusOnSelect: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 750,
        settings: 'unslick'
      }
    ]
    
    
  });
 

 


  //Отправка данных на почту
/*
  $('.formRegister').submit(function(event) {
    var errors = false;
    $(this).find('span').empty();
    $(this).find('input').each(function() {
      if ($.trim( $(this).val() ) == '') {
        errors = true;
        $(this).css('border', '1px solid rgb(231,22,54)');
        $(this).next().text('обязательно для заполнения');
      }
    });
    if (!errors) {
      var data = $(this).serialize();
      $.ajax({
        url: 'send.php',
        type: 'POST',
        data: data,
        beforeSend: function() {
          $('.lds-dual-ring"').addClass('visible');
        },
        success: function() {
          $('.lds-dual-ring"').removeClass('visible');
          $('.form').find('input').val('');
          $('.popup').removeClass('visible');
          $('.popup-register-success').addClass('visible');
        },
        error: function() {
          console.log('Ошибка файла обработчика');
        }
      })
    }
    return false;
  });
*/
  

});




