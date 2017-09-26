Ext.onReady(function (){
	var XT2 = new Ext.XTemplate(
	"<ul class={a}>",
		"<li>{b:date(\"Y-m-d\")}</li>",
		"<li>{c:ellipsis(12)}</li>",
		"<li>{d:uppercase}</li>",
	"</ul>"
	);
	var B = {
		a:"a",b:new Date(),c:"ejiejwiofjiowejfeoiwjfosieij",d:"sadsad"
	}
	XT2.append("test",B);
	XT2.compile();

});