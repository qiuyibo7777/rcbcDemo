package com.security.demo.util;

import java.util.Comparator;

import com.security.demo.entity.Dept;

public class DeptIdComparator implements Comparator {
	public int compare(Object o1, Object o2) {
		int j1 = Integer.parseInt(((Dept) o1).dept_id);
		int j2 = Integer.parseInt(((Dept) o2).dept_id);
		return (j1 < j2 ? -1 : (j1 == j2 ? 0 : 1));
	}
}
