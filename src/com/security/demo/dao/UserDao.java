package com.security.demo.dao;

import java.util.List;

import com.security.demo.entity.User;

public interface UserDao {
	public User querySingleUser(String userName);
	
	public List<User> allUser();	
	
	public String addUser(User user);
	
	public String deleteUser(String userId);
	
	public String updateUser(User user);
	
	public List<User> listByDept(String deptId);
}
