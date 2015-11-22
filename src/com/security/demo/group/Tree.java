package com.security.demo.group;

import java.util.ArrayList;
import java.util.List;

/**
 * Tree实体
 * @author qyb
 *
 */
public class Tree {
	
	private String text;
	private String id;
	private String leaf;
	
	private List<Tree> children = new ArrayList<Tree>();
	
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getLeaf() {
		return leaf;
	}
	public void setLeaf(String leaf) {
		this.leaf = leaf;
	}
	public List<Tree> getChildren() {
		return children;
	}
	public void setChildren(List<Tree> children) {
		this.children = children;
	}
	
	
}
