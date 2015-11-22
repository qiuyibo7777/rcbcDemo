Ext.define('AM.view.ToolButtons', {
			extend : 'Ext.panel.Panel',
			alias : 'widget.toolButtons',
			id : 'toolButtons',
			autoHeight:true,
			style : 'margin-top:3px',
			bodyStyle : 'padding:5px',
			autoScroll : false,
			initComponent : function() {

				var me = this;

				Ext.apply(me, {
							items : [{
										id : 'setToolButtons',
										xtype : 'panel',
										frame : true,
										layout : 'hbox',
										bodyStyle : 'padding:5px',
										autoDestroy : true
									}]
						});
				me.callParent(arguments)
			}
		})