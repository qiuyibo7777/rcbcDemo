Ext.define('AM.store.SystemTreeStore', {
			extend : 'Ext.data.TreeStore',
			model:'SystemTreeModel',
			fields : ['id', 'text'],
			proxy : {
				type : 'ajax',
				url : 'systemSetting.do',//请求后台MainFunctionController.java的systemManager.do
				actionMethods : {
					read : 'POST' // 提交的方式是POST方式
				},
				reader : {
					type : 'json'
				}
			},
			autoLoad : true
			/*
			root : {
				text : 'root',
				id : '0',
				leaf : false,
				children : [{
							expanded : true,
							text : '功能导航',
							id : 'system',
							leaf : false,
							children : [{
										text : '用户管理',
										id : 'user',
										leaf : true
									}, {
										text : '角色管理',
										id : 'role',
										leaf : true
									}]
						}]
			}
			*/
		})