Ext.define('AM.view.RoleAccordion',{
	extend:'Ext.panel.Panel',
	id:'roleAccordion',
	alias:'widget.roleAccordion',
    width : 300,
    height: 300,
    layout:'accordion',
    defaults: {
        bodyStyle: 'padding:15px'
    },
    layoutConfig: {
        titleCollapse: false,
        animate: true,
        activeOnTop: true
    },
     items: [{
        title: '角色类型',
    	xtype:'treepanel',
    	layout:'absolute',
    	rootVisible : false,
		frame : true,
		border: true,//没有边框  
		root : {
				text : 'root',
				id : '0',
				expanded: true,
				leaf : false,
				children : [{
							leaf : true,
							text : '普通用户',
							icon:'../images/user.png',
							id : 'Illidan'
							}, {
							leaf : true,
							text : '经理',
							icon:'../images/manager.png',
							id : 'Thrall'
							}, {
							leaf : true,
							text : '老板',
							icon:'../images/boss.png',
							id : 'LichKing'
							}
						]
			},
		listeners:{
        itemclick : function(tree, record, item, index, e, options) {
				var grid = Ext.create("AM.view.TaskList");
				var treeNode = record.raw;
				var name = treeNode.id;
				var text = treeNode.text;
				var st = grid.getStore();
				st.setProxy({
							type : 'ajax',
							url : 'taskList.do',
							reader : {
								type : 'json'
							}
						})
				st.load({params : {"name" : name}
						});
				}
			}
   		 }
    ]
})
