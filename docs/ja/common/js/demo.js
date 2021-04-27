jQuery(function(){
	var url = location.href;
	if (url.indexOf("product") != -1){
		$(".link li a").each(function(){
			$href = $(this).attr("href");
			$(this).attr("data", $href);
			$(this).attr("href", "javascript:void(0);");
		});
	}
	if (url.indexOf("product") != -1 && url.indexOf("#") != -1) {

		var now =  $("#" + url.split("#")[1]).offset().top;
		var move = now - 200;
		console.log(move);
		$("html,body").animate({
			scrollTop : move + "px"
		}, {
			queue : false
		});
	}
	$(".link li a").click(function(){
		var href = $(this).attr("data");
		console.log(href);
		var now =  $(href).offset().top;
		var move = now - 120;
		console.log(move);
		$("html,body").animate({
			scrollTop : move + "px"
		}, {
			queue : false
		});
	
	})
	$(window).scroll(function(){
		var obj_t_pos = $("#footerArea").offset().top;
		var scr_count = $(document).scrollTop() + (window.innerHeight / 1.2);

		if (scr_count > obj_t_pos) {

			$("#sideNavi").fadeOut(100);
		} else {
			$("#sideNavi").fadeIn(100);
		}
	})
});

var DEMO_adjustContainerHeight = function(){
	$('div.main-contents p').each(function(idx){
		if(idx < 9) $(this).remove();
	});
}

var DEMO_overWindowHeight = function(){
	var html = $('div.main-contents div').html();
	$('div.main-contents div').html(html + html )
	var html = $('div.ext-contents ul').html();
	$('div.ext-contents ul').html(html + html)
	$('div.ext-contents li > a').each(function(idx){
		$(this).text($(this).text()+'-'+idx);
	});
}


var DEMO_dynamicLayout = function(){
	var item = '<a class="del" href="#">ﾃ�</a> <a class="add" href="#">��</a>';
	var item2 = '<div><p>Lorem ipsum... ' + item + '</p></div>';
	var item3 = '<div style="margin-left:200px"><p>Lorem ipsum... ' + item + '</p></div>';
	$('div.sub-contents li,div.ext-contents li').append(' '+item);
	$('div.main-contents p').prepend(item);
	$('div.sub-contents-wrapper,div.ext-contents-wrapper').prepend(item2).append(item2);
	$('div.main-contents-wrapper').prepend(item3).append(item3);
	$('div.header').append(item2);
	$('div.footer').prepend(item2);
	$('a.del').live('click',function(){
		$(this).parent().remove();
		return false;
	});
	$('a.add').live('click',function(){
		$(this).parent().clone().appendTo($(this).parent().parent());
		return false;
	});
}


