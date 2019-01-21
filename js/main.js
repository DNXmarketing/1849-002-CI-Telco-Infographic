/*global $, document, window */
$("document").ready(function() {
	startAd();
	
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});

});


startAd = function() {

	//animation 1
	var box1, box2, box3, box4, netflix, whatsapp, play, prime;

	box1 = document.getElementById("box1");
	box2 = document.getElementById("box2");
	box3 = document.getElementById("box3");
	box4 = document.getElementById("box4");
	netflix = document.getElementById("netflix");
	whatsapp = document.getElementById("whatsapp");
	play = document.getElementById("play");
	prime = document.getElementById("prime");

	TweenMax.set([box1,box2,box3,box4,netflix,prime,play,whatsapp],{transformOrigin: "50% 50%"});

	var animation1 = new TimelineMax({yoyo:true, repeat:-1, repeatDelay:1});
	
		animation1.from(box1, 1, {x:-60, y:-40, rotation:-360, scale:0, opacity:0,ease: Back.easeOut.config(1.7)})
		.from(box2, 1, {x:-140, y:-10, rotation:-360, scale:0, opacity:0,ease: Back.easeOut.config(1.7)},"-=0.8")
		.from(netflix, 1, {x:-60, y:+25, rotation:-360, scale:0, opacity:0,ease: Back.easeOut.config(1.7)},"-=0.8")
		.from(box3, 1, {x:-170, y:-30, rotation:-360, scale:0, opacity:0,ease: Back.easeOut.config(1.7)},"-=0.8")
		.from(prime, 1, {x:-100, y:-55, rotation:-360, scale:0, opacity:0,ease: Back.easeOut.config(1.7)},"-=0.8")
		.from(box4, 1, {x:-170, y:-55, rotation:-360, scale:0, opacity:0,ease: Back.easeOut.config(1.7)},"-=0.8")
		.from(play, 1, {x:-180, y:+10, rotation:-360, scale:0, opacity:0,ease: Back.easeOut.config(1.7)},"-=0.8")
		.from(whatsapp, 1, {x:-45, y:-70, rotation:-360, scale:0, opacity:0,ease: Back.easeOut.config(1.7)},"-=0.8");
	
	
	//animation 2
	var an2watch, an2mobile, an2car, an2house, an2tablet, an2laptop;

	an2watch = document.getElementById("an2watch");
	an2mobile = document.getElementById("an2mobile");
	an2car = document.getElementById("an2car");
	an2house = document.getElementById("an2house");
	an2tablet = document.getElementById("an2tablet");
	an2laptop = document.getElementById("an2laptop");
	an2smallbar = document.getElementsByClassName("an2smallbar");
	an2largebar = document.getElementsByClassName("an2largebar");
	
	
	var animation2 = new TimelineMax({ repeat:-1});
		animation2
		.from(an2mobile, 1, {y:"+=300", ease: Power2.easeOut},"+=3")
		.to(an2watch, 0.7, {y:"-=300"},"-=0.7")
		.from(an2car, 1, {x:"-=300", ease: Power2.easeOut},"+=3")
		.to(an2mobile, 0.7, {x:"+=300"},"-=0.7")
		.from(an2house, 1, {x:"+=300", ease: Power2.easeOut},"+=3")
		.to(an2car, 0.7, {x:"-=300"},"-=0.7")
		.from(an2tablet, 1, {y:"-=300", ease: Power2.easeOut},"+=3")
		.to(an2house, 0.7, {y:"+=300"},"-=0.7")
		.from(an2laptop, 1, {y:"+=300", ease: Power2.easeOut},"+=3")
		.to(an2tablet, 0.7, {y:"-=300"},"-=0.7")
		.to(an2watch, 1, {y:"+=300", ease: Power2.easeOut},"+=3")
		.to(an2laptop, 0.7, {y:"+=300"},"-=0.7")

	//animation 2.1
		var an2barflash = new TimelineMax({ repeat:-1});
		an2barflash
		.from(an2smallbar, 0.5, {opacity:0})	
		.from(an2largebar, 0.5, {opacity:0},"-=0.2")
		.to(an2smallbar, 0.5, {opacity:0})
		.to(an2largebar, 0.5, {opacity:0},"-=0.2")
	
	

	//animation 3
	var an3graphline, an3world ;

	an3graphline = document.getElementById("an3graphline");
	an3world = document.getElementById("an3world");
	counter = document.getElementsByClassName("counter");



	var animation3 = new TimelineMax({repeat:-1});
	
		animation3
	//	.to(counter, 1, {opacity:1})
		.call(countup)
		.fromTo(an3graphline, 4, {drawSVG:"0% 1%"}, {drawSVG:"0% 40%"})
		.from(an3world, 4, {x:"-=20"},"-=4")
		.to(counter, 1, {opacity:0, delay:3},"+=2")
		.fromTo(an3graphline, 1, {drawSVG:"0% 40%"}, {drawSVG:"0% 1%"},"-=1")
		.from(an3world, 1, {x:"+=20"},"-=1")
		.call(reset)
	
	
		function reset(){
		
		$('.counter').text('0')
		
		}
	
	
		function countup(){
	
		$('.counter').each(function() {
	  var $this = $(this),
		  countTo = $this.attr('data-count');
		
	  $({ countNum: $this.text()}).animate({
		countNum: countTo
	  },
	  {
		duration: 3500,
		easing:'linear',
		step: function() {
		  $this.text(Math.floor(this.countNum)+ "%");
		},
		complete: function() {
		  $this.text(this.countNum + "%");
	//      alert('finished');
		}
	  });  
	});
		
	}
	
	//animation 4
	var an4line1, an4line2, an4line3, an4line4;
	var an4person1, an4person2, an4person3, an4person4;

	an4line1 = document.getElementById("an4line1");
	an4line2 = document.getElementById("an4line2");
	an4line3 = document.getElementById("an4line3");
	an4line4 = document.getElementById("an4line4");
	an4person1 = document.getElementsByClassName("an4person1");
	an4person2 = document.getElementsByClassName("an4person2");
	an4person3 = document.getElementsByClassName("an4person3");
	an4person4 = document.getElementsByClassName("an4person4");
	

	TweenMax.set(an4line1,{y:"+=5",x:"+=2"});	
	TweenMax.set(an4line2,{y:"+=36", x:"-=213"});
	TweenMax.set(an4line3,{y:"+=66", x:"+=2"});
	TweenMax.set(an4line4,{y:"+=96", x:"-=213"});
	TweenMax.set(an4line5,{y:"+=126", x:"+=2"});


	
	var animation4 = new TimelineMax({repeat:-1, yoyo:true});
	
		animation4
		.to([an4line1, an4line3, an4line5], 10, {x:"-=128", ease: Power2.easeInOut})
		.to([an4line2, an4line4], 10, {x:"+=128", ease: Power2.easeInOut},"-=10")
	
		//animation 4.1
		var animation41 = new TimelineMax({repeat:-1, yoyo:true});
	
		animation41
		.to(an4person4, 1, {opacity:0.3, })
		.to(an4person4, 0.5, {opacity:1})
		.to(an4person1, 0.5, {opacity:0.3})
		.to(an4person1, 0.5, {opacity:1})
		.to(an4person2, 1, {opacity:0.3})
		.to(an4person2, 0.7, {opacity:1})
	
		
	
	
	
		//animation 5
	var an5leftsignal1, an5leftsignal2, an5rightsignal1, an5rightsignal2;

	an5leftsignal1 = document.getElementById("an5leftsignal1");
	an5leftsignal2 = document.getElementById("an5leftsignal2");
	an5rightsignal1 = document.getElementById("an5rightsignal1");
	an5rightsignal2 = document.getElementById("an5rightsignal2");

	var animation5 = new TimelineMax({repeat:-1});
	
		animation5
		.from([an5leftsignal1,an5rightsignal1], 0.7, {opacity:0})
	
		.from([an5leftsignal2,an5rightsignal2], 0.7, {opacity:0},"-=0.5")
		.to([an5leftsignal1, an5rightsignal1], 0.7, {opacity:0},"-=0.2")
		.to([an5leftsignal2, an5rightsignal2 ], 0.7, {opacity:0},"-=0.3")
	
	
	
	
	
	//animation 6
	var an6twirler, an6item1, an6item2, an6item3;
	var an6chevron1, an6chevron2, an6chevron3, an6shine;
	var an6shine, an6bulbleft, an6bulbright;

	an6twirler = document.getElementById("an6twirler");
	an6item1 = document.getElementById("an6item1");
	an6item2 = document.getElementById("an6item2");
	an6item3 = document.getElementById("an6item3");
	an6chevron1 = document.getElementById("an6chevron1");
	an6chevron2 = document.getElementById("an6chevron2");
	an6chevron3 = document.getElementById("an6chevron3");
	an6shine = document.getElementById("an6shine");
	an6bulbleft = document.getElementById("an6bulbleft");
	an6bulbright = document.getElementById("an6bulbright");

	TweenMax.set([an6twirler, an6item1, an6item2, an6item3],{transformOrigin: "50% 50%"});

	//animation 6.1
	var animation6twirler = new TimelineMax({repeat:-1});
	
		animation6twirler
		.to(an6twirler, 15, {rotation:360, ease:Power0.easeNone})
	
	//animation 6.2
	var animation6remainupright = new TimelineMax({repeat:-1});
	
		animation6remainupright
		.to([an6item1, an6item2, an6item3], 15, {rotation:-360, ease:Power0.easeNone})


	TweenMax.set(an6shine,{opacity:0});
	
	//animation 6.3
	var animation6chevron = new TimelineMax({repeat:-1});
	
		animation6chevron
		.from(an6chevron3, 1, {opacity:0})
		.from(an6chevron2, 1, {opacity:0},"-=0.7")
		.from(an6chevron1, 1, {opacity:0},"-=0.7")
		.to(an6shine, 0.2, {opacity:1},"-=0.8")
		.to(an6bulbleft, 0.2, {fill:"#F9B258"},"-=0.9")
		.to(an6bulbright, 0.2, {fill:"#F29111"},"-=0.9")
		.to([an6chevron1, an6chevron2, an6chevron3], 0.5, {opacity:0})
		.to(an6bulbleft, 0.5, {fill:"#B9BBBD"},"-=0.5")
		.to(an6bulbright, 0.5, {fill:"#A6A9AB"},"-=0.5")
		.to(an6shine, 0.2, {opacity:0},"-=0.5")


	//animation 8
	var an8line1, an8line2, an8line3, an8logcktop, an8clickline1, an8clickline2, an8clickline3, an8tick, an8house, an8light1, an8light2;


	an8line1 = document.getElementById("an8line1");
	an8line2 = document.getElementById("an8line2");
	an8line3 = document.getElementById("an8line3");
	an8logcktop = document.getElementById("an8logcktop");
	an8clickline1 = document.getElementById("an8clickline1");
	an8clickline2 = document.getElementById("an8clickline2");
	an8clickline3 = document.getElementById("an8clickline3");
	an8tick = document.getElementById("an8tick");
	an8house = document.getElementById("an8house");
	an8light1 = document.getElementsByClassName("an8light1");
	an8light2 = document.getElementsByClassName("an8light2");
	
	TweenMax.set([an8line2, an8line3],{opacity:0});
	TweenMax.set([an8tick, an8house],{transformOrigin: "50% 50%"});
	TweenMax.set(an8tick,{rotationY:90});


	var animation8 = new TimelineMax({repeat:-1, repeatDelay:1});
	
		animation8
		.fromTo(an8line1, 1, {drawSVG:"0% 3%"}, {drawSVG:"97% 100%", ease:Power0.easeNone})
		.fromTo(an8line1, 0.05, {drawSVG:"97% 100%"}, {drawSVG:"100% 100%", ease:Power0.easeNone})
		.from(an8logcktop, 0.5, {y:-9, ease: Back.easeOut.config(3)})
		.fromTo([an8clickline1, an8clickline2, an8clickline3], 0.02, {drawSVG:"100% 100%"}, {drawSVG:"100% 0%", ease:Power0.easeNone},"-=0.4")
		.to([an8clickline1, an8clickline2, an8clickline3], 0.01, {opacity:0},"-=0.09")
		.to(an8line2, 0.01, {opacity:1})
		.fromTo(an8line2, 0.05, {drawSVG:"0% 0%"}, {drawSVG:"0% 1.5%", ease:Power0.easeNone},"-=1.5")
		.fromTo(an8line2, 1.5, {drawSVG:"0% 1.5%"}, {drawSVG:"98.5% 100%", ease:Power0.easeNone})
		.fromTo(an8line2, 0.05, {drawSVG:"98.5% 100%"}, {drawSVG:"100% 100%", ease:Power0.easeNone})
	  .to(an8house, 0.8, {rotationY:270, ease:Power0.easeNone})
		.to(an8tick, 0.3, {rotationY:0,ease:Power0.easeNone})
		
		.to(an8line3, 0.01, {opacity:1})
		.fromTo(an8line3, 1, {drawSVG:"97% 100%"}, {drawSVG:"0% 3%", ease:Power0.easeNone})
		.to(an8line3, 0.01, {opacity:0})
		
		.to(an8house, 0.01, {opacity:0},"-=0.5")
		.to(an8house, 0.01, {rotationY:0})
		.to(an8logcktop, 0.5, {y:"-=9", ease:Power0.easeNone},"+=2")
		.to(an8house, 0.5, {opacity:1},"-=0.5")
	
		TweenMax.from(an8light1, 1, {opacity: 0, ease:RoughEase.ease.config({strength: 2, points: 200, randomize: true, taper: "none", clamp: true}), repeat: -1, yoyo: true });
	
		TweenMax.to(an8light2, 1, {opacity: 0, ease:RoughEase.ease.config({strength: 2, points: 200, randomize: false, taper: "none", clamp: true}),delay:0.5, repeat: -1, yoyo: true });


	
	
	
	
	//animation 7
	var an7dial;


	an7dial = document.getElementById("an7dial");

	TweenMax.set([an7dial],{transformOrigin: "50% 50%"});


	var animation7dial = new TimelineMax({repeat:-1, repeatDelay:2});
	
		animation7dial
		.to(an7dial, 1, {rotation:"+=0", ease: Back.easeOut.config(2), onComplete:function(){
					animation7lines1.timeScale( 2 );
									animation7lines2.timeScale( 2 );
									animation7lines3.timeScale( 2 );
				}})
	
		.to(an7dial, 4, {rotation:"+=130", ease: Back.easeOut.config(2), onComplete:function(){
				   animation7lines1.timeScale( 1 );
									animation7lines2.timeScale( 1 );
									animation7lines3.timeScale( 1 );
				}})
		.to(an7dial, 3, {rotation:"-=30", ease: Back.easeInOut.config(2),
										onComplete:function(){
					animation7lines1.timeScale( 3 );
									animation7lines2.timeScale( 3 );
									animation7lines3.timeScale( 3 );
				}})
		.to(an7dial, 3, {rotation:"+=90", ease: Back.easeInOut.config(2),
										onComplete:function(){
					animation7lines1.timeScale( 2 );
									animation7lines2.timeScale( 2 );
									animation7lines3.timeScale( 2 );
				}})
		.to(an7dial, 3, {rotation:"-=40", ease: Back.easeInOut.config(2),
										onComplete:function(){
					 animation7lines1.timeScale( 0.5 );
									animation7lines2.timeScale( 0.5 );
									animation7lines3.timeScale( 0.5 );
				}})
		.to(an7dial, 2, {rotation:"-=150", ease: Power2.easeInOut,
										onComplete:function(){
					 animation7lines1.timeScale( 0.1 );
									animation7lines2.timeScale( 0.1 );
									animation7lines3.timeScale( 0.1 );
				}})
	
	
		var animation7lines1 = new TimelineMax({repeat:-1, repeatDelay:2});
	
		animation7lines1
		.fromTo(an8linecenter, 1, {drawSVG:"0% 17%"}, {drawSVG:"90% 100%","stroke-width":3})
		.to(an8linecenter, 0.2, {opacity:0},"-=0.2")
	
		var animation7lines2 = new TimelineMax({repeat:-1, delay:1, repeatDelay:2});
	
		animation7lines2
		.fromTo(an8lineleft, 1, {drawSVG:"0% 17%"}, {drawSVG:"90% 100%","stroke-width":3})
		.to(an8lineleft, 0.2, {opacity:0},"-=0.2")
	
		var animation7lines3 = new TimelineMax({repeat:-1, delay:1.2, repeatDelay:2});
	
		animation7lines3
		.fromTo(an8lineright, 1, {drawSVG:"0% 17%"}, {drawSVG:"90% 100%","stroke-width":3})
		.to(an8lineright, 0.2, {opacity:0},"-=0.2")	
}