Ext.define('AM.view.SystemFunction', {
			extend : 'Ext.container.ButtonGroup',
			alias : 'widget.systemFunction',
			id : 'systemfunction',
			title : '系统功能',
			autoHeight:true,
			autoWidth:true,
			initComponent : function() {

				var buttonGroup = this;

				Ext.apply(buttonGroup, {
							items : [{
										id : 'setSystemfunction',
										xtype:'panel',
										frame:true,
										layout : 'hbox',
										width:126
									}]
						});
				buttonGroup.callParent(arguments)
			}
		})