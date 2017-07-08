			<?php
				//在php中,获取一个链接中的数据
				//设置编码
				header("Content-Type: text/plain; charset=utf-8");
				//得到某些参数
			    $mobile = $_GET["mobile"];
				//使用curl进行网络数据访问
			    $ch = curl_init();
			    //网络访问的url地址
			    $url = "http://apicloud.mob.com/appstore/lucky/mobile/query?key=1df2233d34ffa&mobile=".$mobile;  
			    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
			    // 执行HTTP请求
			    curl_setopt($ch , CURLOPT_URL , $url);
			    //得到数据
			    $res = curl_exec($ch);
			   	// echo "abc(".$res.")";
			    echo $res;
			?>
