package com.security.demo.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.security.demo.entity.TestId;
import com.security.demo.entity.User;

public class TestFor {
	private static SessionFactory sessionFactory;

	@BeforeClass
	public static void beforeClass() {
		 sessionFactory = HibernateSessionFactory.getSessionFactory();

	}

	@Test
	public void testUser(){
		System.out.println("========>测试添加 start <========");
		Session session = sessionFactory.openSession();

		session.beginTransaction();
		TestId testId = initDataTestId();
		session.save(testId);
		session.getTransaction().commit();
		session.close();
		System.out.println("========>测试添加 end <========");
		// 读取添加的数据
	}
	
	
	public User initData(){
		User user = new User();
		user.setUserId("2");
		user.setUserName("cat");
		user.setPassword("cat");
		return user;
	}
	
	public TestId initDataTestId(){
		TestId testId = new TestId();
		testId.setId("1");
		testId.setName("Hi");
		return testId;
	}
	
	@AfterClass
	public static void afterClass() {
		sessionFactory.close();
	}
}
