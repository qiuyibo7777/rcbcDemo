Ext.define('AM.view.UserList', {
			extend : 'Ext.grid.Panel',
			alias : 'widget.userList',
			id : 'userListGridPanel',
			xtype : 'userList',
			title : '用户管理',
			viewConfig : {
				loadMask : {
					msg : '数据加载中，请稍后...',
					disabled : false
				}
			},
			initComponent : function() {
				var searchField = Ext.create('Ext.ux.form.SearchField', {
							store : 'UserListStore',
							width : 205,
							emptyText : '请输入要查找的 昵称 ......'
						});
				var me = this;
				Ext.applyIf(me, {
							store : 'UserListStore',
							dockedItems : [{
										id:'toolBar',
										dock : 'top',
										xtype : 'toolbar'
									}],
							selModel : Ext.create('Ext.selection.CheckboxModel'),
							columns : [Ext.create("Ext.grid.RowNumberer", {}),
									{
										header : '编号',
										dataIndex : 'userId',
										width : 100
									}, {
										header : '登录名',
										dataIndex : 'userName',
										width : 100
									}, {
										header : '密码',
										dataIndex : 'password',
										width : 100
									}, {
										header : '部门编号',
										dataIndex : 'deptId',
										width : 100
									}],
							columnLines : true,
							bbar : Ext.create('Ext.PagingToolbar', {
										id : 'userList',
										store : 'UserListStore',
										displayInfo : true,
										displayMsg : '显示记录 {0} - {1} of {2}',
										emptyMsg : "没有记录"
									})
						});
				me.callParent(arguments);
			}
		});