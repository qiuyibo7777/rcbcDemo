Ext.define('AM.store.DeptTreeStore', {
	extend : 'Ext.data.TreeStore',
	model : 'DeptTreeModel',
	fields : [ 'id', 'text' ],
	proxy : {
		type : 'ajax',
		url : 'dept/treeNode.do',
		actionMethods : {
			read : 'POST' // 提交的方式是 POST方式
	},
	reader : {
		type : 'json'
	}
	},
	autoLoad : true
})