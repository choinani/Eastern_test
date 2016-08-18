var onH = 38,
	offH = 0;

$(function(){
	$(".mv>span").on("mouseover",function(){
		$(".mv>a").stop().fadeOut(300);
		$(this).next("a").stop().fadeIn(300);
	});
	$(".main_visual").on("mouseleave",function(){
		$(".mv>a").stop().fadeOut(300);
	});

	$(".gnb>li>a").on("mouseover",function(){
		var idx = $(this).parent().index();

		$(".gnb_sub_wrap").stop().animate({"height":onH},300).show();

		//$(".gnb_sub").children("li").children(".gsub").hide();
		//$(".gnb_sub").children("li").eq(idx).children(".gsub").show();

		$(".gnb_sub").children("li").hide();
		$(".gnb_sub").children("li").eq(idx).show();
		$(".gnb_sub").children("li").eq(idx).children(".gsub").show();
	});

	$(".header").on("mouseleave",function(){
		$(".gnb_sub_wrap").stop().animate({"height":offH},300,function(){
			$(".gnb_sub_wrap").hide();
		});
	});


});