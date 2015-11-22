package com.security.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import net.sf.json.JSONArray;

import com.security.demo.util.ConnPool;


@Repository("roleDao")
public class RoleDaoImpl implements RoleDao {

	public List<Map<String,Object>> findAll() {
		List<Map<String,Object>> list= new ArrayList<Map<String,Object>>();
		try {
			Connection conn = ConnPool.getConnection();
			String sql = "select * from role";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			while (rst.next()) {		
				Map<String,Object> map = new HashMap<String,Object>();
				map.put("roleId", rst.getString(1));
				map.put("text", rst.getString(2));
				map.put("roleKey", rst.getString(3));
				map.put("leaf", true);
				list.add(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

}
