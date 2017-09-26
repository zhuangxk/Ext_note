Ext.onReady(function (){
	// 看完了才知道 这些玩意 其实很麻烦 还不如原生的js
	var str ="从前，有很多文字，可是现在有一个人给剪掉了";
	var v1 = undefined;
	var v2 ;
	var v3 = "<a href = 'wwww'>click</a>";
	var v4 = "      tokyo       ";
	var v5 ="ABCDEFGHIJK";
	var v6="abcdefg";
	var v7="abCdEdGjkj";
	var v8=new Date();
	var v9 = "<script> var v5 ='ABCDEFGHIJK';var v6='abcdefg'; </script> 5555";
	var v10=1024;


	var ellipsis = Ext.util.Format.ellipsis(str,10);//省略多余字符串

	var undef = Ext.util.Format.undef(v1);//转换undefined为空

	var defaultValue=Ext.util.Format.defaultValue(v2,"v2");//检查是否是空值
	
	var htmlEncode=Ext.util.Format.htmlEncode(v3); //让html代码以字符形式显示

	var htmlDecode=Ext.util.Format.htmlDecode(htmlEncode); //将字符还原为html代码

	var trim = Ext.util.Format.trim(v4);//除去字符串两端空格

	var substr = Ext.util.Format.substr(v5,3,3);//取子串

	var lowercase =Ext.util.Format.lowercase(v5);//转换小写

	var uppercase =Ext.util.Format.uppercase(v6);//转换大写

	var capitalize =Ext.util.Format.capitalize(v7);//首字母大写  其余小写

	var date =Ext.util.Format.date(v8,"Y-m-d H:i:s");// 转换指定值为 特定的时间格式

	var stripTags=Ext.util.Format.stripTags(v3); //剥离html标签

	var stripScripts=Ext.util.Format.stripScripts(v9); //除去 script 标签 及其内容

	var fileSize=Ext.util.Format.fileSize(2324342); //格式化文件大小


	//Ext.Msg.alert("ellipsis",ellipsis); 
	//Ext.Msg.alert("v1",undef);
	//Ext.Msg.alert("v2",defaultValue);
	//Ext.Msg.alert("v3",htmlEncode);
	//Ext.Msg.alert("v3",htmlDecode);
	//alert(trim);
	//Ext.Msg.alert("v4",trim);//看不出来效果
	//alert(v9);

	Ext.Msg.alert("v9",fileSize);
	
});
