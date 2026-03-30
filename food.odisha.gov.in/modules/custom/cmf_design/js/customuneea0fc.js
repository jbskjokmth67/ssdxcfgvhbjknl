/*SHS- Node add page*/
jQuery(document).ready(function () {
  if (jQuery('form.node-form').length) {
    jQuery('.chosen-container').remove();

  }
});

jQuery(document).ready(function(){
	
//& replament for all content
jQuery(function () {
  jQuery('body *').contents().filter(function () {
    return this.nodeType === 3 && this.nodeValue.includes('&amp;');
  }).each(function () {
    this.nodeValue = this.nodeValue.replace(/&amp;/g, '&');
  });
});

	/*	jQuery("a[href^='http://']:not([href*='"+location.hostname+"']), [href^='https://']:not([href*='"+location.hostname+"'])")
    .attr("target","_blank")
    .click(function(e) {
        return confirm('You are being redirected to an external website. Please note that This website cannot be held responsible for external websites content & privacy policies.');
    }); */
	
	jQuery('.views-field-nothing a[href$=".pdf"]').attr('title', 'Click Here for More Details');
	//jQuery('.views-field-nothing a').attr('title', 'View Details');
	jQuery('.views-field-nothing a[href$=".pdf"]').attr('target', '_blank');
	
	jQuery('.nav li.we-mega-menu-li div.we-mega-menu-submenu div.we-mega-menu-row-old div.we-mega-menu-col').focus(function() {
      jQuery('.nav li.we-mega-menu-li div.we-mega-menu-submenu').show();
	  jQuery('.nav li.we-mega-menu-li div.we-mega-menu-submenu').show();
	  jQuery('.nav li.we-mega-menu-li div.we-mega-menu-submenu').css("display", "block");
 
    });
	
	
	
	
	// Language swicher
	var language = jQuery('html').attr('lang');
		if(language == 'en')
		{
		jQuery(".language-switcher-language-url .content li.en").css("display", "none");
		jQuery('.language-switcher-language-url .content li a').text("ଓଡ଼ିଆ");
		}else if(language == 'or')
		{
		jQuery(".language-switcher-language-url .content li.or").css("display", "none");
		}
		jQuery("#webform-submission-contact-add-form #edit-actions-submit").attr("title", "Send Message");
		jQuery(".language-link").attr("title", "Select Language");
		jQuery("#edit-keys").attr("placeholder", "Search Here..");
		
		
		var lan = jQuery('html').attr('lang');
		if(lan == 'en')
		{
		jQuery('.path-news Footer a.views-display-link').attr('title', 'Archive News');
		}else if(language == 'or')
		{
		jQuery(".path-news Footer a.views-display-link").attr("title", "ଆର୍କାଇଭ୍ ନ୍ୟୁଜ୍ |");
		}
		
		if(lan == 'en')
		{
		jQuery('.path-flash-news Footer a.views-display-link').attr('title', 'Archive Flash News');
		}else if(language == 'or')
		{
		jQuery(".path-flash-news Footer a.views-display-link").attr("title", "ଫ୍ଲାସ୍ ନ୍ୟୁଜ୍ ଆର୍କାଇଭ୍ କରନ୍ତୁ ");
		}
		
		if(lan == 'en')
		{
		jQuery('.path-state-tenders-advertisement Footer a.views-display-link-page_4').attr('title', 'Archive Tenders');
		}else if(language == 'or')
		{
		jQuery(".path-state-tenders-advertisement Footer a.views-display-link-page_4").attr("title", "ଟେଣ୍ଡରଗୁଡିକର ଅଭିଲେଖାଗାର  ");
		}
		
		 if(lan == 'en')
		{
		jQuery('.path-state-tenders-advertisement Footer a.views-display-link-page_6').attr('title', 'Archive Advertisement');
		}else if(language == 'or')
		{
		jQuery(".path-state-tenders-advertisement Footer a.views-display-link-page_6").attr("title", "ବିଜ୍ଞାପନ ସଂଗ୍ରହ କରନ୍ତୁ | ");
		} 
		
		 if(lan == 'en')
		{
		jQuery('.path-tenders-advertisement Footer a.views-display-link-page_9').attr('title', 'Archive Advertisement');
		}else if(language == 'or')
		{
		jQuery(".path-tenders-advertisement Footer a.views-display-link-page_9").attr("title", "ବିଜ୍ଞାପନ ସଂଗ୍ରହ କରନ୍ତୁ | ");
		}
		
		

/* webform submission */
     jQuery('.webform-submission-contact-form input:radio[name=domain_email][class=form-radio]').attr('checked', true);
	jQuery('#edit-domain-wise-email').val(jQuery('.webform-submission-contact-form label.option').text());


});




function onlyAlphabets(keycode){	
		if((keycode >= 65  && keycode <= 90) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode == 9 || keycode==32){			
			return true;
		}else{ 
			return false;
		}
	}
	
	
	
	jQuery(document).ready(function(){

	/* validation for search form */

jQuery('#search-block-form').on('keydown','#edit-keys',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return onlyAlphabets(keycode);	
	});
	jQuery('#search-form').on('keydown','#edit-keys',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return onlyAlphabets(keycode);	
	});
	
	
	
	
	
	
	
	});
