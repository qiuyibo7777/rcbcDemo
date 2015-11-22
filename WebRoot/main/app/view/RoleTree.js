Ext.define('AM.view.RoleTree', {
			extend : 'Ext.tree.Panel',
			alias : 'widget.roleTree',
			defaultRootId : 'root',
			rootVisible:false,
			frame : true,
			store : 'RoleTreeStore',
			id : 'roleTree',
			xtype : 'roleTree'
//			root: {
//		        text: "角色列表",
//		        expanded: true
//		    }
				
				
		})