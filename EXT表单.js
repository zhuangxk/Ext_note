Ext.onReady(function(){
	//姓名 文本框
	var name= new Ext.form.TextField({
		name:"name",
		fieldLabel:"<font color='red'>姓名</font>",
		width:200,
		allowBlank:false,
		regex:/^\w{6,}$/,
		//invalidClass:"myvalid",
		//invalidText :"222",
		focusClass:"myfocus",
		//validationEvent:false,
		//validateOnBlur:false,
		//validationDelay:2000

	});
	//密码 密码框
	var password = new Ext.form.TextField({
		id:"password",
		name:"password",
		fieldLabel:"密码",
		width:200,
		minLength:6,
		minLengthText:6,
		inputType:"password"
	}); 

	//Radio 性别
	var sexBoy= new Ext.form.Radio({
		name:"sex",
		inputValue:"男",
		boxLabel:"男"
	});
	var sexGril =new Ext.form.Radio({
		name:"sex",
		inputValue:"女",
		boxLabel:"女",
		width:150
	});
	// 性别分组
	var grpsex =new Ext.form.RadioGroup({
		name:"grpsex",
		fieldLabel:"性别",
		items:[sexBoy,sexGril],
		width:100
	});
	// 出生日期
	var birthday =new Ext.form.DateField({
		name:"birthday",
		fieldLabel:"性别",
		width:200,
		format:"Y-m-d",
		value:new Date()
	});
	// 爱好
	var hobby1 = new Ext.form.Checkbox({
		name:"hobby",
		inputValue:"钓鱼",
		boxLabel:"钓鱼",
		checked:true
	});
	var hobby2 = new Ext.form.Checkbox({
		name:"hobby",
		inputValue:"唱歌",
		boxLabel:"唱歌",
		
	});
	var hobby3 = new Ext.form.Checkbox({
		name:"hobby",
		inputValue:"健身",
		boxLabel:"健身",
		
	});
	//爱好分组
	var grphobby =new Ext.form.CheckboxGroup({
		name:"hobbygrp",
		fieldLabel:"爱好",
		width:200,
		items:[hobby1,hobby2,hobby3]
	});
	//最高学历 数据
	var data = [[1,"博士"],[2,"硕士"],[4,"学士"]];
	var proxy = new Ext.data.MemoryProxy(data);
	var record = new Ext.data.Record.create([
			{name:"id",type:"int",mapping:0},
			{name:"name",type:"string",mapping:1}
		]);
	var reader= new Ext.data.ArrayReader({},record);
	var store= new Ext.data.Store({
		proxy:proxy,
		reader:reader
	});
	store.load();

	var edu =new Ext.form.ComboBox({
		name:"edu",
		fieldLabel:"最高学历",
		store:store,
		mode:"local",
		triggerAction:"all",
		emptyText:"请选择学历",
		displayField:"name",
		valueField:"id"
	});
	//喜欢的数
	var numlove =new Ext.form.NumberField({
		name:"numlove",
		fieldLabel:"喜欢的数字"
	});
	//地址
	var areaAddress =new Ext.form.TextArea({
		name:"address",
		fieldLabel:"住址",
		width:500,
		height:50
	});

	//上班时间
	var timeWork =new Ext.form.TimeField({
		name:"timeWork",
		fieldLabel:"上班时间",
		increment:30,
		format:"H-i-s"
	});
	//个人简介
	var htmlIntro= new Ext.form.HtmlEditor({
		name:"htmlIntro",
		fieldLabel:"个人简介",
		enableSourceEdit:false,
		height:150,
	});
	//提交按钮
	var submit =new Ext.Button({
		text:"提交",
		handler:function(){
			f.getForm().submit({
				success:function(form,action){
					form.items.each(function(field){
						if(field.isFormField){
							alert(field.getName()+"="+field.getValue());
						}
					})

				},
				failure:function(){
					Ext.Msg.alert("","失败");
				}
			})

		}
	});
	//重置按钮
	var  reset = new Ext.Button({
		text:"重置",
		tooltip:"这是重置按钮",
		tooltipType:"title",
		handler:function(){

		}
	});
	var f = new Ext.form.FormPanel({
		url:"../dthealth/web/csp/ZXK2016.csp",
		method:"post",
		renderTo:"cen",
		title:"详细信息",
		style:"padding:5px",
		frame:true,
		labelAlign:"right",
		width:700,
		autoHeight:true,
		items:[name,password,grpsex,birthday,grphobby,edu,numlove,areaAddress,timeWork,htmlIntro],
		buttons:[submit,reset]

	});
 })

