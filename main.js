$(document).ready(function () {
    $('.menu_btn').click(function(){
        const $clickd = $(this);
        if($clickd.hasClass('active')){
            $clickd.removeClass('active');
        } else {
            $clickd.addClass('active');  
        }   
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


