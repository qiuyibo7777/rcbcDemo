package com.security.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.springframework.stereotype.Repository;

import com.security.demo.entity.Dept;
import com.security.demo.util.ConnPool;

@Repository("deptDao")
public class DeptDaoImpl implements DeptDao{
	
	public String getAllDepts(){
		List<Map<String,Object>> dataList = getDepts();
		Map<String,Object> nodeList = new HashMap<String,Object>();
		Dept root = null;
		for (Iterator it = dataList.iterator(); it.hasNext();) {
			Map<String,Object> deptRecord = (Map) it.next();
			Dept dept = new Dept();
			dept.dept_id = (String) deptRecord.get("dept_id");
			dept.dept_name = (String) deptRecord.get("dept_name");
			dept.p_id = (String) deptRecord.get("p_id");
			nodeList.put(dept.dept_id, dept);
		}
		
		Set entrySet = nodeList.entrySet();
		for (Iterator it = entrySet.iterator(); it.hasNext();) {
			Dept dept = (Dept) ((Map.Entry) it.next()).getValue();
			if (dept.p_id == null || dept.p_id.equals("")) {
				root = dept;
			} else {
				((Dept) nodeList.get(dept.p_id)).addChild(dept);
			}
		}
		
		// 输出无序的树形菜单的JSON字符串
		// 对多叉树进行横向排序
		root.sortChildren();
		// 输出有序的树形菜单的JSON字符串
		return root.toString();
	}
	
	public List<Map<String, Object>> getDepts() {
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		Connection conn;
		try {
			conn = ConnPool.getConnection();
			String sql = "select * from dept";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			while (rst.next()) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("dept_id", rst.getString(1));
				map.put("dept_name", rst.getString(2));
				map.put("p_id", rst.getString(3));
				list.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
}
