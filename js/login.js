// // 背景的偏移量
// var back=document.getElementById('back');
// window.onmousemove = function(event){
//     var x=-event.clientX/90;
//     var y=-event.clientY/130;
//     back.style.backgroundPositionX = x+"px";
//     back.style.backgroundPositionY = y+"px";
// }


// 获取账号和密码的值
var account=document.getElementById('account');
var password=document.getElementById('password');
// 创建一个登录的函数
function login(){
	// 判断两个不能为空
    if(account.value==""||password.value==""){
        alert("账号或密码不能为空");
        return false;
    }
	//判断 
    else if(account.value!="123"||password.value!="123456"){    
        alert("账号或密码错误");
        return false;
    }
}


