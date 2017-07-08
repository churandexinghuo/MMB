$(function(){
	var productId=getUrlParam('productid');
	var categoryId=getUrlParam('categoryid');
	var navLink;
	$.ajax({
		url:urlPrefix+"/api/getproduct",
		dataType:"json",
		data:{productid:productId},
		success:function(data){
			$("#product>.product-details>.product-pic").html(data.result[0].productImg);
			$("#product>.product-details>.product-name").html(data.result[0].productName);
			$("#product>.compare>.compare-list").html(data.result[0].bjShop);

			var activeName=data.result[0].productName.split(' ')[0]
			var navLink='<li class="active">'+activeName+'</li>';
			$.ajax({
				url:urlPrefix+"/api/getcategorybyid",
				dataType:"json",
				data:{categoryid:categoryId},
				success:function(data){
					var category=data.result[0].category;
					navLink='<li><a href=products_list.html?categoryid="'+categoryId+'">'+category+'</a></li>'+navLink;
					$("#product>.nav>.breadcrumb").append(navLink);
				}
			});
			$.ajax({
				url:urlPrefix+"/api/getproductcom",
				dataType:"json",
				data:{productid :productId},
				success:function(data){
					var estimateListStr=template('estimate-list',data);
					$("#product>.estimate>.estimate-content").append(estimateListStr);
					$("#product>.estimate>.estimate-more").off('click').on('click',function(){
						$("#product>.estimate>.estimate-content>.estimate-item").css('display','block');
						//$("#product>.estimate>.estimate-more").css('display','none');
						return false;
					})
				}
			});
		}
	});

});
