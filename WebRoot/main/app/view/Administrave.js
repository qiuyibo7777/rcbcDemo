Ext.define('AM.view.Administrave', {
			extend : 'Ext.container.ButtonGroup',
			alias : 'widget.administrave',
			id : 'administrative',
			title : '行政管理',
			
			initComponent : function() {

				var administrative = this;

				Ext.apply(administrative, {
							items : [{	
										id : 'setAdministrave',
										xtype:'panel',
										frame:true,
										layout : 'hbox',
										width:126
									}]
						});
				administrative.callParent(arguments)
			}
			
			/*
			items : [{
						id : 'attendancemanager',
						text : '请假管理',
						scale : 'large',
						rowspan : 3,
						icon : '../images/attendancemanager.png',
						iconAlign : 'top'
					}, {
							id : 'meetingmanager',
						text : '会议管理',
						scale : 'large',
						rowspan : 3,
						icon : '../images/meetingmanager.png',
						iconAlign : 'top'
					}]
			*/
		})