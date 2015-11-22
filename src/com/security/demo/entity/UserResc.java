package com.security.demo.entity;

import java.util.ArrayList;
import java.util.List;

public class UserResc {
	private String userName;
	private String roleName;
	private String resId;
	private String parentId;
	private String resName;
	private String resKey;
	private String resUrl;
	
	private List<UserResc> children = new ArrayList<UserResc>();

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getResId() {
		return resId;
	}

	public void setResId(String resId) {
		this.resId = resId;
	}

	public String getParentId() {
		return parentId;
	}

	public void setParentId(String parentId) {
		this.parentId = parentId;
	}

	public String getResName() {
		return resName;
	}

	public void setResName(String resName) {
		this.resName = resName;
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

	public List<UserResc> getChildren() {
		return children;
	}

	public void setChildren(List<UserResc> children) {
		this.children = children;
	}

}
