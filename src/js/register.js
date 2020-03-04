window.onload = function() {
    var oUser = document.getElementById('username');
    var oPwd = document.getElementById('password');
    var oBtn = document.getElementById('btn');


    $("#btn").click(function(){
        var getU = $("#username").val();
        var getP = $("#password").val();//点击按钮时获取文本框中的值
        
        if(getU == '' || getP == ''){
            alert("请输入用户名或密码");
            
        }else{
            
            var xhr = new XMLHttpRequest()
            xhr.open('GET','./php/register.php?username='+getU+'&password='+getP)
            xhr.onload = function(){
              var data = JSON.parse(xhr.responseText)
              alert(data.message)
              if(data.message == "注册成功"){
                  window.location.href="../pages/login.html"
              }
            }
            xhr.send()
        }
    });




};