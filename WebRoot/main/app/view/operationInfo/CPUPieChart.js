Ext.define('AM.view.operationInfo.CPUPieChart', {
			extend : 'Ext.panel.Panel',
			xtype : 'cpuPieChart',
			id : 'cpuPieChart',
			title : 'Semester Trends',
			layout : 'fit',
			generateData : function(n, floor) {
				var data = [], p = (Math.random() * 11) + 1, i;

				floor = (!floor && floor !== 0) ? 20 : floor;

				for (i = 0; i < (n || 6); i++) {
					data.push({
								name : Ext.Date.monthNames[i % 12],
								data1 : Math.floor(Math.max(
										(Math.random() * 100), floor))

							});
				}
				return data;
			},

			initComponent : function() {
				var store = 	Ext.create('Ext.data.JsonStore', {
											fields : ['name', 'data1'],
											data : this.generateData()
										})
				Ext.apply(this, {
							layout : 'fit',
							items : {
								xtype : 'chart',
								id : 'chartCmp',
								animate : true,
								store :	store,
								shadow : true,
								legend : {
									position : 'right'
								},
								insetPadding : 30,
								theme : 'Base:gradients',
								series : [{
									type : 'pie',
									field : 'data1',
									showInLegend : true,
									tips : {
										trackMouse : true,
										width : 160,
										height : 28,
										renderer : function(storeItem, item) {
											var total = 0;
											store.each(function(rec) {
														total += rec.get('data1');
													});
											this.setTitle(storeItem.get('name')
													+ ': '
													+ Math.round(storeItem.get('data1')/ total * 100)
													+ '%');
										}
									},
									
									highlight : {
										segment : {
											margin : 20
										}
									},
									label : {
										field : 'name',
										display : 'rotate',
										contrast : true,
										font : '14px Arial'
									}
								}]
							}
						})
				this.callParent(arguments);
			}
		})

/*
 var store = Ext.create('Ext.data.JsonStore', {
 fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],
 data: [
 { 'name': 'metric one',   'data1': 10, 'data2': 12, 'data3': 14, 'data4': 8,  'data5': 13 },
 { 'name': 'metric two',   'data1': 7,  'data2': 8,  'data3': 16, 'data4': 10, 'data5': 3  },
 { 'name': 'metric three', 'data1': 5,  'data2': 2,  'data3': 14, 'data4': 12, 'data5': 7  },
 { 'name': 'metric four',  'data1': 2,  'data2': 14, 'data3': 6,  'data4': 1,  'data5': 23 },
 { 'name': 'metric five',  'data1': 27, 'data2': 38, 'data3': 36, 'data4': 13, 'data5': 33 }
 ]
 });

 Ext.define('AM.view.operationInfo.CPUPieChart', {
 extend : 'Ext.panel.Panel',
 xtype : 'cpuPieChart',
 id : 'cpuPieChart',
 title : 'Semester Trends',
 layout : 'fit',
 animate: true,
 store: store,
 theme: 'Base:gradients',
 series: [{
 type: 'pie',
 field: 'data1',
 showInLegend: true,
 tips: {
 trackMouse: true,
 width: 140,
 height: 28,
 renderer: function(storeItem, item) {
 var total = 0;
 store.each(function(rec) {
 total += rec.get('data1');
 });
 this.setTitle(storeItem.get('name') + ': ' + Math.round(storeItem.get('data1') / total * 100) + '%');
 }
 },
 highlight: {
 segment: {
 margin: 20
 }
 },
 label: {
 field: 'name',
 display: 'rotate',
 contrast: true,
 font: '18px Arial'
 }
 }]
 });
 */

