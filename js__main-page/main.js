var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  $(function(){
    $('.perepel').hover(function(){
      $('.per-sims').toggleClass('block'); 
    })
    $('.bel__wrapper').hover(function(){
      $('.beloded-sims').toggleClass('block'); 
    })
    $('.shastic-slide').hover(function(){
      $('.shastic-sims').toggleClass('block'); 
    })
    $('.sorok').hover(function(){
      $('.sorok-sims').toggleClass('block'); 
    })
    $('.pluxsch').hover(function(){
      $('.plux').toggleClass('block'); 
    })
    $('.lab').hover(function(){
      $('.labocki').toggleClass('block'); 
    })
    $('.urcha__wrapper').hover(function(){
      $('.yurcha-sims').toggleClass('block'); 
    })
    $('.sherb__wrapper').hover(function(){
      $('.sherb-sims').toggleClass('block'); 
    })
    $('.pavlova__wrapper').hover(function(){
      $('.pavlova-sims').toggleClass('block'); 
    })
    $('.gvaeva__wrapper').hover(function(){
      $('.gvaeva-sims').toggleClass('block'); 
    })
    $('.sharkova__wrapper').hover(function(){
      $('.sharkova-sims').toggleClass('block'); 
    })
    $('.zhurko__wrapper').hover(function(){
      $('.zhurko-sims').toggleClass('block'); 
    })
    $('.select__perepel-btn').on('click',function()
    {
        $('.select__perepel-btn').addClass('disabled');
        $('.proshel-per').addClass('block');
    });

    $('.select__plux-btn').on('click',function()
    {
        $('.select__plux-btn').addClass('disabled');
        $('.proshel-pl').addClass('block');
    });

    $('.select__lab-btn').on('click',function()
    {
        $('.select__lab-btn').addClass('disabled');
        $('.proshel-lab').addClass('block');
    });

    $('.select__sh-btn').on('click',function()
    {
        $('.select__sh-btn').addClass('disabled');
        $('.proshel-sh').addClass('block');
    });

    $('.select__pavl-btn').on('click',function()
    {
        $('.select__pavl-btn').addClass('disabled');
        $('.proshel-pavl').addClass('block');
    });

    $('.select__sor-btn').on('click',function()
    {
        $('.select__sor-btn').addClass('disabled');
        $('.proshel-sor').addClass('block');
    });

    $('.select__urch-btn').on('click',function()
    {
        $('.select__urch-btn').addClass('disabled');
        $('.proshel-urch').addClass('block');
    });

    $('.select__gv-btn').on('click',function()
    {
        $('.select__gv-btn').addClass('disabled');
        $('.proshel-gv').addClass('block');
    });

    $('.select__sh-btn').on('click',function()
    {
        $('.select__sh-btn').addClass('disabled');
        $('.proshel-sh').addClass('block');
    });

    $('.select__zh-btn').on('click',function()
    {
        $('.select__zh-btn').addClass('disabled');
        $('.proshel-zh').addClass('block');
    });

    $('.select__bel-btn').on('click',function()
    {
        $('.select__bel-btn').addClass('disabled');
        $('.proshel-bel').addClass('block');
    });


  
   
});