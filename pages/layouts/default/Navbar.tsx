import { Component, Fragment, useContext } from 'react';
import { Row, Col, Dropdown, Menu, Icon, Button } from 'antd';
import { useTranslation } from '../../../i18n';
import ThemeContext from '../../contexts/theme';

import Link from 'next/link';
import AppIconSvg from '../../../static/icons/email.svg';

interface Props {
	height: string;
	color: string;
}
interface State {

}

function Navbar(props) {
	const { height, color } = props;
	const theme = useContext(ThemeContext);

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
			<Row type='flex' style={{height, background: theme.color1,
				fontWeight: 'bolder', padding: '7px', borderBottom: '1px double #228B22',
				}} >
				<Col md={2} xs={0} />
				<Col md={20} xs ={24}>
					<Row type='flex' justify='space-around'>

						<Col md={{span: 8, order: 1}} xs={{span: 6, order: 2}}>
							<Link href='/'>
								<Icon component={AppIconSvg} style={{fontSize: '2.2em'}}/>
							</Link>
						</Col>

						<Col md={{span: 8, order: 2}} xs={{span: 12, order: 1}}>
							<h2 style={{textAlign: 'center', color: theme.color5}}>{t('title')}</h2>
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
