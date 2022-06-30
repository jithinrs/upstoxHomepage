window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
});

$(window).resize(function(){
    if(window.innerWidth < 992){
      $('.headlink').removeClass('active');
    }else{
      $('.headlink').addClass('active');
    }
});

$(window).resize(function(){
    if(window.innerWidth < 992){
      $('.offcanvas-body').addClass('off-canvas-purple');
    }else{
      $('.offcanvas-body').removeClass('off-canvas-purple');
    }
});

$(window).resize(function(){
    if(window.innerWidth < 992){
      $('.offcanvas-header').addClass('off-canvas-purple');
    }else{
      $('.offcanvas-header').removeClass('off-canvas-purple');
    }
});

$(window).resize(function(){
    if(window.innerWidth < 992 && window.innerWidth >=576){
        $('.header-img').addClass('header-img-md').removeClass('header-img-lg header-img-mob')
    }else if(window.innerWidth < 576) {
        $('.header-img').removeClass('header-img-md header-img-lg').addClass('header-img-mob')
    } else {
        $('.header-img').addClass('header-img-lg').removeClass('header-img-md header-img-mob') 
    }
});

$(window).resize(function(){
    if(window.innerWidth < 992){
      $('.header-text').addClass('header-text-align');
    }else{
      $('.header-text').removeClass('header-text-align');
    }
});

$(window).resize(function(){
    if(window.innerWidth > 720){
      $('.card-head').addClass('card-head-large').removeClass('card-head-mob');
      
    }else{
      $('.card-head').addClass('card-head-mob').removeClass('card-head-large');
    }
});

$('.nav-tabs li').on('click', function() {
    $('.nav-tabs li').removeClass('myactivehead');
    $(this).addClass('myactivehead')

    $('.nav-tabs li a').removeClass('myactivetab');
    $(this).children('a').addClass('myactivetab') 
});

$(window).resize(function(){
  if(window.innerWidth > 992){
    $('#section2tab').addClass('container');
  }else{
    $('#section2tab').removeClass('container').addClass('testrun129');
  }
});


$(window).resize(function(){
  if(window.innerWidth < 576){
    $('.ratan-tiger-img').children('img').addClass('ratan-tiger-image');
  }else{
    $('.ratan-tiger-img').children('img').removeClass('ratan-tiger-image');
  }
});

$(window).resize(function(){
  if(window.innerWidth < 576){
    $('.nav-tab-image').addClass('nav-tab-image-mob');
  }else{
    $('.nav-tab-image').removeClass('nav-tab-image-mob');
  }
});


$('#stock-tab').on('click', function() {
  $('#stocks, #ipos, #mutual-funds, #futures').addClass('d-none');
  $('#stocks').removeClass('d-none');
})

$('#ipos-tab').on('click', function() {
  $('#stocks, #ipos, #mutual-funds, #futures').addClass('d-none');
  $('#ipos').removeClass('d-none');
})

$('#mutual-tab').on('click', function() {
  $('#stocks, #ipos, #mutual-funds, #futures').addClass('d-none');
  $('#mutual-funds').removeClass('d-none');
})

$('#future-tab').on('click', function() {
  $('#stocks, #ipos, #mutual-funds, #futures').addClass('d-none');
  $('#futures').removeClass('d-none');
})


$(window).resize(function(){
  if(window.innerWidth > 992){
    $('#section-pricing').addClass('container');
  }else{
    $('#section-pricing').removeClass('container');
  }
});