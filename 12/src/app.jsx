import React, { lazy } from 'react';
import { Layout, App } from 'antd';

import Header from './components/header';

const Home = lazy(() => import('./pages/home.jsx'));

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
