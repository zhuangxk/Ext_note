Ext.onReady(function(){
	//复选框选择
	var csm = new Ext.grid.CheckboxSelectionModel();
	//列模型
	var cm = new Ext.grid.ColumnModel({
		singleSelect:true,
		columns:[
		new Ext.grid.RowNumberer(),
		csm,
		{header:'姓名',width:80,dataIndex:"Name",tooltip:"你的名字",
			renderer:function(v){
				if(v=="庄新凯"){
					return "<font color='red'>庄新凯1</font>";}
					else{ return v}
			}},
		{header:"性别",width:40,dataIndex:"Sex",align:"center"},
		{header:"生日",width:100,format:"Y-m-d",dataIndex:"Birthday",renderer:Ext.util.Format.dateRenderer("Y-m-d")},
		{header:"学历",width:80,dataIndex:"Education",align:"center"},
		{id:"memo",header:"备注",dataIndex:"Memo"}]
	});
	//本地数据
	var data =[
	{name:"庄新凯",sex:"男",birthday:Date.parseDate("1991-08-06","Y-m-d"),edu:"本科",memo:"无"},
	{name:"魏王",sex:"男",birthday:Date.parseDate("1999-08-06","Y-m-d"),edu:"本科",memo:"任天堂"},
	{name:"tokyo",sex:"女",birthday:Date.parseDate("1999-08-06","Y-m-d"),edu:"本科",memo:"任天堂"}
				]
	//proxy
	var proxy =new Ext.data.MemoryProxy(data);



	//Record
	var Record= Ext.data.Record.create([
		{name:"Name",type:"string",mapping:"name"},
		{name:"Sex",type:"string",mapping:"sex"},
		{name:"Birthday",type:"string",mapping:"birthday"},
		{name:"Education",type:"string",mapping:"edu"},
		{name:"Memo",type:"string",mapping:"memo"}
		])

	//reader
	var reader= new Ext.data.JsonReader({},Record)
	
	//Store
	var store = new Ext.data.Store({
		proxy:proxy,
		reader:reader,
		
	});
	store.load();

	//Grid
	var grid =new Ext.grid.GridPanel({
		
		width:900,
		autoHeight:true,
		cm:cm,
		sm:csm,
		store:store,
		renderTo:"cen",
		autoExpandColumn:"memo",
		buttonAlign:"center",
		frame:true,
		buttons:[{
				text:"第一行",
				handler:function(){
					var sm = grid.getSelectionModel();
					sm.selectFirstRow();}
			},{
				text:"上一行",
				handler:function(){
					var sm =grid.getSelectionModel();
					sm.selectPrevious(true);}
			},{
				text:"下一行",
				handler:function() {
					var sm=grid.getSelectionModel();
					sm.selectNext();
				},
			},{
				text:"最后一行",
				handler:function(){
					var sm =grid.getSelectionModel();
					sm.selectLastRow();
				}
			},{
				text:"全选",
				handler:function(){
					//var sm = grid.getSelectionModel();
					//sm.selectAll();
					grid.getView().getRow(2).style.backgroundColor="red";
					console.dir(grid.getView().getRow(1))
				}
			},{
				text:"全不选",
				handler:function(){
					var sm = grid.getSelectionModel();
					sm.deselectRange(0,grid.getView().getRows().length-1);
					grid.getView().refresh();
				}
			},{
				text:"反选",
				handler:function(){
					var sm = grid.getSelectionModel();
					for(i = grid.getView().getRows().length-1;i>=0;i--){
						if(sm.isSelected(i)){
							sm.deselectRow(i)
						}else{
							sm.selectRow(i,true)
						}
					}
				}
			},{
				text:"展示",
				handler:function(){
					var sm =grid.getSelectionModel();
					var re="||"
					for(var i=0;i<grid.getView().getRows().length;i++){
						if(sm.isSelected(i)){
							re+=grid.getStore().getAt(i).get("Name")+"||";
						}
					}
					Ext.Msg.alert("你选择的名字",re+"||"+sm.getCount())
				}
			},{
				text:"添加行",
				handler:addrow
			},{
				text:"删除行",
				handler:function(){
					var sm = grid.getSelectionModel();
					for(var i=grid.getView().getRows().length-1;i>=0;i--){
						if(sm.isSelected(i)){
							grid.getStore().remove(grid.getStore().getAt(i));

						}
					}

				}
			}]
	});
	function addrow(){
		var view = grid.getView();
		//var obj= {name:"范丽花",sex:"女",birthday:Date.parseDate("1993-08-06","Y-m-d"),edu:"本科",memo:"newrow"};
		//添加行要在store中添加 Record 实例   而实例化Record 要直接为Record 定义的配置项赋值  并不是写mapping（data的键值）  
		var red1 = new Record({Name:"范丽花",Sex:"女",Birthday:"333",Education:"本科",Memo:"Memo"});
		store.add(red1);
		store.addSorted(new Record({Name:"范丽花2",Sex:"女",Birthday:Date.parseDate("1993-08-06","Y-m-d"),Education:"本科",Memo:"newrow"}));
		store.insert(1,new Record({Name:"范丽花3",Sex:"女",Birthday:Date.parseDate("1993-08-06","Y-m-d"),Education:"本科",Memo:"newrow"}));
		console.dir(store);
		view.refresh();
	}


 })

