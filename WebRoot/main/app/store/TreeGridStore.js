Ext.define('AM.store.TreeGridStore', {
			extend : 'Ext.data.TreeStore',
			model : 'TreeGridModel',
			proxy : {
				type : 'ajax',
				url : 'role/roleTreeGrid.do',
				actionMethods : {
					read : 'POST' // 提交的方式是 POST方式
				},
				reader : {
					type : 'json'
				}
			},
			autoLoad : true
			/*
			root: {
		        expanded: true,
		        task: "总公司",
		        user: "Lin",
		        duration:'duration',
		        children: [
		            { task: "技术部", user: "Xia", duration:'duration',leaf: true },
		            { task: "财务部", user: "Li",  duration:'duration',leaf: true }
		        ]
		    },
		    */
//			folderSort:true,
		});