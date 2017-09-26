Ext.onReady(function (){
	var btn = new Ext.Button({
		renderTo:Ext.get(esttest),
		text:"OK",
		type:"submit",
		minWidth:100,
		handler:function(){
			Ext.Msg.alert("BUTTON","is a test");
		}
	});

	var  dp = new Ext.DatePicker({
		renderTo:Ext.getBody(),
		minDate:Date.parseDate("2017-01-01","Y-m-d"),
		maxDate:Date.parseDate("2017-01-01","Y-m-d"),
		value:Date.parseDate("2017-01-01","Y-m-d")
	}); 


});