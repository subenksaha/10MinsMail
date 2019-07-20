import { Component, useContext } from 'react';
import { Row, Layout } from 'antd';
const { Content } = Layout;

import DefaultLayout from '../layouts/Default';

const metaDescription = 'Temp Mail app provides free, disposable email' +
' address to keep hackers, marketer, spammers out from your real email address.' +
' You can use this email addresss for signup in facebook or any service provider';

function Bloglist(props: any) {

	return (
		<DefaultLayout description={metaDescription}>
			<Content style={{margin: '0 100px', backgroundColor: '#FFF'}}>
			</Content>
		</DefaultLayout>
	);

}
Bloglist.getInitialProps = async ({err, req, res, pathname, query, asPath}) => {

	return {
		namespacesRequired: ['common'],
		...query,
	};
};
export default Bloglist;
