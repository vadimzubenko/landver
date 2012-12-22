<?php
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
	<title>HOME</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	
	<link rel="stylesheet" type="text/css" href="_media/css/layout.css" />
	
	<script type="text/javascript" src="_media/js/jquery-1.8.3.min.js"></script>
	<script type="text/javascript" src="_media/js/main.js"></script>
	<style type="text/css">
		
	</style>

</head>
<body>
	<?php include_once ("_inc/top.inc.php"); ?>
		<div class="wrapper">
			<div class="images">
				<div id="img1"><img src="_media/images/home/home_kids.jpg" alt="home_kids"></div>
				<div id="img2"><img src="_media/images/home/home_menu.jpg" alt="home_menu"></div>
				<div id="img3"><img src="_media/images/home/home_contest.jpg" alt="home_contest"></div>
				<div class="iframe">
				<div id="fb-root"></div>
				<script>(function(d, s, id) {
					var js, fjs = d.getElementsByTagName(s)[0];
					if (d.getElementById(id)) return;
					js = d.createElement(s); js.id = id;
					js.src = "//connect.facebook.net/ru_RU/all.js#xfbml=1";
					fjs.parentNode.insertBefore(js, fjs);
					}(document, 'script', 'facebook-jssdk'));</script>
				<div class="fb-like-box" data-href="http://www.facebook.com/platform" data-width="300" data-height="175" data-show-faces="false" data-stream="true" data-header="true"></div>
				</div>	
				<div id="img4"><img src="_media/images/home/home_events.jpg" alt="home_events"></div>
				<div id="img5"><img src="_media/images/home/home_news.jpg" alt="home_news"></div>
			
			</div>
		</div>
	
	
	<?php include_once ("_inc/footer.inc.php"); ?>
</body>
</html>



