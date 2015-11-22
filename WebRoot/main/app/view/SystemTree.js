Ext.define('AM.view.SystemTree',{
	extend:'Ext.tree.Panel',
	alias:'widget.systemTree',
	rootVisible : false,
	frame : true,
	xtype:'systemTree',
	store:'SystemTreeStore'
	/*
	initComponent : function() {
		var systemTreeStore = Ext.create(
				'AM.store.SystemTreeStore', {
					storeId : 'systemTreeStore' + currentUserId
				});
		var systemTreeStore = this;
		Ext.apply(systemTreeStore, {
			rootVisible : false,
			store : systemTreeStore
		});
		moduleTree.callParent(arguments);
	}
	*/
})