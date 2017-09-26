Ext.onReady(function(){
	
	var toolbar = new Ext.Toolbar({
		buttons:[{
			text:"新建",
			handler:function(){
				Ext.Msg.alert("","click");
			}
		},{
			text:"text"
		},{
			xtype:"tbseparator"
		},{
			text:"new"
		},"->",{
			text:"右边"
		}," ","-",{
			xtype:"tbspacer"
		},{
			text:"下拉",
			xtype:"tbsplit"
		}]
	})
	var toolbar2= new Ext.Toolbar({
		buttons:[{
			text:"上一页",
			icon:"img/bullet_left.png"
		},{
			text:"下一页",
			icon:"img/bullet_right.png"
		},"->",{
			text:"退出"
		}]
	})

	var panel=new Ext.Panel({
		title:"面板",
		tbar:toolbar,
		bbar:toolbar2,
		tools:[{
			id:"refresh",
			qtip:"刷新",
			handler:function(event,toolEL,panel){
				panel.getUpdater().update({url:"",script:true});
			}
		}],
		width:400,
		titleCollapse:true,
		collapsible:true,
		html:"sadsada</br>iasjdoiajdojasojd <h1 style='color:red'>sssss</h1>",
		renderTo:"cen",
	});

	var w =new Ext.Window({
		title:"window",
		id:"w",
		width:200,
		height:400,
		html:"hello world",
		maximizable:true,
		minimizable:true,
		bodyStyle:"padding:5px",
		//closeAction:"hide",
		items:[
			new Ext.Button({text:"OK"}),
			new Ext.DatePicker({})
		],
		listeners:{
			minimize:function(w){
				
				w.hide(Ext.get("win"));
			},
			close:function(w){
				var delObj = document.getElementById("win");
				delObj.parentNode.parentNode.removeChild(delObj.parentNode);
			}
		}

	}).show(Ext.get("win"));
	//w.show();

	var topBar = new Ext.Toolbar({
		height:25,
		renderTo:Ext.get("cen"),
		items:[
			new Ext.Button({
				text:"window",
				id:"win",
				handler:function(){
					w.show(Ext.get("win"));
				}
			}),
		]
	})
});