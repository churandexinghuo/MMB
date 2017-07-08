$(function(){
	$.ajax({
		url:urlPrefix+"/api/getsitenav",
		type:"get",
		dataType:"json",
		success:function(data){
			var shopListStr=template("shop-list-template",data);
			$("#shop-list").html(shopListStr);
		}
	});
});