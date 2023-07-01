(function( $ ) {

    // Replace the "read more" text for expert content articles
    let newVal = 'View Now';
    $('.more-link').html( newVal );

    $( window ).resize(function() {
        $(".equal-blog-cards").each(function(){
            equalise_articles($(this));
        });
    });

    $(".equal-blog-cards").each(function(){
        var blog = $(this);
        equalise_articles($(this));

        var observer = new MutationObserver(function (mutations) {
            equalise_articles(blog);
        });

        var config = { subtree: true, childList: true };
        observer.observe(blog[0], config);
    });

    function equalise_articles(blog){
        var articles = blog.find("article");

        var heights = [];

        articles.each(function(){
            var height = 0;
            //height += $(this).outerHeight() - $(this).height();
            height += $(this).find(".et_pb_image_container").outerHeight(true);
            height += $(this).find(".entry-title").outerHeight(true);
            height += $(this).find(".post-meta").outerHeight(true);
            height += $(this).find(".post-content").outerHeight(true);
            heights.push(height);
        });

        var max_height = Math.max.apply(Math,heights);

        articles.each(function(){
            $(this).height(max_height);
        });
    }

    $(document).ajaxComplete(function(){
        $(".equal-blog-cards").imagesLoaded().then(function(){
            console.log("images loaded");
            $(".equal-blog-cards").each(function(){
                equalise_articles($(this));
            });
        });
    });


    $.fn.imagesLoaded = function () {
        var $imgs = this.find('img[src!=""]');
        if (!$imgs.length) {return $.Deferred().resolve().promise();}
        var dfds = [];
        $imgs.each(function(){
            var dfd = $.Deferred();
            dfds.push(dfd);
            var img = new Image();
            img.onload = function(){dfd.resolve();}
            img.onerror = function(){dfd.resolve();}
            img.src = this.src;

        });
        return $.when.apply($,dfds);
    }

    if( $('.expert-content').length ){

        $('.topics-list input[type="checkbox"]').on('change', function(){
            $('.expert-content form').submit();
        })

        $('.topics-list button.view-all').on('click', function(){
            $('.topics-list input[type="checkbox"]').prop( "checked", false );
            $('.expert-content form').submit();
        })

        $('.topics-list label').on('keypress', function(){
            $(this).click();
        })

        $('.types-list input[type="checkbox"]').on('change', function(){
            $('.expert-content form').submit();
        })

        $('.types-list button.view-all').on('click', function(){
            $('.types-list input[type="checkbox"]').prop( "checked", false );
            $('.expert-content form').submit();
        })

        $('.types-list label').on('keypress', function(){
            $(this).click();
        })

        // set focus to the header when page loads and any option is selected
        if ($('.topics-list input[type="checkbox"]:checked').length || $('.types-list input[type="checkbox"]:checked').length ) {
            $('#expert-content-status-message').focus();
        }

    }

    if( $('.site-tours').length ){

        $('.regions-list input[type="checkbox"]').on('change', function(){
            $('.site-tours form').submit();
        })

        $('.regions-list button.view-all').on('click', function(){
            $('.regions-list input[type="checkbox"]').prop( "checked", false );
            $('.site-tours form').submit();
        })

        $('.regions-list label').on('keypress', function(){
            $(this).click();
        })

        $('.capabilities-list input[type="checkbox"]').on('change', function(){
            $('.site-tours form').submit();
        })

        $('.capabilities-list button.view-all').on('click', function(){
            $('.capabilities-list input[type="checkbox"]').prop( "checked", false );
            $('.site-tours form').submit();
        })

        $('.capabilities-list label').on('keypress', function(){
            $(this).click();
        })

        // set focus to the header when page loads and any option is selected
        if ($('.regions-list input[type="checkbox"]:checked').length || $('.capabilities-list input[type="checkbox"]:checked').length ) {
            $('#site-tours-status-message').focus();
        }

    }

    if( $('.better-biotech').length ){

        $('.categories-list input[type="checkbox"]').on('change', function(){
            $('.better-biotech form').submit();
        })

        $('.categories-list button.view-all').on('click', function(){
            $('.categories-list input[type="checkbox"]').prop( "checked", false );
            $('.better-biotech form').submit();
        })

        $('.categories-list label').on('keypress', function(){
            $(this).click();
        })

        $('.phases-list input[type="checkbox"]').on('change', function(){
            $('.better-biotech form').submit();
        })

        $('.phases-list button.view-all').on('click', function(){
            $('.phases-list input[type="checkbox"]').prop( "checked", false );
            $('.better-biotech form').submit();
        })

        $('.phases-list label').on('keypress', function(){
            $(this).click();
        })

        // set focus to the header when page loads and any option is selected
        if ($('.categories-list input[type="checkbox"]:checked').length || $('.phases-list input[type="checkbox"]:checked').length ) {
            $('#better-biotech-status-message').focus();
        }

    }

})( jQuery );