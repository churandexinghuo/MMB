$(function(){
	var	pageId=1;
	getProductsList(pageId);
});
function getProductsList(pageId){
	$.ajax({
		url:urlPrefix+"/api/getmoneyctrl",
		type:'get',
		dataType:'json',
		data:{pageid:pageId},
		success:function(data){
			var productsListHtml=template("products-template",data);
			$("#products>.products-list").html(productsListHtml);
			goTop();
			var totalPage=Math.ceil(data.totalCount/data.pagesize);
			var selectHtml='';
			for(var i=0;i<totalPage;i++){
				if(pageId==i+1){
					selectHtml+="<option value='"+(i+1)+"' selected> "+(i+1)+"/"+totalPage+"</option>";
				}else{
					selectHtml+="<option value='"+(i+1)+"'> "+(i+1)+"/"+totalPage+"</option>";
				}
			}
			$('select').html(selectHtml);
			$('.nextPage').off('click').on('click',function(){
				pageId++;
				if(pageId>totalPage){
					pageId=totalPage;
				}else{
					getProductsList(pageId);
				}
				return false;
			});
			$('.prevPage').off('click').on('click',function(){
				pageId--;
				if(pageId<1){
					pageId=1;
				}else{
					getProductsList(pageId);
				}
				return false;
			});
			$('select').off('change').on('change',function(){
				getProductsList(+this.value);
			})
		}
	})
}