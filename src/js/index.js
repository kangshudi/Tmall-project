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
	$('.j-LI').mouseenter(function() {

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
			

		// 鼠标移入导航的LI标签的时候加载ajax
		if($(this).index() == 0){
			$.ajax({
				url:'../lib/daohangJson/jksp.json',
				type:'GET',
				dataType:'json',
				success:function(res){
					// console.log(res.data)

					var str = ''
					res.data.cats.forEach((item,index) => {
						str += `
						<div class="subview-li">
							<h4><a href="">${ item.title }</a></h4>
							<p>`
								item.cats.forEach((item2,index2) => {
									str += `<a class="${ item2.highlight }" href="${ item2.link }">${ item2.text }</a>`	
								})
								
							str +=`	
							</p>
						</div>

						<div class="promo">
							<div class="promo-brands">
								<h4>品牌</h4>
								<p>`
								res.data.brands.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
							str +=`
								</p>
							</div>
							<div class="promo-acts">
								<h4>品牌活动</h4>
								<p>`
								res.data.acts.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
								str +=`
								</p>
							</div>
						</div>
						`;
					})

					$('.subview').html(str)


				},
				error:function(){
					console.log('请求失败')
				}
			})
		}

		if($(this).index() == 1){
			$.ajax({
				url:'../lib/daohangJson/ylsp.json',
				type:'GET',
				dataType:'json',
				success:function(res){
					// console.log(res.data)

					var str = ''
					res.data.cats.forEach((item,index) => {
						str += `
						<div class="subview-li">
							<h4><a href="">${ item.title }</a></h4>
							<p>`
								item.cats.forEach((item2,index2) => {
									str += `<a class="${ item2.highlight }" href="${ item2.link }">${ item2.text }</a>`	
								})
								
							str +=`	
							</p>
						</div>

						<div class="promo">
							<div class="promo-brands">
								<h4>品牌</h4>
								<p>`
								res.data.brands.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
							str +=`
								</p>
							</div>
							<div class="promo-acts">
								<h4>品牌活动</h4>
								<p>`
								res.data.acts.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
								str +=`
								</p>
							</div>
						</div>
						`;
					})

					$('.subview').html(str)


				},
				error:function(){
					console.log('请求失败')
				}
			})
		}

		if($(this).index() == 2){
			$.ajax({
				url:'../lib/daohangJson/lyfs.json',
				type:'GET',
				dataType:'json',
				success:function(res){
					// console.log(res.data)

					var str = ''
					res.data.cats.forEach((item,index) => {
						str += `
						<div class="subview-li">
							<h4><a href="">${ item.title }</a></h4>
							<p>`
								item.cats.forEach((item2,index2) => {
									str += `<a class="${ item2.highlight }" href="${ item2.link }">${ item2.text }</a>`	
								})
								
							str +=`	
							</p>
						</div>

						<div class="promo">
							<div class="promo-brands">
								<h4>品牌</h4>
								<p>`
								res.data.brands.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
							str +=`
								</p>
							</div>
							<div class="promo-acts">
								<h4>品牌活动</h4>
								<p>`
								res.data.acts.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
								str +=`
								</p>
							</div>
						</div>
						`;
					})

					$('.subview').html(str)


				},
				error:function(){
					console.log('请求失败')
				}
			})
		}

		if($(this).index() == 3){
			$.ajax({
				url:'../lib/daohangJson/mrxk.json',
				type:'GET',
				dataType:'json',
				success:function(res){
					// console.log(res.data)

					var str = ''
					res.data.cats.forEach((item,index) => {
						str += `
						<div class="subview-li">
							<h4><a href="">${ item.title }</a></h4>
							<p>`
								item.cats.forEach((item2,index2) => {
									str += `<a class="${ item2.highlight }" href="${ item2.link }">${ item2.text }</a>`	
								})
								
							str +=`	
							</p>
						</div>

						<div class="promo">
							<div class="promo-brands">
								<h4>品牌</h4>
								<p>`
								res.data.brands.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
							str +=`
								</p>
							</div>
							<div class="promo-acts">
								<h4>品牌活动</h4>
								<p>`
								res.data.acts.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
								str +=`
								</p>
							</div>
						</div>
						`;
					})

					$('.subview').html(str)


				},
				error:function(){
					console.log('请求失败')
				}
			})
		}
		
		if($(this).index() == 4){
			$.ajax({
				url:'../lib/daohangJson/jjjd.json',
				type:'GET',
				dataType:'json',
				success:function(res){
					// console.log(res.data)

					var str = ''
					res.data.cats.forEach((item,index) => {
						str += `
						<div class="subview-li">
							<h4><a href="">${ item.title }</a></h4>
							<p>`
								item.cats.forEach((item2,index2) => {
									str += `<a class="${ item2.highlight }" href="${ item2.link }">${ item2.text }</a>`	
								})
								
							str +=`	
							</p>
						</div>

						<div class="promo">
							<div class="promo-brands">
								<h4>品牌</h4>
								<p>`
								res.data.brands.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
							str +=`
								</p>
							</div>
							<div class="promo-acts">
								<h4>品牌活动</h4>
								<p>`
								res.data.acts.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
								str +=`
								</p>
							</div>
						</div>
						`;
					})

					$('.subview').html(str)


				},
				error:function(){
					console.log('请求失败')
				}
			})
		}

		if($(this).index() == 5){
			$.ajax({
				url:'../lib/daohangJson/jtqj.json',
				type:'GET',
				dataType:'json',
				success:function(res){
					// console.log(res.data)

					var str = ''
					res.data.cats.forEach((item,index) => {
						str += `
						<div class="subview-li">
							<h4><a href="">${ item.title }</a></h4>
							<p>`
								item.cats.forEach((item2,index2) => {
									str += `<a class="${ item2.highlight }" href="${ item2.link }">${ item2.text }</a>`	
								})
								
							str +=`	
							</p>
						</div>

						<div class="promo">
							<div class="promo-brands">
								<h4>品牌</h4>
								<p>`
								res.data.brands.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
							str +=`
								</p>
							</div>
							<div class="promo-acts">
								<h4>品牌活动</h4>
								<p>`
								res.data.acts.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
								str +=`
								</p>
							</div>
						</div>
						`;
					})

					$('.subview').html(str)


				},
				error:function(){
					console.log('请求失败')
				}
			})
		}
		
		if($(this).index() == 6){
			$.ajax({
				url:'../lib/daohangJson/myyp.json',
				type:'GET',
				dataType:'json',
				success:function(res){
					// console.log(res.data)

					var str = ''
					res.data.cats.forEach((item,index) => {
						str += `
						<div class="subview-li">
							<h4><a href="">${ item.title }</a></h4>
							<p>`
								item.cats.forEach((item2,index2) => {
									str += `<a class="${ item2.highlight }" href="${ item2.link }">${ item2.text }</a>`	
								})
								
							str +=`	
							</p>
						</div>

						<div class="promo">
							<div class="promo-brands">
								<h4>品牌</h4>
								<p>`
								res.data.brands.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
							str +=`
								</p>
							</div>
							<div class="promo-acts">
								<h4>品牌活动</h4>
								<p>`
								res.data.acts.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
								str +=`
								</p>
							</div>
						</div>
						`;
					})

					$('.subview').html(str)


				},
				error:function(){
					console.log('请求失败')
				}
			})
		}

		if($(this).index() == 7){
			$.ajax({
				url:'../lib/daohangJson/myyp.json',
				type:'GET',
				dataType:'json',
				success:function(res){
					// console.log(res.data)

					var str = ''
					res.data.cats.forEach((item,index) => {
						str += `
						<div class="subview-li">
							<h4><a href="">${ item.title }</a></h4>
							<p>`
								item.cats.forEach((item2,index2) => {
									str += `<a class="${ item2.highlight }" href="${ item2.link }">${ item2.text }</a>`	
								})
								
							str +=`	
							</p>
						</div>

						<div class="promo">
							<div class="promo-brands">
								<h4>品牌</h4>
								<p>`
								res.data.brands.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
							str +=`
								</p>
							</div>
							<div class="promo-acts">
								<h4>品牌活动</h4>
								<p>`
								res.data.acts.forEach((item) => {
									str += `<a href="${ item.link }">${ item.text }</a>`
								})
								str +=`
								</p>
							</div>
						</div>
						`;
					})

					$('.subview').html(str)


				},
				error:function(){
					console.log('请求失败')
				}
			})
		}
		
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



	// 左边导航移出事件
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


// ajax请求按顺序 不同时间发送请求
noTimeAjax()
function noTimeAjax(){
	var time = setTimeout(function(){
		jinkoulsGoods()
		xiuxianlsGoods()
		grhlGoods()
	},100)
}


// 请求进口零食速食数据
// jinkoulsGoods()
function jinkoulsGoods(){
	$.ajax({
		url:'../lib/jinkoulsGoods.json',
		type:'GET',
		dataType:'json',
		success:function(res){
			// 渲染中间商品列表
			var datas_201507200 = res.data.resultValue[201507200].data
			var str = ''
			datas_201507200.forEach((item,index) => {
				//如果a标签想跳转 ${ item.link }
				str += `
				<a href="">
				<div class="wrap">
					<img width="160" height="160" src="${ item.img }" alt="${ item.title }">
					<h3></h3>
					<p class="title">${ item.title }</p>
					<p class="o-price">
						<i class="yen">¥</i>
						${ item.price }
					</p>
					<p class="price">
						<i class="yen">¥</i>
						<span class="j_CurPrice">${ item.promPrice }</span>
					</p>

					<div class="ui-cart">
						加
					</div>
				</div>
			</a>`;
				$('.list').html(str)
			})

			// 渲染九宫格单词
			var datas_201507201 = res.data.resultValue[201507201].data
			var str_9gong = ''
			datas_201507201.forEach((item2,index2) => {
				str_9gong += `
				<a class="outer" href="${ item2.link }">
					<span class="inner">
						<b class="text">${ item2.title }</b>
					</span>
				</a>`;
			})
			$('.words').html(str_9gong)

			// 渲染九宫单词下面的 大背景图片
			var datas_2015051810 = res.data.resultValue[2015051810].data[0]
			var str_big = `<img width="240" height="296" src="${ datas_2015051810.img }" alt="">`;
			$('.banner').html(str_big)

			
			// 渲染右边的品牌优惠 两张大图
			var datas_2015051812 = res.data.resultValue[2015051812].data
			var str_pin = ''
			datas_2015051812.forEach((item4,index4) => {
				str_pin += `
				<img class="title" src="//img.alicdn.com/tps/i4/TB14fMEIFXXXXc8XFXXzAd2FVXX-150-39.png" alt="">
				<a href="${ item4.link }">
					<img width="150" height="263" src="${ item4.img }" alt="">
				</a>`;
			})

			$('.m-floor .promo').html(str_pin)

		},
		error:function(){
			console.log('请求失败')
		}
	})
}

// 请求 休闲零食 的数据
// xiuxianlsGoods()
function xiuxianlsGoods(){
	$.ajax({
		url:'../lib/xiuxianlsGoods.json',
		type:'GET',
		dataType:'json',
		success:function(res){
			// 渲染中间商品列表
			var datas_201506256 = res.data.resultValue[201506256].data
			var str = ''
			datas_201506256.forEach((item,index) => {
				//如果a标签想跳转 ${ item.link }
				str += `
				<a href="">
				<div class="wrap">
					<img width="160" height="160" src="${ item.img }" alt="${ item.title }">
					<h3></h3>
					<p class="title">${ item.title }</p>
					<p class="o-price">
						<i class="yen">¥</i>
						${ item.price }
					</p>
					<p class="price">
						<i class="yen">¥</i>
						<span class="j_CurPrice">${ item.promPrice }</span>
					</p>

					<div class="ui-cart">
						加
					</div>
				</div>
			</a>`;
				
			})

			$('.xiuxianls .list').html(str)

			// 渲染九宫格单词
			var datas_201506257 = res.data.resultValue[201506257].data
			var str_9gong = ''
			datas_201506257.forEach((item2,index2) => {
				str_9gong += `
				<a class="outer" href="${ item2.link }">
					<span class="inner">
						<b class="text">${ item2.title }</b>
					</span>
				</a>`;
			})
			$('.xiuxianls .words').html(str_9gong)

			// 渲染九宫单词下面的 大背景图片
			var datas_2015051822 = res.data.resultValue[2015051822].data[0]
			var str_big = `<img width="240" height="296" src="${ datas_2015051822.img }" alt="">`;
			$('.xiuxianls .banner').html(str_big)

			
			// 渲染右边的品牌优惠 两张大图
			var datas_2015051824 = res.data.resultValue[2015051824].data
			var str_pin = ''
			datas_2015051824.forEach((item4,index4) => {
				str_pin += `
				<img class="title" src="//img.alicdn.com/tps/i4/TB14fMEIFXXXXc8XFXXzAd2FVXX-150-39.png" alt="">
				<a href="${ item4.link }">
					<img width="150" height="263" src="${ item4.img }" alt="">
				</a>`;
			})

			$('.xiuxianls .promo').html(str_pin)

		},
		error:function(){
			console.log('请求失败')
		}
	})
}


// 请求 个人护理  避孕套数据 数据
// grhlGoods()
function grhlGoods(){
	$.ajax({
		url:'../lib/grhlGoods.json',
		type:'GET',
		dataType:'json',
		success:function(res){
			
			// 渲染中间商品列表
			var datas_2015062522 = res.data.resultValue[2015062522].data
			var str = ''
			datas_2015062522.forEach((item,index) => {
				//如果a标签想跳转 ${ item.link }
				str += `
				<a href="">
				<div class="wrap">
					<img width="160" height="160" src="${ item.img }" alt="${ item.title }">
					<h3></h3>
					<p class="title">${ item.title }</p>
					<p class="o-price">
						<i class="yen">¥</i>
						${ item.price }
					</p>
					<p class="price">
						<i class="yen">¥</i>
						<span class="j_CurPrice">${ item.promPrice }</span>
					</p>

					<div class="ui-cart">
						加
					</div>
				</div>
			</a>`;
			})
			$('.grhl .list').html(str)

			// 渲染九宫格单词
			var datas_2015062523 = res.data.resultValue[2015062523].data
			var str_9gong = ''
			datas_2015062523.forEach((item2,index2) => {
				str_9gong += `
				<a class="outer" href="${ item2.link }">
					<span class="inner">
						<b class="text">${ item2.title }</b>
					</span>
				</a>`;
			})
			$('.grhl .words').html(str_9gong)

			// 渲染九宫单词下面的 大背景图片
			var datas_2015051870 = res.data.resultValue[2015051870].data[0]
			var str_big = `<img width="240" height="296" src="${ datas_2015051870.img }" alt="">`;
			$('.grhl .banner').html(str_big)

			
			// 渲染右边的品牌优惠 两张大图
			var datas_2015051872 = res.data.resultValue[2015051872].data
			var str_pin = ''
			datas_2015051872.forEach((item4,index4) => {
				str_pin += `
				<img class="title" src="//img.alicdn.com/tps/i4/TB14fMEIFXXXXc8XFXXzAd2FVXX-150-39.png" alt="">
				<a href="${ item4.link }">
					<img width="150" height="263" src="${ item4.img }" alt="">
				</a>`;
			})

			$('.grhl .promo').html(str_pin)

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
