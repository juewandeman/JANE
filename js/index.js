//banner轮播
$(function(){
	var mySwiper = new Swiper ('#banner', {
		loop: true,	
		autoplay :3000,
		speed: 1000,
		direction: 'horizontal',
		slidesPerView:1,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    //进行操作后继续轮播
	    autoplayDisableOnInteraction : false,
	})
	//鼠标悬停轮播停止
	$('#banner').hover(function(){
		mySwiper.stopAutoplay()
	},function(){
		mySwiper.stopAutoplay()
	})
})
//侧边栏下拉导航
$(function(){
	$('aside li h4').click(function(){
		$(this).toggleClass('active')	
		$('.aside-xq').eq($(this).parents().index()).slideToggle()
	})
})
//侧边栏文字滚动
$(function(){
	var num=0;
	var timer=null;
	$('#news p').clone().appendTo($('#news .news-box-p'))
	function fun(){
		num++;
		if (num==5) {
			$('#news .news-box-p').css({top:0});
			num=1;
		}
		$('#news .news-box-p').stop().animate({top:-num*25},500);
	}
	timer = setInterval(fun,2500)
})
//arrival滚动
$(function(){
	var mySwiper = new Swiper ('#arrivallb', {
		loop: true,	
		speed: 500,
		direction: 'horizontal',
		slidesPerView:4,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	})
})

//详情页tab
$(function(){
	$('.tab-tit li').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('.tab-tit p').eq($(this).index()).show().siblings().hide()
	})
})
//tuijian滚动
$(function(){
	var mySwiper = new Swiper ('#tuijian-tp', {
		loop: true,	
		speed:500,
		direction: 'horizontal',
		slidesPerView:4,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	})
})
