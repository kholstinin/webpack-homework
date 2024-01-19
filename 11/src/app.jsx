import React from 'react';
import { Layout, App } from 'antd';

import Home from './pages/home';
import Header from './components/header';

const { Content, Footer } = Layout;

const Root = () => {
	return (
		<App>
			<Layout>
				<Header />
				<Content>
					<Home />
				</Content>
				<Footer style={{ textAlign: 'center' }}></Footer>
			</Layout>
		</App>
	);
};

export default Root;
