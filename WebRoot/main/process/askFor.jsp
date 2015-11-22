<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="org.jbpm.api.*,java.util.*,org.jbpm.api.model.*,org.springframework.context.ApplicationContext,
					org.springframework.context.support.ClassPathXmlApplicationContext,
					org.jbpm.pvm.internal.processengine.SpringProcessEngine" %>
<%
    ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
    ProcessEngine processEngine = (ProcessEngine)ctx.getBean("processEngine",SpringProcessEngine.class);
	RepositoryService repositoryService = processEngine.getRepositoryService();
	ExecutionService executionService = processEngine.getExecutionService();
	
	String taskId = request.getParameter("id");
	System.out.println(taskId+"~~~~~~~~~`***~~~~~~~~");
	String processInstanceId =processEngine.getTaskService().getTask(taskId).getExecutionId();
	
	ProcessInstance processInstance = executionService.findProcessInstanceById(processInstanceId);
	
	Set<String> activityNames = processInstance.findActiveActivityNames();
	
	ActivityCoordinates ac = repositoryService.getActivityCoordinates(processInstance.getProcessDefinitionId(),activityNames.iterator().next());
	System.out.println(ac.getX()+"~~~~~~~~~`***~~~~~~~~");

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>流程追踪</title>
</head>
<body>
<!-- 加到extjs panel的fram中 -->
<img src="../askFor/process/askFor.png" style="position:absolute;left:0px;top:0px;">
<div style="position:absolute;border:1px solid red;left:<%=ac.getX()%>px;top:<%=ac.getY()%>px;width:<%=ac.getWidth()%>px;height:<%=ac.getHeight()%>px;"></div>
</body>
</html>