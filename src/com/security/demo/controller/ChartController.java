package com.security.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.security.demo.util.JSONUtil;
import com.security.demo.util.SystemParameters;

/**
 * 图表
 * @author qyb
 *
 */
@Controller
@RequestMapping(value = "/main")
public class ChartController {

	@RequestMapping(value = "/chart/systemParameters.do")
	@ResponseBody
	public String systemParameters() throws Exception {
		System.out.println("<---------systemParameters.do------------>");
		
		Properties props=System.getProperties(); //获得系统属性集    
		String osName = props.getProperty("os.name"); //操作系统名称    
		String osArch = props.getProperty("os.arch"); //操作系统构架    
		String osVersion = props.getProperty("os.version"); //操作系统版本    
		String javaVersion = props.getProperty("java.version"); //Java 运行时环境版本  
		String javaVendor = props.getProperty("java.vendor"); //Java 运行时环境供应商  
		
		List<SystemParameters> list = new ArrayList<SystemParameters>();
		
		SystemParameters sp1 = new SystemParameters("操作系统名称 ",osName);
		SystemParameters sp2 = new SystemParameters("操作系统构架",osArch);
		SystemParameters sp3 = new SystemParameters("操作系统版本",osVersion);
		SystemParameters sp4 = new SystemParameters("Java 运行时环境版本",javaVersion);
		SystemParameters sp5 = new SystemParameters("Java 运行时环境供应商",javaVendor);
		
		list.add(sp1);
		list.add(sp2);
		list.add(sp3);
		list.add(sp4);
		list.add(sp5);
		
		String json = JSONUtil.toJson(list);
		return json;
	}
}
