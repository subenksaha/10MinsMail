import { Component, useContext } from 'react';
import { Row, Col, Input, Icon, Select } from 'antd';

import Adsense from '../Adsense';
import AnimatedButton from './AnimatedButton';

function EmailGenerator(props: any ) {

	const DomainSelect = (
		<Select defaultValue = 'tempmailapp.com' style = {{ fontWeight:  'bolder'} }>
			{
				props.domains.map(domain => {
					return(
						<Select.Option key={domain} value={domain}>@{domain}</Select.Option>
					);
				})
			}
		</Select>
	);
 return (
			<Row type='flex'  align='middle' style={{minHeight: '40vh', display: 'flex' }}>

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
						padding: '20px', outline: '2px dashed grey' }}>

						<Col md={{span: 18}} xs={{span: 16}} style={{  padding: '50px', fontSize: '1.2em !important'}}>
							<Input
								addonAfter={DomainSelect}
								addonBefore={<Icon type='user' style={{color: 'black', fontWeight: 'bolder'}}/>}
								size='large' style={{backgroundColor: 'white'}}/>
								<span>Forget about spam, advertising mailings,
									hacking and offensive robots. Keep your real mailbox
									clean and secure. 10minsmail.com Mail provides temporary,
									secure, anonymous, free, disposable email address.</span>
						</Col>

						<Col md={{span: 6}} xs={{span: 8}} >
							<Row type='flex' style={{flexDirection:  'column'}}>
								<AnimatedButton title='Copy' icon={<Icon type='copy' />}/>
								<AnimatedButton title='Refresh' icon={<Icon type='sync' />}/>
								<AnimatedButton title='Delete' icon={<Icon type='delete' />}/>
								<AnimatedButton title='Change' icon={<Icon type='delete' />}/>
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
