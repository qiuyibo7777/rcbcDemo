Ext.define('AM.controller.TaskController',{
	extend : "Ext.app.Controller",
	init:function() {
				this.control({
						'taskList':{
							itemclick:function(grid,record,item,index,e,eOpts){
								var taskId = record.get('id');
								var att = e.getTarget().attributes.id;
								var action = att.value
								if (action == 'query') {  
							    	this.showTaskForm(taskId);
							    }else if (action == 'agree') {  
							    	this.operateTask(grid,record,taskId,"confirmTask.do");
							    }else if(action == 'disagree'){
							    	this.operateTask(grid,record,taskId,"rejectTask.do");
							    }else if(action == 'photo'){
							    	this.showAskForProcessPhoto(taskId);
							    }
							}
						},
						 'taskList button[id=apply]' : {
						 	click:function(){
						 		Ext.create("AM.view.TaskForm", {}).show();
						 	}
						},
						'taskForm button[id=submit]' : {
							click : function(cfg) {
								var basic = cfg.up('form').getForm();
								basic.submit({
									    clientValidation: true,
									    url: 'addTask.do',
									    method:"POST",
									    success: function(form, action) {
									    var grid = Ext.create("AM.view.TaskList");
										grid.getStore().load()
									      Ext.Msg.show({ 
											title : 'Success', 
											msg : 'Success', 
											buttons: Ext.Msg.OK,
											closable: false 
											}); 
									    },
									    failure: function(form, action) {
									    	Ext.Msg.alert('Faiulre',"插入失败");
									    }
									});
							}
						},
						'deptTree' : {
							itemclick : function(tree, record, item, index, e, options) {
										var grid = Ext.create("AM.view.DeptList");
										var treeNode = record.raw;
										var id = treeNode.deptId;
										var st = grid.getStore();
										console.debug(st)
										st.setProxy({
													type : 'ajax',
													url : 'deptListView.do',
													reader : {
														type : 'json'
													}
												})
										st.load({
													params : {
														"id" : id
													}
												});
										}
								},
						'systemTree' : {
							itemclick : function(tree, record, item, index, e, options){
								var treeNode = record.raw;
								var id = treeNode.id;
								if(id =='dept'){
									this.openDeptPage("system-panel","部门管理")
								}else if(id == 'user'){
									this.openUserPage("system-panel","用户管理")
								}else if(id == 'role'){
									this.openRolePage("system-panel","角色管理")
								}
							}
						},
						'attendanceTree' : {
							itemclick:function(tree, record, item, index, e, options){
								var treeNode = record.raw;
								var id = treeNode.id;
								if(id =='askFor'){
									this.openAskForPage("attendace-panel","请假管理")
								}else if(id == 'role'){
									
								}else if(id == 'user'){
									
								}
							}
						},
						'toolButtons button[id=attendancemanager]' : {
							click:function(cfg){
								this.openAttendancePage("center-panel"," 请假管理");
							}
						},
						'toolButtons button[id=systemmanager]' : {
							click:function(cfg){
								alert(1)
								this.openSystemPage("center-panel","系统管理");
							}
						}
					})
	},
	
	//创建tabpanel公用方法
	createOrFindTab:function(cmp,title,comp){
		var tabs = Ext.getCmp(cmp)
        tabs.add({
            title: title,
            closable:true,
            layout:'fit',
            items:[comp]
        }).show();
        tabs.setActiveTab(tabs);//激活	
	},
	
	//打开Attendance页面
	openAttendancePage:function(cmp,title){
		var attendaceView = Ext.getCmp("attendaceView");
		if(!attendaceView){
			attendaceView = Ext.create("Ext.panel.Panel",{
					layout: 'border',
					id:'attendaceView',
					defaults : {
						split:true,
						bodyStyle : 'padding:0px'
					},
					items:[
					{
						title : '功能导航',
						region : 'west',
						xtype : 'panel',
						margins : '5 2 5 5',
						width : 200,
						id : 'west-attendace',
						layout : 'fit',
						xtype:'attendanceTree'
					},
					{
					xtype:'tabpanel',
					layout : 'fit',
					id:'attendace-panel',
					region:'center'
			}
			]
			})
		}
		this.createOrFindTab(cmp,title,attendaceView)
	},
	
	//打开AskFor页面
	openAskForPage:function(cmp,title){
		var askForView = Ext.getCmp("askForView");
		if(!askForView){
			askForView = Ext.create("Ext.panel.Panel",{
				layout:'border',
				id:'askForView',
				defaults : {
					split:true,
					bodyStyle : 'padding:0px'
				},
				items:[
					{
					region : 'west',
					xtype : 'panel',
					margins : '5 2 5 5',
					width : 200,
					id : 'west-askFor',
					layout : 'fit',
					xtype:'roleAccordion'
					},
					{
					title : '任务列表',
					region : 'center',
					xtype : 'panel',
					id : 'center-askFor',
					margins : '5 5 5 0',
					layout:'fit',
					xtype:'taskList'
					}
				]
			})
		}
		this.createOrFindTab(cmp,title,askForView)
	},
	
	//打开Dept页面
	openDeptPage:function(cmp,title){
		var deptView = Ext.getCmp("deptView");
		if(!deptView){
			deptView = Ext.create("Ext.panel.Panel",{
				layout:'border',
				id:'deptView',
				defaults : {
					split:true,
					bodyStyle : 'padding:0px'
				},
				items:[
				{
					region:'west',
					margins : '5 2 5 5',
					width : 200,
					id : 'west-dept',
					layout : 'fit',
					id : 'dept-Tree',
					xtype:'deptTree'
				},
				{
					region:'center',
					id : 'center-dept',
					margins : '5 5 5 0',
					layout:'fit',
					id : 'dept-grid',
					xtype:'deptList'
				},{
					
				}
				]
			})
		}
		this.createOrFindTab(cmp,title,deptView)
	},
	
	
	//打开User页面
	openUserPage:function(cmp,title){
		var userView = Ext.getCmp("userView");
		if(!userView){
			deptView = Ext.create("Ext.panel.Panel",{
				layout:'border',
				id:'userView',
				defaults : {
					split:true,
					bodyStyle : 'padding:0px'
				},
				items:[
				{
					title:'部门列表',
					region:'west',
					margins : '5 2 5 5',
					width : 200,
					id : 'west-dept',
					layout : 'fit',
					id : 'dept-Tree',
					xtype:'deptTree'
				},
				{
					title:'用户列表',
					region:'center',
					id : 'center-dept',
					margins : '5 5 5 0',
					layout:'fit',
					id : 'dept-grid',
					xtype:'userList'
				},{
					
				}
				]
			})
		}
		this.createOrFindTab(cmp,title,deptView)
	},
	
	//打开System页面
	openSystemPage:function(cmp,title){
		var systemView = Ext.getCmp("systemView");
		if(!systemView){
			systemView = Ext.create("Ext.panel.Panel",{
					layout: 'border',
					id:'systemView',
					defaults : {
						split:true,
						bodyStyle : 'padding:0px'
					},
					items:[
					{
						title : '功能导航',
						region : 'west',
						xtype : 'panel',
						margins : '5 2 5 5',
						width : 200,
						id : 'west-system',
						layout : 'fit',
						items : [{
									id : 'system-Tree',
									xtype:'systemTree'
								}]
					},
					{
					xtype:'tabpanel',
					layout : 'fit',
					id:'system-panel',
					region:'center'
			}
			]
			})
		}
		this.createOrFindTab(cmp,title,systemView)
	},
	
	//打开角色管理界面
	openRolePage:function(cmp,title){
		var roleConfigView = Ext.getCmp("roleConfigView");
		console.debug(roleConfigView)
		if(!roleConfigView){
			roleConfigView = Ext.create("Ext.panel.Panel",{
					layout: 'border',
					id:'roleConfigView',
					defaults : {
						split:true,
						bodyStyle : 'padding:0px'
					},
					items:[{
							title:'角色列表',
							region:'west',
							margins : '5 2 5 5',
							width : 200,
							layout : 'fit',
							id : 'roleConfig-Tree',
							xtype:'roleConfigTree'
						},
						{
							title:'角色信息',
							region:'center',
							margins : '5 5 5 0',
							layout:'fit',
							id : 'roleConfig-form',
							xtype:'roleConfigForm'
						}
					]
			})
		}
		this.createOrFindTab(cmp,title,roleConfigView)
	},
	
	//弹出Form表单页面
	showTaskForm : function(taskId){
		var window = Ext.create("AM.view.TaskForm");
		var basic = window.getComponent('formTask').getForm();
		basic.load({
			url: 'taskDetail.do',
		    params: {
		       id:taskId
		    },
		    method:"POST",
		    success: function(form, action) {
		        window.show();
		    },
		     failure: function(form, action) {
				Ext.Msg.alert('Faiulre',"加载失败");
			}
		})
	},
	
	//操作Task
	operateTask : function(grid,rec,taskId,url){
		var st = grid.getStore()
		Ext.Ajax.request({
				url : url,
				params : {
					id : taskId
				},
				method : 'POST',
				success : function(response, opts) {
					Ext.Array.each(rec,function(record) {
							st.remove(record)
						})
					Ext.Msg.alert("success", "操作成功");
				},
				 failure: function(form, action) {
			    	Ext.Msg.alert('Faiulre',"操作失败");
			    }
		})
	},
	
	//查看process photo
	showAskForProcessPhoto:function(taskId){
			var	win =	Ext.getCmp(taskId);
			if(win){//防止二次创建,减小资源消耗
					win.show();
					return;
				}
			Ext.create('Ext.window.Window', {
							    title: '请假流程图',
							    height: 600,
							    id:taskId,
							    width: 600,
							    layout: 'fit',
							    items: {
							        border: false,
							        align:'center',
							      	autoLoad:'./process/askFor.jsp?id='+taskId
							    }
							}).show();
			},
	
	views:[
	'RoleConfigTree',
	'RoleConfigForm',
	'UserList',
	'TaskView',
	'TaskList',
	'TaskForm',
	'RoleAccordion',
	'ToolButtons',
	'DeptTree',
	'DeptList',
	'SystemTree',
	'AttendanceTree',
	'CenterPortal'
	],
	stores:[
	'UserListStore',
	'TaskStore',
	'DeptStore',
	'DeptListStore'
	],
	models:[
	'UserListModel',
	'TaskModel',
	'DeptModel',
	'DeptListModel'
	]
})