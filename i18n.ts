import NextI18Next from 'next-i18next';
import axios from 'axios';

const NextI18NextInstance = new NextI18Next({
	defaultLanguage: 'en',
	otherLanguages: ['ar',  'bn', 'en', 'zh', 'fr', 'es', 'pt', 'ms', 'de', 'ru', 'ja'],
	localeSubpaths: 'foreign',
});

export const  {
	appWithTranslation,
	withTranslation,
	useTranslation,
} = NextI18NextInstance;

export default NextI18NextInstance;
