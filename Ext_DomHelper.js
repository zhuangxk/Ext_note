Ext.DomHelper.insertHtml("beforeEnd", Ext.get("test").dom, "<div>我是新元素1</div>");//位置，节点，元素

	Ext.DomHelper.insertBefore("test","<div>我是节点前面新元素2</div>");//节点前插入

	Ext.DomHelper.insertAfter("test","<div>我是节点后边新元素3</div>");//节点后插入

	Ext.DomHelper.insertFirst("test","<div>我是节点里边第一个元素</div>");//插入第一个子元素

	Ext.DomHelper.append("test","<div>我是节点里边最后一个元素</div>");//插入最后一个子元素

	setTimeout(function(){
		Ext.DomHelper.overwrite("test","我还是标准");
	},2000);