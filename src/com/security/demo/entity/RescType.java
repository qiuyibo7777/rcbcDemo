package com.security.demo.entity;

public enum RescType {
	
	tree("tree"),button("button"),menu("menu");
	
	private String type;
	
	private RescType(String type){
		this.type = type;
	}
	
	private String getType(){
		return this.type;
	}
	
}
