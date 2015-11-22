Ext.define("AM.model.TaskModel",{
	 extend: 'Ext.data.Model',
	 fields: [
		{name : 'id',type:'string'},
		{name : 'name',type:'string'},
		{name : 'assignee',type:'string'},
		{name : 'createTime',type:'date'},
		{name : 'duedate',type:'date'},
		{name : 'priority',type:'string'},
		{name : 'description',type:'string'}
    ]
})