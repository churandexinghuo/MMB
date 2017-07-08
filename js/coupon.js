$(function(){
	$.ajax({
		url:urlPrefix+"/api/getcoupon",
		type:"get",
		dataType:"json",
		success:function(data){
			console.log(data);
			var couponsListStr=template("coupons-list-template",data);
			$("#coupons>.coupons-list").html(couponsListStr);
		}
	});
});