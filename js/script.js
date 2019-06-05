$(document).ready(function(){
  //Плавное появление Popup
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

    $(document).on("click", ".close", function(event) {
      $('.visible').removeClass('visible');
      $('body').removeClass('popup-open');
    });
      
      $(document).on("click", ".overlay", function(event) {
        $('.visible').removeClass('visible');
        $('body').removeClass('popup-open');
      });

    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        $('.visible').removeClass('visible');
        $('body').removeClass('popup-open');
        return false;
      }
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


});




