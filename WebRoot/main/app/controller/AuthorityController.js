Ext.define('AM.controller.AuthorityController', {
			extend : "Ext.app.Controller",
			views : [],
			stores : [],
			models : [],
			refs : [{
						ref : 'toolButtons',
						selector:'toolButtons'
					},{
						ref : 'systemFunction',
						selector:'systemFunction'
					},{
						ref : 'administrave',
						selector:'administrave'
					}],
			init : function() {
				this.control({
							'toolButtons panel[id=setToolButtons]' : {
								afterrender : this.initToolButtons
							},
							'systemFunction panel[id=setSystemfunction]' : {
								afterrender : this.initSystemfunction
							},
							'administrave panel[id=setAdministrave]' : {
								afterrender : this.initAdministrave
							}
						});
			},
			initToolButtons:function(obj){
				Ext.Ajax.request({
						url : "toolButton.do",
						params : {
                    				userId : currentUserId
                    			},
						method : 'POST',
						success : function(response, opts) {
							var temp = Ext.decode(response.responseText);
							for ( var i = 0; i < temp.length; i++) {
									obj.add(Ext.create(temp[i].xtype));
								}
						},
						 failure: function(response, opts) {
					    	Ext.Msg.alert('Faiulre',"操作失败ToolButtons");
					    }
					})
			},
			initSystemfunction:function(obj){
				Ext.Ajax.request({
						url : "systemFunction.do",
						params : {
                    				userId : currentUserId
                    			},
						method : 'POST',
						success : function(response, opts) {
							var temp = Ext.decode(response.responseText);
							for ( var i = 0; i < temp.length; i++) {
									var button = new Ext.Button(temp[i])
									obj.add(button);
								}
						},
						 failure: function(response, opts) {
					    	Ext.Msg.alert('Faiulre',"操作失败Systemfunction");
					    }
					})
			},
			initAdministrave:function(obj){
				Ext.Ajax.request({
						url : "administrave.do",
						params : {
                    				userId : currentUserId
                    			},
						method : 'POST',
						success : function(response, opts) {
							var temp = Ext.decode(response.responseText);
							for ( var i = 0; i < temp.length; i++) {
									var button = new Ext.Button(temp[i])
									obj.add(button);
								}
						},
						 failure: function(response, opts) {
					    	Ext.Msg.alert('Faiulre',"操作失败Administrave");
					    }
					})
			}
		});