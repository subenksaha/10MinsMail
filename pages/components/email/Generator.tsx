import { Component, useContext } from 'react';
import { Row, Col, Input, Icon, Select } from 'antd';

import ThemContext from '../../contexts/theme';
import Adsense from '../Adsense';
import AnimatedButton from './AnimatedButton';

function EmailGenerator(props: any ) {
	const theme = useContext(ThemContext);

	const DomainSelect = (
		<Select defaultValue = 'tempmailapp.com' style = {{color: theme.color1, fontWeight:  'bolder'} }>
			{
				props.domains.map(domain => {
					return(
						<Select.Option key={domain} value={domain} style={{color: theme.color2}}>@{domain}</Select.Option>
					);
				})
			}
		</Select>
	);
 return (
			<Row type='flex'  align='middle' style={{minHeight: '40vh', backgroundColor: theme.color3, display: 'flex' }}>

				<Col md={{span: 6, order: 1}} xs={{span: 12, order: 2}}>
					<Row type='flex' justify='center'>
						<Adsense width={300} height={250} />
					</Row>
				</Col>

				<Col md={{span: 12, order: 2}} xs={{span: 24, order: 1}} style={{
					textAlign: 'center',
				}}>
					<Row type='flex' align='middle' justify='center'
						style={{ height: '40vh', outlineOffset: '-20px',
						padding: '20px', outline: '2px dashed white' }}>

						<Col md={{span: 18}} xs={{span: 16}} style={{  padding: '50px', fontSize: '1.2em !important'}}>
							<Input
								addonAfter={DomainSelect}
								addonBefore={<Icon type='user' style={{color: 'black', fontWeight: 'bolder'}}/>}
								size='large' style={{backgroundColor: 'white'}}/>
						</Col>

						<Col md={{span: 6}} xs={{span: 8}} >
							<Row type='flex' style={{flexDirection:  'column'}}>
								<AnimatedButton color={theme.color2} title='Copy' icon={<Icon type='copy' />}/>
								<AnimatedButton color={theme.color2} title='Refresh' icon={<Icon type='sync' />}/>
								<AnimatedButton color={theme.color2} title='Delete' icon={<Icon type='delete' />}/>
							</Row>
						</Col>

					</Row>
				</Col>

				<Col md={{span: 6, order: 3}} xs={{span: 12, order: 3}}>
					<Row type='flex' justify='center' align='middle'>
						<Adsense width={300} height={250} />
					</Row>
				</Col>

			</Row >
		);
}
export default EmailGenerator;
