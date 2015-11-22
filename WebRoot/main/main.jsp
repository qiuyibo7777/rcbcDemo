<%@ page language="java" import="java.util.*,com.security.demo.entity.User" pageEncoding="utf-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
User user= (User)request.getSession().getAttribute("userSession");
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>   
    <title>My JSP 'askFor.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	
	<script type="text/javascript">
	var currentUserId='<%=user.getUserId()%>';
	var currentUserName='<%=user.getUserName()%>';
	</script>
	
	 <link type="text/css" href="../extjs/resources/css/ext-all.css" rel="stylesheet" id="theme"/>
	<script type="text/javascript" src="../extjs/bootstrap.js"></script>
	<script type="text/javascript" src="../extjs/ext-all-dev.js"></script>
	<script type="text/javascript" src="../extjs/ext-all-debug.js"></script>
	<script type="text/javascript" src="../extjs/local/ext-lang-zh_CN.js"></script>
	<script type="text/javascript" src="../extjs/examples/examples.js"></script>
	
	<script type="text/javascript" src="../extjs/examples/ux/portal/PortalPanel.js"></script>  
    <script type="text/javascript" src="../extjs/examples/ux/portal/PortalColumn.js"></script>  
    <script type="text/javascript" src="../extjs/examples/ux/portal/Portlet.js"></script>  
    <script type="text/javascript" src="../extjs/examples/ux/portal/PortalDropZone.js"></script>  
    <link rel="stylesheet" type="text/css" href="../extjs/examples/ux/css/portal.css"/> 
    
    
    <script type="text/javascript" src="../extjs/examples/ux/layout/component/form/MultiSelect.js"></script>
    <script type="text/javascript" src="../extjs/examples/ux/layout/component/form/ItemSelector.js"></script>
    <script type="text/javascript" src="../extjs/examples/ux/form/MultiSelect.js"></script>
    <script type="text/javascript" src="../extjs/examples/ux/form/ItemSelector.js"></script>  
	<link rel="stylesheet" type="text/css" href="../extjs/examples/ux/css/ItemSelector.css"/> 

  <script type="text/javascript" src="app.js"> </script>
  </head>
  
  <body>
  </body>
</html>
