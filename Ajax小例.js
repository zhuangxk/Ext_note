/*·open()：建立到服务器的新请求。 
·send()：向服务器发送请求。 
·abort()：退出当前请求。 
·readyState：提供当前 HTML 的就绪状态。 
·responseText：服务器返回的请求响应文本。 
老版本IE
		new ActiveXObject("Msxml2.XMLHTTP");
		new ActiveXObject("Microsoft.XMLHTTP");
escape() 转码函数

*/
function createXHR () {
	xmlHttp =false;
	try{
		xmlHttp = new XMLHttpRequest();
	}catch(failed){
		xmlHttp=false;
	}
	if(!xmlHttp){
		alert("xmlHttp init failed");
	}
	return xmlHttp;
}


document.getElementById("btn").onclick=function(){

	//xmlHttp = new XMLHttpRequest();
	var xmlHttp=createXHR();

	var url= "remote.txt";

	xmlHttp.open("HEAD",url,true); 

	xmlHttp.onreadystatechange=updatePage;

	xmlHttp.send(null);

}

function updatePage() {
		
	//alert(i + "\n"+"status:"+xmlHttp.status +"\n readyState："+xmlHttp.readyState+"    "+	xmlHttp.responseText);
	if(xmlHttp.readyState=4){
		document.getElementById("out").value = xmlHttp.responseText;
		var obj =xmlHttp.getAllResponseHeaders();
		
		
	}
}