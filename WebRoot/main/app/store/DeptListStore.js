Ext.define('AM.store.DeptListStore',{
	extend:'Ext.data.Store',
	model:'AM.model.DeptListModel',
	proxy:{
		type: 'ajax',
       	url : 'deptListView.do',
         reader: {
			type: 'json'
		}
	}
})