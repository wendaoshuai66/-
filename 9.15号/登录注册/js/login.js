/*
* @Author: Administrator
* @Date:   2017-09-15 17:10:59
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-17 14:04:41
*/
let user=document.getElementById('user')
let pass=document.getElementById('pass')
let tijiao=document.getElementById('tijiao')
/*console.log(user)*/
  tijiao.onclick=function(){
	if(user.value.trim()=='zhangsan' && pass.value.trim()==12345){
		alert('success')
	}else{
		
        location.replace('error.html')
	}
}
