package com.security.demo.dao;

import java.util.List;
import java.util.Map;

public interface DeptDao {
	
	public String getAllDepts();
	
	public List<Map<String, Object>> getDepts();
	
}
