$(document).ready(function () {
    $('.menu_btn').click(function(){
        const $clickd = $(this);
        if($clickd.hasClass('active')){
            $clickd.removeClass('active');
        } else {
            $clickd.addClass('active');  
        }
    })
});


