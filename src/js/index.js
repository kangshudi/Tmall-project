//jquery 方法
$(window).ready(function(){
	$('.sn-mytaobao').hover(function(){
		$(this).css({
			'background-color':'#fff',
			'border-bottom':'1px solid #fff'
		})
		$('.menu-bd').show()
		
	},function(){
		$('.menu-bd').hide()
		$(this).css({
			'background-color':'#f2f2f2',
			'border-bottom':'1px solid #e5e5e5'
		})
	})

})
