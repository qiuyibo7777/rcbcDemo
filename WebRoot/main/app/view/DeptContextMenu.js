Ext.define('AM.view.DeptContextMenu', {
	extend : 'Ext.menu.Menu',
	xtype : 'deptContextMenu',
	items : [ {
		text : '添加子部门',
		id : 'addDept'
	}, {
		text : '删除',
		id : 'deleteDept'
	}, {
		text : '修改',
		id : 'updateDept'
	}],

	setModel : function(model) {
		this.model = model;
	},
	getModel : function() {
		return this.model;
	},	
	
	setView : function(view) {
		this.view = view;
	},
	getView : function() {
		return this.view;
	}	
});