
window.onload=function(){
       // 预加载图片函数
    setTimeout(getpre,1000);
    timer=setInterval(getpre,3000);
    var pics=new Array(); // 存放图片的数组
    var dots=new Array(); // 存放小圆点的数组
    var banner=document.getElementById('banner');  // 获取 banner 元素
    // 创建图片和小圆点
    // 创建li img标签 然后进行图片的遍历和图片的样式
    for(var i=1;i<=5;i++){
        var lbli=document.createElement('li');  // 创建 li 元素
        var lbimg=document.createElement('img');  // 创建 img 元素

        lbimg.src="../img/album"+i+".jpg";  // 给 img 设置图片路径
        lbimg.style.width="750px"   // 设置图片宽度
        lbimg.style.height="421px"   // 设置图片高度
        lbli.appendChild(lbimg);     // 将 img 添加到 li 中
  
        banner.appendChild(lbli);      // 将 li 添加到 banner 中
        pics.push(lbli);               // 将 li 元素添加到 pics 数组中
        // 设置图片样式
        pics[pics.length-1].style.left="0px";
        // 图片鼠标事件处理
        // 图片点击调用函数
        lbimg.onmouseenter=function(){
            clearInterval(timer);
        }
        // 图片鼠标离开调用函数
        lbimg.onmouseleave=function(){
            timer=setInterval(getpre,3000);
        }    
        var bottomdot=document.createElement("div");
        bottomdot.style.left=140*(i+1)+"px";
        bottomdot.name=i;
        dots.push(bottomdot);
        banner.appendChild(bottomdot);

        if(i>3){
            lbli.id=i-3;
        }else{
            lbli.id=i+2;
        }
        
    }
  // 设置初始图片样式
var len=pics.length-1;
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;


 // 获取下一张图片函数
function getnext(){
    var give_up=pics[len];
    pics.pop();
    pics.unshift(give_up);
    for(var i=0;i<pics.length;i++){
        pics[i].style.zIndex=i;
        pics[i].style.transform="scale(1)";
    }
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;

    dotmov();
    pics[len-2].onclick=function(){
        getnext();
    }
    pics[len].onclick=function(){
        getpre();
    }
}
 // 获取上一张图片函数
function getpre(){
    var give_up=pics[0];
    pics.push(give_up);
    pics.shift();
    for(var i=0;i<pics.length;i++){
        pics[i].style.zIndex=i;
        pics[i].style.transform="scale(1)";
    }
    pics[len-2].style.left="0px";
    pics[len-2].style.opacity=0.5;
    pics[len-3].style.opacity=0;
    pics[len-4].style.opacity=0;
    pics[len-1].style.zIndex=100;
    pics[len-1].style.left="200px";
    pics[len-1].style.transform="scale(1.3)";
    pics[len-1].style.opacity=1;
    pics[len].style.left="400px";
    pics[len].style.opacity=0.5;
    dotmov();
    pics[len-2].onclick=function(){
        getnext();
    }
    pics[len].onclick=function(){
        getpre();
    }
    
}

    // 小圆点移动函数
dots[0].style.background="#FFFF00";
function dotmov(){
    for(var i=0;i<dots.length;i++){
        if(dots[i].name==pics[len-1].id){
            dots[i].style.background="#FF6666";
        }else{
            dots[i].style.background="#FFFF00";
        }
    }
}

}