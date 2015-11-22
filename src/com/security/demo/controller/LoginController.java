package com.security.demo.controller;

import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.security.demo.entity.Resc;
import com.security.demo.entity.User;
import com.security.demo.util.JSONUtil;
import com.security.demo.dao.ResourceDao;
import com.security.demo.dao.UserDao;

@Controller
@RequestMapping(value = "/main")
public class LoginController{
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ResourceDao rescDao;
	
	public Resc resc = null;
	
	@RequestMapping(value="/login.do")// 请求url地址映射
	 @ResponseBody
	public Object loginCheck(String username,String password,HttpServletRequest request){
		System.out.println(username+"~~~~~~~~~~~~~"+password);
		if (!request.getMethod().equals("POST")) {
			request.setAttribute("error","支持POST方法提交！");
		}
		if (username.equals("") || password.equals("")) {
			request.setAttribute("error","用户名或密码不能为空！");
			return "/background/framework/login";
		}
		User user = this.userDao.querySingleUser(username);
		if (user == null || !user.getPassword().equals(password)) {
			request.setAttribute("error", "用户或密码不正确！");
		    return "/background/framework/login";
		}else{
			resc = this.rescDao.getUserResources(user.getUserId());
			Map<String,Object> map = new HashMap<String,Object>();
			map.put("success", "true");
			String json = JSONUtil.toJson(map);
			System.out.println(json);
			request.getSession().setAttribute("userSession", user);

			return json;
		}
	}
}
