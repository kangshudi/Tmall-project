$(window).ready(function(){

    var flag = true

    var list2 = []

    getList()
    function getList(){

        $.ajax({
            url:'../lib/listsJson/listsGoods.json',
            type:'GET',
            dataType:'json',
            success:function(data){

                $('.M-box3').pagination({
                    pageCount: Math.ceil(data.length / 20), // 总页数 = 数组长度 / 每页显示的条数
                    current: 1, // 当前页
                    jump: true,
                    coping: true,
                    homePage: '首页', // 首页按钮的文本
                    endPage: '末页', // 末页按钮的文本
                    prevContent: '上页',
                    nextContent: '下页',
                    callback: function (api) { // 当你切换页面的时候会触发
                      // api.getCurrent() 获取当前是第几页
                      // console.log(api.getCurrent())
                      let curr = api.getCurrent()
        
                      // console.log(curr)
                      // 根据是第几页, 从我的总数组里面筛选出一部分数据
                      //   slice 方法包前不包后
                      var list = data.slice((curr - 1) * 20, curr * 20)
                    //   console.log(list)
                      // slice 不改变原始数组, 只是从数组里面拿到一些内容
                      // splice 方法才是改变原始数组, 从原始数组里面删除
                        // 这是list就只有被切割的20条数据  list = data

                      // 3-2. 每次使用分页器切换的时候渲染一次
                      bindHtml(list)
                    }
                  })

                // 把第一页的数据进行渲染
                  bindHtml(data.slice(0, 20))
             
                  list2 = data
            }
           
        })

    }


    function bindHtml(list){
        var str = ''
        list.forEach((item,index) => {
            str += `
            <li class="product">
            <div class="productInfo">
    
                <div class="product-img">
                    <a href="${ item.link }">
                        <img src="${ item.img }" alt="">
                    </a>
                </div>
    
                <h3 class="product-title">
                    <a href="${ item.link }">
                        ${ item.h3 }
                    </a>
                </h3>
    
                <div class="item-summary">
                    <div class="item-sum">
                        <span>周销量：</span>
                        <strong>${ item.sum }</strong>
                    </div>
    
                    <div class="item-price">
                        <span class="ui-price">
                            <span class="price-icon">¥</span>
                            <strong>${ item.price }</strong>
                        </span>
                    </div>
    
                    <a class="productInfo-cart" href="${ item.link }">
                        <i class="iconfont icon-tianmaochaoshi-gouwuche"></i>
                    </a>
                </div>
    
            </div>
        </li>
            `;
        })
        $('.product-list').html(str)
    }



     // 2. 价格排序
     var btn = document.querySelector('.price-sort')
     btn.onclick = function () {
       // 让准备好的变量改变  这个值取反 最后在赋值给这个值
       flag = !flag
        // console.log(flag)
       // 不管是什么都要把数组重组
       list2.sort(function (a, b) {
         if (flag === true) {
            //  降序
           return a.price - b.price
         } else {
            //  升序
           return b.price - a.price
         }
       })
 
       // console.log(list)
 
       $('.M-box3').pagination({
         pageCount: Math.ceil(list2.length / 20), // 总页数
         current: 1, // 当前页
         jump: true,
         coping: true,
         homePage: '首页', // 首页按钮的文本
         endPage: '末页', // 末页按钮的文本
         prevContent: '上页',
         nextContent: '下页',
         callback: function (api) { // 当你切换页面的时候会触发
           let curr = api.getCurrent()
           // console.log(curr)
           var list = list2.slice((curr - 1) * 20, curr * 20)
           // 3-2. 每次使用分页器切换的时候渲染一次
           bindHtml(list)
         }
       })
 
       // 3. 先把第一页的数据渲染一次
       bindHtml(list2.slice(0, 20))
     }


    //  销量排序
    var btn = document.querySelector('.sum-sort')
    btn.onclick = function () {
      // 让准备好的变量改变
      flag = !flag

      // 不管是什么都要把数组重组
      list2.sort(function (a, b) {
        if (flag === true) {
          return a.sum - b.sum
        } else {
          return b.sum - a.sum
        }
      })

      // console.log(list)

      $('.M-box3').pagination({
        pageCount: Math.ceil(list2.length / 20), // 总页数
        current: 1, // 当前页
        jump: true,
        coping: true,
        homePage: '首页', // 首页按钮的文本
        endPage: '末页', // 末页按钮的文本
        prevContent: '上页',
        nextContent: '下页',
        callback: function (api) { // 当你切换页面的时候会触发
          let curr = api.getCurrent()
          // console.log(curr)
          var list = list2.slice((curr - 1) * 20, curr * 20)
          // 3-2. 每次使用分页器切换的时候渲染一次
          bindHtml(list)
        }
      })

      // 3. 先把第一页的数据渲染一次
      bindHtml(list2.slice(0, 20))
    }






})


























window.onload = function(){
    // 获得避孕套数据
    // var li = document.querySelectorAll(".product-list .product")
    // var arr =[];
    // for(var i = 0;i < li.length;i++){
    //     var o = {};
    //     var img = li[i].querySelector(".product-img img").src;
    //     var link = li[i].querySelector(".product-img a").href;
    //     var h3 = li[i].querySelector(".product-title a").innerText;
    //     var sum = li[i].querySelector(".item-sum strong").innerText;
    //     var price = li[i].querySelector(".item-price .ui-price strong").innerText;

       
    //     o.img = img;
    //     o.link = link;
    //     o.h3 = h3;
    //     o.sum = sum;
    //     o.price = price;
    //     arr.push(o);

    // }

    // JSON.stringify(arr)


}