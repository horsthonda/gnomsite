var tl = new TimelineMax({ ease: Elastic.easeOut});

$('.menu').on('click', function(){
	$('.menu-flyout').addClass('open');
	tl.staggerFrom(".menu-flyout ul li", .2, {x: 15, autoAlpha: 0, ease:Linear.easeNone}, .1);
});

$('.exit').on('click', function(){
	$('.menu-flyout').removeClass('open');
});