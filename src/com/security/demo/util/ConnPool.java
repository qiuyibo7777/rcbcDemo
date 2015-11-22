package com.security.demo.util;

import java.sql.Connection;
import java.sql.SQLException;


public class ConnPool {

	public static Connection getConnection() throws Exception {
		Connection conn = null;
		Class.forName("com.mysql.jdbc.Driver");
		 conn = java.sql.DriverManager.getConnection("jdbc:mysql://localhost:3306/security?useUnicode=true&characterEncoding=UTF-8&zeroDateTimeBehavior=convertToNull","root","hello");
//		Class.forName("oracle.jdbc.driver.OracleDriver");
//		 conn = java.sql.DriverManager.getConnection("jdbc:oracle:thin:@127.0.0.1:1521:BSOA","JBPM","JBPM");
		 return conn;
	}

	public static void close(Connection conn) {
		if (conn != null) {
			try {
				conn.close();
			} catch (SQLException e) {
				e.printStackTrace();
			}
		}
	}
}
