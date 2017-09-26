Ext.onReady(function (){

	Ext.get("esttest").slideIn("t",{duration:5});//进入动画

	Ext.get("esttest").shift({width:100,height:100,x:900,y:400,opacity:0.3,duration:5});//动画合集

	Ext.get("esttest").scale(100,100,{duration:5});//改变大小-高度宽度
	
	Ext.get("esttest").highlight("00ff00",{attr:"background-color",duration:2});//高亮显示

	Ext.get("esttest").frame("00ff00",9,{duration:0.2});//扩散波纹效果

	Ext.get("esttest").fadeIn({endOpcity:0.9,duration:9});//透明度渐变 透明方向

	Ext.get("esttest").fadeOut({endOpcity:0,duration:9});//透明度渐变 不透明方向

	Ext.get("esttest").ghost("r",{easing:"easeOut",duration:1});//淡出动画

	Ext.get("esttest").slideOut("b",{duration:10});//退出动画

});