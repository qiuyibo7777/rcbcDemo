Ext.define('AM.view.chat.Chat', {
	extend : 'Ext.window.Window',
	alias : 'widget.Chat',
	// xtype:'userAdd',
	width : 300,
	height : 500,
	title : '聊天',
	icon : '../images/user.png',
	autoShow : true,
	shadow : true,
	toFrontOnShow : true,
	
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
			items : [ 
			{
				layout: {
			        type: 'hbox',
			        align: 'middle'
			    },
			    items: [{
			        xtype: 'image',
			        border:10,
			        src:'../images/chat.png',
			        flex: 1
			    }, {
			        xtype: 'label',
			        text: 'Qyb',
			        flex: 1,
			        margins: '10 0 0 0'
			    }]
			},{
//				layout:'fit',
//				items:[{
//					
//				}]
				xtype:'textfield'
				
			},{
				 layout : 'accordion',
				 defaults: {
			        bodyStyle: 'padding:15px'
			    },
				 layoutConfig: {
			        titleCollapse: false,
			        animate: true,
			        activeOnTop: true
			    },
			    width:'auto',
			    height:'350',
				items : [ {
					layout : 'fit',
					xtype : 'chatUserTree'
				},
				{
					title:'设置'
				}
				]
			}]
		});

		me.callParent(arguments);
	}

});