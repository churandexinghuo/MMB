$(function(){
	$.ajax({
		url:urlPrefix+"/api/getinlanddiscount",
		type:"get",
		dataType:"json",
		success:function(data){
			var productsListStr=template("products_list_template",data);
			$("#products>.products-list").html(productsListStr);
			$("#products>.loading").css('display','none');
			$("#products>.load_over").css('display','block');
		}
	});
	//分页效果监控代码
	/*$(window).on("scroll",function(){
		var screenHeight=$(window).height();
		var totalHeight=$(document).height();
		var scrollHeight=totalHeight-screenHeight-$("#footer").height();
		var scrollTop=$(window).scrollTop()
		if(scrollTop>=scrollHeight){
			$("#products>.loading").css('display','none');
			$("#products>.load_over").css('display','block');
		}
	})*/
});
