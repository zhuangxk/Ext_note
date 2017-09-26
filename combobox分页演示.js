Ext.onReady(function() {
	 
/*	Ext.Ajax.request({
		url:"../dthealth/web/csp/ZXK2016.csp",
		method:"post",
		success:function (re,con) {
			res = re.responseText;
			console.log(res);
			var obj =eval('('+res+')');
			console.dir(obj)
		}
	})*/
	


	var proxy=new Ext.data.HttpProxy({url:"../dthealth/web/csp/ZXK2016.csp"});

/*	var city=Ext.data.Record.create([
		{name:"name",type:"string",mapping:"name"},
		{name:"id",type:"int",mapping:"id"}]);
*/
	var cityrecord=new Ext.data.Record.create([
			{name:"id",type:"int",mapping:"id"},
			{name:"name",type:"string",mapping:"name"}
		]);

	var reader = new Ext.data.JsonReader({
		totalProperty:"totalProperty",
		root:"root"
	},cityrecord);

	var store = new Ext.data.Store({
		proxy:proxy,
		reader:reader,
	});
	/*var store = new Ext.data.Store({
		proxy:new Ext.data.HttpProxy({url:"../dthealth/web/csp/ZXK2016.csp"}),
		reader:new Ext.data.JsonReader({
			totalProperty:"totalProperty",
			root:"root",
			fields:[{'name':'name','mapping':'name'},{'name':'id','mapping':'id'}]
		}),
		autoLoad:true,
	});*/






	//console.dir(cityrecord);



	var combo = new Ext.form.ComboBox({
		store:store,
		emptyText:"search...",
		mode:"remote",
		pageSize:5,
		triggerAction:"all",
		displayField:"name",
		valueField:"id",
		renderTo:Ext.get("cen"),
		listWidth:300
	});

})


//houtai后台json
//{totalProperty:20000,root:[{name:'11',id:1},{name:'22',id:2},{name:'33',id:3},{name:'44',id:4},{name:'55',id:5}]}







