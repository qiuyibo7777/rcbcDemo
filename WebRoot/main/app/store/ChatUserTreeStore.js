Ext.define('AM.store.ChatUserTreeStore', {
	extend : 'Ext.data.TreeStore',
	model : 'ChatUserTreeModel',
	fields : [ 'id', 'text' ],
	proxy : {
		type : 'ajax',
		url : 'chat/chatUserTree.do',
		actionMethods : {
			read : 'POST' // 提交的方式是 POST方式
	},
	reader : {
		type : 'json'
	}
	},
	autoLoad : true
})