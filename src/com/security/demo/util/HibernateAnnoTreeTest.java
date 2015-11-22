package	 com.security.demo.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.security.demo.entity.TreeNode;

/**
 * 测试
 *
 * @author <a href="http://www.micmiu.com">Michael Sun</a>
 */
public class HibernateAnnoTreeTest {

	private static SessionFactory sessionFactory;

	public static void beforeClass() {
		 sessionFactory = HibernateSessionFactory.getSessionFactory();

	}

	public static void afterClass() {
		sessionFactory.close();
	}

	public void testTreeCRUD() {
		// 先运行添加测试
		 testSave();

		// 读取测试
		 testRead();

		// 更新测试
//		testUpdate();

		// 删除测试
		// testDelete();
	}

	public static void testSave() {
		System.out.println("========>测试添加 start <========");
		Session session = sessionFactory.openSession();

		session.beginTransaction();
		TreeNode rootNode = initData();
		session.save(rootNode);
		session.getTransaction().commit();
		session.close();
		System.out.println("========>测试添加 end <========");
		// 读取添加的数据
//		testRead();
	}

	public static TreeNode testRead() {
		SessionFactory sessionFactory = HibernateSessionFactory.getSessionFactory();
		System.out.println("========>读取 start <========");
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		System.out.println("-----> get root node:");
		TreeNode rootNode = (TreeNode) session.get(TreeNode.class, 1);
		System.out.println("-----> 输出树形结构如下:");
		printNode(rootNode, 0);
		session.getTransaction().commit();
		session.close();
		System.out.println("========>读取 end <========");
		return rootNode;
	}

	public void testUpdate() {
		// 更新前读取信息
		testRead();
		System.out.println("========>测试更新 start <========");
		Session session = sessionFactory.openSession();
		session.beginTransaction();

		System.out.println("---> 更新节点属性");
		TreeNode rootNode = (TreeNode) session.get(TreeNode.class, 1);
		System.out.println("get root node:" + rootNode.getName()
				+ " child size:" + rootNode.getChildren().size());
		rootNode.setName(rootNode.getName() + "(我的blog)");

		TreeNode node_del = null;
		for (TreeNode node : rootNode.getChildren()) {
			if ("Hazel".equals(node.getName())) {
				node_del = node;
			}
		}
		System.out.println("---> 删除节点(包含子节点)");
		System.out.println("delete node:" + node_del.getName() + " child size:"
				+ node_del.getChildren().size());
		node_del.setParent(null);
		rootNode.getChildren().remove(node_del);
		session.delete(node_del);

		System.out.println("---> 添加节点(包含子节点)");
		TreeNode node_add = new TreeNode("企业应用");
		node_add.setParent(rootNode);
		rootNode.getChildren().add(node_add);

		TreeNode node_add_0 = new TreeNode("SNMP");
		node_add_0.setParent(node_add);
		node_add.getChildren().add(node_add_0);

		TreeNode node_add_1 = new TreeNode("SSO");
		node_add_1.setParent(node_add);
		node_add.getChildren().add(node_add_1);

		session.update(rootNode);

		System.out.println("---> 节点下添加子节点");
		TreeNode node_update = (TreeNode) session.get(TreeNode.class, 6);
		TreeNode node_child_add = new TreeNode("go(新增)");
		System.out.println("append child node:" + node_child_add.getName()
				+ " to parent node: " + node_update.getName());
		node_child_add.setParent(node_update);
		node_update.getChildren().add(node_child_add);

		System.out.println("---> 节点下删除子节点");

		TreeNode node_child_del = node_update.getChildren().iterator().next();
		System.out.println("delete node child :" + node_child_del.getName()
				+ " from parent node: " + node_update.getName());
		node_update.getChildren().remove(node_child_del);
		node_child_del.setParent(null);
		session.delete(node_child_del);

		session.update(node_update);

		session.getTransaction().commit();
		session.close();
		System.out.println("========>测试更新 end <========");
		// 更新后读取信息
		testRead();
	}

	public void testDelete() {
		// 删除前读取信息
		testRead();
		System.out.println("========>测试删除 start <========");
		Session session = sessionFactory.openSession();
		session.beginTransaction();
		TreeNode node = (TreeNode) session.get(TreeNode.class, 6);
		System.out.println("node:" + node.getName() + " child size:"
				+ node.getChildren().size());
		TreeNode childNode = node.getChildren().iterator().next();
		childNode.setParent(null);
		node.getChildren().remove(childNode);
		session.delete(childNode);
		System.out.println("delete node:" + childNode.getName()
				+ " from parent:" + node.getName());

		session.update(node);
		session.getTransaction().commit();
		session.close();
		System.out.println("========>测试删除 end <========");
		// 删除后读取信息
		testRead();

	}

	/**
	 * 模拟测试数据
	 */
	private static TreeNode initData() {
		TreeNode rootNode = new TreeNode("micmiu.com");

		// 一级
		TreeNode node0 = new TreeNode("Michael");
		node0.setParent(rootNode);
		rootNode.getChildren().add(node0);

		// 二级
		TreeNode node0_0 = new TreeNode("J2EE");
		node0_0.setParent(node0);
		node0.getChildren().add(node0_0);
		// 二级
		TreeNode node0_1 = new TreeNode("SOA");
		node0_1.setParent(node0);
		node0.getChildren().add(node0_1);
		// 二级
		TreeNode node0_2 = new TreeNode("NoSQL");
		node0_2.setParent(node0);
		node0.getChildren().add(node0_2);

		// 二级
		TreeNode node0_3 = new TreeNode("编程语言");
		node0_3.setParent(node0);
		node0.getChildren().add(node0_3);

		// 三级
		TreeNode node0_3_0 = new TreeNode("Java");
		node0_3_0.setParent(node0_3);
		node0_3.getChildren().add(node0_3_0);

		TreeNode node0_3_1 = new TreeNode("Groovy");
		node0_3_1.setParent(node0_3);
		node0_3.getChildren().add(node0_3_1);

		TreeNode node0_3_2 = new TreeNode("javascript");
		node0_3_2.setParent(node0_3);
		node0_3.getChildren().add(node0_3_2);

		// 一级
		TreeNode node1 = new TreeNode("Hazel");
		node1.setParent(rootNode);
		rootNode.getChildren().add(node1);
		// 二级
		TreeNode node1_0 = new TreeNode("life");
		node1_0.setParent(node1);
		node1.getChildren().add(node1_0);
		// 二级
		TreeNode node1_1 = new TreeNode("美食");
		node1_1.setParent(node1);
		node1.getChildren().add(node1_1);
		// 二级
		TreeNode node1_2 = new TreeNode("旅游");
		node1_2.setParent(node1);
		node1.getChildren().add(node1_2);

		return rootNode;
	}
	
	public static void main(String[] args) {
		sessionFactory = HibernateSessionFactory.getSessionFactory();
		Session session = sessionFactory.openSession();
		Transaction transaction = session.beginTransaction();
		transaction.begin();
		TreeNode rootNode = initData();
		session.save(rootNode);
		session.flush();
		transaction.commit();
		session.close();
	}
	
	
	private static void printNode(TreeNode node, int level) {
		String preStr = "";
		for (int i = 0; i < level; i++) {
			preStr += "|----";
		}
		if(node.getParent()!=null){
			System.out.println(preStr + node.getName()+"---"+node.getId()+"---"+node.getParent().getId());
		}else{
			System.out.println(preStr + node.getName()+"---"+node.getId());
		}
		for (TreeNode children : node.getChildren()) {
			printNode(children, level + 1);
		}
	}

}