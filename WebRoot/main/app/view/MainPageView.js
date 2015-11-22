Ext.define('AM.view.MainPageView', {
			extend : 'Ext.container.Viewport',
			width : "100%",
			id : 'mainPageView',
			alias : 'widget.mainPageView',
			defaults : {
				split : true,
				bodyStyle : 'padding:0px'
			},
			layout : 'absolute',
			autoHeight:true,
			layout : 'border',
			autoHeight:true,
			items : [{
						id : 'center-panel',
						region : 'center',
						xtype : 'tabpanel',
						layout : 'fit'
					}, {
						id : 'north-tool',
						region : 'north',
						xtype : 'panel',
						layout : 'fit'
					}]
		})
