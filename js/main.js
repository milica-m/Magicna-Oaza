$(document).ready(function () {
      
    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
    
    
    //ANIMATION 
    
    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var position = $(this).offset().top;
            var animation = $(this).attr('data-animation');
            //var delay = $(this).attr('data-delay');
            if (position < scroll + windowHight - 60) {
                $(this).addClass(animation);
                //$(this).css('animation-delay', delay);
            }
        });
    }//end of animation function

    animation();

    $(window).scroll(function () {
        animation();
    });

$('.search').click(function(){
   $(this).next().slideToggle();
});


$('.small-cart-icon .cart-icon').click(function(e){
    e.preventDefault();
        $(this).next().addClass('active');
        $('.body-overlay').show(0);
        $('.search-form').slideUp();
    });

$('.close-small-cart').click(function(){
        $(this).closest('.small-cart-content').removeClass('active');
        $('.body-overlay').hide(0);
    });
    
    
    if($('.owl-carousel').length > 0){
        
        
        //LEAD SLIDER
        $('.lead-slider').owlCarousel({
           items: 1,
           dots: true,
           loop: true,
           nav: true,
           autoplay: true,
           autoplayTimeout:4000,
            autoplayHoverPause:true,
           navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>']
        });
        
        $('.brand-slider').owlCarousel({
           items: 10,
           dots: false,
           autoplay: true,
           autoplayTimeout:4000,
            autoplayHoverPause:true,
           navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>']
        });
        
        $('.most-seller-slider').owlCarousel({
           items: 4,
           autoplay: true,
           autoplayTimeout:4000,
            autoplayHoverPause:true,
           navText:['<span class="fa fa-angle-left"></span>','<span class="fa fa-angle-right"></span>']
        });


}

});//end document.ready


