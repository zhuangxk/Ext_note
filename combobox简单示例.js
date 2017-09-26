
Ext.onReady(function (){
	var citydata=[[1,"潍坊"],[2,"泰安"],[3,"临沂"],[4,"青岛"],[5,"济南"],[6,"日照"]];//定义元数据
	var proxy = new Ext.data.MemoryProxy(citydata);			//创建Proxy
//-----------------------------------------------------------------------------------
var cityrecord=new Ext.data.Record.create([
			{name:"id",type:"int",mapping:0},
			{name:"name",type:"string",mapping:1}
		]);														//定义Record
	var reader = new Ext.data.ArrayReader({},cityrecord);		//Reader
//----------------------------------------------------------------------------------
	var store = new Ext.data.Store({
		proxy:proxy,
		reader:reader,
		autoLoad:true
	});															//创建Store
//----------------------------------------------------------------------------------
	var combobox = new Ext.form.ComboBox({
		renderTo:Ext.getBody(),
		store:store,
		displayField:"name",
		valueField:"id",
		mode:"local",
		emptyText:"山东",
		typeAhead:true,
		triggerAction:"all",
	})
	
	combobox.on("change",function() {
		Ext.Msg.alert(combobox.getValue(),combobox.getRawValue());
	
		
	})
});






