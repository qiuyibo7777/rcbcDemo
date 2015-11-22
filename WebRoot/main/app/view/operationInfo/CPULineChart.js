Ext.define('AM.view.operationInfo.CPULineChart', {
	extend : 'Ext.panel.Panel',
	xtype : 'cpuLineChart',
	id : 'cpuLineChart',
	hidden : false,
	maximizable : true,
	title : 'CPU运行图',
	layout : 'fit',

	generateData : function(n, floor) {
		var data = [], p = (Math.random() * 11) + 1, i;

		floor = (!floor && floor !== 0) ? 20 : floor;

		for (i = 0; i < (n || 12); i++) {
			data.push({
						name : Ext.Date.monthNames[i % 12],
						data1 : Math.floor(Math.max((Math.random() * 100),
								floor))
						
					});
		}
		return data;

	},

	initComponent : function() {

		Ext.apply(this, {
					layout : 'fit',
					items : {
						xtype : 'chart',
						style : 'background:#fff',
						animate : true,
						store : Ext.create('Ext.data.JsonStore', {
									fields : ['name', 'data1'],
									data : this.generateData()
								}),
						shadow : true,
						theme : 'Category1',
						legend : {
							position : 'right'
						},
						axes : [{
									type : 'Numeric',
									minimum : 0,
									position : 'left',
									fields : ['data1'],
									title : 'Number of Hits',
									minorTickSteps : 1,
									grid : {
										odd : {
											opacity : 1,
											fill : '#ddd',
											stroke : '#bbb',
											'stroke-width' : 0.5
										}
									}
								}, {
									type : 'Category',
									position : 'bottom',
									fields : ['name'],
									title : 'Month of the Year'
								}],
						series : [{
									type : 'line',
									highlight : {
										size : 7,
										radius : 7
									},
									axis : 'left',
									xField : 'name',
									yField : 'data1',
									fill:true,
									markerConfig : {
										type : 'circle',
										size : 4,
										radius : 4,
										'stroke-width' : 0
									}
								}]
					}
				})
		this.callParent(arguments);
	}
})