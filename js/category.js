$(function(){

	$.ajax({
		url:urlPrefix+"/api/getcategorytitle",
		type:"get",
		dataType:"json",
		success:function(data){
			var catrgoriesHtml=template("categoryTitle-template",data);
			$("#menu>#accordion").html(catrgoriesHtml);
			
			/*data.result.forEach(function(v,i){
				$.ajax({
					url:"http://127.0.0.1:3000/api/getcategory",
					type:"get",
					dataType:"json",
					data:{titleid: v.titleId},
					success:function(data){
						var catrgoriesHtml=template("categories-template",data);
						$("#menu>#accordion .panel-body>.row").eq(i).html(catrgoriesHtml);
					}
				});
			});*/


			$("#menu>.panel-group>.panel>.panel-heading>.panel-title>a").click(function(){
				if(this.isclick) return;
				this.isclick=true;
				var titleId=this.dataset['titleId'];
				$.ajax({
					url:urlPrefix+"/api/getcategory",
					type:"get",
					dataType:"json",
					data:{titleid: titleId},
					success:function(data){
						var catrgoriesHtml=template("categories-template",data);
						$("#getCategory-"+titleId).html(catrgoriesHtml);
					}
				});
			});
		}
	});
});