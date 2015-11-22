package com.security.demo.controller;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.gson.Gson;
import com.security.demo.dao.DeptDao;
import com.security.demo.entity.TreeNode;
import com.security.demo.util.HibernateSessionFactory;


@Controller
@RequestMapping(value = "/main")
public class DeptController {
	
	@Autowired
	private DeptDao deptDao;
	
	@RequestMapping(value = "/dept/deptView.do",method = RequestMethod.POST)
	@ResponseBody
	public String deptView() throws Exception {
		
		String json = deptDao.getAllDepts();
		
		return json;
	}
	
	
	@RequestMapping(value = "/dept/treeNode.do",method = RequestMethod.POST)
	@ResponseBody
	public String treeNode() throws Exception {
		String json = deptDao.getAllDepts();
		
		return json;
	}
	
	public static TreeNode testRead() {
		SessionFactory sessionFactory = HibernateSessionFactory.getSessionFactory();
		System.out.println("========>读取 start <========");
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		System.out.println("-----> get root node:");
		TreeNode rootNode = (TreeNode) session.get(TreeNode.class, 1);
		session.getTransaction().commit();
		session.close();
		System.out.println("========>读取 end <========");
		return rootNode;
	}
	
	public static void main(String[] args) {
		TreeNode t1 = new TreeNode();
		t1.setId(1);
		t1.setName("11");
		TreeNode t2 = new TreeNode();
		t2.setId(2);
		t2.setName("22");
		t2.setParent(t1);
		t1.addChild(t2);
//		TreeNode treeNode = testRead();
//		JsonConfig cfg = new JsonConfig();
//	    cfg.setJsonPropertyFilter(new PropertyFilter()
//	    {
//	    	@Override
//	         public boolean apply(Object source, String name, Object value) {
//	           if(name.equals("contactGroups")||name.equals("contactGroupPersons")) {
//	             return true;
//	           } else {
//	             return false;
//	          }
//	        }
//	       });
//		 JSONArray obj = JSONArray.fromObject(t1,cfg);
		Gson gson = new Gson();
		String obj = gson.toJson(t1);
	    System.out.println(obj);
	}

}
