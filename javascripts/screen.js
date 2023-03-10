var $j = jQuery.noConflict();

$j(document).ready(function($) {
	
	//Portfolio
	var $container = $j('#portfolio-content');
	var toFilter = '*';
	
	$container.isotope({
		filter: toFilter,
		animationOptions: {
			duration: 750,
			easing: 'linear',
			queue: false
		}
	});
	
	$container.attr('data-current',toFilter);
	
	checkActive();

	jQuery('#navsort a').click(function(){
		var title = jQuery(this).attr('title');
		var text = jQuery(this).text();
		if(text == "All"){
			var selector = title;
		}
		else {
			var selector = "." + title;
		}
		
		$container.attr('data-current',selector);
		
		$container.isotope({ 
			filter: selector,
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
				
			}
		});
		
		checkActive();
		
		return false;
	});
	
	function checkActive(){
	
	jQuery('#navsort a').each(function(){
		
		jQuery(this).parent().removeClass(
			'selected'
		);
	
		var title = jQuery(this).attr('title');
				
		title = '.'+title;
		
		if(title=='.*'){
			title = '*';
		}
		
		
		var currentCat = $container.attr('data-current');
		
		if(title==currentCat){
			jQuery(this).parent().addClass(
			'selected'
		);
		}
		
	});
	
	}
	
	
	
	//Testimonials
	jQuery('ul#button_quotes').bxSlider({
		mode: 'fade',
		useCSS: true,
  		easing: 'easeInSine',
		speed: 1000,
		randomStart: false,
		controls: true,
		nextText: '>>',
		prevText: '<<',
		auto: true,
		pause: 3500,
		autoStart: true,
		autoDirection: 'next',
		autoHover: true
	});
	
	//About Slider
	jQuery('ul#about_slider').bxSlider({
		
		useCSS: false,
  		easing: 'easeOutExpo',
		speed: 1500,
		randomStart: false,
		controls: false,
		nextText: '>>',
		prevText: '<<',
		auto: true,
		pause: 3000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: true,
		pager: true
		
	});
	
	//Home Parallax Intro Slider Vertical Text
	jQuery('ul#home_parallax_intro1').bxSlider({
		
		useCSS: false,
  		easing: 'easeOutBounce',
		speed: 500,
		randomStart: false,
		controls: false,
		nextText: '>>',
		prevText: '<<',
		auto: true,
		pause: 3000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: true,
		pager: false,
		mode: 'vertical',
		slideMargin: 20
		
	});
	
	//Home Parallax Intro Slider Horizontal Text Elastic
	jQuery('ul#home_parallax_intro2').bxSlider({
		
		useCSS: false,
  		easing: 'easeOutElastic',
		speed: 1500,
		randomStart: false,
		controls: false,
		nextText: '>>',
		prevText: '<<',
		auto: true,
		pause: 3000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: true,
		pager: false,
		mode: 'horizontal',
		slideMargin: 20
		
	});
	
	//Home Parallax Intro Slider Text Fade
	jQuery('ul#home_parallax_intro3').bxSlider({
		mode: 'fade',
		useCSS: false,
  		easing: 'easeOutElastic',
		speed: 1400,
		randomStart: false,
		controls: false,
		nextText: '>>',
		prevText: '<<',
		auto: true,
		pause: 5000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: true,
		pager: false
	
	});
	
	//Home Parallax Intro Slider Text Fade with icon
	jQuery('ul#home_parallax_intro4').bxSlider({
		mode: 'fade',
		useCSS: false,
  		easing: 'easeOutElastic',
		speed: 1400,
		randomStart: false,
		controls: false,
		nextText: '>>',
		prevText: '<<',
		auto: true,
		pause: 5000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: true,
		pager: false
	
	});

	if (jQuery.isFunction($.fn.camera)){
	//Camera Slider
	jQuery('#camera_wrap_1').camera({
		pagination: false,
		thumbnails: false,
		loader: 'bar',
		barPosition: 'bottom'
	});
	}
	
	//FitVids
	jQuery(".container").fitVids();
	
	//Fancybox
	jQuery('.fancybox,a.instagram-photo').fancybox({
		openEffect	: 'elastic',
		helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
	});
	
	//Fancybox Other
	jQuery(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'elastic',
		closeEffect	: 'none',
		helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
	});
	jQuery(".fancybox-12_06_2022").click(function() {
	jQuery.fancybox(["images/gallery/12_06_2022/1.jpg",		
		"images/gallery/12_06_2022/2.jpg",
		"images/gallery/12_06_2022/3.jpg",
		"images/gallery/12_06_2022/4.jpg",
		"images/gallery/12_06_2022/5.jpg",
		"images/gallery/12_06_2022/6.jpg",
		"images/gallery/12_06_2022/7.jpg",
		"images/gallery/12_06_2022/8.jpg",
		"images/gallery/12_06_2022/9.jpg",
		"images/gallery/12_06_2022/10.jpg",
		"images/gallery/12_06_2022/11.jpg",
		"images/gallery/12_06_2022/12.jpg",
		"images/gallery/12_06_2022/13.jpg",
		"images/gallery/12_06_2022/14.jpg",
		"images/gallery/12_06_2022/15.jpg",
		"images/gallery/12_06_2022/16.jpg",
		"images/gallery/12_06_2022/17.jpg",
		"images/gallery/12_06_2022/18.jpg",
		"images/gallery/12_06_2022/19.jpg",
		"images/gallery/12_06_2022/20.jpg",
		"images/gallery/12_06_2022/21.jpg",
		"images/gallery/12_06_2022/22.jpg",
		"images/gallery/12_06_2022/23.jpg"], 
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-19_09_2020").click(function() {
	jQuery.fancybox(["images/gallery/19_09_2020/1.jpg",		
		"images/gallery/19_09_2020/1.jpg",
		"images/gallery/19_09_2020/2.jpg",
		"images/gallery/19_09_2020/3.jpg",
		"images/gallery/19_09_2020/4.jpg",
		"images/gallery/19_09_2020/5.jpg",
		"images/gallery/19_09_2020/6.jpg",
		"images/gallery/19_09_2020/7.jpg",
		"images/gallery/19_09_2020/8.jpg",
		"images/gallery/19_09_2020/9.jpg",
		"images/gallery/19_09_2020/10.jpg",
		"images/gallery/19_09_2020/11.jpg",
		"images/gallery/19_09_2020/12.jpg",
		"images/gallery/19_09_2020/13.jpg",
		"images/gallery/19_09_2020/14.jpg",
		"images/gallery/19_09_2020/15.jpg",
		"images/gallery/19_09_2020/16.jpg",
		"images/gallery/19_09_2020/17.jpg",
		"images/gallery/19_09_2020/18.jpg",
		"images/gallery/19_09_2020/19.jpg",
		"images/gallery/19_09_2020/20.jpg",
		"images/gallery/19_09_2020/21.jpg",
		"images/gallery/19_09_2020/22.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-23_04_2022").click(function() {
	jQuery.fancybox(["images/gallery/23_04_2022/1.jpg",		
		"images/gallery/23_04_2022/1.jpg",
		"images/gallery/23_04_2022/2.jpg",
		"images/gallery/23_04_2022/3.jpg",
		"images/gallery/23_04_2022/4.jpg",
		"images/gallery/23_04_2022/5.jpg",
		"images/gallery/23_04_2022/6.jpg",
		"images/gallery/23_04_2022/7.jpg",
		"images/gallery/23_04_2022/8.jpg",
		"images/gallery/23_04_2022/9.jpg",
		"images/gallery/23_04_2022/10.jpg",
		"images/gallery/23_04_2022/11.jpg",
		"images/gallery/23_04_2022/12.jpg",
		"images/gallery/23_04_2022/13.jpg",
		"images/gallery/23_04_2022/14.jpg",
		"images/gallery/23_04_2022/15.jpg",
		"images/gallery/23_04_2022/16.jpg",
		"images/gallery/23_04_2022/17.jpg",
		"images/gallery/23_04_2022/18.jpg",
		"images/gallery/23_04_2022/19.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-26_09_2020").click(function() {
	jQuery.fancybox(["images/gallery/26_09_2020/1.jpg",		
		"images/gallery/26_09_2020/1.jpg",
		"images/gallery/26_09_2020/2.jpg",
		"images/gallery/26_09_2020/3.jpg",
		"images/gallery/26_09_2020/4.jpg",
		"images/gallery/26_09_2020/5.jpg",
		"images/gallery/26_09_2020/6.jpg",
		"images/gallery/26_09_2020/7.jpg",
		"images/gallery/26_09_2020/8.jpg",
		"images/gallery/26_09_2020/9.jpg",
		"images/gallery/26_09_2020/10.jpg",
		"images/gallery/26_09_2020/11.jpg",
		"images/gallery/26_09_2020/12.jpg",
		"images/gallery/26_09_2020/13.jpg",
		"images/gallery/26_09_2020/14.jpg",
		"images/gallery/26_09_2020/15.jpg",
		"images/gallery/26_09_2020/16.jpg",
		"images/gallery/26_09_2020/17.jpg",
		"images/gallery/26_09_2020/18.jpg",
		"images/gallery/26_09_2020/19.jpg",
		"images/gallery/26_09_2020/20.jpg",
		"images/gallery/26_09_2020/21.jpg",
		"images/gallery/26_09_2020/22.jpg",
		"images/gallery/26_09_2020/23.jpg",
		"images/gallery/26_09_2020/24.jpg",
		"images/gallery/26_09_2020/25.jpg",
		"images/gallery/26_09_2020/26.jpg",
		"images/gallery/26_09_2020/27.jpg",
		"images/gallery/26_09_2020/28.jpg",
		"images/gallery/26_09_2020/29.jpg",
		"images/gallery/26_09_2020/30.jpg",
		"images/gallery/26_09_2020/31.jpg",
		"images/gallery/26_09_2020/32.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-2020_gads_airsoft").click(function() {
	jQuery.fancybox(["images/gallery/2020_gads_airsoft/1.jpg",		
		"images/gallery/2020_gads_airsoft/2.jpg",
		"images/gallery/2020_gads_airsoft/3.jpg",
		"images/gallery/2020_gads_airsoft/4.jpg",
		"images/gallery/2020_gads_airsoft/5.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-cooking").click(function() {
	jQuery.fancybox(["images/gallery/cooking/1.jpg",		
		"images/gallery/cooking/2.jpg",
		"images/gallery/cooking/3.jpg",
		"images/gallery/cooking/4.jpg",
		"images/gallery/cooking/5.jpg",
		"images/gallery/cooking/6.jpg",
		"images/gallery/cooking/7.jpg",
		"images/gallery/cooking/8.jpg",
		"images/gallery/cooking/9.jpg",
		"images/gallery/cooking/10.jpg",
		"images/gallery/cooking/11.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-first_events").click(function() {
	jQuery.fancybox(["images/gallery/first_events/1.jpg",		
		"images/gallery/first_events/1.jpg",
		"images/gallery/first_events/2.jpg",
		"images/gallery/first_events/3.jpg",
		"images/gallery/first_events/4.jpg",
		"images/gallery/first_events/5.jpg",
		"images/gallery/first_events/6.jpg",
		"images/gallery/first_events/7.jpg",
		"images/gallery/first_events/8.jpg",
		"images/gallery/first_events/9.jpg",
		"images/gallery/first_events/10.jpg",
		"images/gallery/first_events/11.jpg",
		"images/gallery/first_events/12.jpg",
		"images/gallery/first_events/13.jpg",
		"images/gallery/first_events/14.jpg",
		"images/gallery/first_events/15.jpg",
		"images/gallery/first_events/16.jpg",
		"images/gallery/first_events/17.jpg",
		"images/gallery/first_events/18.jpg",
		"images/gallery/first_events/19.jpg",
		"images/gallery/first_events/20.jpg",
		"images/gallery/first_events/21.jpg",
		"images/gallery/first_events/22.jpg",
		"images/gallery/first_events/23.jpg",
		"images/gallery/first_events/24.jpg",
		"images/gallery/first_events/25.jpg",
		"images/gallery/first_events/26.jpg",
		"images/gallery/first_events/27.jpg",
		"images/gallery/first_events/28.jpg",
		"images/gallery/first_events/29.jpg",
		"images/gallery/first_events/30.jpg",
		"images/gallery/first_events/31.jpg",
		"images/gallery/first_events/32.jpg",
		"images/gallery/first_events/33.jpg",
		"images/gallery/first_events/34.jpg",
		"images/gallery/first_events/35.jpg",
		"images/gallery/first_events/36.jpg",
		"images/gallery/first_events/37.jpg",
		"images/gallery/first_events/38.jpg",
		"images/gallery/first_events/39.jpg",
		"images/gallery/first_events/40.jpg",
		"images/gallery/first_events/41.jpg",
		"images/gallery/first_events/42.jpg",
		"images/gallery/first_events/43.jpg",
		"images/gallery/first_events/44.jpg",
		"images/gallery/first_events/45.jpg",
		"images/gallery/first_events/46.jpg",
		"images/gallery/first_events/47.jpg",
		"images/gallery/first_events/48.jpg",
		"images/gallery/first_events/49.jpg",
		"images/gallery/first_events/50.jpg",
		"images/gallery/first_events/51.jpg",
		"images/gallery/first_events/52.jpg",
		"images/gallery/first_events/53.jpg",
		"images/gallery/first_events/54.jpg",
		"images/gallery/first_events/55.jpg",
		"images/gallery/first_events/56.jpg",
		"images/gallery/first_events/57.jpg",
		"images/gallery/first_events/58.jpg",
		"images/gallery/first_events/59.jpg",
		"images/gallery/first_events/60.jpg",
		"images/gallery/first_events/61.jpg",
		"images/gallery/first_events/62.jpg",
		"images/gallery/first_events/63.jpg",
		"images/gallery/first_events/64.jpg",
		"images/gallery/first_events/65.jpg",
		"images/gallery/first_events/66.jpg",
		"images/gallery/first_events/67.jpg",
		"images/gallery/first_events/68.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-Ghetto_Football_01_06_1_part").click(function() {
	jQuery.fancybox(["images/gallery/Ghetto_Football_01_06_1_part/1.jpg",		
		"images/gallery/Ghetto_Football_01_06_1_part/1.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/2.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/3.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/4.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/5.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/6.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/7.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/8.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/9.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/10.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/11.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/12.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/13.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/14.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/15.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/16.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/17.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/18.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/19.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/20.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/21.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/22.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/23.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/24.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/25.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/26.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/27.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/28.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/29.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/30.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/31.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/32.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/33.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/34.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/35.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/36.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/37.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/38.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/39.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/40.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/41.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/42.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/43.jpg",
		"images/gallery/Ghetto_Football_01_06_1_part/44.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});



	jQuery(".fancybox-hike").click(function() {
	jQuery.fancybox(["images/gallery/hike/1.jpg",		
		"images/gallery/hike/2.jpg",
		"images/gallery/hike/3.jpg",
		"images/gallery/hike/4.jpg",
		"images/gallery/hike/5.jpg",
		"images/gallery/hike/6.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-Izskrien_rigu_Ebelmuizas_parks").click(function() {
	jQuery.fancybox(["images/events/Izskrien_rigu_Ebelmuizas_parks/1.jpg",		
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/2.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/3.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/4.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/5.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/6.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/7.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/8.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/9.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/10.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/11.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/12.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/13.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/14.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/15.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/16.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/17.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/18.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/19.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/20.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/21.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/22.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/23.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/24.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/25.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/26.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/27.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/28.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/29.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/30.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/31.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/32.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/33.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/34.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/35.jpg",
		"images/gallery/Izskrien_rigu_Ebelmuizas_parks/36.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-Izskrien_Rigu_viesturdarzs_2022").click(function() {
	jQuery.fancybox(["images/gallery/Izskrien_Rigu_viesturdarzs_2022/1.jpg",		
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/2.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/3.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/4.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/5.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/6.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/7.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/8.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/9.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/10.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/11.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/12.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/13.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/14.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/15.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/16.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/17.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/18.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/19.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/20.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/21.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/22.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/23.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/24.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/25.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/26.jpg",
		"images/gallery/Izskrien_Rigu_viesturdarzs_2022/27.jpg"], 
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-Jump_Space").click(function() {
	jQuery.fancybox(["images/gallery/Jump_Space/1.jpg",		
		"images/gallery/Jump_Space/2.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-Orientation_2019").click(function() {
	jQuery.fancybox(["images/gallery/Orientation_2019/1.jpg",		
		"images/gallery/Orientation_2019/2.jpg",
		"images/gallery/Orientation_2019/3.jpg",
		"images/gallery/Orientation_2019/4.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-Rimi_Maratons_2022").click(function() {
	jQuery.fancybox(["images/gallery/Rimi_Maratons_2022/1.jpg",		
		"images/gallery/Rimi_Maratons_2022/2.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-Sporta_diena_Ulbroka").click(function() {
	jQuery.fancybox(["images/gallery/Sporta_diena_Ulbroka/1.jpg",		
		"images/gallery/Sporta_diena_Ulbroka/2.jpg",
		"images/gallery/Sporta_diena_Ulbroka/3.jpg",
		"images/gallery/Sporta_diena_Ulbroka/4.jpg",
		"images/gallery/Sporta_diena_Ulbroka/5.jpg",
		"images/gallery/Sporta_diena_Ulbroka/6.jpg",
		"images/gallery/Sporta_diena_Ulbroka/7.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-Sporta_orientesana_11_06_2022").click(function() {
	jQuery.fancybox(["images/gallery/Sporta_orientesana_11_06_2022/1.jpg",		
		"images/gallery/Sporta_orientesana_11_06_2022/2.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/3.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/4.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/5.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/6.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/7.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/8.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/9.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/10.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/11.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/12.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/13.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/14.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/15.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/16.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/17.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/18.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/19.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/20.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/21.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/22.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/23.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/24.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/25.jpg",
		"images/gallery/Sporta_orientesana_11_06_2022/26.jpg"], 
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-sports_days").click(function() {
	jQuery.fancybox(["images/events/sports_days/1.jpg",		
		"images/gallery/sports_days/2.jpg",
		"images/gallery/sports_days/3.jpg",
		"images/gallery/sports_days/4.jpg",
		"images/gallery/sports_days/5.jpg",
		"images/gallery/sports_days/6.jpg",
		"images/gallery/sports_days/7.jpg",
		"images/gallery/sports_days/8.jpg",
		"images/gallery/sports_days/9.jpg",
		"images/gallery/sports_days/10.jpg",
		"images/gallery/sports_days/11.jpg",
		"images/gallery/sports_days/12.jpg",
		"images/gallery/sports_days/13.jpg",
		"images/gallery/sports_days/14.jpg",
		"images/gallery/sports_days/15.jpg",
		"images/gallery/sports_days/16.jpg",
		"images/gallery/sports_days/17.jpg",
		"images/gallery/sports_days/18.jpg",
		"images/gallery/sports_days/19.jpg",
		"images/gallery/sports_days/20.jpg",
		"images/gallery/sports_days/21.jpg",
		"images/gallery/sports_days/22.jpg",
		"images/gallery/sports_days/23.jpg",
		"images/gallery/sports_days/24.jpg",
		"images/gallery/sports_days/25.jpg",
		"images/gallery/sports_days/26.jpg",
		"images/gallery/sports_days/27.jpg",
		"images/gallery/sports_days/28.jpg",
		"images/gallery/sports_days/29.jpg",
		"images/gallery/sports_days/30.jpg",
		"images/gallery/sports_days/31.jpg",
		"images/gallery/sports_days/32.jpg",
		"images/gallery/sports_days/33.jpg",
		"images/gallery/sports_days/34.jpg",
		"images/gallery/sports_days/35.jpg",
		"images/gallery/sports_days/36.jpg",
		"images/gallery/sports_days/37.jpg",
		"images/gallery/sports_days/38.jpg",
		"images/gallery/sports_days/39.jpg",
		"images/gallery/sports_days/40.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-Stirnu_buks_16_04_2022").click(function() {
	jQuery.fancybox(["images/gallery/Stirnu_buks_16_04_2022/1.jpg",		
		"images/gallery/Stirnu_buks_16_04_2022/2.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/3.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/4.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/5.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/6.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/7.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/8.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/9.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/10.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/11.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/12.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/13.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/14.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/15.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/16.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/17.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/18.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/19.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/20.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/21.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/22.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/23.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/24.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/25.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/26.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/27.jpg",
		"images/gallery/Stirnu_buks_16_04_2022/28.jpg"], 
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-Stirnu_buks_18_06_2022").click(function() {
	jQuery.fancybox(["images/gallery/Stirnu_buks_18_06_2022/1.jpg",		
		"images/gallery/Stirnu_buks_18_06_2022/2.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/3.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/4.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/5.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/6.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/7.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/8.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/9.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/10.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/11.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/12.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/13.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/14.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/15.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/16.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/17.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/18.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/19.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/20.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/21.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/22.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/23.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/24.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/25.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/26.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/27.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/28.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/29.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/30.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/31.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/32.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/33.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/34.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/35.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/36.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/37.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/38.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/39.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/40.jpg",
		"images/gallery/Stirnu_buks_18_06_2022/41.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-Stirnu_buks_21_05_2022").click(function() {
	jQuery.fancybox(["images/gallery/Stirnu_buks_21_05_2022/1.jpg",		
		"images/gallery/Stirnu_buks_21_05_2022/2.jpg",
		"images/gallery/Stirnu_buks_21_05_2022/3.jpg",
		"images/gallery/Stirnu_buks_21_05_2022/4.jpg",
		"images/gallery/Stirnu_buks_21_05_2022/5.jpg",
		"images/gallery/Stirnu_buks_21_05_2022/6.jpg",
		"images/gallery/Stirnu_buks_21_05_2022/7.jpg",
		"images/gallery/Stirnu_buks_21_05_2022/8.jpg",
		"images/gallery/Stirnu_buks_21_05_2022/9.jpg",
		"images/gallery/Stirnu_buks_21_05_2022/10.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-trainings").click(function() {
	jQuery.fancybox(["images/gallery/trainings/1.jpg",		
		"images/gallery/trainings/2.jpg",
		"images/gallery/trainings/3.jpg",
		"images/gallery/trainings/4.jpg",
		"images/gallery/trainings/5.jpg",
		"images/gallery/trainings/6.jpg",
		"images/gallery/trainings/7.jpg",
		"images/gallery/trainings/8.jpg",
		"images/gallery/trainings/9.jpg",
		"images/gallery/trainings/10.jpg",
		"images/gallery/trainings/11.jpg",
		"images/gallery/trainings/12.jpg",
		"images/gallery/trainings/13.jpg",
		"images/gallery/trainings/14.jpg",
		"images/gallery/trainings/15.jpg",
		"images/gallery/trainings/16.jpg",
		"images/gallery/trainings/17.jpg",
		"images/gallery/trainings/18.jpg",
		"images/gallery/trainings/19.jpg",
		"images/gallery/trainings/20.jpg",
		"images/gallery/trainings/21.jpg",
		"images/gallery/trainings/22.jpg",
		"images/gallery/trainings/23.jpg",
		"images/gallery/trainings/24.jpg",
		"images/gallery/trainings/25.jpg",
		"images/gallery/trainings/26.jpg",
		"images/gallery/trainings/27.jpg"], 
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});

	jQuery(".fancybox-VR_Room").click(function() {
	jQuery.fancybox(["images/gallery/VR_Room/1.jpg",		
		"images/gallery/VR_Room/2.jpg",
		"images/gallery/VR_Room/3.jpg",
		"images/gallery/VR_Room/4.jpg",
		"images/gallery/VR_Room/5.jpg"],
	{"padding"		: 0,
	"transitionIn"		: "none",
	"transitionOut"		: "none",
	"type"              : "image",
	"changeFade"        : 0,
	helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	});


	jQuery(".fancybox-gmap").fancybox({
					fitToView	: false,
					width		: '60%',
					height		: '70%',
					autoSize	: false,
					openEffect	: 'elastic',
					closeEffect	: 'none',
					helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	jQuery(".fancybox-inline").fancybox({
					width		: 600,
					height		: 400,
					autoSize	: false,
					openEffect	: "elastic",
					closeEffect	: "none",
					autoDimensions:false,
					helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
		});
	jQuery(".fancybox-flash").fancybox({
	    padding           : 0,
        autoScale     	: false,
        transitionIn	: 'none',
		transitionOut		: 'none',
		width	: 680,
		height		: 495,
		helpers : { overlay : { css : {  'background' : 'rgba(0, 0,0, 0.8)'  }   } }
	});
	jQuery('#map-1').gMap({scrollwheel:true,  zoom:  14,markers: [{ latitude: 42.3676, longitude: -71.0705 }]  });
	
	//Navigation
	
	jQuery('.level-1 li').append('<span>*</span>');

	jQuery(".level-1 li:last-child").addClass("last");

	//Twitter
	JQTWEET.loadTweets();
	
	
	//Single Portfolio Slider
	jQuery(".rslides").responsiveSlides({
        auto: false,
        nav: true,
        speed: 500,
        namespace: "callbacks"
     });
	  
	//Contact Map
	jQuery('#map').gMap({
			 zoom: 14,
			 scrollwheel:false,
	markers: [{ latitude: 42.3605722, longitude: -71.0651046 }]  
	});	
	
	// Back to Top
	jQuery("#back-top").hide();
	
	// fade in #back-top
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 100) {
			jQuery('#back-top').fadeIn();
		} else {
			jQuery('#back-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	jQuery('#back-top a').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	
	
	
	//Regular navigation
var lastId,
    topMenu = jQuery(".slide-nav"),
    topMenuHeight = 0,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
     	var hrf = jQuery(this).attr("href");
     	if(hrf.charAt(0)=="#"){
     	var item = jQuery(hrf);
      if (item.length) { return item; }
      }
   	});
	
	
	//Regular navigation
var lastId,
    topMenu = jQuery(".slide-nav"),
    topMenuHeight = 0,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
     	var hrf = jQuery(this).attr("href");
     	if(hrf.charAt(0)=="#"){
     	var item = jQuery(hrf);
      if (item.length) { return item; }
      }
   	});
	

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
 	 var href = jQuery(this).attr("href"),
      	offsetTop = href === "#" ? 0 : jQuery(href).offset().top-topMenuHeight+1;
  	jQuery('html, body').stop().animate({ 
      	scrollTop: offsetTop
  	}, '');
  	e.preventDefault();
	});

	// Bind to scroll
	jQuery(window).scroll(function(){
   	// Get container scroll position
   	var fromTop = jQuery(this).scrollTop()+topMenuHeight;
   
   	// Get id of current scroll item
   	var cur = scrollItems.map(function(){
     	if (jQuery(this).offset().top < fromTop)
       	return this;
   	});
   	// Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("selected")
         .end().filter("[href=#"+id+"]").parent().addClass("selected");
   	}  
	                 
});
	
		
	
jQuery(window).load(function(){
		
	//Full screen slideshows or images - backstretch
	jQuery(".home-section .home-full-screen").backstretch([
	
		"http://placehold.it/1200x800",
		"http://placehold.it/1200x800/ffffff/111111",
		"http://placehold.it/1200x800",
		"http://placehold.it/1200x800/ffffff/111111"
		
	], {duration: 3000, fade: 750});
	
	jQuery(".twitter-section").backstretch([
		
		"http://placehold.it/800x500",
		"http://placehold.it/800x500/ffffff/111111",
		"http://placehold.it/800x500",
		"http://placehold.it/800x500/ffffff/111111"

	], {duration: 3000, fade: 750});


});

 
	// TinyNav.js 1
      jQuery('#mainnav').tinyNav({
        active: 'selected',
		header: 'Menu'
      });
});





// revslider code
var tpj=jQuery;
				tpj.noConflict();

				tpj(window).load(function() {

				if (tpj.fn.cssOriginal!=undefined)
					tpj.fn.css = tpj.fn.cssOriginal;
					
					
					
				
				
					
		//	if (typeof(revolution) == 'function'){
			
			if (jQuery(".fullscreenbanner").length){
					var api = tpj('.fullscreenbanner').revolution(
						{
							delay:9000,
							startwidth:1200,
							startheight:660,

							onHoverStop:"off",						// Stop Banner Timet at Hover on Slide on/off

							thumbWidth:100,							// Thumb With and Height and Amount (only if navigation Tyope set to thumb !)
							thumbHeight:50,
							thumbAmount:3,

							hideThumbs:0,
							navigationType:"none",				// bullet, thumb, none
							navigationArrows:"solo",				// nexttobullets, solo (old name verticalcentered), none

							navigationStyle:"round",				// round,square,navbar,round-old,square-old,navbar-old, or any from the list in the docu (choose between 50+ different item), custom


							navigationHAlign:"center",				// Vertical Align top,center,bottom
							navigationVAlign:"bottom",					// Horizontal Align left,center,right
							navigationHOffset:30,
							navigationVOffset:-40,

							soloArrowLeftHalign:"left",
							soloArrowLeftValign:"center",
							soloArrowLeftHOffset:20,
							soloArrowLeftVOffset:0,

							soloArrowRightHalign:"right",
							soloArrowRightValign:"center",
							soloArrowRightHOffset:20,
							soloArrowRightVOffset:0,

							touchenabled:"on",						// Enable Swipe Function : on/off


							stopAtSlide:-1,							// Stop Timer if Slide "x" has been Reached. If stopAfterLoops set to 0, then it stops already in the first Loop at slide X which defined. -1 means do not stop at any slide. stopAfterLoops has no sinn in this case.
							stopAfterLoops:-1,						// Stop Timer if All slides has been played "x" times. IT will stop at THe slide which is defined via stopAtSlide:x, if set to -1 slide never stop automatic

							hideCaptionAtLimit:0,					// It Defines if a caption should be shown under a Screen Resolution ( Basod on The Width of Browser)
							hideAllCaptionAtLilmit:0,				// Hide all The Captions if Width of Browser is less then this value
							hideSliderAtLimit:0,					// Hide the whole slider, and stop also functions if Width of Browser is less than this value


							
							fullWidth:"on",							// Same time only Enable FullScreen of FullWidth !!
							fullScreen:"on",						// Same time only Enable FullScreen of FullWidth !!

							shadow:0,
							delay:15000,
							startwidth:1170,
							startheight:500,
							hideThumbs:10,
							fullWidth:"off",
							fullScreen:"on",
							fullScreenOffsetContainer: ""								//0 = no Shadow, 1,2,3 = 3 Different Art of Shadows -  (No Shadow in Fullwidth Version !)

						});


						// TO HIDE THE ARROWS SEPERATLY FROM THE BULLETS, SOME TRICK HERE:
						// YOU CAN REMOVE IT FROM HERE TILL THE END OF THIS SECTION IF YOU DONT NEED THIS !
							api.bind("revolution.slide.onloaded",function (e) {


								jQuery('.tparrows').each(function() {
									var arrows=jQuery(this);

									var timer = setInterval(function() {

										if (arrows.css('opacity') == 1 && !jQuery('.tp-simpleresponsive').hasClass("mouseisover"))
										  arrows.fadeOut(300);
									},3000);
								})

								jQuery('.tp-simpleresponsive, .tparrows').hover(function() {
									jQuery('.tp-simpleresponsive').addClass("mouseisover");
									jQuery('body').find('.tparrows').each(function() {
										jQuery(this).fadeIn(300);
									});
								}, function() {
									if (!jQuery(this).hasClass("tparrows"))
										jQuery('.tp-simpleresponsive').removeClass("mouseisover");
								})
							});
						// END OF THE SECTION, HIDE MY ARROWS SEPERATLY FROM THE BULLETS
}
			});
			
			
jQuery(window).load(function() {

	//Detect if mobile (touch) because parallax doesn't work on mobile, use backstretch instead
	//Display select nav on touch devices
	if ( Modernizr.touch ) {

		jQuery("#testimonial-section").backstretch("http://placehold.it/1100x800");
		jQuery("#instagram-section").backstretch("http://placehold.it/1100x800");
		jQuery("#contact-section").backstretch("http://placehold.it/1100x800");
		jQuery("#blog-top-section").backstretch("http://placehold.it/1100x800");
		jQuery("#blog-bot-section").backstretch("http://placehold.it/1100x800");
		jQuery("#port-top-section").backstretch("http://placehold.it/1100x800");
		jQuery("#port-bot-section").backstretch("http://placehold.it/1100x800");
		jQuery("#facebook-section").backstretch("http://placehold.it/1100x800");
		jQuery("#pricing-section").backstretch("http://placehold.it/1100x800");
		jQuery("#footer-social-section").backstretch("http://placehold.it/1100x800");
		
		jQuery('.demo-parallax-section-home1').backstretch("http://placehold.it/1100x800");
		jQuery('.demo-parallax-section-home2').backstretch("http://placehold.it/1100x800");
		jQuery('.demo-parallax-section-home3').backstretch("http://placehold.it/1100x800");
		jQuery('.demo-parallax-section-home4').backstretch("http://placehold.it/1100x800");
		jQuery('.demo-parallax-section-home5').backstretch("http://placehold.it/1100x800");
		
		jQuery(".demo-parallax-section-1").backstretch("http://placehold.it/1100x800");
		jQuery(".demo-parallax-section-2").backstretch("http://placehold.it/1100x800");
		jQuery(".demo-parallax-section-3").backstretch("http://placehold.it/1100x800");
		jQuery(".demo-parallax-section-4").backstretch("http://placehold.it/1100x800");
		
		jQuery(".demo-parallax-section-5").backstretch("http://placehold.it/1100x800");
		jQuery(".demo-parallax-section-6").backstretch("http://placehold.it/1100x800");
		jQuery(".demo-parallax-section-7").backstretch("http://placehold.it/1100x800");
		jQuery(".demo-parallax-section-8").backstretch("http://placehold.it/1100x800");
		jQuery(".demo-parallax-section-9").backstretch("http://placehold.it/1100x800");
		jQuery(".demo-parallax-section-10").backstretch("http://placehold.it/1100x800");
		
		
		jQuery("ul#mainnav").addClass("hideTiny");
		jQuery("#tinynav1").addClass("showTiny");
	
	//If not mobile use parallax
	} else {
   		jQuery('#testimonial-section').parallax("50%", .2);
		jQuery('#instagram-section').parallax("50%", 0.2);
		jQuery('#contact-section').parallax("50%", 0.6);
		jQuery('#blog-top-section').parallax("10%", 0.3);
		jQuery('#blog-bot-section').parallax("10%", 0.3); 
		jQuery('#port-top-section').parallax("10%", 0.3);
		jQuery('#port-bot-section').parallax("10%", 0.3);
		jQuery('#facebook-section').parallax("50%", 0.3);
		jQuery('#pricing-section').parallax("50%", 0.4);
		jQuery('#footer-social-section').parallax("10%", 0.1);
		
		jQuery('.demo-parallax-section-home1').parallax("10%", 0.3);
		jQuery('.demo-parallax-section-home2').parallax("10%", 0.3);
		jQuery('.demo-parallax-section-home3').parallax("10%", 0.3);
		jQuery('.demo-parallax-section-home4').parallax("10%", 0.3);
		jQuery('.demo-parallax-section-home5').parallax("10%", 0.3);
	
		jQuery('.demo-parallax-section-1').parallax("10%", 0.3);
		jQuery('.demo-parallax-section-2').parallax("10%", 0.3);
		jQuery('.demo-parallax-section-3').parallax("10%", 0.3);
		jQuery('.demo-parallax-section-4').parallax("10%", 0.3);	
	
		jQuery('.demo-parallax-section-5').parallax("10%", 0.2);
		jQuery('.demo-parallax-section-6').parallax("10%", 0.2);
		jQuery('.demo-parallax-section-7').parallax("10%", 0.2);
		jQuery('.demo-parallax-section-8').parallax("10%", 0.2);
		jQuery('.demo-parallax-section-9').parallax("10%", 0.2);
		jQuery('.demo-parallax-section-10').parallax("10%", 0.2);
	}
});



					
