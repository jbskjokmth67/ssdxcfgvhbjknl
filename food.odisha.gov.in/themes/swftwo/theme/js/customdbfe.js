
jQuery(document).ready(function(){
  
/* jQuery("a[href^='http://']:not([href*='"+location.hostname+"']), [href^='https://']:not([href*='"+location.hostname+"'])")
    .attr("target","_blank")
    .click(function(e) {
        return confirm('You are being redirected to an external website. Please note that This website cannot be held responsible for external websites content & privacy policies.');
    }); */

	 //translate message..
  jQuery('.alink').click(function(){
		return confirm('Do you want to change the language?');
	});

		/* jQuery('#cmf-site-breadcrumb li').each(function() {
    var text = jQuery(this).text();
    jQuery(this).text(text.replace("Departmentwise Citizen Services List", "Citizen Services")); 
});
		jQuery('#cmf-site-breadcrumb li').each(function() {
    var text = jQuery(this).text();
    jQuery(this).text(text.replace("News & Events", "News")); 
}); */
	
	jQuery('.heading-container h1').each(function(){ 
	    var textat = jQuery(this).text().replace('&amp;', '&');
        jQuery(this).text(textat);	
	});
	
	jQuery('.views-field-nothing a[href$=".pdf"]').attr('title', 'Click Here for More Details');
	//jQuery('.views-field-nothing a').attr('title', 'View Details');
	jQuery('.views-field-nothing a').attr('target', '_blank');
	
	jQuery('#sidebar-first [role="navigation"]').addClass("navmenu");
	
	//For Left Menu
   /*  jQuery(".content-left nav > ul").addClass("main-nav");
    jQuery(".content-left nav > ul li > ul").addClass("sub-nav");
    
    jQuery('.navmenu ul > li > ul.sub-nav').css('display','none');
    jQuery('.main-nav li').on('click',function(){
     jQuery(this).toggleClass('open');
	
    }); */
	
	jQuery('table').wrap('<div class="scroll-table1"></div>');
	
	
	/* jquery FOR SHOW/HIDE SUBMENU ON EMPLOYEE DASHBOARD */

	//jQuery('#block-employeedashboard>ul.menu li.menu-item--expanded>ul').css('display','none');
	//alert(33);
 jQuery('.navmenu ul li').find('.is-active').parents('li').addClass('open');
  jQuery('.navmenu ul li').find('.is-active').parents('ul').show();
	jQuery('.navmenu ul li').on('click',function(e){

		//e.preventDefault();
		//e.stopPropagation();
		if(jQuery(this).hasClass('open')){
			jQuery(this).removeClass('open');
			jQuery(this).children('ul').css('display','none');
		}else{
			
			
			jQuery('.navmenu ul li > ul').css('display','none');
			
			jQuery('.navmenu ul li').removeClass('open');
			jQuery('.navmenu ul li').children('ul li').removeClass('open').children('ul li').removeClass('open');
			jQuery(this).addClass('open');
			jQuery(this).children('ul li').children('ul li').addClass('open');			
			
			jQuery(this).children('ul').css('display','block');
			
			
		}
		
	});
	jQuery('.navmenu ul li').on('click',function(e){
		//e.stopPropagation();
	}); 
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//Flash News
	jQuery(function(){
		var timer = !1;
		_Ticker = jQuery("#unee-news").newsTicker();
		_Ticker.on("mouseenter",function(){
			var __self = this;
			timer = setTimeout(function(){
				__self.pauseTicker();
			},1);
		});
		_Ticker.on("mouseleave",function(){
			clearTimeout(timer);
			if(!timer) return !1;
			this.startTicker();
		});
	});

	
});

function checkNumeric(keycode){
		if((keycode >= 48  && keycode <= 57) || (keycode >= 96  && keycode <= 105) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode==9 ){			
			return true;
		}else{			
			return false;
		}
	}
	
	function onlyAlphabets(keycode){	
		if((keycode >= 65  && keycode <= 90) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode == 9 || keycode==32){			
			return true;
		}else{ 
			return false;
		}
	}
	function checkAlphaNumeric(keycode){
		if((keycode >= 65  && keycode <= 90) || (keycode >= 48  && keycode <= 57) || (keycode >= 96  && keycode <= 105) || keycode == 8 || keycode == 13 || keycode == 46 ||  keycode == 37 || keycode == 39 || keycode==9 || keycode == 32){			
			return true;
		}else{			
			return false;
		}
	}
	
	
	
	
	
	jQuery(document).ready(function(){
		
		jQuery('#edit-name, #edit-subject, #edit-message, #edit-email').bind("cut copy paste",function(e) {
      e.preventDefault();
	});
		
	
	
	/* validation for receipt register form */

jQuery('#webform-submission-contact-add-form').on('keydown','#edit-name',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return onlyAlphabets(keycode);	
	});
	
	
	jQuery('#webform-submission-contact-add-form').on('keydown','#edit-subject',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return onlyAlphabets(keycode);	
	});
	
	jQuery('#webform-submission-contact-add-form').on('keydown','#edit-message',function(e){
		keycode=e.keyCode;
		if(e.shiftKey && (e.which>=48 && e.which<=57) ){//for SPECIAL CHARACTER COMES WITH SHIFT	
			return false;
		}
		return checkAlphaNumeric(keycode);	
	});
	
	
	});
	






