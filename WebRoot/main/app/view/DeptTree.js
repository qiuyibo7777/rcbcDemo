Ext.define('AM.view.DeptContextMenu', {
	extend : 'Ext.menu.Menu',
	xtype : 'deptContextMenu',
	items : [ {
		text : '添加子部门',
		id : 'addDept'
//		handler: me.handleNewListClick,
	}, {
		text : '删除',
		id : 'deleteDept'
	}, {
		text : '修改',
		id : 'updateDept'
	}]
});


Ext.define('AM.view.DeptTree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.deptTree',
	defaultRootId : 'root',
	rootVisible : false,
	frame : true,
	xtype : 'deptTree',
	initComponent: function () {
    	var me = this;  
        me.plugins = [me.cellEditingPlugin = Ext.create('Ext.grid.plugin.CellEditing')];
		Ext.applyIf(me, {
			store : 'DeptTreeStore',
			columns:[{
	            xtype: 'treecolumn',
	            dataIndex: 'text',
	            flex: 1,
	            editor: {
	                xtype: 'textfield',
	                selectOnFocus: true,
	                validator: function (value) {
	                    value = Ext.String.trim(value);
	                    return value.length < 1 ? this.blankText : true;
	                }
	            }
	        }]
		});
		me.callParent(arguments);
    }
}) 