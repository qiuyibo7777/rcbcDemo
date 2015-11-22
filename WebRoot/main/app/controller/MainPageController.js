Ext.define('AM.controller.MainPageController', {
			extend : "Ext.app.Controller",
			views : 
			[
			'operationInfo.SystemParameters',
			'operationInfo.CPUPieChart',
			'operationInfo.CPULineChart',
			'operationInfo.OperationInfoPortal',
			'RoleTest',
			'Chart',
			'SystemTree',
			'DeptList',
			'DeptTree',
			'UserList',
			'RoleTree',
			'RoleConfigForm',
			'DeptContextMenu',
			'chat.ChatUserTree'
			],
			stores : 
			[
			'SystemTreeStore',
			'TreeGridStore',
			'DeptTreeStore',
			'DeptListStore',
			'UserListStore',
			'RoleTreeStore',
			'ChatUserTreeStore'
			],
			models : 
			[
			'SystemTreeModel',
			'TreeGridModel',
			'DeptTreeModel',
			'DeptListModel',
			'UserListModel',
			'RoleTreeModel',
			'ChatUserTreeModel'
			],
			
			refs : [{
						ref : 'mainPageView',
						selector : 'mainPageView'
					},{
						ref : 'contextMenu',
						selector : 'deptContextMenu',
						xtype : 'deptContextMenu',
						autoCreate : true
					},{
						ref : 'userList',
						selector : 'userList'
					}],
			//初始化界面
			initFrameUI : function() {
				this.getMainPageView().getComponent('center-panel').add(Ext
						.create('AM.view.CenterPortal'));
				this.getMainPageView().getComponent('north-tool').add(Ext
						.create('AM.view.ToolButtons'));
			},
			init : function() {
				this.control({
							'mainPageView' : {
								afterrender : this.initFrameUI
							},
							'toolButtons button[id=systemsetting]' : {
								click : function(cfg) {
									this.openSystemPage("center-panel", "系统管理");
								}
							},
							'toolButtons button[id=personmanager]' : {
								click : function(cfg){
									Ext.create("AM.view.chat.Chat");
								}
							},
							'systemTree' : {
								itemclick : function(tree, record, item, index,
										e, options) {
									var treeNode = record.raw;
									var id = treeNode.id;
									if (id == 'UserManager') {
										this.openUserPage("system-panel",
												"用户管理")
									} else if (id == 'RoleManager') {
										this.openRolePage("system-panel",
												"角色管理")
									}else if(id == 'operationInfo'){
										this.openOperationInfo("system-panel",
												"运行信息")
									}else if(id == 'dept'){
										this.openDeptPage("system-panel",
												"部门管理")
									}
								}
							},
							'userList button[id=UserAdd]':{
								click:function(cfg){
									Ext.create('AM.view.UserAdd');
								}
							},
							'userList button[id=UserUpdate]':{
								click:function(cfg){
									var grid = cfg.findParentByType("gridpanel");
									var data = grid.getSelectionModel().getSelection()
									if (data.length == 0) {
										Ext.Msg.alert('提示', '请先选择一条记录')
									} else {
										var st = grid.getStore();
										var ids = [];
										Ext.Array.each(data,function(record) {
													ids.push(record.get('userId'))
												});
										var userAdd = Ext.create('AM.view.UserAdd');
										var form  =userAdd.down('form').getForm();
										var userId = form.findField('userId');
										userId.setValue('111');
										console.log(form);
										
									}
								}
							},
							'userList':{
								itemdblclick:function(cfg){
									alert(1);
								}
							},
							'userAdd button[id=submit]':{
								click:function(cfg){
									var form = cfg.up('form').getForm();
									var userId = form.findField('userId');
									var url = 'user/userAdd.do';
									var success = '添加成功';
									var failure = '添加失败';
									if(userId){
										url = 'user/userUpdate.do';
										success = '修改成功';
										failure = '修改失败';
									}
									if (form.isValid()) {
										form.submit({
													url : url,
													method : 'POST',
													waitTitle : "提示",
													waitMsg : '正在提交数据，请稍后 ……',
													success : function(form, action) {
														var grid = Ext.create("AM.view.UserList");
														grid.getStore().load()
														Ext.Msg.alert('提示',success);
													},
													failure : function(form, action) {
														Ext.Msg.alert('提示',failure);
													}
												});
									} else {
										Ext.Msg.alert('错误提示', '数据不合法，请仔细检查并修改！');	
									}
								}
							},
							'userList button[id=UserDelete]' : {
								click : function(cfg) {
									var grid = cfg.findParentByType("gridpanel");
									var data = grid.getSelectionModel().getSelection()
									if (data.length == 0) {
										Ext.Msg.alert('提示', '请先选择一条记录')
									} else {
										var st = grid.getStore()
										var ids = []
										Ext.Array.each(data,function(record) {
													ids.push(record.get('userId'))
												})
										Ext.Ajax.request({
														url : 'user/userDelete.do',
														method : 'POST',
														params : {
															userId :ids[0]
														},
														waitMsg : '正在提交数据，请稍后 ……',
														success : function(response, opts) {
															Ext.Array.each(data,function(record) {
																	st.remove(record)
																})
															Ext.Msg.alert("success", "删除成功");
														},
														 failure: function(form, action) {
													    	Ext.Msg.alert('Faiulre',"删除失败");
													    }
													})
									}
								}
							},
//							'deptTree' : {
//								itemclick : this.LoadUserPanel,
//								itemcontextmenu : this.showDeptContextMenu
//							},
							'roleTree':{
								itemclick:this.LoadRolePanel
							},
							'userList':{
								afterrender:this.initButtonControl
							},
							'chatUserTree':{
								itemdblclick : this.initChatWindow
							},
							'deptContextMenu menuitem[id=addDept]':{
								click:function(item){
									var model = this.getContextMenu().getModel();
									var data = model.data;
									var leaf = data.leaf;
									
									
									var view = this.getContextMenu().getView();
									var selectionModel = view.getSelectionModel();
									var selectedList = selectionModel.getSelection()[0]; 
									
									var edit = Ext.getCmp('west_dept_user').cellEditingPlugin;
									var parentList = leaf?selectedList.parentNode : selectedList;
				                    
//				                    if(selectedList.isLeaf())
//				                    {
//				                        if(!leaf) //判断是添加子节点还是兄弟节点
//				                        {
//				                           MyTreeStore.getNodeById(selectedList.data.id).set('leaf', false);
//				                        }
//				                    }
								    
									
								    
								    var guid = "";
						            for (var i = 1; i <= 32; i++) {
						                var n = Math.floor(Math.random() * 16.0).toString(16);
						                guid += n;
						                if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
						                    guid += "-";
						            }
						            
								    children = Ext.create('AM.model.DeptTreeModel',{
				                        id: guid,
				                        text: 'children',
				                        leaf: 'true'
				                    });
									
								    parentList.appendChild(children);
//				                    
				                    if (parentList.isExpanded()) {			                    	
			                            selectionModel.select(children);
			                            console.debug()
			                            console.debug(children);
			                            edit.startEdit(children,0);
			                        }
				                    
								    
//								    expandAndEdit();
				                    
//				                    if (listTree.getView().isVisible(true)) {
//				                        expandAndEdit();
//				                    } else {
//				                        listTree.on('expand', function onExpand() {
//				                            expandAndEdit();
//				                            listTree.un('expand', onExpand);
//				                        });
//				                        listTree.expand();
//				                    }
				                    
				                    expandAndEdit = function () {
				                        if (parentList.isExpanded()) {
				                            selectionModel.select(children);
				                            cellEditingPlugin.startEdit(children, 0);
				                        } else {
				                            listTree.on('afteritemexpand', function startEdit(list) {
				                                if (list === parentList) {
				                                    selectionModel.select(newList);
				                                    cellEditingPlugin.startEdit(newList, 0);
				                                    // remove the afterexpand event listener
				                                    listTree.un('afteritemexpand', startEdit);
				                                }
				                            });
				                            parentList.expand();
				                        }
				                    };
				                    
//									if(leaf){
//										
//									}else{
//										var root = Ext.getCmp('west_dept_user').getRootNode();
//										var child = root.getChildAt(1);
//										var parent = child.appendChild({
//										    text: 'Parent 1',
//										    expanded: true,
//										    children: [{
//										        leaf: true
//										    }]
//										});
//									}
								}
							}
						});
			},
			initButtonControl:function(obj){
				Ext.Ajax.request({
						url : "buttoncontrol.do",
						params : {
                    				userId : currentUserId
                    			},
						method : 'POST',
						async: false,//同步
						success : function(response, opts) {
							var temp = Ext.decode(response.responseText);
							for ( var i = 0; i < temp.length; i++) {
									var button = new Ext.Button(temp[i]);
									obj.getDockedComponent('toolBar').add(button);
									obj.getDockedComponent('toolBar').add("-");
								}
						},
						 failure: function(response, opts) {
					    	Ext.Msg.alert('Faiulre',"操作失败ToolButtons");
					    }
					})
			},
			// 打开系统管理页面
			openSystemPage : function(cmp, title) {
				var systemView = Ext.getCmp("systemView");
				if (!systemView) {
					systemView = Ext.create("Ext.panel.Panel", {
								layout : 'border',
								id : 'systemView',
								defaults : {
									split : true,
									bodyStyle : 'padding:0px'
								},
								items : [{
											title : '功能导航',
											region : 'west',
											margins : '5 2 5 5',
											width : 200,
											id : 'west-system',
											xtype:'systemTree',
											layout : 'fit'
										}, {
											xtype : 'tabpanel',
											layout : 'fit',
											id : 'system-panel',
											region : 'center'
										}]
							})
				this.createOrFindTab(cmp, title, systemView)
				}
			},

			// 打开Dept页面
			openDeptPage : function(cmp, title) {
				var deptView = Ext.getCmp("deptView");
				if (!deptView) {
					deptView = Ext.create("Ext.panel.Panel", {
						layout : 'border',
						id : 'deptView',
						defaults : {
							split : true,
							bodyStyle : 'padding:0px'
						},
						items : [
						{
							id : 'west_dept_dept',
							title : '部门列表',
							region : 'west',
							margins : '5 2 5 5',
							width : 200,
							layout : 'fit',
							xtype : 'deptTree'
						},

						{
							id : 'center-dept',
							title : '部门列表',
							region : 'center',
							margins : '5 5 5 0',
							layout : 'fit',
							xtype : 'deptList'
						} ]
					})
					this.createOrFindTab(cmp, title, deptView)
				}
			},
			
			
			// 打开用户管理页面
			openUserPage : function(cmp, title) {
				var userView = Ext.getCmp("userView");
				if (!userView) {
					userView = Ext.create("Ext.panel.Panel", {
								layout : 'border',
								id : 'userView',
								defaults : {
									split : true,
									bodyStyle : 'padding:0px'
								},
								
								items : [
										{
											id : 'west_dept_user',
											title : '部门列表',
											region : 'west',
											margins : '5 2 5 5',
											width : 200,
											layout : 'fit',
											xtype : 'deptTree'
										},
										{
											id : 'center_user',
											title : '用户列表',
											region : 'center',
											margins : '5 5 5 0',
											layout : 'fit',
											xtype : 'userList'
										}
										
										]
										
							})
				this.createOrFindTab(cmp, title, userView)
				}
			},
			
			//打开角色管理界面
			openRolePage:function(cmp,title){
				var roleConfigView = Ext.getCmp("roleConfigView");
				if(!roleConfigView){
					roleConfigView = Ext.create("Ext.panel.Panel",{
							layout: 'border',
							id:'roleConfigView',
							defaults : {
								split:true,
								bodyStyle : 'padding:0px'
							},
							items:[
								{
									id : 'role-Tree',
									title:'角色列表',
									region:'west',
									margins : '5 2 5 5',
									width : 200,
									layout : 'fit',
									xtype:'roleTree'
								},
								{
									id : 'roleConfig-form',
									title:'角色信息',
									region:'center',
									margins : '5 5 5 0',
									xtype:'roleConfigForm'
								}
							]
					})
				this.createOrFindTab(cmp,title,roleConfigView)
				}
			},
			
			openOperationInfo:function(cmp,title){
				var operationInfoView = Ext.getCmp("operationInfoView");
				if(!operationInfoView){
					operationInfoView = Ext.create("Ext.panel.Panel",{
							id:'operationInfoView',
							items:[{
								xtype:'operationInfoPortal'
							}]
					})
				this.createOrFindTab(cmp,title,operationInfoView)
				}
				
			},
	
			// 创建tabpanel公用方法
			createOrFindTab : function(cmp, title, comp) {
				var tabs = Ext.getCmp(cmp)
				tabs.add({
								title : title,
								closable : true,
								layout : 'fit',
								items : [comp]
							}).show();
				tabs.setActiveTab(tabs);//激活	
			},
			
			//创建DeptTree的右键菜单
			showDeptContextMenu: function(view, model, node, rowIndex, e) {
//			        var contextMenu = this.getContextMenu()
//			        contextMenu.setList(list);
				    this.getContextMenu().setView(view);
					this.getContextMenu().setModel(model);
					this.getContextMenu().showAt(e.getX(), e.getY());
			        e.preventDefault();
			},
			
			//按照部门加载用户
			LoadUserPanel : function(tree, record, item, index, e) {					
				var treeNode = record.raw;
				var id = treeNode.id;
				var userPanel=this.getUserList();
				//userPanel.setTitle(rec.get('text') + ' _' + rec.get(''));
				var userStore = userPanel.getStore();
				var url = 'user/listByDept.do?deptId='+id;
				userStore.proxy.url= url
				userStore.load();
			},
			
			//按照角色角色加载角色信息
			LoadRolePanel:function(view,rec,item,index,e){
				var roleId = Ext.getCmp('roleId');
				var roleName = Ext.getCmp('roleName')
				roleId.setValue(rec.get('roleId'))
				roleName.setValue(rec.get('text'))
			},

			//修改数据
			editData : function(view, rec, item, index, e) {
				alert(1)
				var editWindow = Ext.create('AM.view.UserAdd',{
							title : '修改'
						});
				editWindow.down('form').loadRecord(rec);
			},
			
			initChatWindow : function(tree, record, item, index,
					e, options){
				var treeNode = record.raw;
				var id = treeNode.id;
				var name = treeNode.name;
				Ext.create('AM.view.chat.ChatWindow');
			}
		});