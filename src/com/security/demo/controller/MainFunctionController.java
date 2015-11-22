package com.security.demo.controller;


import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.security.demo.dao.ResourceDao;
import com.security.demo.entity.Resc;
import com.security.demo.group.Button;
import com.security.demo.group.ButtonGroup;
import com.security.demo.group.Menu;
import com.security.demo.group.Tree;
import com.security.demo.util.JSONUtil;

@Controller
@RequestMapping(value = "/main")
public class MainFunctionController {
	
	/**
	 * 功能按钮
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/toolButton.do")
	@ResponseBody
	public String toolButton(@RequestParam(value = "userId") String userId) throws Exception {
		System.out.println("<---------toolButton.do------------>");
		String json = JSONUtil.toJson(toolButton());
		return json;
	}
	
	public List<Menu> toolButton(){
		List<Menu> list = new ArrayList<Menu>();
		Menu menu1 = new Menu();
		menu1.setXtype("AM.view.SystemFunction");
		list.add(menu1);

		Menu menu2 = new Menu();
		menu2.setXtype("AM.view.Administrave");
		list.add(menu2);
		
		return list;
		
	}
	
	/**
	 * 系统功能
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/systemFunction.do")
	@ResponseBody
	public String systemfunction(@RequestParam(value = "userId") String userId) throws Exception {
		System.out.println("<---------systemFunction.do------------>");
		String json = JSONUtil.toJson(systemfunction());
		return json;
	}
	
	public List<ButtonGroup> systemfunction(){
		List<ButtonGroup> list = new ArrayList<ButtonGroup>();
		ButtonGroup buttonGroup1 = new ButtonGroup();
		buttonGroup1.setId("systemsetting");
		buttonGroup1.setText("系统设置");
		buttonGroup1.setScale("large");
		buttonGroup1.setRowspan("3");
		buttonGroup1.setIcon("../images/systemsetting.png");
		buttonGroup1.setIconAlign("top");
		list.add(buttonGroup1);
		
		
		ButtonGroup buttonGroup2 = new ButtonGroup();
		buttonGroup2.setId("personmanager");
		buttonGroup2.setText("个人设置");
		buttonGroup2.setScale("large");
		buttonGroup2.setRowspan("3");
		buttonGroup2.setIcon("../images/personmanager.png");
		buttonGroup2.setIconAlign("top");
		list.add(buttonGroup2);
		
		return list;
	}
	
	
	/**
	 * 行政管理
	 * @param userId
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/administrave.do")
	@ResponseBody
	public String administrave(@RequestParam(value = "userId") String userId) throws Exception {
		System.out.println("<---------administrative.do------------>");
		String json = JSONUtil.toJson(administrave());
		return json;
	}
	
	public List<ButtonGroup> administrave(){
		List<ButtonGroup> list = new ArrayList<ButtonGroup>();
		ButtonGroup buttonGroup1 = new ButtonGroup();
		buttonGroup1.setId("attendancemanager");
		buttonGroup1.setText("请假管理");
		buttonGroup1.setScale("large");
		buttonGroup1.setRowspan("3");
		buttonGroup1.setIcon("../images/attendancemanager.png");
		buttonGroup1.setIconAlign("top");
		buttonGroup1.setXtype("panel");
		list.add(buttonGroup1);
		
		
		
		ButtonGroup buttonGroup2 = new ButtonGroup();
		buttonGroup2.setId("meetingmanager");
		buttonGroup2.setText("会议管理");
		buttonGroup2.setScale("large");
		buttonGroup2.setRowspan("3");
		buttonGroup2.setIcon("../images/meetingmanager.png");
		buttonGroup2.setIconAlign("top");
		buttonGroup2.setXtype("panel");
		list.add(buttonGroup2);
		
		return list;
	}
	
	
	/**
	 * 系统设置功能
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/systemSetting.do")
	@ResponseBody
	public String systemSettingTree() throws Exception {
		System.out.println("<---------systemsettingtree.do------------>");
		String url = "systemSetting";
		String json = JSONUtil.toJson(getSystemSettingTree(url));
		return json;
	}
	
	@Autowired
	private ResourceDao rescDao;
	
	public Tree getSystemSettingTree(String url){
		Resc resc = rescDao.getUserResources("");
		Tree tree = new Tree();
		List<Resc> listResc = getChildren(resc,url);
		List<Tree> listTree = new ArrayList<Tree>();
		for(Resc r:listResc){
			Tree t = new Tree();
			t.setText(r.getResName());
			String id = r.getResKey().split("\\.")[0];
			t.setId(id);
			t.setLeaf("true");
			listTree.add(t);
		}
		tree.setChildren(listTree);
		return tree;
	}
	
	/**
	 * 按钮控制-用户管理
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/buttoncontrol.do")
	@ResponseBody
	public String buttoncontrol() throws Exception {
		System.out.println("<---------buttoncontrol.do------------>");
		String url = "UserManager";
		String json = JSONUtil.toJson(getButtonControl(url));
		return json;
	}
	
	public List<Button> getButtonControl(String url){
		Resc resc = rescDao.getUserResources("");
		List<Button> buttons = new ArrayList<Button>();
		List<Resc> listResc = getChildren(resc,url);
		for(Resc r:listResc){
			Button button = new Button();
			button.setId(r.getResKey());
			button.setText(r.getResName());
			if(r.getResKey().equals("UserAdd")){
				button.setIcon("../images/add.png");				
			}else if(r.getResKey().equals("UserDelete")){
				button.setIcon("../images/delete.png");
			}else if(r.getResKey().equals("UserUpdate")){
				button.setIcon("../images/update.png");
			}
			button.setXtype(r.getResType());
			buttons.add(button);
		}
		return buttons;
	}
	
	public List<Resc> getChildren(Resc resc,String url){
		List<Resc> listResc = resc.getChildren();
		List<Resc> children = null;
		for(Resc r:listResc){
			if(r.getResKey().equalsIgnoreCase(url)){
				children = r.getChildren();
				return children;
			}else{
				return getChildren(r,url);	
			}
		}
		return null;
	}
	
}
