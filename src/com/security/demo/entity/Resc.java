package com.security.demo.entity;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;

import com.security.demo.util.RescIdComparator;

public class Resc {
	public String resId;
	public String resName;
	public String parentName;
	public String parentId;
	public String resKey;
	public String resUrl;
	public String resType;
	public String checked;
	public List<Resc> children =  new ArrayList<Resc>();
	public void addChild(Resc resc) {
		children.add(resc);
	}
	public String getResId() {
		return resId;
	}
	public void setResId(String resId) {
		this.resId = resId;
	}
	public String getResName() {
		return resName;
	}
	public void setResName(String resName) {
		this.resName = resName;
	}
	public String getParentId() {
		return parentId;
	}
	public void setParentId(String parentId) {
		this.parentId = parentId;
	}
	public String getResKey() {
		return resKey;
	}
	public void setResKey(String resKey) {
		this.resKey = resKey;
	}
	public String getResUrl() {
		return resUrl;
	}
	public void setResUrl(String resUrl) {
		this.resUrl = resUrl;
	}
	public String getResType() {
		return resType;
	}
	public void setResType(String resType) {
		this.resType = resType;
	}
	
	public String getChecked() {
		return checked;
	}
	public void setChecked(String checked) {
		this.checked = checked;
	}
	public String getParentName() {
		return parentName;
	}
	public void setParentName(String parentName) {
		this.parentName = parentName;
	}
	public List<Resc> getChildren() {
		return children;
	}
	public void setChildren(List<Resc> children) {
		this.children = children;
	}
	// 先序遍历，拼接JSON字符串
	public String toString() {
		String result = "{" + "resId : '" + resId + "'" + ", resName : '" + resName + "'" 
		+ ", resKey : '" + resKey + "'" + ", resUrl : '" + resUrl + "'" 
		+", resType : '" + resType + "'" +", checked : '" + checked + "'";
		if (children.size() != 0) {
			result += ", children : [";
			for (Iterator it = children.iterator(); it.hasNext();) {
				result += ((Resc) it.next()).toString() + ",";
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
			Collections.sort(children, new RescIdComparator());
			// 对每个节点的下一层节点进行排序
			for (Iterator it = children.iterator(); it.hasNext();) {
				((Resc) it.next()).sortChildren();
			}
		}
	}
}
