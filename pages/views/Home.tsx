import { Component, useContext } from 'react';
import { Row, Button, Divider } from 'antd';

import ThemeContext from '../contexts/theme';

import DefaultLayout from '../layouts/default/Layout';
import EmailGenerator from '../components/email/Generator';
import MailBox from '../components/MailBox';

const metaDescription = 'Temp Mail app provides free, disposable email' +
' address to keep hackers, marketer, spammers out from your real email address.' +
' You can use this email addresss for signup in facebook or any service provider';

function Home(props: any) {

	const theme = useContext(ThemeContext);
	return (
		<DefaultLayout description={metaDescription}>
			<EmailGenerator domains={props.domains}/>
			<Row style={{height: '90px', backgroundColor: theme.color2, background: 'url("/static/nice-snow.png")'}}>
				sdsdfsd
			</Row>
			<MailBox/>
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
