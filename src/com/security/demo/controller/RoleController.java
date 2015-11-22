package com.security.demo.controller;

import java.util.List;
import java.util.Map;

import net.sf.json.JSONArray;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.security.demo.dao.DeptDao;
import com.security.demo.dao.ResourceDao;
import com.security.demo.dao.RoleDao;
import com.security.demo.entity.User;
import com.security.demo.util.JSONUtil;
import com.security.demo.util.RescTest;

@Controller
@RequestMapping(value = "/main")
public class RoleController {
	
	@Autowired
	private RoleDao roleDao;
	@Autowired
	private ResourceDao resDao;
	
	@RequestMapping(value = "/role/roleTreeView.do", method = RequestMethod.POST)
	@ResponseBody
		public String roleConfigView(User user) {
		List<Map<String,Object>> result = roleDao.findAll();
		String json = JSONUtil.toJson(result);
		return json;
	}
	
	@RequestMapping(value = "/role/roleTreeGrid.do", method = RequestMethod.POST)
	@ResponseBody
		public String roleTreeGrid() {
		String json = resDao.getAllRescs();
		System.out.println(json);
		return json;
	}
	
}
