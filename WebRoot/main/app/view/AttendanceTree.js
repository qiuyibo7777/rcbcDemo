Ext.define('AM.view.AttendanceTree',{
	extend:'Ext.tree.Panel',
	alias:'widget.attendanceTree',
	rootVisible : false,
	frame : true,
	xtype:'attendanceTree',
	root : {
				text : 'root',
				id : '0',
				leaf : false,
				children : [{
							expanded:true,
							text : '系统管理',
							id : 'attendance',
							leaf : false,
							children : [
									{
										text : '请假管理',
										id : 'askFor',
										leaf : true
									}
									]
						}]
			}
})