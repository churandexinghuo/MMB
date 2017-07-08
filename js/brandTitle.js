$(function(){
	$.ajax({
		url:urlPrefix+"/api/getbrandtitle",
		type:"get",
		dataType:"json",
		success:function(data){
			console.log(data);
			var brandListStr=template("brand-title-template",data);
			$("#accordion").html(brandListStr);
			$("#accordion .panel-title a").click(function(){
				var keyword=$(this).text().replace(/\s/g,"");
				keyword=keyword.slice(0,keyword.length-4);
				window.localStorage.setItem("keyword",keyword);
			})
		}
	});
});

