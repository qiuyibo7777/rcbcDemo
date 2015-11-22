Ext.define('AM.view.chat.ChatUserTree', {
	extend : 'Ext.tree.Panel',
	alias : 'widget.chatUserTree',
	defaultRootId : 'root',
	rootVisible : false,
	frame : true,
	xtype : 'chatUserTree',
	store : 'ChatUserTreeStore'
}) 