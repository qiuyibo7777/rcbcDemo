Ext.define('AM.view.DeptList',{
	extend:'Ext.grid.Panel',
	alias:'widget.deptList',
	xtype:'deptList',
	columns:[
	Ext.create("Ext.grid.RowNumberer", {}),
	{header : '部门编号',dataIndex : 'dept_id',width : 100},
	{header : '部门名称',dataIndex : 'dept_name',width : 100},
	{header : '上级部门编号',dataIndex : 'p_id',width : 100}
	],
	tbar : [		
			{
				xtype : 'button',
				text : '添加部门',
				id:'newDept'
			}
	],
	bbar : [{
			xtype : 'pagingtoolbar',
			store : 'DeptListStore',
			dock : 'bottom',
			displayInfo : true
			//plugins : Ext.create('Ext.ux.SlidingPager', {})
		}],
	selType : 'rowmodel',
	columnLines : true,
	store : 'DeptListStore',
	initComponent : function() {
		this.callParent(arguments)
	}
})