window.onload = function(){
    // 放大镜
    var parmas = this.location.search.slice(1)
    var id = parmas.split("=")[1] * 1
    // console.log(id)

    $.ajax({
        url:'../lib/listsJson/listsGoods.json',
        type:'GET',
        dataType:'json',
        success:function(datas){

            // 返回的是一个数组
            var res = datas.filter(function (item, index) {
                return item.id === id;
            });

            // 使用正则表达式中的replace替换图片像素大小
            var img = res[0].img;//小图
            var imgUrl2 = img.replace(/160x160/g,"400x400");//中图
            var imgUrl3 = img.replace(/160x160/g,"800x800");//大图 
            var imgUrl4 = img.replace(/160x160/g,"60x60");//大图  
            
            
            $('.small_box img').src = imgUrl2
            $('.big_box img').src = imgUrl3


            //写个数组 随机渲染  天猫好货 等等
            var tianmao = ['天猫好货','百亿大补帖','达人推荐','38节热门','天猫直达'] 
            var x = Math.round(Math.random() * (tianmao.length - 1))
            // 随机数
            var y = randomNum(1,10000)
            // 渲染页面 res[0]获得到的是一个对象 要变成数组 才能够用forEach方法
            var str = ''
            res.forEach((item) => {
                str += `
                <div class="small_box">
                    <span class="mask"></span>
                    <span class="float_layer"></span>
                    <img src="${imgUrl2}">
                </div>
                <div class="big_box">
                    <img src="${imgUrl3}">
                </div>
                <div class="img_buttom">
                    <img src="${imgUrl4}">
                </div>

                <div class="tm-clear-info">
                    <h1>${ item.h3 }</h1>
                    <p class="newp">${tianmao[x]}</p>

                    <dl class="actity">
                        <dt class="actity_hd">
                            <img class="actity_img" width="180" height="28" src="//gw.alicdn.com/tfs/TB1T2URvBr0gK0jSZFnXXbRRXXa-180-28.png">
                            此商品活动中，请尽快购买
                        </dt>
                        <dd class="actity_bd">
                            <span class="actity_price">
                                活动价
                                <span>¥</span>
                                <strong>${ item.price }</strong>
                                <img src="//gw.alicdn.com/tfs/TB1zZprxeH2gK0jSZFEXXcqMpXa-65-16.png">
                            </span>
                        </dd>
                    </dl>

                    <div class="yunfei">
                        <span>运费:</span>
                        <span>${ item.price / 100}</span>
                        <img src="//img.alicdn.com/tfs/TB1No7XbvxNTKJjy0FjXXX6yVXa-145-28.png">
                        24：00前付款，预计2日后到达
                    </div>

                    <ul class="sell">
                        <li class="tm_ind">
                            <div class="tm_indcon">
                                <span class="tm_label">月销量 :</span>
                                <span class="tm_count hong">${ item.sum }</span>
                            </div>
                        </li>
                        <li class="tm_ind">
                            <div class="tm_indcon">
                                <span class="tm_label">累计评价 :</span>
                                <span class="tm_count">${ Math.ceil((item.sum * 1 - (item.sum / 2) * 1) / 100) }</span>
                            </div>
                        </li>
                        <li class="tm_ind">
                            <div class="tm_indcon">
                                <span class="tm_label">送天猫积分 :</span>
                                <span class="tm_count lv">${x}</span>
                            </div>
                        </li>
                    </ul>

                    <div class="productNumber">
                        <span>数量</span>
                        <span>
                            <span class="productNumberSettingSpan">
                            <input type="text" value="1" class="productNumberSetting">
                            </span>
                            <span class="arrow">
                                
                                <span class="updown add">+</span>
                               
                                <span class="updownMiddle"> </span>
                                
                                <span class="updown jian">-</span>
                               
                            </span>
                        件</span>
                        <span>库存${y}件</span>
                    </div>
                    <div class="serviceCommitment">
                        <span class="serviceCommitmentDesc">服务承诺</span>
                        <span class="serviceCommitmentLink">
                            <span>正品保证</span>
                            <span>极速退款</span>
                            <span>赠运费险</span>
                            <span>七天无理由退换</span>
                        </span>
                    </div>

                    <div class="chebtn">加入购物车</div>
                </div>
                `;
            })
            
            $('.tm-clear').html(str)


            $(".mask").mouseover(function() {
                $(".float_layer").show()
                $(".big_box").show()
            })
            $(".mask").mouseout(function() {
                $(".float_layer").hide()
                $(".big_box").hide()
            })
    
            $(".mask").mousemove(function(e) {
                // 获取整个头部导航的高度
                var headerH = document.querySelector("#header")
                var bigH = document.querySelector(".big")
                
                //光标距离小图左边的距离
                var l = e.pageX - $(".small_box").offset().left - ($(".float_layer").width() / 2)
                //光标居来小图上边的距离
                var t = e.pageY - $(".small_box").offset().top - ($(".float_layer").height() / 2)
                if(l < 0) {
                    l = 0
                }
                if(l > $(this).width() - $(".float_layer").width()) {
                    l = $(this).width() - $(".float_layer").width()
                }
                if(t < 0) {
                    t = 0
                }
                if(t > $(this).height() - $(".float_layer").height()) {
                    t = $(this).height() - $(".float_layer").height()
                }
    
                $(".float_layer").css({
                    "left": l,
                    "top": t
                })
                var pX = l / ($(".mask").width() - $(".float_layer").width())
                var pY = t / ($(".mask").height() - $(".float_layer").height())
                $(".big_box img").css({
    //				"left": -pX * ($(".big_box img").width() - $(".big_box").width()),
    //				"top": -pY * ($(".big_box img").height() - $(".big_box").height())
                    "left":-l * 2,
                    "top":-t * 2
                })
    
            })



            // 商品详情的数量
           
            $('.add').click(function(){
                var proVal =  $('.productNumberSetting').val() * 1
                var change = proVal + 1
                proVal = change
                $('.productNumberSetting').val(change)
            })
            $('.jian').click(function(){
                var proVal =  $('.productNumberSetting').val() * 1
                var change = proVal - 1
                proVal = change
                
                if(change <= 0){
                    change=0
                }
                $('.productNumberSetting').val(change)
            })


            // 获取加入购物车按钮 
            $('.chebtn').click(function(){
                console.log('加入购物车')
            })

        }
       
    })



    // 封装任意区间的随机数
function randomNum(min, max) {
    // 如果min > max的时候
    if (min > max) {
        return parseInt(Math.random() * (min - max + 1)) + max
    }
    return parseInt(Math.random() * (max - min + 1)) + min;
}

}