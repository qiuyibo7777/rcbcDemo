Ext.define('AM.store.UserListStore', {
	extend : 'Ext.data.Store',
	model : 'AM.model.UserListModel',
	proxy : {
		type : 'ajax',
		url : 'user/userList.do',
		actionMethods : {
			read : 'POST' // 提交的方式是 POST方式
	},
	reader : {
		type : 'json'
	}
	},
	autoLoad : true
})