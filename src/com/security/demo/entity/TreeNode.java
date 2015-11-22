package com.security.demo.entity;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.codehaus.jackson.annotate.JsonBackReference;
import org.codehaus.jackson.annotate.JsonManagedReference;


@Entity
@Table(name = "DEMO_T_TREE_NODE")
public class TreeNode implements Serializable{

	public TreeNode() {
	}

	public TreeNode(String name) {
		this.name = name;
	}

	private int id;

	private String name;
	// 父节点
	@JsonBackReference  
	private TreeNode parent;
	// 子节点
	 @JsonManagedReference  
	private Set<TreeNode> children;

	@Id
	@Column(name = "ID")
	@GeneratedValue
	public int getId() {
		return id;
	}

	@Column(name = "NAME", length = 20)
	public String getName() {
		return name;
	}

	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
	@JoinColumn(name = "PARENT_ID")
	public TreeNode getParent() {
		return parent;
	}

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "parent", fetch = FetchType.EAGER)
	public Set<TreeNode> getChildren() {
		return children;
	}

	public void setId(int id) {
		this.id = id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public void setParent(TreeNode parent) {
		this.parent = parent;
	}

	public void setChildren(Set<TreeNode> children) {
		this.children = children;
	}
	
	public void addChild(TreeNode child) {
		if (children == null)
			children = new HashSet<TreeNode>();
		children.add(child);
	}
}
