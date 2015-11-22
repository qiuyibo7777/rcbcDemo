Ext.define('AM.store.RoleListStore',{
	extend:'Ext.data.Store',
	model:'AM.model.RoleListModel',
	proxy:{
		type: 'ajax',
       	url : 'roleList.do',
         reader: { 
			type: 'json'
		}
	}
//	autoLoad:true
})