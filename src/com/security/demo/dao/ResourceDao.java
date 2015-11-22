package com.security.demo.dao;

import java.util.List;
import java.util.Map;

import com.security.demo.entity.Resc;

public interface ResourceDao {
	
	public String getAllRescs();
	
	public List<Map<String, Object>> getRescs();
	
	public Resc getUserResources(String userId);
}
