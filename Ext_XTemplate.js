Ext.onReady(function (){

	var XT = new Ext.XTemplate(
	"<ul class={0}>",
		"<li>{1}</li>",
		"<li>{2}</li>",
		"<li>{3}</li>",
	"</ul>"
	);
	var A = new Array();
	A[0]="22";
	A[1]="dhua";
	A[2]="333";
	A[3]="444";
	XT.append("test",A);
	XT.compile();

	var XT2 = new Ext.XTemplate(
	"<ul class={a}>",
		"<li>{b}</li>",
		"<li>{c}</li>",
		"<li>{d}</li>",
	"</ul>"
	);
	var B = {
		a:"a",b:"b",c:"c",d:"67"

	}
	XT2.append("test",B);
	XT2.compile();

});
