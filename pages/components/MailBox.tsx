import { Component, useContext } from 'react';
import { Row, Col, Card, Icon } from 'antd';

import ThemeContext from '../contexts/theme';
import Adsense from '../components/Adsense';

function MailBox() {

	const theme = useContext(ThemeContext);

	return (
		<Row type='flex' style={{minHeight: '600px'}}>
			<Col md={{span: 6}} xs={{span: 0}}>2</Col>
			<Col md={{span: 12}} xs={{span: 24}}>
				<Card
					title={
					<Row type='flex' >
						<Col span={6}>Sender</Col><Col span={14}>Subject</Col><Col span={4}>Time</Col>
					</Row>}
					bordered={false}
					extra={<Icon type='sync' spin/>}
					style={{backgroundColor: theme.color2, minHeight: '600px'}}
				>

					<p>Card content</p>
					<p>Card content</p>
				</Card>
			</Col>
			<Col md={{span: 6}} xs={{span: 24}}>
				<Row type='flex' justify='center'>
					<Adsense width={300} height={600}/>
				</Row>
			</Col>
		</Row>
	);

}
export default MailBox;
