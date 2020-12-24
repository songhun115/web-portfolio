$(document).ready(function () {
    $('.menu_btn').click(function(){
        const $clickd = $(this);
        if($clickd.hasClass('active')){
            $clickd.removeClass('active');
        } else {
            $clickd.addClass('active');  
        }   
    })
    // 기본적으로 숨김
    $('.works_modul').hide();
    $('.modul').hide();

    // 클릭시 사라짐
    $('.works_modul').click(function(){
      $('.works_modul').hide();
      $('.modul').hide();
    })

    //클릭시 나옴 

    
    $('.slide1').click(function(){
         $('.works_modul').show('fast');
         $('.modul1').show();
    })
    $('.slide2').click(function(){
         $('.works_modul').show('fast');
         $('.modul2').show();
    })
    $('.slide3').click(function(){
         $('.works_modul').show('fast');
         $('.modul3').show();
    })
    $('.slide4').click(function(){
         $('.works_modul').show('fast');
         $('.modul4').show();
    })
    $('.slide5').click(function(){
         $('.works_modul').show('fast');
         $('.modul5').show();
    })
    $('.slide6').click(function(){
         $('.works_modul').show('fast');
         $('.modul6').show();
    })

    const navbarMenu = document.querySelector('.navbar__menu_list');
    navbarMenu.addEventListener('click',(event) => {
      const target = event.target;
      const link = target.dataset.link;
      if(link == null){
        return;
      }
      
      const scrollTo = document.querySelector(link);
      scrollTo.scrollIntoView({behavior:"smooth"});
    });

    const navbtnMenu = document.querySelector('.menu_list');
    navbtnMenu.addEventListener('click',(event) => {
      const target = event.target;
      const link = target.dataset.link;
      if(link == null){
        return;
      }
      
      const scrollTo = document.querySelector(link);
      scrollTo.scrollIntoView({behavior:"smooth"});
    });
 
});


