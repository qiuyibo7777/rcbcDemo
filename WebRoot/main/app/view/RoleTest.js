Ext.define('Task', {
    extend: 'Ext.data.Model',
    fields: [
     	{name: 'task',	  type: 'string'},
        {name: 'duration', type: 'string'},
        {name: 'user',  type: 'string'}
    ]
});
var store = Ext.create('Ext.data.TreeStore', {
    model: 'Task',
    proxy : {
		type : 'ajax',
		url : 'app/view/treegrid.json',
		actionMethods : {
			read : 'POST' // 提交的方式是 POST方式
		},
		reader : {
			type : 'json'
		}
	},
	autoLoad : true,
    folderSort: true
});

Ext.define('AM.view.RoleTest', {
			extend : 'Ext.form.Panel',
			alias : 'widget.roleTest',
			requires:['Ext.data.*','Ext.grid.*','Ext.tree.*','Ext.ux.CheckColumn'],
			id : 'roleTest',
			xtype : 'roleTest',
			autoScroll : true,
			labelWidth : 200,
			bodyStyle:"padding:1px",
			defaults : {
				split : true,
				bodyPadding : 4,
				xtype : 'textfield'
			},
			//height:500,
			tbar : [{
						icon : '../images/add.png',
						xtype : 'button',
						text : '保存'
					}],
			items : [{
						xtype : 'fieldset',
						id:'basicInfo',
						animCollapse : true,
						collapsible : true,
						title : '基本信息',
						defaultType : 'textfield',
						layout:'anchor',
						items : [{
									id : 'roleId',
									fieldLabel : '角色编号'
								}, {
									id : 'roleName',
									fieldLabel : '角色名称'
								}]
					}, {
						xtype : 'fieldset',
						animCollapse : true,
						collapsible : true,
						title : '权限信息',
						border : '10 10 10 10',
						autoHeight:true,
						items : [{
							id:'treeGrid',
							xtype:'treepanel',
							title: '权限信息',
							autoWidth:true,
					        height: 300,
					        collapsible: true,
					        useArrows: true,
					        rootVisible: false,
					        store: store,
					        multiSelect: true,
					        singleExpand: true,
							columns: [{
					            xtype: 'treecolumn',
					            text: '菜单分类',
					            flex: 2,
					            sortable: false,
					            dataIndex: 'task'
							},{
								text: '菜单键值',
					            flex: 1,
					            dataIndex: 'duration',
					            sortable: false
			        		 },{
								text: '菜单URL',
					            flex: 1,
					            dataIndex: 'user',
					            sortable: false
			        		 }]
						}]
					}]
				
		})
