import { Fragment, useContext } from 'react';
import { Row, Col, Button, Divider } from 'antd';
import Link from 'next/link';

import ThemeContext from '../../contexts/theme';

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

function Footer(props: any) {
	const Theme = useContext(ThemeContext);

	return (
		<Row style={{ background:  `${Theme.color1}`, minHeight: '200px',
		padding: '20px', flexDirection: 'row'}}>

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
		</Row>
	);
}

Footer.getInitialProps = async ({req}) => {
	return {
		namespacesRequired: ['common'],
	};
};
export default Footer;
