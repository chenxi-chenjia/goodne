$(function(){
	$("#fixed").click(function(){
		$("body").animate({scrollTop:0});
	})
	var screenwidth=$(window).width();
	var flag=true;
	$(window).scroll(function(event) {
		var top=$("#header .bottom").offset().top;
		if ($(window).scrollTop()>top) {
			if(flag){
				flag=false;
				if(screenwidth>768){
					$("#header").css("display","none");
					$("#head").slideDown();
				}
				$("#fixed").animate({opacity:1})
			}
		}else if($(window).scrollTop()<=20){
			if(screenwidth>768){
				$("#header").css("display","block");
				$("#head").slideUp();
			}
			$("#fixed").animate({opacity:0})
			flag=true;
		}
	});
	function font (){
		var now=0;
		function move(){
			var next=now+1;
			var parent=$(".now").parent();
			if(next>parent.children().size()-1){
				next=0;
			}
			parent.each(function(){
				$(".now",this).removeClass("now");
				$("h3",this).eq(next).addClass('now');
				$("p",this).eq(next).addClass('now');
			})
		}
		var t=setInterval(move,5000);
	}
	font();
	function fontClick(){
		$("#ly>.left .top li").click(function() {
			var num=$("#ly>.left .top li").index($("#ly>.left .top .click"));
			var index=$("#ly>.left .top li").index($(this));
			if (num!=index) {
				$("#ly>.left .click").removeClass('click');
				$(this).addClass('click');
				$("#ly>.left .bottom h3").eq(index).addClass("click");
				$("#ly>.left .bottom p").eq(index).addClass("click");
			};
		});
	}
	fontClick();
	function jdclick(){
		
	}
	function banner(){
		var now=0;
		$("#banner li").eq(0).children().addClass('bagin');
		function move (){
			var next=now+1;
			if(next>$("#banner li").size()-1){
				next=0;
			}
			if(now==1){
				$("#banner .srdz").removeClass('srdz');
			}
			$("#banner li").eq(now).animate({opacity:0},500).children().removeClass('bagin').delay(500).end().end().eq(next).css('opacity',1).children().addClass('bagin');
			now=next;
			if(next==1){
				$("#banner li").eq(1).children(".ts").removeClass('bagin').addClass('srdz');
			}
		}
		function moveback(){
			var next=now-1;
			if(next<0){
				next=$("#banner li").size()-1;
			}
			$("#banner li").eq(now).animate({opacity:0},500).children().removeClass('bagin').delay(500).end().end().eq(next).css('opacity',1).children().addClass('bagin');
			now=next;
		}
		var t=setInterval(move,5000)
		$("#banner").hover(function(){
			$("#banner .btnr,#bannre .btnl").animate({opacity:0.3})
			clearInterval(t)
		},function(){
			$("#banner .btnr,#bannre .btnl").animate({opacity:0});
			t=setInterval(move,8000)
		})
		$("#banner .btnl").click(moveback);
		$("#banner .btnr").click(move);
	}
	banner();
	console.log($(window).width())
})