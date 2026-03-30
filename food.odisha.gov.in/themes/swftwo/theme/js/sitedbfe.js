// JavaScript Document

//E-Despatch
function edespatch_popup(pageURL, title, w, h) {
	var left = (screen.width - w) / 2;
	var top = (screen.height - h) / 4;  // for 25% - devide by 4  |  for 33% - devide by 3
	var targetWin = window.open(pageURL, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
} 

//For Scroll Function
(function($){
  $(window).on("load",function(){
      $(".content-invetment").mCustomScrollbar();
  });
})(jQuery);

jQuery(document).ready(function() {
	function get_query(){
    var url = document.location.href;
    var qs = url.substring(url.indexOf('?') + 1).split('&');
    for(var i = 0, result = {}; i < qs.length; i++){
      //  qs[i] = qs[i].split('=');
       // result[qs[i][0]] = decodeURIComponent(qs[i][1]);
		result = decodeURIComponent(qs[i]);
    }
    return result;
}
	
	var result = get_query();

console.log(result);
jQuery('input[name="fisheries_job_chart_title"]').val(result);


	
		window.onload = function () {
    document.getElementById('button').onclick = function () {
        document.getElementById('modal').style.display = "none"
    };
};

jQuery('body').on('click',function(){
		 document.getElementById('modal').style.display = "none"; 
	});
	
	
	//translate message..
  jQuery('.language-link').click(function(){
		return confirm('Do you want to change the language?');
	});
	
	jQuery('#button').click(function(){
		jQuery('#modal').css("display", "none");
	});
	
	
	jQuery("a[href^='http://']:not([href*='"+location.hostname+"']), [href^='https://']:not([href*='"+location.hostname+"'])")
    .attr("target","_blank")
    .click(function(e) {
         return confirm('This link will take you to an external URL.');
    });
	
	 jQuery("#toggleSearch").click(function(){
        jQuery(this).toggleClass("pos-change");
        jQuery(".modal-search").toggle();
        jQuery(".modal-search .js-form-item input").attr("placeholder", "Search Here...");
    });
	
	
	jQuery('#sidebar-first [role="navigation"]').addClass("navmenu");
	
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
	
	
	
	
	
	
	
	jQuery('.glbsrch table').attr("id","dptsrt");
	
	jQuery('#dptsrt').DataTable();
	 
	
	jQuery('#quicktabs-album  li:first-child a').attr("title","Grid"); 
	jQuery('#quicktabs-album  li:last-child a').attr("title","List");
	jQuery('table').wrap('<div class="scroll-table1"></div>');

	
	
	
	 
    var animate_width = jQuery('#side_nav_cont').width();
	jQuery('#side_nav_cont').animate({right: '-'+animate_width},500);
	jQuery('#side_nav_toggle2').animate({right: '-'+animate_width},10);
	
	jQuery('#side_nav_toggle').click(function(e) {
        e.preventDefault();
		jQuery(this).animate({right: '-'+animate_width},500);
		jQuery('#side_nav_toggle2').animate({right: animate_width},800);
		jQuery('#side_nav_toggle2').animate({right: animate_width},500);
		jQuery('#side_nav_cont').animate({right: '0px'},800);
		
    });
	  jQuery(".nice-menu ul:first").addClass('nav');
  jQuery("#block-mainnavigation-4 ul").addClass('nav');
	jQuery('#side_nav_toggle2').click(function(e) {
        e.preventDefault();
		jQuery(this).animate({right: '-'+animate_width},500);
		jQuery('#side_nav_toggle').animate({right: '0px'},200);
		jQuery('#side_nav_toggle').animate({right: '0px'},500);
		jQuery('#side_nav_cont').animate({right: '-'+animate_width},800);
		
    });
	
	jQuery('#flexSlider').flexslider({
        animation: "slide",
        controlNav: true,
        pausePlay: true,
        controlNav: false,
        start: function (slider) {
          jQuery('body').removeClass('loading');
        }
      });

      // Slider						
      jQuery('#trending-news').flexslider({
        animation: "slide",
        controlNav: true,
        pausePlay: false,
        controlNav: false,
        start: function (slider) {
          jQuery('body').removeClass('loading');
        }
      });

      // News Slider						
     // News Slider						
      jQuery('#news-photo-slider').flexslider({
        animation: "slide",
		animationLoop: false,
		itemWidth: 200,
		itemMargin: 20,
        pausePlay: false,
        controlNav: false,
		minItems: 6,
        maxItems: 6
      });
       AOS.init({  
      });

      // Carousel						
      jQuery('#flexCarousel').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 200,
        itemMargin: 5,
        pausePlay: true,
        minItems: 2,
        maxItems: 6,
        slideshow: 1,
        move: 1,
        controlNav: false,
        start: function (slider) {
          jQuery('body').removeClass('loading');
          if (slider.pagingCount === 1) slider.addClass('flex-centered');
        }
      });
	
	
	
	jQuery(window).scroll(function () {
      if (jQuery(window).scrollTop() >= 147) {
        jQuery('.nice-menu').addClass('fixed-header');
        jQuery('.nice-menu div').addClass('visible-title');
      }
      else {
        jQuery('.nice-menu').removeClass('fixed-header');
        jQuery('.nice-menu div').removeClass('visible-title');
      }
    });
	
	jQuery('ul.tabs li').click(function () {
        var tab_id = $(this).attr('data-tab');

        jQuery('ul.tabs li').removeClass('current');
        jQuery('.tab-content').removeClass('current');

        jQuery(this).addClass('current');
        jQuery("#" + tab_id).addClass('current');
      });
	  
	  
	  jQuery('#flexCarousel').flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 200,
      itemMargin: 5,
      pausePlay: true,
      minItems: 2,
      maxItems: 6,
      slideshow: 1,
      move: 1,
      controlNav: false,
      start: function (slider) {
        jQuery('body').removeClass('loading');
        if (slider.pagingCount === 1) slider.addClass('flex-centered');
      }
    });
    /* jQuery(".nav-container > div").click(function () {
      jQuery(".nav-container ul").slideToggle();
      jQuery(".nav-container ul ul").css("display", "none");
    });
    jQuery(".nav-container ul li").click(function () {
      jQuery(".nav-container ul ul").slideUp();
      jQuery(this).find('.nav-container ul').slideToggle();
    }); */
    jQuery(window).resize(function () {
      if (jQuery(window).width() > 768) {
        jQuery(".nav-container ul").removeAttr('style');
      }
    });
	
	
	//view button position
	/*var linksSpace = $('.links').css('padding-left');
	alert(linksSpace);
	$('.mid_links a.view').css('left',linksSpace);*/
	
	if(window.innerWidth<941){
		var menus = jQuery('#side_nav_cont ul').html();
		jQuery('#nav').append(menus);
	}
	//Menu Toggle 
