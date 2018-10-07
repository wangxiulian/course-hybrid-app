function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj,null)[attr];
    }
}
function animate(obj,json,callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var isStop = true;
        for(var attr in json){
            var now = 0;
            if(attr =='opacity'){
                now = parseInt(getStyle(obj,attr)*100);
            }else{
                now = parseInt(getStyle(obj,attr));
            }
            var speed = (json[attr] - now) / 10;
            speed = speed>0?Math.ceil(speed):Math.floor(speed);
            var cur = now + speed;
            if(attr == 'opacity'){
                if("opacity" in obj.style) {
                    obj.style.opacity = cur / 100;
                }
                else{  
                    
                    obj.style.filter = "alpha(opacity = "+cur+")";  
                }
            }else{
                obj.style[attr] = cur + 'px';
            }
            if(json[attr] !== now){
                isStop = false;
            }
        }
        if(isStop){
            clearInterval(obj.timer);
            callback&&callback();
        }
    },5)
}

var box = document.getElementById(box);
var main = document.getElementById(main);
var imgs = main.children;
var both = document.getElementById(both);

for(i=0;i<imgs.length;i++){
    var span = document.createElement("span");
    span.className = "both";
    span.innerHTML = imgs.length-i;
    both.insertBefore(span,both.children[i]);
}

function SetSq(){
    for(i=1;i<span.length-1;i++){
        span[i].className = "both";
    }
    span[num+1].className = "both now";
}

var num = 0;
for(var k in span){
    span[k].onclick = function(){
        if(this.className == 'left'){
            animate(imgs[num],{left:scrollWidth});
            --num<0?num=imgs.length-1:num;
            imgs[num].style.left = -scrollWidth + 'px';
            animate(imgs[num],{left:0});
            SetSq();
        }else if(this.className == 'right'){
            autopaly();
        }else{
            var next = this.innerHTML - 1;
            if(next>num){
                animate(imgs[num],{left:-scrollWidth});
                imgs[next].style.left = scrollWidth + 'px';                
            }else{
                animate(imgs[num],{left:scrollWidth});
                imgs[next].style.left = -scrollWidth + 'px';
            }
            num = next;
            animate(imgs[num],{left:0});
            SetSq();
        }
    }
}



var timer = null;
timer = setInterval(autopaly,2000);
function autopaly(){
    animate(imgs[num],{left:-scrollWidth});
    ++num>imgs.length-1?num=0:num;
    imgs[num].style.left = scrollWidth + 'px';
    animate(imgs[num],{left:0});
    SetSq();
}

box.onmouseover = function(){
    clearInterval(timer);
}
box.onmouseout = function(){
    clearInterval(timer);
    timer = setInterval(autopaly,2000);
}