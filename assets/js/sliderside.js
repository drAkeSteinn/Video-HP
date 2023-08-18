var timer2 = 2000;

var i2 = 0;
var max2 = $('#c > li').length;
 
	$("#d > li").eq(i2).addClass('active').css('top','0%');
	$("#d > li").eq(i2 + 1).addClass('active').css('top','20%');
 

	setInterval(function(){ 

		$("#d > li").removeClass('active');
		$("#d > li").eq(i2).css('transition-delay','0.20s');

		if (i2 < max2-2) {
			i2 = i2+2; 
		}

		else { 
			i2 = 0; 
		}  

		$("#d > li").eq(i2).css('top','0%').addClass('active').css('transition-delay','1.20s');
		$("#d > li").eq(i2 + 1).css('top','20%').addClass('active').css('transition-delay','1.40s');
	
	}, timer2);


 