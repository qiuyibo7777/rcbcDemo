package com.security.demo.util;

import java.util.HashMap;
import java.util.Map;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.google.gson.Gson;

public class TestJSON {
	public static void main(String[] args) {
		String jsonData = "{'MessageContent':[{'Subject':'This is a test message','Sender':'User_1','Attr_A':'abcdefg','Attr_B':1,'Attr_C':'hijklmn','Attr_D':1010.5,'Attr_E': '20110830'}]}";
//		Gson gson = new Gson();
//		Message message = gson.fromJson(jsonData, Message.class);
//		System.out.println(message.getSubject());
		
		JSONObject jsonObject = JSONObject.fromObject(jsonData);
		JSONArray data = jsonObject.getJSONArray("MessageContent");
		for(int i=0;i<data.size();i++){
		    String s = data.getString(i);
		    JSONObject data2 = JSONObject.fromObject(s);
		}
		testJson();
	}
	
	public static void testJson(){
		Map<String,Object> map = new HashMap<String,Object>();
		String success = "success";
		String true1 = "true";
		map.put(success, true1);
		String json = JSONUtil.toJson(map);
		System.out.println(json);
		
	}
}
