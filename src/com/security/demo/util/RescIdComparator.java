package com.security.demo.util;

import java.util.Comparator;

import com.security.demo.entity.Resc;

public class RescIdComparator implements Comparator{

	public int compare(Object o1, Object o2) {
		int j1 = Integer.parseInt(((Resc) o1).resId);
		int j2 = Integer.parseInt(((Resc) o2).resId);
		return (j1 < j2 ? -1 : (j1 == j2 ? 0 : 1));
	}

}
