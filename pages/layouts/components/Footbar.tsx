import { Fragment, useContext } from 'react';
import { Row, Col, Button, Divider, Layout } from 'antd';
const { Footer } = Layout;
import { Link } from '../../i18n';

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
				<Link href='/privacy'>
					<Button type='link'>Privacy</Button>
				</Link>
				<Link href='/faq'>
					<Button type='link'>FAQ</Button>
				</Link>
				<Link href='/tos'>
					<Button type='link'>TOS</Button>
				</Link>
				<Link href='/contact'>
					<Button type='link'>Contact</Button>
				</Link>
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
