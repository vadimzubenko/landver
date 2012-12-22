/*
**
** Main Js file for http://landwercafe.co.il, December 2012, InManage LTD.
**
*/
var total_images = 0;
var slider_running = 0;
var can_click = true;
var new_slideItems = -545;

$(function(){
// Header slider
	var slider = $("#topSlider");
	var slider_list = $("#slideItems");
	total_images = slider_list.find("img").length;

	$.each(slider_list.find("img"),function(index,elem){
		$(elem).css({'position':'absolute','top':'0px','left':  (index*1000)+'px' });
	});



	$(window).on('resize',function(){
		new_slideItems = parseInt($(".sliderArrow.arrowLeft").css('left'))-1500;
		$("#slideItems").css('left',new_slideItems+'px');
	});

	$(window).trigger('resize');

	slider.on('mouseenter',function(){
		clearInterval(slider_running);
	});

	slider.on('mouseout',function(){
		 runCarusel();
	});

	$("#topSlider, .sliderArrow, #slideItems, #slideItems > img").addClass("unselectable");

	$(".sliderArrow.arrowRight").on('click',function(){
		if(!can_click) return false;
		can_click = false;
		var first_item = slider_list.find(":first-child");
		var last_item = slider_list.find(":last-child");
		var first_item_left = parseInt(first_item.css('left'));
		last_item.css({'left':(first_item_left-1000)+'px'});
		slider_list.prepend(last_item);
		var i = 1;
		$.each(slider_list.find("img"),function(index,elem){
			var new_left = parseInt($(elem).css('left'))+1000;
			$(elem).animate({'left':new_left},1000,function(){
				i++;
				if(i>total_images) {
					can_click = true;
				}
			});
		});
	});
	$(".sliderArrow.arrowLeft").on('click',function(){
		if(!can_click) return false;
		can_click = false;
		var first_item = slider_list.find(":first-child");
		var last_item = slider_list.find(":last-child");
		slider_list.append(first_item);
		
		var i = 1;
		$.each(slider_list.find("img"),function(index,elem){
			var new_left = parseInt($(elem).css('left'))-1000;
			$(elem).animate({'left':new_left},1000,function(){
				i++;
				if(i>total_images) {
					var last_item_left = parseInt(last_item.css('left'));
					first_item.css({'left':(last_item_left+1000)+'px'});
					can_click = true;
				}
			});
		});
	});
	runCarusel();
// Header slider

// nav bar
$('.navDrop > ul > li:last-child').css('border', '0 none')
$('div.navDrop.wide ul > li:last-child').css('margin', '0');
$('.navDrop > ul > li > ul').not(':first-child').css('margin-top', '23px');

$('#navBar li').mouseenter(function(){
	$(this).find('.navDrop').slideDown('normal');
});
$('#navBar li').mouseleave(function(){
	$(this).find('.navDrop').slideUp('fast');
});

});// End Document ready
	
function runCarusel() {
	slider_running = setInterval(function(){
		$(".sliderArrow.arrowRight").trigger('click');
	},5000);
}
