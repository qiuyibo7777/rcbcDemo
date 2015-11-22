Ext.define("AM.model.UserListModel",{
	 extend: 'Ext.data.Model',
	 fields: [
		{name : 'userId',type:'string'},
		{name : 'userName',type:'string'},
		{name : 'password',type:'string'},
		{name : 'deptId',type:'string'}
    ]
})