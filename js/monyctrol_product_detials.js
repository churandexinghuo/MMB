$(function() {
    var productId = getUrlParam('productid');
    $.ajax({
        url: urlPrefix+"/api/getmoneyctrlproduct",
        dataType: "json",
        data: { productid: productId },
        success: function(data) {
            var productDetailsHtml = template("moneyctrl-product-details", data);
            $("#product>.product-details").html(productDetailsHtml);
            $("#product>.comment").html(data.result[0].productComment);
        }
    });
});
