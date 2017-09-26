Ext.onReady(function(){
	var f  = new Ext.form.FormPanel({
		title:"欢迎登陆",
		url:"../dthealth/web/csp/ZXK2016.csp",
		method:"post",
		baseParams:{extra:"attach",id:100},
		width:300,
		height:150,
		bodyStyle:"padding:6px",
		labelAlign:"right",
		hideLabel:false,
		renderTo:Ext.getBody(),
		frame:true,
		items:[
			{
				name:"UserName",
				xtype:"textfield",
				fieldLabel:"用户名",
				allowBlank:false
			},
			new Ext.form.TextField({
				name:"test",
				allowBlank:false,
				fieldLabel:"测试"
			}),
			{
				name:"password",
				xtype:"textfield",
				inputType:"password",
				fieldLabel:"密码",
				allowBlank:false
			}
		],
		buttons:[{
			text:"确定",
			handler:function(){
				/*var name = f.getForm().findField("UserName").getValue();
				var password = f.getForm().findField("password").getValue();
				Ext.Msg.alert("提示","用户名"+name+"密码"+password);*/
				f.getForm().submit({
					success:function(){
						Ext.Msg.alert("提示","提交成功");
					},
					failure:function(){
						Ext.Msg.alert("提示","提交失败");
					}
				})
			}},{
				text:"重置",
				handler:function(){
					f.getForm().reset();
				}
			}

		]

	});

	
})

