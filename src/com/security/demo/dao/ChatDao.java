package com.security.demo.dao;


import java.util.List;
import java.util.Map;

import com.security.demo.entity.User;

public interface ChatDao {
	public  List<Map<String, Object>> getAllChatUser();
}
