// https://www.canva.com/learn/website-color-schemes/
import { createContext } from 'react';

export const Theme = {
	color1: '#17252A', // black
	color2: '#2B7A78', // cyan-dark
	color3: '#3AAFA9', // cyan light
	color4: '#DEF2F1', // cyan very light
	color5: '#FEFFFF', // white
};

const ThemeContext = createContext(Theme);

export default ThemeContext;
