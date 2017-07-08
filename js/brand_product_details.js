$(function(){
	brandTitleId=getUrlParam('brandtitleid');
	getBrandDetails(brandTitleId);
	getBrandProducts(brandTitleId,pageSize);
	
});
var brandTitleId=0,pageSize=4,productId,commentProductImg,commentProductName;
function getBrandDetails(brandTitleId){
	var keyword=window.localStorage.getItem('keyword');
	keyword=keyword+"哪个牌子好";
	$("#menu>.description").text(keyword);
	$("#menu>.nav>.breadcrumb>li:last-of-type").css("visibility","visible").text(keyword);
	$.ajax({
		url:urlPrefix+"/api/getbrand",
		type:"get",
		dataType:"json",
		data:{brandtitleid:brandTitleId},
		success:function(data){
			var brandListStr=template("brands-template",data);
			$("#accordion").html(brandListStr);
			var color=["#f10e0e","#ff9314","#8adf5b"];
			$("#accordion .brand-item i").each(function(i,v){
				if(i<3){
					$(this).css("backgroundColor",color[i]);
				}
			})
		}
	});
}
function getBrandProducts(brandTitleId,pageSize){
	var keyword=window.localStorage.getItem('keyword');
	keyword=keyword+"产品销量排行";
	$("#selledRank>.description").text(keyword);
	$.ajax({
		url:urlPrefix+"/api/getbrandproductlist",
		type:"get",
		dataType:"json",
		data:{brandtitleid:brandTitleId,pagesize:pageSize},
		success:function(data){
			console.log(data);
			productId=data.result[0].productId;
			commentProductImg=data.result[0].productImg;
			commentProductName=data.result[0].productName;
			var productsListStr=template("products-template",data);
			$("#selledRank").append(productsListStr);
			$("#selledRank>.media>.media-left>a").click(function(){
				productId=this.dataset["productId"];
				commentProductImg=$(this).html();
				commentProductName=$("#com_pd_name_"+productId).html();
				getProductComments(productId);
				return false;
			})
			getProductComments(productId);
		}
	});
}
function getProductComments(productId){
	var keyword=window.localStorage.getItem('keyword');
	keyword=keyword+"最新评论";
	$("#latelyComments>.description").text(keyword);
	$("#latelyComments>.product").html('<div class="productImg">'+
                    commentProductImg+'</div><div class="productName">'+
                    commentProductName+'</div>');
	$.ajax({
		url:urlPrefix+"/api/getproductcom",
		type:"get",
		dataType:"json",
		data:{productid:productId},
		success:function(data){
			console.log(data);	
			var commentsListStr=template("comments-template",data);
			$("#latelyComments>.comments").html(commentsListStr);		
		}
	});
}

        
        