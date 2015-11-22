Ext.define('AM.view.TaskView', {
			extend : 'Ext.panel.Panel',
			heigth:"100%",
			width:"100%",
			alias : 'widget.taskView',
			defaults : {
				split:true,
				bodyStyle : 'padding:0px'
			},
			layout:'border',
			items : [
			{
				region:'center',
				xtype:'tabpanel',
				id:'center-panel',
				layout:'fit',
				items:[{
			     		title:'我的桌面',
			            closable: false,
			            id:'center-portal',
			            xtype:'centerPortal'
			        }]
			},
			{
				region:'north',
				xtype:'panel',
				id:'north-tool',
				layout:'fit',
				items:[{
					id:'tools-buttons',
					xtype:'toolButtons'
				}]
			}]
		})