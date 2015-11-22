Ext.define('Task', {
    extend: 'Ext.data.Model',
    fields: [
     	{name: 'resId',	  type: 'string'},
        {name: 'resName', type: 'string'},
        {name: 'resKey',  type: 'string'},
        {name: 'resUrl',  type: 'string'},
        {name: 'resType', type: 'string'},
        {name: 'parentId',type: 'string'},
        {name: 'checked',type: 'string'}
    ]
});
var store = Ext.create('Ext.data.TreeStore', {
    model: 'Task',
    proxy : {
		type : 'ajax',
		url : 'role/roleTreeGrid.do',
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

Ext.tree.Panel.override({
	getChecked:function(){
	alert(1)
	var view = this.getView();
	if(view.lockedView){
		view = view.lockedView;
	}
	return view.getChecked();
}
});

var treegrid = new Ext.tree.TreePanel({
	id:'treeGrid',
	autoWidth:true,
    height: 300,
    collapsible: true,
    useArrows: true,
    title:'TEST',
    rootVisible: false,
    store: store,
    singleExpand: false,//单独展开
	columns: [{
        xtype: 'treecolumn',
        text: '菜单分类',
        flex: 2,
        sortable: false,
        dataIndex: 'resName'
	},{
		text: '菜单键值',
        flex: 1,
        dataIndex: 'resKey',
        sortable: false
	 },{
		text: '菜单URL',
        flex: 1, 
        dataIndex: 'resUrl',
        sortable: false
	 },{
        text: '菜单类型',
        flex: 1,
        dataIndex: 'resType',
        sortable: false
	 },{
        text: '父条目ID',
        flex: 1,
        dataIndex: 'parentId',
        sortable: false
	 },{
        text: '条目ID',
        flex: 1,
        dataIndex: 'resId',
        sortable: false
	 }]
})

Ext.define('AM.view.RoleConfigForm', {
			extend : 'Ext.form.Panel',
			alias : 'widget.roleConfigForm',
			requires:['Ext.data.*','Ext.grid.*','Ext.tree.*','Ext.ux.CheckColumn'],
			id : 'roleConfigForm',
			xtype : 'roleConfigForm',
			autoScroll : true,
			labelWidth : 200,
			bodyStyle:"padding:1px",
			defaults : {
				split : true,
				bodyPadding : 4,
				xtype : 'textfield'
			},
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
//						defaultType : 'textfield',
						layout:'anchor',
						items : [{
									xtype:'textfield',
									id : 'roleId',
									fieldLabel : '角色编号'
								}, {
									xtype:'textfield',
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
						items : [
						         {
							id:'treeGrid',
							xtype:'treepanel',
							autoWidth:true,
					        height: 300,
					        collapsible: true,
					        useArrows: true,
					        rootVisible: false,
					        store: store,
					        singleExpand: false,//单独展开
							columns: [{
					            xtype: 'treecolumn',
					            text: '菜单分类',
					            flex: 2,
					            sortable: false,
					            dataIndex: 'resName'
							},{
								text: '菜单键值',
					            flex: 1,
					            dataIndex: 'resKey',
					            sortable: false
			        		 },{
								text: '菜单URL',
					            flex: 1, 
					            dataIndex: 'resUrl',
					            sortable: false
			        		 },{
					            text: '菜单类型',
					            flex: 1,
					            dataIndex: 'resType',
					            sortable: false
			        		 },{
					            text: '父条目ID',
					            flex: 1,
					            dataIndex: 'parentId',
					            sortable: false
			        		 },{
					            text: '条目ID',
					            flex: 1,
					            dataIndex: 'resId',
					            sortable: false
			        		 }]
						}
						]
					}]
				
		})
