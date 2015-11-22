package com.security.demo.util;

public class SystemParameters {
	
	public SystemParameters(String attribute,String value){
		this.attribute = attribute;
		this.value = value;
	}
	
	private String attribute;
	private String value;
	public String getAttribute() {
		return attribute;
	}
	public void setAttribute(String attribute) {
		this.attribute = attribute;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	
}
