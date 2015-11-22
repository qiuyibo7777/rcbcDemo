Ext.define('AM.view.chat.ChatWindow', {
	extend : 'Ext.window.Window',
	alias : 'widget.chatWindow',
	xtype:'chatWindow',
	width : 800,
	height : 500,
	autoShow : true,
	shadow : true,
	toFrontOnShow : true,
	initComponent : function() {
		var me = this;
		Ext.applyIf(me, {
          items: [{
        	  title: 'New Email',
        	  layout: 'fit',
        	  frame: true,
        		  items: {
		        	  	xtype: 'form',
			            layout:'absolute',
			            padding: '5 5 0 5',
			            border: false,
			            defaultType: 'textfield',
			            items: [{
                          x: 0,
                          y: 5,
                          xtype: 'label',
                          text: 'From:'
                      },{
                          x: 55,
                          y: 0,
                          name: 'from',
                          hideLabel: true,
                          anchor:'100%'  // anchor width by %
                      },{
                          x: 0,
                          y: 32,
                          xtype: 'label',
                          text: 'To:'
                      },{
                          x: 55,
                          y: 27,
                          xtype: 'button',
                          text: 'Contacts...'
                      },{
                          x: 127,
                          y: 27,
                          name: 'to',
                          hideLabel: true,
                          anchor: '100%'  // anchor width by %
                      },{
                          x: 0,
                          y: 59,
                          xtype: 'label',
                          text: 'Subject:'
                      },{
                          x: 55,
                          y: 54,
                          name: 'subject',
                          hideLabel: true,
                          anchor: '100%'  // anchor width by %
                      },{
                          x: 0,
                          y: 81,
                          hideLabel: true,
                          xtype: 'textarea',
                          name: 'msg',
                          anchor: '100% 100%'  // anchor width and height
                      }]
          	  }
          },
          
                  dockedItems: [
                      {
                          xtype: 'toolbar',
                          ignoreParentFrame: true,
                          ignoreBorderManagement: true,
                          items: [
                              {
                                   text: 'Send',
                                   iconCls: 'icon-send'
                              },'-',{
                                   text: 'Save',
                                   iconCls: 'icon-save'
                              },{
                                   text: 'Check Spelling',
                                   iconCls: 'icon-spell'
                              },'-',{
                                   text: 'Print',
                                   iconCls: 'icon-print'
                              },'->',{
                                   text: 'Attach a File',
                                   iconCls: 'icon-attach'
                              }
                          ]
                      }
                  ]
              ]
		});

		me.callParent(arguments);
	}

});