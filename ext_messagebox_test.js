/*Ext.onReady(function(){    
    var msgBox = Ext.MessageBox.show({    
        title:'提示',    
        msg:'动态更新的进度条和信息文字',    
        modal:true,    
        width:300,    
        progress:true,
        animEl:"esttest",  
        buttons:Ext.MessageBox.YESNOCANCEL,
        icon:Ext.MessageBox.QUESTION
    });

    var i = 0;
    var bar = setInterval(test,1000);
    function test() {
    	var x=i/9;
        msgBox.updateProgress(x,Math.round(x*100)+"% 正在加载"); 
        i++;
        if(i == 10) {
            clearInterval(bar);
        }
    }
});  */  
Ext.onReady(function () {
	var msgBox = Ext.MessageBox.show({    
        title:'提示',    
        msg:'请稍后',    
        modal:true,    
        width:300,    
        progress:true,
        animEl:"esttest",  
        buttons:Ext.MessageBox.YESNOCANCEL,
        icon:Ext.MessageBox.QUESTION
    });

 	for(var i = 1; i < 10; i++){
    	(function(a){
    		setTimeout(function(){
    		var x=a/9;    		
    		msgBox.updateProgress(x,Math.round(x*100)+"% 正在加载");
    		console.log(a);	
    		},1000);
    	})(i);
    }
});
