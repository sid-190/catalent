(function( $ ) {
	'use strict';

	initA11yBasic();

	// remove DIVI footer from the site
	$('footer#main-footer').remove();


    // prepare subscription bar
    prepareSubscriptionBar();

	/**
	 * functions
	 */
	function initA11yBasic(){
	    // Set up skip links
	    var $skiplinks = $('a.ca-skiplink');
	    $skiplinks.each(function(_, link) {
		var $link = $(link);
		$link.click(function(e) {
		    e.preventDefault();
		    var landmark = (new URL($link.prop('href'))).hash;
		    if ( ! landmark ) { return ; }
		    var $landmark = $(landmark);

		    if ( '#catalent-search' === landmark )
		    {
			$landmark.click();
		    }
		    else
		    {
			if ( 1 != $landmark.length ) { return ; }
			var lti = $landmark.attr('tabindex');
			$landmark.attr('tabindex', -1);
			$landmark.on('blur', function(){$landmark.attr('tabindex', lti)});
			$landmark.focus();
			$landmark[0].scrollIntoView();
		    }
		});
	    });

		// Indentify Mouse or Keyboard Navigation
		jQuery( 'body' )
			.mousedown(function() {
				jQuery( this )
					.removeClass('using-keyboard')
					.addClass('using-mouse');
			})
			.keydown(function( event ) {
				if( event.keyCode === 9 )
				{
					jQuery( this )
						.addClass('using-keyboard')
						.removeClass('using-mouse');
				}
			});

	}

    function prepareSubscriptionBar()
    {
	// Check for closed cookie
	var wasClosed = false;
	var cookies = document.cookie.split(';').map(s => s.trim());
	for ( var ii = 0 ; ii < cookies.length ; ii++ )
	{
	    if ( cookies[ii].startsWith('catalentsubscribeheaderbarclosed') )
	    {
		wasClosed = true;
		break;
	    }
	}

	var $bar = $('#catalent-subscribe-headerbar');
	if ( 1 != $bar.length ) { return ; }

	if ( wasClosed )
	{
	    $bar.remove();
	    return;
	}

	var displayBar = function ()
	{
	    $bar.addClass('catalent-subscribe-headerbar-shown');
	    $('body').addClass('catalent-subscribe-headerbar-shown');
	};

	var $closeCntl = $bar.find('.catalent-headerbar-close');
	$closeCntl.click(function() {
	    document.cookie = 'catalentsubscribeheaderbarclosed=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/; domain=' + window.location.hostname;
	    $bar.remove();
	    $('body').removeClass('catalent-subscribe-headerbar-shown');
	});

	window.setTimeout(displayBar, 2000);
    }

})( jQuery );
