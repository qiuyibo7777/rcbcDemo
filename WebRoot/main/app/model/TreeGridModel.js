Ext.define('AM.model.TreeGridModel', {
			extend : 'Ext.data.Model',
			fields : [{
						name : 'task',
						type : 'string'
					}, {
						name : 'user',
						type : 'string'
					}, {
						name : 'duration',
						type : 'string'
					}]
		})