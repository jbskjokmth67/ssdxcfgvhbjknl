
jQuery(document).ready(function(){
	
	// Language swicher
	var language = jQuery('html').attr('lang');
		if(language == 'en')
		{
		jQuery(".language-switcher-language-url .content li.en").css("display", "none");
		jQuery('.language-switcher-language-url .content li a').text('à¬“à¬¡à¬¼à¬¿à¬†');
		}else if(language == 'or')
		{
		jQuery(".language-switcher-language-url .content li.or").css("display", "none");
		}
	
	 //translate message..
  jQuery('.alink').click(function(){
		return confirm('Do you want to change the language?');
	});
	jQuery(".nice-menu ul:first").addClass('nav');
//contrast
	if(getCookie('contrast') == 0 || getCookie('contrast') == null){
	jQuery(".light").hide();
	jQuery(".dark").show();
    }else{
	jQuery(".light").show();
	jQuery(".dark").hide();
}


 //translate message.. 
  jQuery('.alink').click(function(){
		return confirm('Do you want to change the language?');
	});



// Fix Header

	var num = 36; //number of pixels before modifying styles
    jQuery(window).bind('scroll', function () {
        if (jQuery(window).scrollTop() > num) {
        jQuery('.fixed-wrapper').addClass('sticky');
		
    
        } else {
        jQuery('.fixed-wrapper').removeClass('sticky');
    
        }
    });

			
jQuery(function () {

    jQuery(".menu li").on('mouseenter mouseleave', function (e) {
        if (jQuery('ul', this).length) {
            var elm = jQuery('ul:first', this);
            var off = elm.offset();
            var l = off.left;
            var w = elm.width();
            var docH = jQuery(".container").height();
            var docW = jQuery(".container").width();

            var isEntirelyVisible = (l + w <= docW);

            if (!isEntirelyVisible) {
                jQuery(this).addClass('edge');
            } else {
                jQuery(this).removeClass('edge');
            }
        }
    });
});		
			
		
	
// Mobile Nav	
jQuery('.sub-menu').append('<i class="fa fa-caret-right"></i>');
	 jQuery('.toggle-nav-bar').click(function(){	
	jQuery('#nav').slideToggle();
	jQuery('#nav li').removeClass('open');
    jQuery("#nav li").click(function(){
		jQuery("#nav li").removeClass('open');
		jQuery(this).addClass('open');
	}); 
		
	}); 
	

	
//Skip Content
jQuery('a[href^="#skipCont"]').click(function() {
jQuery('html,body').animate({ scrollTop: $(this.hash).offset().top}, 500);
return false;
e.preventDefault();

});

// Toggle Search


jQuery(".search-drop").css("display", "none");
//alert('fhff');
    jQuery("#toggleSearch").click(function(e) {
        jQuery(".search-drop").toggle();
        e.stopPropagation();
    });

    jQuery(document).click(function(e) {
        if (!jQuery(e.target).is('.search-drop, .search-drop *')) {
            jQuery(".search-drop").hide();
			
        }
    });

})

//Drop down menu for Keyboard accessing
function dropdown1(dropdownId, hoverClass, mouseOffDelay) { 
	if(dropdown = document.getElementById(dropdownId)) {
		var listItems = dropdown.getElementsByTagName('li');
		for(var i = 0; i < listItems.length; i++) {
			listItems[i].onmouseover = function() { this.className = addClass(this); }
			listItems[i].onmouseout = function() {
				var that = this;
				setTimeout(function() { that.className = removeClass(that); }, mouseOffDelay);
				this.className = that.className;
			}
			var anchor = listItems[i].getElementsByTagName('a');
			anchor = anchor[0];
			//anchor.onfocus = function() { tabOn(this.parentNode); }
			//anchor.onblur = function() { tabOff(this.parentNode); }
		}
	}
	
	function tabOn(li) {
		if(li.nodeName == 'LI') {
			li.className = addClass(li);
			tabOn(li.parentNode.parentNode);
		}
	}
	
	function tabOff(li) {
		if(li.nodeName == 'LI') {
			li.className = removeClass(li);
			tabOff(li.parentNode.parentNode);
		}
	}
	
	function addClass(li) { return li.className + ' ' + hoverClass; }
	function removeClass(li) { return li.className.replace(hoverClass, ""); }
}

jQuery(document).ready(function(){
	dropdown1('header-nav','hover',10);
	checkWidth();
});



//<![CDATA[
/* jQuery(function ()
{
jQuery('table').wrap('<div class="scroll-table1"></div>');
jQuery(".scroll-table1").before( "<div class='guide-text'>Swipe to view <i class='fa fa-long-arrow-right'></i></div>" );

}); */
//]]>



var $window = jQuery(window);
function checkWidth() {
   var windowsize = $window.width();

   if (windowsize < 940) {
      jQuery("#nav .main-menu ul > li a").on("click", function(e) {
		  e.preventDefault() ;
		  /* jQuery("#nav .main-menu ul > li .sub-nav").stop().slideUp('slow');
		  jQuery(this).parent().find('.sub-nav').stop().slideToggle('slow'); */
      });
   } else if (windowsize > 940) { 
    function dropdown2(dropdownId, hoverClass, mouseOffDelay) { 
	if(dropdown = document.getElementById(dropdownId)) {
		var listItems = dropdown.getElementsByTagName('li');
		for(var i = 0; i < listItems.length; i++) {
			listItems[i].onmouseover = function() { this.className = addClass(this); }
			listItems[i].onmouseout = function() {
				var that = this;
				setTimeout(function() { that.className = removeClass(that); }, mouseOffDelay);
				this.className = that.className;
			}
			var anchor = listItems[i].getElementsByTagName('a');
			anchor = anchor[0];
			//anchor.onfocus = function() { tabOn(this.parentNode); }
			//anchor.onblur = function() { tabOff(this.parentNode); }
		}
	}
	
	function tabOn(li) {
		if(li.nodeName == 'LI') {
			li.className = addClass(li);
			tabOn(li.parentNode.parentNode);
		}
	}
	
	function tabOff(li) {
		if(li.nodeName == 'LI') {
			li.className = removeClass(li);
			tabOff(li.parentNode.parentNode);
		}
	}
	
	function addClass(li) { return li.className + ' ' + hoverClass; }
	function removeClass(li) { return li.className.replace(hoverClass, ""); }
	}
	dropdown2('main_menu','hover',10);
  }
}






















