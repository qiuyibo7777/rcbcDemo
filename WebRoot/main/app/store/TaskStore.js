Ext.define('AM.store.TaskStore',{
	extend:'Ext.data.Store',
	model:'AM.model.TaskModel',
	proxy:{
		type: 'ajax',
       	url : 'taskList.do',
         reader: { 
			type: 'json'
		}
	}
//	autoLoad:true
})