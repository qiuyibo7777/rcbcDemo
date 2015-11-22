Ext.define('AM.view.TaskList',{
	extend:'Ext.grid.Panel',
	alias:'widget.taskList',
	id:'taskList',
	columns:[
	Ext.create("Ext.grid.RowNumberer", {}),
	{header : '编号',dataIndex : 'id',width : 100},
	{header : '名称',dataIndex : 'name',width : 100},
	{header : '分配人',dataIndex : 'assignee',width : 100},
	{header : '创建时间',dataIndex : 'createTime',width : 150},
	{header : '持续时间',dataIndex : 'duedate',width : 150},
	{header : '优先级',dataIndex : 'priority',width : 100},
	{header : '描述',dataIndex : 'description',width : 150},
	{header : '操作',dataIndex : 'id',width : 200,renderer :  function(){
					  return '<a href="javascript:void(0);" id="query"><img src="../images/query.png">查看</a>'
							+ '<a href="javascript:void(0);" id="agree"><img src="../images/agree.png">批准</a>'
							+ '<a href="javascript:void(0);" id="disagree"><img src="../images/disagree.png">不批准</a>'
							+ '<a href="javascript:void(0);" id="photo"><img src="../images/photo.png">流程图</a>'    
		}
	}
	],
	tbar : [		
			{
				xtype : 'button',
				text : '申请请假',
				id:'apply'
			}
	],
	dockedItems : [{
			xtype : 'pagingtoolbar',
			store : 'TaskStore',
			dock : 'bottom',
			displayInfo : true
			//plugins : Ext.create('Ext.ux.SlidingPager', {})
		}],
	selType : 'rowmodel',
	columnLines : true,
	store : 'TaskStore',
	initComponent : function() {
		this.callParent(arguments)
	}
})