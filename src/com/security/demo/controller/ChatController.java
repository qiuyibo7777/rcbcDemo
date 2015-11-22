package com.security.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.security.demo.dao.ChatDao;
import com.security.demo.util.JSONUtil;

/**
 * 聊天
 * @author qyb
 *
 */
@Controller
@RequestMapping(value = "/main")
public class ChatController {
	
	@Autowired
	private ChatDao chatDao;
	
	@RequestMapping(value = "/chat/chatUserTree.do")
	@ResponseBody
	public String getAllChatUser(){
		
		List<Map<String, Object>> users = chatDao.getAllChatUser();
		String json = JSONUtil.toJson(users);
		return json;
	
	}
}
