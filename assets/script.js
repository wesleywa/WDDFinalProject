$(document).ready(function() {

  // QUESTION 6

  $("#sidebar-button").click(function(){
      if ($('.sidebar-container').hasClass('sidebar-active')){
        setTimeout(function() {
          $('body').removeClass('no-scroll');
        }, 300);
        $('.sidebar-container').removeClass('sidebar-active');
        $('.page-wrapper').removeClass('wrapper-active');
        $('#sidebar-button').removeClass('button-active');
      }
      else{
        $('.sidebar-container').addClass('sidebar-active');
        $('.page-wrapper').addClass('wrapper-active');
        $('#sidebar-button').addClass('button-active');
        setTimeout(function() {
          $('body').addClass('no-scroll');
        }, 300);
      }

    });

  // QUESTION 7
  $(".page-wrapper").click(function(){
    setTimeout(function() {
      $('body').removeClass('no-scroll');
    }, 300);
    $('.sidebar-container').removeClass('sidebar-active');
    $('.page-wrapper').removeClass('wrapper-active');
    $('#sidebar-button').removeClass('button-active');  
  });
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here
  $("#carousel-next").click(function(){
    var marleft = parseInt($('#carousel').css('margin-left').replace("px", ""));
    var newmar = (marleft - 960) + "px";
    if (newmar == -3840){
      document.getElementById('carousel-next').style.color = grey;
    }  
    if (marleft == -3840){
      return false;
    }
    else{

      document.getElementById('carousel').style.marginLeft = newmar;
    }

  });
  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function(){
    var marleft = parseInt($('#carousel').css('margin-left').replace("px", ""));
    var newmar = (marleft + 960) + "px"; 
    if (newmar == 0){
      document.getElementById('carousel-prev').style.color = grey;
    }  
    if (marleft == 0){
      return false;
    }
    else{
      document.getElementById('carousel').style.marginLeft = newmar;
    }
  });


  //THIS IS NOT A REQUIRED QUESTION 
  // EXTRA FOR EXPERTS 

  // Implement a "smooth scroll" when the user clicks on the sidebar links here
  $(".sidebar-item").click(function(){
    $('body').removeClass('no-scroll');
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 300);
    setTimeout(function() {
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
      $('#sidebar-button').removeClass('button-active');  
    }, 300);    
    return false;
  });
});