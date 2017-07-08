$(function(){
	var categoryId=getUrlParam('categoryid');
	var	pageId=1;
	getProductsList(categoryId,pageId);
});
function getProductsList(categoryId,pageId){
	$.ajax({
		url:urlPrefix+"/api/getproductlist",
		type:'get',
		dataType:'json',
		data:{categoryid:categoryId,pageid:pageId},
		success:function(data){
			var productsListHtml=template("products-template",data);
			$("#products>.products-list").html(productsListHtml);
			goTop();
			var totalPage=Math.ceil(data.totalCount/data.pagesize);
			var selectHtml='';
			for(var i=0;i<totalPage;i++){
				if(pageId==i+1){
					selectHtml+="<option value='"+(i+1)+"' selected>"+(i+1)+"/"+totalPage+"</option>";
				}else{
					selectHtml+="<option value='"+(i+1)+"'>"+(i+1)+"/"+totalPage+"</option>";
				}
			}
			$('select').html(selectHtml);
			$('.nextPage').off('click').on('click',function(){
				pageId++;
				if(pageId>totalPage){
					pageId=totalPage;
				}else{
					getProductsList(categoryId,pageId);
				}
				return false;
			});
			$('.prevPage').off('click').on('click',function(){
				pageId--;
				if(pageId<1){
					pageId=1;
				}else{
					getProductsList(categoryId,pageId);
				}
				return false;
			});
			$('select').off('change').on('change',function(){
				getProductsList(categoryId,this.value);
			})
		}
	})
}