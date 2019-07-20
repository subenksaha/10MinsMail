import { Fragment, useContext } from 'react';
import { Row, Col, Button, Divider, Layout } from 'antd';
const { Footer } = Layout;
import Link from 'next/link';

const languages = {
	ar: 'Arabic',
	bn: 'Bangla',
	en: 'English',
	zh: 'Chinese',
	fr: 'French',
	es: 'Spanish',
	pt: 'Portuguese',
	ms: 'Malay',
	de: 'German',
	ru: 'Russian',
	ja: 'Japanease',
};

function Footbar(props: any) {

	return (
		<Fragment>
			<Row type='flex' justify='space-around'>
					<Col>Languages: </Col>
				{
					Object.keys(languages).map((key) => {
						return(
							<Col key={key}>
								<Button type='danger' href={`/${key}`}>{languages[key]} &nbsp;</Button>
							</Col>
						);
					})
				}
			</Row >
			<Divider>{`© ${new Date().getFullYear()} TempMailApp.com`}</Divider>
			<Row type='flex' justify='center'>
				<Button type='link' href='/privacy'>Privacy</Button>
				<Button type='link' href='/faq'>FAQ</Button>
				<Button type='link' href='/tos'>Terms Of Service</Button>
				<Button type='link' href='/contacts'>Contacts</Button>
			</Row>
		</Fragment>
	);
}

Footbar.getInitialProps = async ({req}) => {
	return {
		namespacesRequired: ['common'],
	};
};
export default Footbar;
