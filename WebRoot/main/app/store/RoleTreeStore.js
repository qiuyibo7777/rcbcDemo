Ext.define('AM.store.RoleTreeStore', {
			extend : 'Ext.data.TreeStore',
			model : 'RoleTreeModel',
			fields : ['roleId', 'text'],
			proxy : {
				type : 'ajax',
				url : 'role/roleTreeView.do',
				actionMethods : {
					read : 'POST' // 提交的方式是 POST方式
				},
				reader : {
					type : 'json'
				}
			},
			autoLoad : true
		})