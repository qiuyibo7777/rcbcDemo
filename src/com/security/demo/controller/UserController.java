package com.security.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.security.demo.dao.UserDao;
import com.security.demo.entity.User;
import com.security.demo.util.JSONUtil;

@Controller
@RequestMapping(value = "/main")
public class UserController {
	@Autowired
	private UserDao userDao;
	
	
	/**
	 * 列出所有用户
	 * @param offset
	 * @param pageSize
	 * @param name
	 * @return
	 */
	@RequestMapping(value = "/user/userList.do", method = RequestMethod.POST)
	@ResponseBody
		public String listUser(@RequestParam(value = "start") Integer offset,
			@RequestParam(value = "limit") Integer pageSize,
			@RequestParam(value = "name", required = false) String name) {
		List<User> list = userDao.allUser();
		String json = JSONUtil.toJson(list);
		return json;
	}
	
	/**
	 * 按照部门列出用户
	 * @param offset
	 * @param pageSize
	 * @param name
	 * @param deptId
	 * @return
	 */
	@RequestMapping(value = "/user/listByDept.do", method = RequestMethod.POST)
	@ResponseBody
		public String listByDept(@RequestParam(value = "start") Integer offset,
			@RequestParam(value = "limit") Integer pageSize,
			@RequestParam(value = "name", required = false) String name,@RequestParam(value = "deptId")String deptId) {
		List<User> list = userDao.listByDept(deptId);
		String json = JSONUtil.toJson(list);
		return json;
	}
	
	/**
	 * 添加用户
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/user/userAdd.do", method = RequestMethod.POST)
	@ResponseBody
		public String addUser(User user) {
		String result = userDao.addUser(user);
		Map<String,Object> map = new HashMap<String,Object>();
		if(result!=null){
			map.put("success", "true");
		}else {
			map.put("success", "false");
		}
		String json = JSONUtil.toJson(map);
		return json;
	}
	
	
	/**
	 * 更新用户
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/user/userUpdate.do", method = RequestMethod.POST)
	@ResponseBody
		public String userUpdate(User user) {
		String result = userDao.updateUser(user);
		Map<String,Object> map = new HashMap<String,Object>();
		if(result!=null){
			map.put("success", "true");
		}else {
			map.put("success", "false");
		}
		String json = JSONUtil.toJson(map);
		return json;
	}
	
	/**
	 * 删除用户
	 * @param user
	 * @return
	 */
	@RequestMapping(value = "/user/userDelete.do", method = RequestMethod.POST)
	@ResponseBody
		public String deleteUser(@RequestParam(value = "userId")String userId) {
		String result = userDao.deleteUser(userId);
		Map<String,Object> map = new HashMap<String,Object>();
		if(result!=null){
			map.put("success", "true");
		}else {
			map.put("success", "false");
		}
		String json = JSONUtil.toJson(map);
		return json;
	}
	
}
