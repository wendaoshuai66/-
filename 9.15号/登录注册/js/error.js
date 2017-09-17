/*
* @Author: Administrator
* @Date:   2017-09-15 18:38:41
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-15 19:53:38
*/
let fan=document.getElementById('fan')
let t=setInterval(function hui() {
	if(fan.innerText>0){
		fan.innerText=fan.innerText-1
	}else{
		clearInterval(t)
		location.replace('login.html')
	}

	// body...
}, 1000)

