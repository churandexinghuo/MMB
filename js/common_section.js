$(function(){
	var header=$("#header");
	if(header){
		var headerStr="";
		var hasBack=header.hasClass('back');
		if(hasBack){
			var title=document.title;
			headerStr +='<a href="javascript:history.back()" class="back"></a>';
			headerStr +='<div class="title">'+title+'</div>';
		}else{
			headerStr +='<a href="#" class="logo">';
			headerStr +='	<img src="./images/header_logo.png">';
			headerStr +='</a>';
		}
		headerStr +='<a href="#" class="app">';
		headerStr +='    <img src="./images/header_app.png">';
		headerStr +='</a>';
		header.append(headerStr);
	}

	var topTitle=$("#topTitle");
	if(topTitle){
		var topTitleStr="";
		topTitleStr +='<a href="index.html" class="back"></a>';
		topTitleStr +='<a href="#" class="app">';
		topTitleStr +='	<img src="./images/header_app.png">';
		topTitleStr +='</a>';
		topTitle.append(topTitleStr);
	}

	var search=$("#search");
	if(search){
		var searchStr="";
		searchStr +='<input type="search" placeholder="请输入你想比价的商品">';
		searchStr +='<input type="submit" value="搜索">';
		search.append(searchStr);
	}

    var footer=$("#footer");
    if(footer){
    	var footerStr="";
    	footerStr +='<div class="row">';
    	footerStr +='    <div class="col-xs-4"><a href="#">登录</a></div>';
    	footerStr +='    <div class="col-xs-4"><a href="#">注册</a></div>';
    	footerStr +='    <div class="col-xs-4"><a href="javascript:goTop();">返回顶部</a></div>';
    	footerStr +='</div>';
    	footerStr +='<div class="app-info">';
    	footerStr +='	<a href="#">手机APP下载</a>';
    	footerStr +='	<span>慢慢买手机版--掌上比价平台</span>';
    	footerStr +='</div>';
    	footerStr +='<div class="website">m.mmb.com</div>';
    	footer.append(footerStr);
    }      
   
});
function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function goTop(){
	var speed = 300;
	$("body").animate({"scrollTop":0},speed);
}

var urlPrefix="http://127.0.0.1:3000";