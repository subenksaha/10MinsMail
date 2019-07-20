import { Row, Col, Affix } from 'antd';
import Head from 'next/head';
import { Fragment, Component, useState } from 'react';

import '../../../i18n';

import Navbar from './Navbar';
import Footer from './Footer';

function DefaultLayout(props: {children: any, title?: string, description?: string}) {

	return (
		<Fragment>

			<Head>
				<title>{!!props.title ? props.title : 'Temp Mail App'}</title>
				<meta name='description' content={`${!!props.description ? props.description : 'Temp Mail App'}`}/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<link rel='apple-touch-icon' sizes='180x180' href='/static/icons/apple-touch-icon.png'/>
				<link rel='icon' type='image/png' sizes='32x32' href='/static/icons/favicon-32x32.png'/>
				<link rel='icon' type='image/png' sizes='16x16' href='/static/icons/favicon-16x16.png'/>
				<link rel='manifest' href='/static/icons/site.webmanifest'/>
				<link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5'/>
				<link rel='shortcut icon' href='/static/icons/favicon.ico'/>
				<meta name='msapplication-TileColor' content='#da532c'/>
				<meta name='msapplication-config' content='/static/icons/browserconfig.xml'/>
				<meta name='theme-color' content='#ffffff'></meta>
			</Head>

			<style jsx global>{`;
				div#__next; {
					min-height: 100% ;
					max-width: 100% ;
				}
			`}</style>

				<Affix offsetTop={0}>
					<Navbar height='7vh' color='#ffffff'/>
				</Affix>
				{props.children}
				<Footer/>
		</Fragment>
	);
}
DefaultLayout.getInitialProps = async ({req}) => {
	return {
		namespacesRequired: ['common'],
	};
};
export default DefaultLayout;

// https://www.robinwieruch.de/react-function-component/#react-function-component-vs-class-component;
