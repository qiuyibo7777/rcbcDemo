package com.security.demo.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.Random;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;


public class RescTest {

	public JSONArray queryDept() {
		final JSONArray result = new JSONArray();
		try {
			Connection conn = ConnPool.getConnection();
			String sql = "select * from resc";
			PreparedStatement prep = conn.prepareStatement(sql);
			ResultSet rst = prep.executeQuery();
			int i=0;
			while(rst.next()){
				i++;
				JSONObject jsonObj = new JSONObject();
				jsonObj.put("resId",rst.getString("resId"));
				jsonObj.put("resName",rst.getString("resName"));
				jsonObj.put("parentId",rst.getString("parentId"));
				jsonObj.put("resKey",rst.getString("resKey"));
				jsonObj.put("resUrl",rst.getString("resUrl"));
				jsonObj.put("resType",rst.getString("resType"));
				if(i==1||i==2){
					jsonObj.put("checked",true);
				}else{
					jsonObj.put("checked",false);
				}
				result.add(jsonObj);
			}
			} catch (Exception e) {
				e.printStackTrace();
			}
			return result;
	}
	
	public JSONArray generate(JSONArray srcArr,String childFlag,String fatherFlag){
		final JSONArray result = new JSONArray(); 
		for(int i=0;i<srcArr.size();i++){
			JSONObject jsonObj1 = (JSONObject)srcArr.get(i);
			String str1 = jsonObj1.get(fatherFlag).toString();
			for(int j=0;j<srcArr.size();j++){
				JSONObject jsonObj2 = (JSONObject)srcArr.get(j); 
				String str2 = jsonObj2.getString(childFlag).toString();
				if(str1.equals(str2)){
					JSONArray children = (JSONArray)jsonObj1.get("children");
					if(children == null){
						children = new JSONArray();
					}
					jsonObj2.put("leaf", "true");
					children.add(jsonObj2);
					jsonObj1.put("children", children);
				}
			}
			if(jsonObj1.get("parentId").equals("0")){
				result.add(jsonObj1);
			}
		}
		return result;
	}
	
	public static void main(String[] args) {
		RescTest dao = new RescTest();
		String childId = "resId";
		String parentId = "parentId";
		JSONArray jsonArray = dao.queryDept();
		JSONArray result = dao.generate(jsonArray,parentId,childId);
		String json = JSONUtil.toJson(result);
		System.out.println(json);
	}
}
