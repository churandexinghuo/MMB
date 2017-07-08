$(function(){
	var couponId=getUrlParam('couponid');
	$.ajax({
		url:urlPrefix+"/api/getcouponproduct",
		type:"get",
		dataType:"json",
		data:{couponid:couponId},
		success:function(data){
			console.log(data);
			var productsListStr=template("products-template",data);
			$("#products>.products-list").html(productsListStr);
		}
	});
});