window.onload = function(){
	var lists = [
        {
            img: 'vans.jpg',
            title: 'Vans范斯 经典系列 Old Skool板鞋运动鞋 低帮经典款男女官方正品',
            id: 2001,
            size: '37',
            oriPrice: 399.99,
            nowPrice: 299.98
        },
        {
            img: 'bag.png',
            title: 'Gucci Dressage Original GG Ganvas Tote Bag 296850 Coffe',
            id: 24234,
            size: 'Defalt',
            oriPrice: 180.96,
            nowPrice: 120.69
        },
        {
            img: 'converse.jpg',
            title: 'CONVERSE匡威官方 Batman 80th 蝙蝠侠80周年联名 高帮 167303C',
            id: 32001,
            size: '37',
            oriPrice: 259.98,
            nowPrice: 209.48
        },
        {
            img: 'bsdon.jpg',
            title: '波司登冬季新款大毛领羽绒服女中长款厚款防寒冬天外套B80141038',
            id: 5884,
            size: '160/84A',
            oriPrice: 1399.99,
            nowPrice: 1099.30
        },
        {
            img: 'olay.jpg',
            title: 'Olay玉兰油大红瓶新生塑颜金纯面霜50g 补水保湿修护紧致护肤霜女',
            id: 6854,
            size: '50g/ml',
            oriPrice: 268.00,
            nowPrice: 200.00
        }
    ];

var tbody = document.querySelector(".shopS");

    var data = JSON.parse(localStorage.getItem('goods'))
    console.log(data)
var tmArr = ['天猫直达','天猫物流','天猫快递','天猫促销','百亿大补帖','38节活动价格']
var x = this.Math.round(this.Math.random() * (tmArr.length - 1)) 
var res = data.map(function(item){
return  `<tr class="shopList"><td class="imgTd"><img  class="shops" src="${item.img}" alt="" srcset=""></td>
<td class="titleTd">
    <h6>${item.title}</h6>
    <span class="tm-zd">${ tmArr[x] }</span>
    
</td>
<td class="Son2">
    <span class="reduce">-</span>
    <input type="text" value="1" class="count">
    <span class="add">+</span>
</td>
<td class="Son3">
    
    <b class="nowPrice">${item.price} 元</b>
</td>
<td class="Son4">
    <span class="priceAll">${item.price} 元</span>
    
</td>
<td class="Son5">
    <img class="del" src="../images/del.png" alt="">
</td></tr>`;
}).join("");
tbody.innerHTML = res;

//总价
function zongjia(){
var trPriceAll = document.querySelectorAll('.priceAll');
var ocTotal = document.getElementById("cTotal");
var trParr = [].slice.call(trPriceAll);
var zong = 0;
for(var i = 0;i<trParr.length;i++){
    var arg = trParr[i].innerText.slice(0,-3)
    zong += arg * 1;
}

ocTotal.innerHTML = zong.toFixed(2)+" 元";
}

//省下来的钱总价
function savezong(){
var trsaveAll = document.querySelectorAll('.saveAll');
var sTotal = document.getElementById("sTotal");
var trSavearr = [].slice.call(trsaveAll);
var saveZong = 0;
for(var i = 0;i<trSavearr.length;i++){
    var str = trSavearr[i].innerText.slice(0,-3)
    var index = str.search(/[0-9]/g)
    saveZong += str.slice(index) * 1;
}
// sTotal.innerHTML = "You save "+saveZong.toFixed(2)+" 元"

}



zongjia()
savezong()
// //点击跳转到详情页面
// var imgTds = document.querySelectorAll('.shops');
// var h6s = document.getElementsByTagName('h6');
// var h6sArr = [].slice.call(h6s);
// h6sArr.forEach(function(item,index){
// item.onclick = function(){
// var id = this.getAttribute('idx');
// window.location.href="xiangqing.html?id="+id;
// }
// })
// for(var i = 0;i<imgTds.length;i++){
// imgTds[i].onclick = function(){
// var id = this.getAttribute('idx')
// console.log(id)
// window.location.href = "xiangqing.html?id="+id;
// }
// }


//购物车功能详情代码
var tr = document.getElementsByClassName('shopList');
var arr = [].slice.call(tr)
arr.forEach(function(item,index){
//事件委托
item.onclick = function(e){
var evt = e.target;

//加量不加价
if(evt.className == "add"){
    var shu = evt.previousElementSibling;
    var bShu = shu.value * 1 + 1;
    shu.value = bShu;
    var yPrice = evt.parentNode.nextElementSibling.firstElementChild.innerText;
    var xPrice = evt.parentNode.nextElementSibling.lastElementChild.innerText;
    var trTotal = evt.parentNode.nextElementSibling.nextElementSibling.firstElementChild;
    //省下来的钱
    var saveMoney = evt.parentNode.nextElementSibling.nextElementSibling.lastElementChild
    saveMoney.innerText ='You save '+((yPrice.slice(0,-3) - xPrice.slice(0,-3)) * shu.value).toFixed(2)+' 元';
    trTotal.innerText =	(shu.value * xPrice.slice(0,-3)).toFixed(2) + " 元"
    
    //总价
    zongjia();
    //省下来总价
    savezong()

}
//减量就加价
if(evt.className == "reduce"){
    var shu = evt.nextElementSibling;
    var bShu = shu.value * 1 - 1;
    shu.value = bShu
    if(shu.value < 0){
        shu.value = 0
    }
    var xPrice = evt.parentNode.nextElementSibling.lastElementChild.innerText;
    var yPrice = evt.parentNode.nextElementSibling.firstElementChild.innerText;
    var trTotal = evt.parentNode.nextElementSibling.nextElementSibling.firstElementChild;
    //省下来的钱
    var saveMoney = evt.parentNode.nextElementSibling.nextElementSibling.lastElementChild
    saveMoney.innerText ='You save '+((yPrice.slice(0,-3) - xPrice.slice(0,-3)) * shu.value).toFixed(2)+' 元';
    trTotal.innerText =	(shu.value * xPrice.slice(0,-3)).toFixed(2) + " 元"
    
    //总价
    zongjia();
    //省下来总价
    savezong()

}


//删除一整行
if(evt.className == "del"){
  
   
        evt.parentNode.parentNode.remove()
        zongjia();
        savezong()
    
}
}
})
//清空购物车
var ocleanCart = document.getElementById('cleanCart');
var tbody = document.querySelector('.shopS')
var cTotal = document.getElementById('cTotal')
ocleanCart.onclick = function(){
var trChild= tbody.childNodes;
var trChildarr = [].slice.call(trChild)
trChildarr.forEach(function(item,index){
item.remove()
})
localStorage.removeItem('goods')
cTotal.innerHTML = "0 元"
}










}