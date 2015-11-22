Ext.define('AM.view.TestList', {
	extend : 'Ext.grid.Panel',
	alias : 'widget.testList',
	id : 'testList',
	xtype : 'testList',
    columns: [
        { header: 'Name',  dataIndex: 'name' },
        { header: 'Email', dataIndex: 'email', flex: 1 },
        { header: 'Phone', dataIndex: 'phone' }
    ],
    height: 200,
    width: 400
})