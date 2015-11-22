Ext.define('AM.view.UserAdd', {
	extend : 'Ext.window.Window',
	alias : 'widget.userAdd',
	id:'userAdd',
	width : 400,
	title : '添加用户',
	icon :'../images/user.png',
	layout : 'fit',
	autoShow : true,
	shadow : true,
	modal : true, // 遮罩，
	toFrontOnShow : true,
	initComponent : function() {
		var me = this;

		Ext.applyIf(me, {
//			animateTarget : 'userAdd',添加后导致页面崩溃
			items : [{
				xtype : 'form',
				// frame : true,
				bodyPadding : 10,
				items : [{
					xtype : 'textfield',
					anchor : '100%',
					fieldLabel : '编号',
					name : 'userId',
					allowBlank : false
				}, {
					xtype : 'textfield',
					anchor : '100%',
					name : 'userName',
					fieldLabel : '登陆名称',
					allowBlank : false
				}, {
					xtype : 'textfield',
					anchor : '100%',
					name : 'password',
					fieldLabel : '密码',
					allowBlank : false
				},{
					xtype : 'textfield',
					anchor : '100%',
					name : 'deptId',
					fieldLabel : '部门编号',
					allowBlank : false
				}],
				buttons : [{
					id:'submit',
					text : '确定',
					formBind : true
				}, {
					text : '取消',
					scope : this,
					handler : me.close
				}]
			}]
		});

		me.callParent(arguments);
	}

});