package com.security.demo.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.security.demo.entity.Resc;
import com.security.demo.entity.User;
import com.security.demo.util.ConnPool;

@Repository("userDao")
public class UserDaoImpl implements UserDao{

	/**
	 * 查询单个用户
	 */
	public User querySingleUser(String userName) {
		User user = new User();
		Connection conn = null;
		try {
			conn = ConnPool.getConnection();
			String sql = "select * from user where userName='qyb'";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			while(rst.next()){
				user.setUserId(rst.getString("userId"));
				user.setUserName(rst.getString("userName"));
				user.setPassword(rst.getString("password"));
				user.setDeptId(rst.getString("deptId"));
			}
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				
			}
		}
		return user;
	}
	
	/**
	 * 按照部门查找
	 * @param deptId
	 * @return
	 */
	public List<User> listByDept(String dept_id){
		List<User> list = new ArrayList<User>();
		Connection conn = null;
		String sql = null;
		try {
			conn = ConnPool.getConnection();
			sql = "select p_id from dept where dept_id='"+dept_id+"'";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			while(rst.next()){
				if(rst.getString("p_id").toString().equals("0")){
					sql="select * from user where deptId in (select dept_id from dept where p_id='"+dept_id+"')";
				}else{
					sql = "select * from user where deptId='"+dept_id+"'";
				}
				System.out.println(sql+"^^^^^^^^^^^^^");
				PreparedStatement prep1 = conn.prepareStatement(sql);
				ResultSet rst1 = prep1.executeQuery();	
				while(rst1.next()){
					User user = new User();
					user.setUserId(rst1.getString("userId"));
					user.setUserName(rst1.getString("userName"));
					user.setPassword(rst1.getString("password"));
					user.setDeptId(rst1.getString("deptId"));
					list.add(user);
				}
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
	
	/**
	 * 获取所有用户
	 */
	public List<User> allUser() {
		List<User> list = new ArrayList<User>();
		Connection conn = null;
		try {
			conn = ConnPool.getConnection();
			String sql = "select * from user";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			while(rst.next()){
				User user = new User();
				user.setUserId(rst.getString("userId"));
				user.setUserName(rst.getString("userName"));
				user.setPassword(rst.getString("password"));
				user.setDeptId(rst.getString("deptId"));
				list.add(user);
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

	/**
	 * 添加用户
	 */
	public String addUser(User user) {
		Connection conn = null;
		String result = null;
		try {
			conn = ConnPool.getConnection();
			String sql = "insert into user(userId,userName,password) values(?,?,?)";
			PreparedStatement prep = conn.prepareStatement(sql);
			prep.setString(1, user.getUserId());
			prep.setString(2, user.getUserName());
			prep.setString(3, user.getPassword());
			result = Integer.toString(prep.executeUpdate());
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				
			}
		}
		return result;
	}
	
	/**
	 * 删除用户
	 */
	public String deleteUser(String userId){
		Connection conn = null;
		String result = null;
		try {
			conn = ConnPool.getConnection();
			String sql = "delete from user where userId='"+userId+"'";
			PreparedStatement prep = conn.prepareStatement(sql);
			result = Integer.toString(prep.executeUpdate());
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				
			}
		}
		return result;
	}
	
	/**
	 * 修改用户
	 */
	public String updateUser(User user){
		Connection conn = null;
		String result = null;
		String userId = user.getUserId();
		try {
			conn = ConnPool.getConnection();
			String sql = "update user set userName='"+user.getUserName()+"'," +
					"password='"+user.getPassword()+"',deptId='"+user.getDeptId()+"' where userId='"+userId+"'";
			System.out.println(sql+"~~~~~~~~~~~~");
			PreparedStatement prep = conn.prepareStatement(sql);
			result = Integer.toString(prep.executeUpdate());
		} catch (Exception e) {
			e.printStackTrace();
		}finally{
			try {
				conn.close();
			} catch (SQLException e) {
				
			}
		}
		return result;
	}

}
