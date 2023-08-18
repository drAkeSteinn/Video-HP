var timer = 12000;

var i = 0;
var max = $('#c > li').length;
 
	$("#c > li").eq(i).addClass('activeslider').css('left','0%');
	$("#c > li").eq(i + 1).addClass('activeslider').css('left','20%');
	$("#c > li").eq(i + 2).addClass('activeslider').css('left','40%');
	$("#c > li").eq(i + 3).addClass('activeslider').css('left','60%');
	$("#c > li").eq(i + 4).addClass('activeslider').css('left','80%');
 

	setInterval(function(){ 

		$("#c > li").removeClass('activeslider');

		$("#c > li").eq(i).css('transition-delay','0.2s');
		$("#c > li").eq(i + 1).css('transition-delay','0.4s');
		$("#c > li").eq(i + 2).css('transition-delay','0.6s');
		$("#c > li").eq(i + 3).css('transition-delay','0.8s');
		$("#c > li").eq(i + 4).css('transition-delay','1s');

		if (i < max-5) {
			i = i+5; 
		}

		else { 
			i = 0; 
		}  

		$("#c > li").eq(i).css('left','0%').addClass('activeslider').css('transition-delay','1.2s');
		$("#c > li").eq(i + 1).css('left','20%').addClass('activeslider').css('transition-delay','1.4s');
		$("#c > li").eq(i + 2).css('left','40%').addClass('activeslider').css('transition-delay','1.6s');
		$("#c > li").eq(i + 3).css('left','60%').addClass('activeslider').css('transition-delay','1.8s');
		$("#c > li").eq(i + 4).css('left','80%').addClass('activeslider').css('transition-delay','2s');
	
	}, timer);
 