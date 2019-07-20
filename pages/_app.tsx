import App, { Container } from 'next/app';
import { appWithTranslation } from '../i18n';
import ThemeContext, { Theme } from '../pages/contexts/theme';

class MyApp extends App {
	render() {

		const { Component, pageProps } = this.props;
		return (
			<ThemeContext.Provider value={Theme}>
				<Container>
					<Component {...pageProps} />
				</Container>
			</ThemeContext.Provider>
		);
	}
}

export default appWithTranslation(MyApp);
