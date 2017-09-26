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

	//proxy
	var proxy =new Ext.data.HttpProxy({url:"../dthealth/web/csp/zxk201701.csp"});

	//Record
	var Record= Ext.data.Record.create([
		{name:"Name",type:"string",mapping:"name"},
		{name:"Sex",type:"string",mapping:"sex"},
		{name:"Birthday",type:"string",mapping:"birthday"},
		{name:"Education",type:"string",mapping:"edu"},
		{name:"Memo",type:"string",mapping:"memo"}
		])

	//reader
	var reader= new Ext.data.JsonReader({totalProperty:"totalProperty",root:"root"},Record)
	
	//Store
	var store = new Ext.data.Store({
		proxy:proxy,
		reader:reader,
		
	});
	store.load({params:{start:0,limit:9}});
	/* 	分页规则：start 搜索起始位  limit 搜索条数  作用于第一页 
	*	PageSize: 每页显示条数
	*	下一页时 start=start+PageSize
	*    
	*  	后台end-1	
	*/

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
		bbar:new Ext.PagingToolbar({
			store:store,
			pageSize:12,
			displayInfo:true,
			displayMsg:"第{0}到{1}条数据，共{2}条",
			emptyMsg:"没有数据"
		}),
	});
 })

