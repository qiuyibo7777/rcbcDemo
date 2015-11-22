Ext.define('AM.view.CenterPortal', {
			extend : 'Ext.panel.Panel', 
			alias : 'widget.centerPortal',
			layout : 'border',
			title:'我的桌面',
			items : [
						{
						region : 'center',
						xtype : 'portalpanel',
						layout:'column',
						items : [
								{  
                                    xtype : 'portalcolumn',  
                                    columnWidth : 0.7,  
                                    items : [{
                                                title : '友情链接',
                                                height : 250,
                                                html:"<iframe width=100% height=100% src='hi.html'/>"
                                            },{  
                                                title : '功能链接',  
                                                height : 250,
                                                xtype:'chartPortlet'
                                            } ]  
                                },
                                
                                	{  
                                    xtype : 'portalcolumn',  
                                    columnWidth : 0.3,  
                                    items : [{
                                                title : '功能链接',
                                                height : 250,
                                                html:"<iframe width=100% height=100% sec='Test.html'>"
                                            }, {
                                                title : '最新通知',
                                                height : 250,
                                                autoScroll:true 
                                            }]
					}]
			}]
		})