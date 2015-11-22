package com.security.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.security.demo.entity.User;
import com.security.demo.util.ConnPool;

@Repository("ChatDao")
public class ChatDaoImpl implements ChatDao{

	public List<Map<String, Object>> getAllChatUser() {

		ArrayList<Map<String, Object>> list = new ArrayList<Map<String,Object>>();
		Connection conn = null;
		try {
			conn = ConnPool.getConnection();
			String sql = "select * from user";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			while(rst.next()){
				Map<String,Object> map = new HashMap<String,Object>();
				map.put("id", rst.getString("userId"));
				map.put("text", rst.getString("userName"));
				map.put("leaf", true);
				list.add((HashMap<String, Object>) map);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				
			}
		}
		return list;
	}
	
}
