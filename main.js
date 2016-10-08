
var background = [
	'#3c3834',
	'#442d25',
	'#852111',
	'#7c1f2f',
	'#595c2b',
	'#63312b',
	'#884a3a',
	];

var foreground = [
	'#926646',
	'#867d5a',
	'#86a18b',
	'#e4bc61',
	'#ab612d',
	'#a29b8f',
	'#cf8e42',
	];

	var changeColor = function() {
		var color = background[Math.floor(Math.random() * background.length)];
		$('body').css('background-color',color);
		$('h3').text(color);
		console.log("change color");

		var color2 = foreground[Math.floor(Math.random() * background.length)];
		$('.container').css('color',color2);
	    $('svg').css('fill',color2);
	    $('.button').css('background-color',color2);
	    $('.mobileMenu-page').css('color',color2);
		
	}
	window.setInterval(changeColor, 3000);
	changeColor();