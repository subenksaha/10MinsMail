import { Component, useContext } from 'react';
import { Row, Layout } from 'antd';
const { Content } = Layout;

import DefaultLayout from '../layouts/Default';
import EmailGenerator from '../components/email/Generator';
import MailBox from '../components/MailBox';

const metaDescription = 'Temp Mail app provides free, disposable email' +
' address to keep hackers, marketer, spammers out from your real email address.' +
' You can use this email addresss for signup in facebook or any service provider';

function Home(props: any) {

	return (
		<DefaultLayout description={metaDescription}>
			<EmailGenerator domains={props.domains}/>
			<Content style={{margin: '0 100px', backgroundColor: '#FFF'}}>
				<Row style={{height: '90px'}}>
					sdsdfsd
				</Row>
				<MailBox/>
			</Content>
		</DefaultLayout>
	);

}
Home.getInitialProps = async ({err, req, res, pathname, query, asPath}) => {

	return {
		namespacesRequired: ['common'],
		...query,
	};
};
export default Home;
