Ext.define('AM.model.SystemTreeModel',{
	extend:'Ext.data.Model',
	fields: [
		{name : 'id',type:'string'},
		{name : 'text',type:'string'},
		{name : 'leaf',type:'string'}
    ]
})