$(document).ready(function(){
    					$(".roles").click(function(){
        						$(this).children().toggleClass("more");
   							 });
						}); 
						
$(document).ready(function(){
	  				 $(window).bind('scroll', function() {
	  					 var fix; 
	  					 fix = $(window).height() - 400;
						 if ($(window).scrollTop() > fix) {
				 					$("nav").addClass("fixed");
							 }
			 				else {
				 				$("nav").removeClass("fixed");
			 				}
						});
					}); 
					
/* this function is not ideal. 
the global nav bar becomes fixed once you've scrolled down 400 px to accomodate regular 
and smaller screens (since the changing font sizes effect the header and nav bar size),
but it is not an ideal position for either (320 for reg size is best) */
$(document).ready(function(){
					$("#kenburns > div:gt(0)").hide();
							setInterval(function() {
  								$('#kenburns > div:first')
    								.fadeOut(800)
   									 .next()
   									 .fadeIn(800)
   									 .end()
   									 .appendTo('#kenburns');
							}, 4000)
					});
