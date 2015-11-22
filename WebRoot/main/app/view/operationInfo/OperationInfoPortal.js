Ext.define('AM.view.operationInfo.OperationInfoPortal', {
			extend : 'Ext.panel.Panel', 
			alias : 'widget.operationInfoPortal',
			xtype:'operationInfoPortal',
			id:'operationInfoPortal',
			layout : 'border',
			autoScroll:true,
			items : [
						{
						region : 'center',
						xtype : 'portalpanel',
						layout:'column',
						autoScroll:true,
						items : [
								{  
                                    xtype : 'portalcolumn',  
                                    columnWidth : 0.7,  
                                    items : [{
                                                title : '新闻动态',
                                                height : 250,
                                                xtype:'cpuLineChart'
                                            },{
                                                title : '功能链接',  
                                                height : 250,
                                                xtype:'systemParameters'
                                            } ]  
                                },
                                
                                	{  
                                    xtype : 'portalcolumn',  
                                    columnWidth : 0.3,  
                                    items : [{
                                                title : '功能链接',
                                                height : 250,
                                                xtype:'cpuPieChart'
                                            }, {
                                                title : '最新通知',
                                                height : 250
                                            }]
					}]
			}]
		})