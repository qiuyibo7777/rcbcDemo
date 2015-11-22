Ext.define("AM.view.TaskForm", {
	extend : 'Ext.window.Window',
	alias : 'widget.taskForm',
	width : 600,
	height : 400,
	items : [{
					title : '请假单',
					id : 'formTask',
					xtype : 'form',
					region : 'center',
					layout : {
						type : 'table',
						columns : 2
					},
					defaultType : 'textfield',
					bodyStyle : 'padding:5 0 0 5',
					defaults : {
						labelSeparator : ':',
						labelWidth : 50,
						width : 200,
						allowBlank : true,
						msgTarget : 'side',
						selectOnFocus : true,
						labelAlign : 'left'
					},
					items : [{
								fieldLabel : '申请人',
								name : 'name'
							}, {
								name : 'position',
								fieldLabel : '职位'
							}, {
								name : 'time',
								fieldLabel : '申请时间'
							}, {
								name : 'leaveDay',
								fieldLabel : '请假天数'
							}, {
								name : 'content',
								fieldLabel : '请假内容',
								xtype : 'textareafield',
								width : 500,
								height : 200,
								colspan : 3
							}],
					buttons : [{
								id : "submit",
								text : "保存"
							}, {
								id : "reset",
								text : "重置"
							}]
				}
	],
	initComponent : function() {
		this.callParent(arguments)
	}
})