//This behaviors is using for adding serial number in field collection.
(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) { 
	
	
	
	jQuery('#views-exposed-form-organization-tree-block-2 .shs-container').change(function () {
	jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-label1">' + Drupal.t('Division') + '</span>');
    jQuery('.shs-widget-container:nth-child(3)').after('<span class="shs-label2">' + Drupal.t('Sub Division') + '</span>');
    jQuery('.shs-widget-container:nth-child(5)').after('<span class="shs-label3">' + Drupal.t('Name of Section') + '</span>');
	  jQuery('.shs-widget-container:nth-child(7)').after('<span class="shs-label4">' + Drupal.t('Block') + '</span>');

	   if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){
		 
//console.log(jQuery('.shs-widget-container:nth-child(1) .form-select').val());		   
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All' ){
			  jQuery('.shs-label1').css('display','none');
		  }
		  else{
			  jQuery('.shs-label1').css('display','block');
			  
			  
		  }
		  
		  
	  }
	  
	  
	  
	  
	   if(jQuery('.shs-widget-container:nth-child(3) .form-select').length){
		 
//console.log(jQuery('.shs-widget-container:nth-child(1) .form-select').val());		   
		  if(jQuery('.shs-widget-container:nth-child(3) .form-select').val() =='All' ){
			  jQuery('.shs-label2').css('display','none');
		  }
		  else{
			  jQuery('.shs-label2').css('display','block');
			  
			  
		  }
		  
		  
	  } 
	  
	  
	  
	  if(jQuery('.shs-widget-container:nth-child(5) .form-select').length){
		 
//console.log(jQuery('.shs-widget-container:nth-child(1) .form-select').val());		   
		  if(jQuery('.shs-widget-container:nth-child(5) .form-select').val() =='All' ){
			  jQuery('.shs-label3').css('display','none');
		  }
		  else{
			  jQuery('.shs-label3').css('display','block');
			  
			  
		  }
		  
		  
	  }
	  
	  if(jQuery('.shs-widget-container:nth-child(7) .form-select').length){
		 
//console.log(jQuery('.shs-widget-container:nth-child(1) .form-select').val());		   
		  if(jQuery('.shs-widget-container:nth-child(7) .form-select').val() =='All' ){
			  jQuery('.shs-label4').css('display','none');
		  }
		  else{
			  jQuery('.shs-label4').css('display','block');
			  
			  
		  }
		  
		  
	  }
	    
	  
	 

});

   jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-label1">' + Drupal.t('Division') + '</span>');
    jQuery('.shs-widget-container:nth-child(3)').after('<span class="shs-label2">' + Drupal.t('Sub Division') + '</span>');
	//alert( jQuery('.shs-widget-container:nth-child(2)').val());
    //jQuery('.shs-widget-container:nth-child(3)').after('<span class="shs-label">' + Drupal.t('Name of Section') + '</span>');
    jQuery('.shs-widget-container:nth-child(5)').after('<span class="shs-label3">' + Drupal.t('Name of Section') + '</span>');
	// jQuery('.shs-widget-container:nth-child(5)').after('<span class="shs-label">' + Drupal.t('Block111') + '</span>');
	  jQuery('.shs-widget-container:nth-child(7)').after('<span class="shs-label4">' + Drupal.t('Block') + '</span>');
	  //alert(jQuery('.shs-widget-container:nth-child(2) .form-select').val());
	   if(jQuery('#edit-term-node-tid-depth-shs-0-1').length){
		  if(jQuery('#edit-term-node-tid-depth-shs-0-1').val()!='' ){
			  jQuery('.shs-label2').css('display','block');
		  }
		  
		  if(jQuery('#edit-term-node-tid-depth-shs-0-1').val() =='All' ){
			  jQuery('.shs-label2').css('display','none');
		  }
	  } 
	  
	  
	  
	  if(jQuery('#edit-term-node-tid-depth-shs-0-2').length){
		  if(jQuery('#edit-term-node-tid-depth-shs-0-2').val()!='' ){
			  jQuery('.shs-label3').css('display','block');
		  }
		  
		  if(jQuery('#edit-term-node-tid-depth-shs-0-2').val() =='All' ){
			  jQuery('.shs-label3').css('display','none');
		  }
	  }
	  
	  if(jQuery('#edit-term-node-tid-depth-shs-0-3').length){
		  if(jQuery('#edit-term-node-tid-depth-shs-0-3').val()!='' ){
			  jQuery('.shs-label4').css('display','block');
		  }
		  
		  if(jQuery('#edit-term-node-tid-depth-shs-0-3').val() =='All' ){
			  jQuery('.shs-label4').css('display','none');
		  }
	  }
	  jQuery('#views-exposed-form-organization-tree-block-2 .js-form-submit').click(function () {
		  
		  setTimeout(function(){   if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){		  
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(1) .form-select').val().length == 0 ){
			  jQuery('.shs-label1').css('display','none');
		  }
		  else{
			  jQuery('.shs-label1').css('display','block');
			  
			  
		  }
		  
		  
	  }; 
	  
	  if(jQuery('.shs-widget-container:nth-child(3) .form-select').length){		  
		  if(jQuery('.shs-widget-container:nth-child(3) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(3) .form-select').val().length == 0 ){
			  jQuery('.shs-label2').css('display','none');
		  }
		  else{
			  jQuery('.shs-label2').css('display','block');
			  
			  
		  }
		  
		  
	  };
	  
	  if(jQuery('.shs-widget-container:nth-child(5) .form-select').length){		  
		 if(jQuery('.shs-widget-container:nth-child(5) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(5) .form-select').val().length == 0 ){
			  jQuery('.shs-label3').css('display','none');
		  }
		  else{
			  jQuery('.shs-label3').css('display','block');
			  
			  
		  }
		  
		  
	  };
	  
	  //alert(jQuery('.shs-widget-container:nth-child(7) .form-select').val());
	  
	   if(jQuery('.shs-widget-container:nth-child(7) .form-select').length){
		   
		  if(jQuery('.shs-widget-container:nth-child(7) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(7) .form-select').val().length == 0 ){
			  jQuery('.shs-label4').css('display','none');
		  }
		  else{
			  jQuery('.shs-label4').css('display','block');
			  
			  
		  }
		  
		  
	  }; 
	  
	  
	  
	  }, 1800);
	  
	 
	  

	  
	  
	  });

	
	}
  };
}(jQuery));