jQuery("#show-widget").click(function(e){
	e.preventDefault();
    jQuery(".inner-expend").toggleClass("show-card");
    jQuery("#close-btn").click(function(){
        jQuery(".inner-expend").hide();
    });
});
	

//Top Scroll
  var scrollTop = jQuery(".scrollTop");
  jQuery(window).scroll(function() {
	  
    // declare variable
    var topPos = jQuery(this).scrollTop();	
    if (topPos > 200) {
      jQuery(scrollTop).css("opacity", "1");

    } else {
      jQuery(scrollTop).css("opacity", "0");
    }

  }); 
  jQuery(scrollTop).click(function() {	  
    jQuery('html, body').animate({
      scrollTop: 0
    }, 1000);
    return false;
	});//Top Scroll End
	
	




});

window.onresize = function(){
	if(window.innerWidth<941){
		var menus = jQuery('#side_nav_cont ul').html();
		jQuery('#nav').append(menus);
	}
}




//This behaviors is using for adding serial number in field collection.
(function ($) {
  Drupal.behaviors.exampleModule = {
    attach: function (context, settings) { 
	
	
	
	jQuery('#views-exposed-form-organization-tree-block-3 .shs-container').change(function () {
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

//AutoPlay Bande Utkal Janni Audio Code Start // 
function pauseMusic(){
  var audioPlayer = document.getElementById('audio-player');
  var audioContainer = $('#music-container');
  audioPlayer.pause();
  audioContainer.addClass("music-player--disabled");
  console.log("pause music");
}

function playMusic(){
  var audioPlayer = document.getElementById('audio-player');
  var audioContainer = $('#music-container');
  audioPlayer.play();
  audioContainer.removeClass("music-player--disabled");
  console.log("play music");
}

navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
        
  var x = document.getElementById("audio-player"); 
  x.play();

   // stop microphone stream acquired by getUserMedia
   stream.getTracks().forEach(function (track) { track.stop(); });
});

//AutoPlay Bande Utkal Janni Audio Code End // 