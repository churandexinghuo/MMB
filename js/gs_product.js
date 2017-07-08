$(function() {
    //头部点击事件展开店铺、地区
    $(".from").click(function() {
        if (isFromShow) {
            hideFromContent();
        } else {
            showFromContent();
        }
        return false;
    });
    $(".area").click(function() {
        if (isAreaShow) {
            hideAreaContent();
        } else {
            showAreaContent();
        }
        return false;
    });
    //获取店铺、地区数据
    $.ajax({
        url: urlPrefix+"/api/getgsshop",
        type: "get",
        dataType: "json",
        success: function(data) {
            var shopListStr = template("shop-list-template", data);
            $(".from-content>ul").html(shopListStr);
            $.ajax({
                url: urlPrefix+"/api/getgsshoparea",
                type: "get",
                dataType: "json",
                success: function(data) {
                    var areaListStr = template("area-list-template", data);
                    $(".area-content>ul").html(areaListStr);
                    changeArea();
                    changeShop();
                    getProductsList();
                    $(".area-content>ul>li").click(function() {
                        $(".area-content>ul>li").removeClass("active");
                        $(this).addClass("active");
                        changeArea();
                        hideAreaContent()
                        getProductsList();

                    })
                    $(".from-content>ul>li").click(function() {
                        $(".from-content>ul>li").removeClass("active");
                        $(this).addClass("active");
                        changeShop();
                        hideFromContent()
                        getProductsList();
                    });
                }
            });
        }
    });

});
var isAreaShow = false,
    isFromShow = false;

function showAreaContent() {
    isAreaShow = true;
    hideFromContent();
    $(".area-content").css("display", "block");
    $(".area").addClass('active');
}

function hideAreaContent() {
    isAreaShow = false;
    $(".area-content").css("display", "none");
    $(".area").removeClass('active');
}

function showFromContent() {
    isFromShow = true;
    hideAreaContent();
    $(".from-content").css("display", "block");
    $(".from").addClass('active');
}

function hideFromContent() {
    isFromShow = false;
    $(".from-content").css("display", "none");
    $(".from").removeClass('active');
}

function changeShop() {
    $(".from").html($(".from-content>ul>.active").html());
}

function changeArea() {
    $(".area").html($(".area-content>ul>.active").html().slice(0, 2));
}

function getProductsList() {
    var areaId = $(".area-content>ul>.active")[0].dataset['areaId'];
    var shopId = $(".from-content>ul>.active")[0].dataset['shopId'];
    $.ajax({
        url: urlPrefix+"/api/getgsproduct",
        type: "get",
        dataType: "json",
        data: { areaid: areaId, shopid: shopId },
        success: function(data) {
            var productsListStr = template("products-template", data);
            $("#products>.products-list").html(productsListStr);
        }
    });
}