//This behaviors is using for adding serial number in field collection.
(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) { 
	
	
	
	jQuery('#views-exposed-form-organization-tree-block-3 .shs-container').change(function () {
	jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-label1">' + Drupal.t('Division') + '</span>');
    jQuery('.shs-widget-container:nth-child(3)').after('<span class="shs-label2">' + Drupal.t('Sub Division') + '</span>');
    jQuery('.shs-widget-container:nth-child(5)').after('<span class="shs-label3">' + Drupal.t('Name of Section') + '</span>');
	  jQuery('.shs-widget-container:nth-child(7)').after('<span class="shs-label4">' + Drupal.t('Block') + '</span>');

	  
	  if(jQuery('#edit-term-node-tid-depth-shs-0-0').length){
		  if(jQuery('#edit-term-node-tid-depth-shs-0-0').val()!='' ){
			  jQuery('.shs-label1').css('display','block');
		  }
		  
		  if(jQuery('#edit-term-node-tid-depth-shs-0-0').val() =='All' ){
			  jQuery('.shs-label1').css('display','none');
		  }
	  } 
	 /*   if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){
		 
	   
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All' ){
			  jQuery('.shs-label1').css('display','none');
		  }
		  else{
			  jQuery('.shs-label1').css('display','block');
			  
			  
		  }
		  
		  
	   */}
	  
	  
	  
	  
	   if(jQuery('.shs-widget-container:nth-child(3) .form-select').length){
		 
//console.log(jQuery('.shs-widget-container:nth-child(1) .form-select').val());		   
		  if(jQuery('.shs-widget-container:nth-child(3) .form-select').val() =='All' ){
			  jQuery('.shs-label2').css('display','none');
		  }
		  else{
			  jQuery('.shs-label2').css('display','block');
			  
			  
		  }
		  
		  
	  } 
	  
	  
	  
	  if(jQuery('.shs-widget-container:nth-child(5) .form-select').length){
		 
//console.log(jQuery('.shs-widget-container:nth-child(1) .form-select').val());		   
		  if(jQuery('.shs-widget-container:nth-child(5) .form-select').val() =='All' ){
			  jQuery('.shs-label3').css('display','none');
		  }
		  else{
			  jQuery('.shs-label3').css('display','block');
			  
			  
		  }
		  
		  
	  }
	  
	  if(jQuery('.shs-widget-container:nth-child(7) .form-select').length){
		 
//console.log(jQuery('.shs-widget-container:nth-child(1) .form-select').val());		   
		  if(jQuery('.shs-widget-container:nth-child(7) .form-select').val() =='All' ){
			  jQuery('.shs-label4').css('display','none');
		  }
		  else{
			  jQuery('.shs-label4').css('display','block');
			  
			  
		  }
		  
		  
	  }
	    
	  
	 

});

   jQuery('.shs-widget-container:nth-child(1)').after('<span class="shs-label1">' + Drupal.t('Division') + '</span>');
    jQuery('.shs-widget-container:nth-child(3)').after('<span class="shs-label2">' + Drupal.t('Sub Division') + '</span>');
	//alert( jQuery('.shs-widget-container:nth-child(2)').val());
    //jQuery('.shs-widget-container:nth-child(3)').after('<span class="shs-label">' + Drupal.t('Name of Section') + '</span>');
    jQuery('.shs-widget-container:nth-child(5)').after('<span class="shs-label3">' + Drupal.t('Name of Section') + '</span>');
	// jQuery('.shs-widget-container:nth-child(5)').after('<span class="shs-label">' + Drupal.t('Block111') + '</span>');
	  jQuery('.shs-widget-container:nth-child(7)').after('<span class="shs-label4">' + Drupal.t('Block') + '</span>');
	  //alert(jQuery('.shs-widget-container:nth-child(2) .form-select').val());
	   if(jQuery('#edit-term-node-tid-depth-shs-0-1').length){
		  if(jQuery('#edit-term-node-tid-depth-shs-0-1').val()!='' ){
			  jQuery('.shs-label2').css('display','block');
		  }
		  
		  if(jQuery('#edit-term-node-tid-depth-shs-0-1').val() =='All' ){
			  jQuery('.shs-label2').css('display','none');
		  }
	  } 
	  
	  
	  
	  if(jQuery('#edit-term-node-tid-depth-shs-0-2').length){
		  if(jQuery('#edit-term-node-tid-depth-shs-0-2').val()!='' ){
			  jQuery('.shs-label3').css('display','block');
		  }
		  
		  if(jQuery('#edit-term-node-tid-depth-shs-0-2').val() =='All' ){
			  jQuery('.shs-label3').css('display','none');
		  }
	  }
	  
	  if(jQuery('#edit-term-node-tid-depth-shs-0-3').length){
		  if(jQuery('#edit-term-node-tid-depth-shs-0-3').val()!='' ){
			  jQuery('.shs-label4').css('display','block');
		  }
		  
		  if(jQuery('#edit-term-node-tid-depth-shs-0-3').val() =='All' ){
			  jQuery('.shs-label4').css('display','none');
		  }
	  }
	  jQuery('#views-exposed-form-organization-tree-block-3 .js-form-submit').click(function () {
		  
		  setTimeout(function(){   if(jQuery('.shs-widget-container:nth-child(1) .form-select').length){		  
		  if(jQuery('.shs-widget-container:nth-child(1) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(1) .form-select').val().length == 0 ){
			  jQuery('.shs-label1').css('display','none');
		  }
		  else{
			  jQuery('.shs-label1').css('display','block');
			  
			  
		  }
		  
		  
	  }; 
	  
	  if(jQuery('.shs-widget-container:nth-child(3) .form-select').length){		  
		  if(jQuery('.shs-widget-container:nth-child(3) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(3) .form-select').val().length == 0 ){
			  jQuery('.shs-label2').css('display','none');
		  }
		  else{
			  jQuery('.shs-label2').css('display','block');
			  
			  
		  }
		  
		  
	  };
	  
	  if(jQuery('.shs-widget-container:nth-child(5) .form-select').length){		  
		 if(jQuery('.shs-widget-container:nth-child(5) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(5) .form-select').val().length == 0 ){
			  jQuery('.shs-label3').css('display','none');
		  }
		  else{
			  jQuery('.shs-label3').css('display','block');
			  
			  
		  }
		  
		  
	  };
	  
	  //alert(jQuery('.shs-widget-container:nth-child(7) .form-select').val());
	  
	   if(jQuery('.shs-widget-container:nth-child(7) .form-select').length){
		   
		  if(jQuery('.shs-widget-container:nth-child(7) .form-select').val() =='All'  || jQuery('.shs-widget-container:nth-child(7) .form-select').val().length == 0 ){
			  jQuery('.shs-label4').css('display','none');
		  }
		  else{
			  jQuery('.shs-label4').css('display','block');
			  
			  
		  }
		  
		  
	  }; 
	  
	  
	  
	  }, 1800);
	  
	 
	  

	  
	  
	  });

	
	}
  };
}(jQuery));


jQuery(window).load(function(){
	// alert(8);
	  jQuery('#edit-name').attr('maxlength','30');

	  
});


jQuery(document).ready(function () {
  jQuery('table').each(function () {
    var i = 1;
    jQuery(this).find('tbody .views-field-counter').each(function () {
      jQuery(this).text(i++);
    });
  });
});