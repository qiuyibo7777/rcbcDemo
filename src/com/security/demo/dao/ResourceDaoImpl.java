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
import com.security.demo.entity.Resc;
import com.security.demo.util.ConnPool;
import com.security.demo.util.JSONUtil;

@Repository("resourceDao")
public class ResourceDaoImpl implements ResourceDao{
	
	/**
	 * 获取用户资源
	 */
	public Resc getUserResources(String userId) {
		List<Map<String, Object>> dataList = getUserRescs();
		Map<String, Object> nodeMap = new HashMap<String, Object>();
		Resc root = null;
		for (Iterator it = dataList.iterator(); it.hasNext();) {
			Map<String, Object> rescRecord = (Map) it.next();
			Resc resc = new Resc();
			resc.resId = (String) rescRecord.get("resId");
			resc.resName = (String) rescRecord.get("resName");
			resc.parentId = (String) rescRecord.get("parentId");
			resc.resKey = (String) rescRecord.get("resKey");
			resc.resUrl = (String) rescRecord.get("resUrl");
			resc.resType = (String)rescRecord.get("resType");
			nodeMap.put(resc.resId, resc);
		}
		root = createRescObject(root, nodeMap);
		return root;
	}

	/**
	 * 获取所有资源
	 */
	public String getAllRescs(){
		List<Map<String,Object>> dataList = getRescs();
		Map<String,Object> nodeMap = new HashMap<String,Object>();
		Resc root = null;
		for (Iterator it = dataList.iterator(); it.hasNext();) {
			Map<String,Object> rescRecord = (Map) it.next();
			Resc resc = new Resc();
			resc.resId = (String) rescRecord.get("resId");
			resc.resName = (String) rescRecord.get("resName");
			resc.parentId = (String) rescRecord.get("parentId");
			resc.resKey = (String) rescRecord.get("resKey");
			resc.resUrl = (String) rescRecord.get("resUrl");
			resc.resType = (String)rescRecord.get("resType");
			resc.checked = "true";
			nodeMap.put(resc.resId, resc);
		}
		
		root = createRescObject(root, nodeMap);
		// 输出有序的树形菜单的JSON字符串
		return root.toString();
	}
	
	
	public List<Map<String, Object>> getUserRescs() {
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		Connection conn;
		try {
			conn = ConnPool.getConnection();
			String sql="select e.resId,e.resName,e.parentId,e.resKey,e.resUrl,e.resType " +
					"from user a,userrole b,role c,roleresc d,resc e " +
			"where a.userId = b.userId and b.roleId=c.roleId and c.roleId=d.roleId and d.rescId=e.resId and a.userId='"+1+"'";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			while (rst.next()) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("resId", rst.getString("resId"));
				map.put("resName", rst.getString("resName"));
				map.put("parentId", rst.getString("parentId"));
				map.put("resKey", rst.getString("resKey"));
				map.put("resUrl", rst.getString("resUrl"));
				map.put("resType", rst.getString("resType"));
				list.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	} 
	
	public List<Map<String, Object>> getRescs() {
		List<Map<String, Object>> list = new ArrayList<Map<String, Object>>();
		Connection conn;
		try {
			conn = ConnPool.getConnection();
			String sql = "select * from resc";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			while (rst.next()) {
				Map<String, Object> map = new HashMap<String, Object>();
				map.put("resId", rst.getString(1));
				map.put("resName", rst.getString(2));
				map.put("parentId", rst.getString(4));
				map.put("resKey", rst.getString(5));
				map.put("resUrl", rst.getString(6));
				map.put("resType", rst.getString(7));
				list.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}
	
	/**
	 * 产生资源对象
	 * @param root  Resc对象
	 * @return
	 */
	public Resc createRescObject(Resc root,Map<String,Object> nodeList){
		Set<?> entrySet = nodeList.entrySet();
		for (Iterator it = entrySet.iterator(); it.hasNext();) {
			Resc resc = (Resc) ((Map.Entry) it.next()).getValue();
			if (resc.parentId == null || resc.parentId.equals("")) {
				root = resc;
			} else {
				((Resc) nodeList.get(resc.parentId)).addChild(resc);
			}
		}
//		对多叉树进行横向排序
		root.sortChildren();
		return root;
	}
	
	public static void main(String[] args) {
		ResourceDaoImpl dao = new ResourceDaoImpl();
//		System.out.println(dao.getAllRescs());
		System.out.println(dao.getUserResources("qyb"));
	}

}
