$(function(){
	$.ajax({
		url:urlPrefix+"/api/getindexmenu",
		type:"get",
		dataType:"json",
		success:function(data){
			var menuListHtml=template("menu-template",data);
			$("#menu>.row").html(menuListHtml);
			//未进行过点击
			var itemHeight=$("#menu>.row>div:nth-of-type(8)").height();
			$("#menu>.row>div:nth-last-of-type(-n+4)").css({
						height:"0px"
					});
			$("#menu>.row>div:nth-of-type(8)").click(function(){
				if($("#menu>.row>div:last-of-type").height()==0){
					$("#menu>.row>div:nth-last-of-type(-n+4)").css({
						height:itemHeight
					});
				}else{
					$("#menu>.row>div:nth-last-of-type(-n+4)").css({
						height:"0px"
					});
				}
				return false;
			});
		}	
	});
	$.ajax({
		url:urlPrefix+"/api/getmoneyctrl",
		type:"get",
		dataType:"json",
		success:function(data){
			var productListHtml=template("product-item-template",data);
			$("#recommend>.recommend-list").html(productListHtml);
			$("#recommend>.recommend-list>div:nth-of-type(n+4)").hide();
			$("#recommend>.recommend-more>a").click(function(){
				$("#recommend>.recommend-list>div:nth-of-type(n+4)").show();
				return false;
			});
		}	
	});
});