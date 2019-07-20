import { Component, Fragment, useContext } from 'react';
import { Layout, Row, Col, Dropdown, Menu, Icon, Button } from 'antd';
import { useTranslation } from '../../../i18n';
const { Header, Footer, Sider, Content } = Layout;

import Link from 'next/link';
import AppIconSvg from '../../../static/icons/email.svg';

interface Props {
	height: string;
	color: string;
}
interface State {

}

function Navbar(props: { height }) {
	const { height } = props;

	const languages = (
		<Menu>
			<Menu.Item key='1'>
				<Icon type='user' />
				1st menu item
			</Menu.Item>
			<Menu.Item key='2'>
				<Icon type='user' />
				2nd menu item
			</Menu.Item>
		</Menu>
		);
	const { t, i18n } = useTranslation();
	return (
		<Row type='flex' >
			<Col md={2} xs={0} />
			<Col md={20} xs ={24}>
				<Row type='flex' justify='space-around'>

					<Col md={{span: 8, order: 1}} xs={{span: 6, order: 2}}>
						<Link href='/'>
							<Icon component={AppIconSvg} style={{fontSize: '2.2em'}}/>
						</Link>
					</Col>

					<Col md={{span: 8, order: 2}} xs={{span: 12, order: 1}}>
						<h1 style={{textAlign: 'center'}}>{t('title')}</h1>
					</Col>

					<Col md={{span: 8, order: 3}} xs={{span: 6, order: 3}}>
						<Row type='flex' justify='center'>
							<Button type='link' href='/blog'>Blog</Button>
						</Row>
					</Col>

				</Row>
			</Col>
			<Col md={2} xs={0} />
		</Row >
	);
}
Navbar.getInitialProps = async ({req}) => {
	return {
		namespacesRequired: ['common'],
	};
};
export default Navbar;
