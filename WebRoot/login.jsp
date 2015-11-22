<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
	<head>
		<base href="<%=basePath%>">

		<title>My JSP 'index.jsp' starting page</title>
		<meta http-equiv="pragma" content="no-cache">
		<meta http-equiv="cache-control" content="no-cache">
		<meta http-equiv="expires" content="0">
		<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
		<meta http-equiv="description" content="This is my page">
		<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css" />
		<script type="text/javascript" src="extjs/ext-all-dev.js"></script>
		<script type="text/javascript" src="extjs/ext-all-debug.js"></script>
		<script type="text/javascript" src="extjs/local/ext-lang-zh_CN.js"></script>
<script type="text/javascript">
	Ext.onReady(function(){
		var login = Ext.create('Ext.form.Panel', {
			frame : true,
			height : 110,
			bodyPadding : 5,
			padding:'10 0 0 0',
			baseCls : 'x-plain',
 			defaultType:'textfield',
			fieldDefaults : {
				labelAlign : 'left',
				labelWidth : 90,
				anchor : '100%'
			},

			items : [ {
				name : 'username',
				fieldLabel : '用户名',
				allowBlank : false,
				value:'qyb',
				blankText : '用户名不能为空'
			}, {
				name : 'password',
				inputType : 'password',
				fieldLabel : '密&nbsp;&nbsp;&nbsp;码',
				value:'qyb',
				allowBlank : false,
				blankText : '密码不能为空'
			} ],

			buttons:[{
		           text:'登录',
		           formBind: true,
		           handler:function(){
		           login.getForm().submit({
		              waitTitle:"请稍后",
		              waitMsg:'正在登录...',
		              method:'POST', 
		              url:'main/login.do',
		              success:function(form, action){
		              console.debug(action)
		                   window.location.href="<%=basePath%>main/main.jsp"
		              },
		           failure:function(form, action){
		              if(action.failureType == 'server'){
		                  obj = Ext.util.JSON.decode(action.response.responseText);
		                  Ext.Msg.alert('Login Failed!', obj.errors.reason);
		              }else{
		                  Ext.Msg.alert('Warning!', 'Authentication server is unreachable : ' + action.response.responseText);
		              }
		           } 
		           });
		       }
		       },{
				text : '重置',
				type:'reset',
				handler : function() {
					login.form.reset();
				}
			} ]
		});
		Ext.create('Ext.window.Window', {
			title : '用户登录',
			items : login,//添加form控件
			width : 300,
			height : 150,
			closable : false,//不可关闭
			collapsible : true,//可以折叠
			resizable : false,//不可改变尺寸
			plain:true,
			closeAction:'close'
		}).show();
	});
</script>
	</head>
		<div id="login"></div>
	</body>
</html>
