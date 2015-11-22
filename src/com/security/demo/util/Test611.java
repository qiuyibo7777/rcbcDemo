package com.security.demo.util;

import org.junit.Test;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.FileSystemXmlApplicationContext;
import org.springframework.orm.hibernate3.HibernateTemplate;

import com.security.demo.entity.TestId;

public class Test611 {
	
	BeanFactory factory = null;
	@Test
	public void testSave(){
		factory = new FileSystemXmlApplicationContext("WebRoot/WEB-INF/spring/spring-hibernate.xml");   
		HibernateTemplate hibernateTemplate = (HibernateTemplate) factory.getBean("hibernateTemplate");
		
		TestId testId = new TestId();
		testId.setId("2");
		testId.setName("HELLO");
		
		hibernateTemplate.save(testId);
	}
}
