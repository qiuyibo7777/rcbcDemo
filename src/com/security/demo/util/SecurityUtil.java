package com.security.demo.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * 获取Security的认证和用户信息
 * 
 * @author qyb
 * 
 */
public final class SecurityUtil {
	public final static String SPRING_SECURITY_CONTEXT = "SPRING_SECURITY_CONTEXT";

	/**
	 * 获取SECURITY3的认证
	 * @return Authentication
	 */
	public static Authentication getAuthentication() {
		return SecurityContextHolder.getContext().getAuthentication();
	}

	/**
	 * 获取SECURITY3的认证对象
	 * @return UserDetails
	 */
	public static UserDetails getUserDetails() {
		return (UserDetails) getAuthentication().getPrincipal();
	}
}
