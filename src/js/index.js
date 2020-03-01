//jquery 方法
$(window).ready(function() {
	//所有产品左边的竖导航
	$('.j-LI').mouseenter(function() {

		var jTop = $(this).index() * $(this).innerHeight()
		$('.j_NavBg').css({
			visibility: 'visible',
			top: jTop + 2
		})
		$('.one').css('color','#fff')
		$('.two').css('color','#fff')
		$('.j-LI h3 a').css('color','#fff')
		


		//兄弟元素
		$(this).siblings().children().children('.one').css('color','#e22a40')
		$(this).siblings().children().children('.two').css('color','#515151')
		$(this).siblings().children().children('.one').next().css('color','#333')

	})

	$('.j-LI').mouseleave(function() {
		$('.j_NavBg').css('visibility','hidden')
		$('.one').css('color','#e22a40')
		$('.two').css('color','#515151')
		$('.j-LI h3 a').css('color','#333')
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






//js方法
//jsonp的请求  所有产品类型左边的竖导航里面的数据
//请求地址：https://pages.tmall.com/wow/chaoshi/act/category?wh_logica=HN&wh_callback=__chaoshi_category
function __chaoshi_category(dataGoods) {
	
	var datas = dataGoods.data
	var str = ''
	datas.forEach((item,index) => {
		str += `
		<li class="j-LI">
    		<h3>
    			<i class="iconfont icon-feiji one"></i>
    			<a href="">${ item.name }</a>
    			<i class="iconfont icon-pull_right two"></i>
    		</h3>
    		
    		<p>
    		`
		item.recommends.forEach((item2,index2) => {
			str += `<a href="">${item2.name}</a>`
		})
		
		str += `</p>
					</li>`
			
	})
	document.querySelector('.cat-bd ul').innerHTML = str
}