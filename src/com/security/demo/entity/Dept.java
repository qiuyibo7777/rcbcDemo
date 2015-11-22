package com.security.demo.entity;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import com.security.demo.util.DeptIdComparator;

public class Dept {
	public String dept_id;
	public String dept_name;
	public String p_id;
	private List<Dept> children =  new ArrayList<Dept>();
	
	public void addChild(Dept dept) {
		children.add(dept);
	}
	public String getDept_id() {
		return dept_id;
	}
	public void setDept_id(String deptId) {
		dept_id = deptId;
	}
	public String getDept_name() {
		return dept_name;
	}
	public void setDept_name(String deptName) {
		dept_name = deptName;
	}
	public String getP_id() {
		return p_id;
	}
	public void setP_id(String pId) {
		p_id = pId;
	}
	public List<Dept> getChildren() {
		return children;
	}
	public void setChildren(List<Dept> children) {
		this.children = children;
	}
	
	// 先序遍历，拼接JSON字符串
	public String toString() {
		String result = "{" + "id : '" + dept_id + "'" + ", text : '" + dept_name + "'";
		if (children.size() != 0) {
			result += ", children : [";
			for (Iterator it = children.iterator(); it.hasNext();) {
				result += ((Dept) it.next()).toString() + ",";
			}
			result = result.substring(0, result.length() - 1);
			result += "]";
		} else {
			result += ", leaf : true";
		}
		return result + "}";
	}

	// 兄弟节点横向排序
	public void sortChildren() {
		if (children.size() != 0) {
			// 对本层节点进行排序（可根据不同的排序属性，传入不同的比较器，这里传入ID比较器）
			Collections.sort(children, new DeptIdComparator());
			// 对每个节点的下一层节点进行排序
			for (Iterator it = children.iterator(); it.hasNext();) {
				((Dept) it.next()).sortChildren();
			}
		}
	}
}
