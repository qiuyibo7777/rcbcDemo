Ext.define('Task', {
    extend: 'Ext.data.Model',
    fields: [
     	{name: 'attribute',	  type: 'string'},
        {name: 'value', type: 'string'}
    ]
});
var store = Ext.create('Ext.data.Store', {
    model: 'Task',
    proxy : {
		type : 'ajax',
		url : 'chart/systemParameters.do',
		actionMethods : {
			read : 'POST' // 提交的方式是 POST方式
		},
		reader : {
			type : 'json'
		}
	},
	autoLoad : true,
    folderSort: true
});


Ext.define('AM.view.operationInfo.SystemParameters',{
	extend:'Ext.grid.Panel',
	alias:'widget.systemParameters',
	id:'systemParameters',
	xtype:'systemParameters',
	columns:[
	Ext.create("Ext.grid.RowNumberer", {}),
		{header : '属性',dataIndex : 'attribute',width : 100},
		{header : '值',dataIndex : 'value',width : 200}
	],
	selType : 'rowmodel',
	columnLines : true,
	store : store,
	initComponent : function() {
		this.callParent(arguments)
	}
})