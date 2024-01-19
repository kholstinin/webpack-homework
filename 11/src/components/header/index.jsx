import React from 'react';
import { Layout, Menu } from 'antd';

const { Header: AntdHeader, Content, Footer } = Layout;

const items1 = ['Main'].map((key) => ({
	key,
	label: key,
}));

const Header = () => {
	return (
		<AntdHeader style={{ display: 'flex', alignItems: 'center' }}>
			<div className="demo-logo" />
			<Menu
				theme="dark"
				mode="horizontal"
				defaultSelectedKeys={['Main']}
				items={items1}
				style={{ flex: 1, minWidth: 0 }}
			/>
		</AntdHeader>
	)
}

export default Header;
