// slick slider config for section content box
$(function() {

    const SLICK_SPEED = 500;

    var setFocusWhenKeyboard = function($es) {
	if ( $('body').first().hasClass('using-keyboard') )
	{
	    $es.focus();
	}
    };

    $('.mugo_catalent_hero_banner .slider .slick').slick({
        autoplay: true,
        infinite: true,
        dots: true,
        speed: SLICK_SPEED,
        accessibility: true,
        adaptiveHeight: true,
        fade: true,
        appendDots: $(this).parent().find('.dots'),
        arrows: true,
        prevArrow: $(this).parent().find('button.prev'),
        nextArrow: $(this).parent().find('button.next'),
    });

    $('.mugo_catalent_hero_banner .slider button.play').hide();

    // previous button
    $('.mugo_catalent_hero_banner .slider button.prev').on('click', function(){
        $(this).closest('.slider').find('.slick').slick('slickPrev');

        var $slider = $(this).closest('.slider');
        setTimeout(function(){
            setFocusWhenKeyboard($slider.find('.slick .slick-active'));
        }, SLICK_SPEED + 50, $slider);
    });

    // next button
    $('.mugo_catalent_hero_banner .slider button.next').on('click', function(){
        $(this).closest('.slider').find('.slick').slick('slickNext');

        var $slider = $(this).closest('.slider');
        setTimeout(function(){
            setFocusWhenKeyboard($slider.find('.slick .slick-active'));
        }, SLICK_SPEED + 50, $slider);
    });

    // pause button
    $('.mugo_catalent_hero_banner .slider button.pause').on('click', function(){
        $(this).closest('.slider').find('.slick').slick('slickPause');
        $(this).hide();
        $(this).closest('.slider').find('.play').show().focus();
    });

    // play button
    $('.mugo_catalent_hero_banner .slider button.play').on('click', function(){
        $(this).closest('.slider').find('.slick').slick('slickPlay');

        $(this).hide();
        $(this).closest('.slider').find('.pause').show().focus();
    });

    // dot buttons action
    $('.mugo_catalent_hero_banner .slider .dots button').on('click', function(){
        var slide = $(this).data('slide');
        $(this).closest('.slider').find('.slick').slick('slickGoTo', slide - 1);

        var $slider = $(this).closest('.slider');
        setTimeout(function(){
            setFocusWhenKeyboard($slider.find('.slick .slick-active'));
        }, SLICK_SPEED + 50, $slider);
    });

    // On before slide change | set active dots
    $('.mugo_catalent_hero_banner .slider .slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var activeSlide = nextSlide + 1;
        $(slick.$slider).parent().find('.dots button')
            .removeClass('active')
            .attr("aria-selected","false");
        $(slick.$slider).parent().find('.dots button[data-slide="'+ activeSlide + '"]')
            .addClass('active')
            .attr("aria-selected","true");
    });

    // On after slide change | hide non active slides
    $('.mugo_catalent_hero_banner .slider .slick').on('afterChange', function(event, slick, currentSlide){
        $(slick.$slider).find('.slick-slide').attr('tabindex', -1);
        $(slick.$slider).find('.slick-active').attr('tabindex', 0);
        $(slick.$slider).find('.slick-slide .slick-item').attr('tabindex', -1);
        $(slick.$slider).find('.slick-active .slick-item').attr('tabindex', 0);
        setFocusWhenKeyboard($(slick.$slider).find('.slick-active'));
    });

    // change slider behaviour when using keyboard
    $( 'body' )
        .mousedown(function() {
            var $slider = $('.mugo_catalent_hero_banner .slider .slick').slick('getSlick');
            $slider.slickSetOption('infinite', true);
        })
        .keydown(function( event ) {
            if( event.keyCode === 9 )
            {
                var $slider = $('.mugo_catalent_hero_banner .slider .slick').slick('getSlick');

                $slider.slickSetOption('infinite', false);

                $slider.slickPause();
                $('.mugo_catalent_hero_banner .slider button.play').show();
                $('.mugo_catalent_hero_banner .slider button.pause').hide();
            }
        });

});
