$(function(){
	$.ajax({
		url:urlPrefix+"/api/getbaicaijiatitle",
		type:"get",
		dataType:"json",
		success:function(data){
			var titleListStr=template("products-title-template",data);
			$("#products>.products-title>ul").html(titleListStr);
			setSlideTitle();
			$("#products>.products-title>ul>li:first-of-type>a").addClass("active");
			var firstId=$("#products>.products-title>ul>li>a")[0].dataset["titleId"];
			getProductsList(firstId);
			$("#products>.products-title>ul>li>a").click(function(){
				$("#products>.products-title>ul>li>a").removeClass('active');
				$(this).addClass("active");
				var titleId = this.dataset["titleId"];
				getProductsList(titleId);
			})
		}
	});

});

function getProductsList(titleId){
	$.ajax({
		url:urlPrefix+"/api/getbaicaijiaproduct",
		type:"get",
		dataType:"json",
		data:{titleid:titleId},
		success:function(data){
			var productsListStr=template("products-template",data);
			$("#products>.products-list").html(productsListStr);
		}
	});
}

function setSlideTitle(){
	var ulWidth=0,startX=0,translateX=0;
	$("#products>.products-title>ul>li").each(function(){
		ulWidth+=$(this).width();
	})
	$("#products>.products-title>ul").width(ulWidth+5)
		.on('touchstart',function(e){
			startX=e.originalEvent.targetTouches[0].clientX;
		}).on('touchmove',function(e){
			var moveX=e.originalEvent.targetTouches[0].clientX;
			var offsetX=moveX-startX;
			translateX+=offsetX;
			if(translateX>=0+100){
				translateX=0+100;
			}
			minTranslateX=-ulWidth+$("#products>.products-title").width()
			if(translateX<=minTranslateX-100){
				translateX=minTranslateX-100
			}
			$(this).css('transform','translateX('+translateX+'px)');
			startX=moveX;
		}).on("touchend",function(){
			if(translateX>=0){
				translateX=0;
			}
			if(translateX<=minTranslateX){
				translateX=minTranslateX
			}
			$(this).css('transition','transform 1s ease');
			$(this).css('transform','translateX('+translateX+'px)');
			$(this).css('transition','none');
		});
}