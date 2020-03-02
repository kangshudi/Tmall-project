//jquery 方法
$(window).ready(function() {

	function catPb(){
		$('.cat-popup')
			.css('display','block')
			.children('.subview')
			.css('display','block')
	}

	function catPn(){
		$('.cat-popup')
			.css('display','none')
			.children('.subview')
			.css('display','none')
	}


	//所有产品左边的竖导航
	$('.j-LI').mousemove(function() {

		var jTop = $(this).index() * $(this).innerHeight()
		$('.j_NavBg').css({
			visibility: 'visible',
			top: jTop + 1 + $(this).index()
		})
		$('.one').css('color','#fff')
		$('.two').css('color','#fff')
		$('.j-LI h3 a').css('color','#fff')

		$('.cat-popup').css({
			top: jTop + 1 + $('.j_NavBg').index()
		})

		if($('.j_NavBg').offset().top > 318){
			$('.cat-popup').css('top',220)
		}
		

		
		//兄弟元素
		$(this).siblings().children().children('.one').css('color','#e22a40')
		$(this).siblings().children().children('.two').css('color','#515151')
		$(this).siblings().children().children('.one').next().css('color','#333')

		var index = $(this).attr('data-index')
		// display=block
		catPb()
			
		
	})

	$('.cat-popup').on({
		mousemove:() => {
			// display=block
			catPb()
		},
		mouseleave:() => {
			// display=none
			catPn()
		}
	})

	

	// 移出事件
	$('.j-LI').mouseleave(function() {
		$('.j_NavBg').css('visibility','hidden')
		$('.one').css('color','#e22a40')
		$('.two').css('color','#515151')
		$('.j-LI h3 a').css('color','#333')
		
		$('.cat-popup').css('display','none') 
		
		

	})

	//顶部导航的我的淘宝
	$('.sn-mytaobao').hover(function() {
		$(this).css({
			'background-color': '#fff',
			'border-bottom': '1px solid #fff'
		})
		$('.menu-bd').show()

	}, function() {
		$('.menu-bd').hide()
		$(this).css({
			'background-color': '#f2f2f2',
			'border-bottom': '1px solid #e5e5e5'
		})
	})

})

//jsonp的请求  所有产品类型左边的竖导航里面的数据
dataGoods()
function dataGoods(){
	$.ajax({
	url:'../lib/dataGoods.json',
	type:'GET',
	dataType:'json',
	success:function(res){
		// console.log(res)
		var str = ''
		res.forEach((item,index) => {
			str += `
			<li class="j-LI" data-index="${ index }">
				<h3>
					<i class="iconfont ${ item.icon } one"></i>
					<a data-id="${ item.id }" href="${ item.link }">${ item.name }</a>
					<i class="iconfont icon-pull_right two"></i>
				</h3>
				
				<p>
				`
			item.recommends.forEach((item2) => {
				str += `<a href="${ item2.link }">${item2.name}</a>`
			})
			
			str += `</p>
			</li>`
				
		})
		document.querySelector('.cat-bd ul').innerHTML = str
	},
	error:function(){
		console.log('请求失败');
	}
})
}


// 轮播图下面的  banner图 
bannerGoods()
function bannerGoods(){
	// ajax请求
	$.ajax({
		url:'../lib/bannerGoods.json',
		type:'GET',
		dataType:'json',
		success:function(bannerGoods){
			var str = ''
			bannerGoods.forEach((item,index) => {
				str += `
					<a href="${ item.link }">
						<img class="rowImg" src="${ item.content }" alt="${ item.title }">
					</a>`;
			})
			$('.row1').html(str)

		},
		error:function(){
			console.log('请求失败')
		}
	})
}



//js方法
window.onload = function(){
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal', // 垂直切换选项
		loop: true, // 循环模式选项
		autoplay: true,//可选选项，自动滑动
		speed:500,
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
			  return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		
		 },
		 paginationClickable :true,
		
		// 如果需要前进后退按钮
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	  })        
}







//jsonp的请求  所有产品类型左边的竖导航里面的数据
//请求地址：https://pages.tmall.com/wow/chaoshi/act/category?wh_logica=HN&wh_callback=__chaoshi_category
// function __chaoshi_category(dataGoods) {
	
	// var datas = dataGoods.data
	// var str = ''
	// datas.forEach((item,index) => {
	// 	str += `
	// 	<li class="j-LI">
    // 		<h3>
    // 			<i class="iconfont icon-feiji one"></i>
    // 			<a href="">${ item.name }</a>
    // 			<i class="iconfont icon-pull_right two"></i>
    // 		</h3>
    		
    // 		<p>
    // 		`
	// 	item.recommends.forEach((item2,index2) => {
	// 		str += `<a href="">${item2.name}</a>`
	// 	})
		
	// 	str += `</p>
	// 				</li>`
			
	// })
	// document.querySelector('.cat-bd ul').innerHTML = str
	// console.log(JSON.stringify(dataGoods));
	
// }
