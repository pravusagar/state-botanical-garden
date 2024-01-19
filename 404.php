<?php include_once("includes/app_common.php");
$pid = 'home';
$sql = "SELECT a.ID,a.Name,a.PageTitle,a.MetaKeywords,a.MetaDescription,a.Contents,a.PageBanner,
a.PagePhoto,a.PageType,a.PageShortDesci FROM " . PAGES . " as a where a.PageURL='$pid' and a.Status='1'";
$res = $db->getData($sql);
$nos = $res['NO_OF_ITEMS'];
$HomePageID = outText($res['oDATA'][0]['ID']);
$HomePageName = outText($res['oDATA'][0]['Name']);
$PageTitle = outText($res['oDATA'][0]['PageTitle']);
$PageBanner = outText($res['oDATA'][0]['PageBanner']);
$PagePhoto = outText($res['oDATA'][0]['PagePhoto']);
$PageType = outText($res['oDATA'][0]['PageType']);
$MetaKeywords = outText($res['oDATA'][0]['MetaKeywords']);
$MetaDescription = outText($res['oDATA'][0]['MetaDescription']);
$HomePageContent = outText($res['oDATA'][0]['Contents']);
$PageShortDesci = outText($res['oDATA'][0]['PageShortDesci']);
if($PagePhoto=='') { $PagePhoto='homepic.jpg'; }
//echo $PageType;exit;
if ($PageTitle == '') { $PageTitle = 'Home : '.DEFAULT_TITLE; }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?=$PageTitle?></title>
    <link rel="stylesheet" href="asset/css/splide.min.css" />
    <link rel="stylesheet" href="asset/css/all.min.css" />
    <link rel="stylesheet" href="asset/css/fontawesome.min.css" />
    <link rel="stylesheet" href="asset/css/style.css" />
    <link rel="stylesheet" href="asset/css/responsive.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" integrity="sha512-H9jrZiiopUdsLpg94A333EfumgUBpO9MdbxStdeITo+KEIMaNfHNvwyjjDJb+ERPaRS6DpyRlKbvPUasNItRyw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.css" integrity="sha512-nNlU0WK2QfKsuEmdcTwkeh+lhGs6uyOxuUs+n+0oXSYDok5qy0EI0lt01ZynHq6+p/tbgpZ7P+yUb+r71wqdXg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  </head>
  <body style="overflow-x: hidden">



  <section class="page_404">
	<div class="container" style="max-width: 70%;">
		<div class="row">	
		<div class="col-sm-12 ">
		<div class="col-sm-12 col-sm-offset-1  text-center">
		<div class="four_zero_four_bg">
			<h1 class="text-center ">404</h1>
		
		
		</div>
		
		<div class="contant_box_404">
		<h3 class="h2">
		Look like you're lost
		</h3>
		
		<p>the page you are looking for not avaible!</p>
		
		<a href="https://www.statebotanicalgardenodisha.org/demo/" class="link_404">Go to Home</a>
	</div>
		</div>
		</div>
		</div>
	</div>
</section>
      
  

    <?php include_once("includes/script.php"); ?>
  </body>

</html>