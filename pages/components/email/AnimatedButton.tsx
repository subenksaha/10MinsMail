import {Row, Icon} from 'antd';
import posed from 'react-pose';

const Box = posed.div({
	hoverable: true,
	pressable: true,
	init: {
		scale: 1,
		boxShadow: '0px 0px 0px rgba(0,0,0,0)',
	},
	hover: {
		scale: 1.2,
		boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
	},
	press: {
		scale: 1.1,
		boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
	},
});
function AnimatedButton(props: {title: string, icon: any}) {
	const hw = '50px';
	return(
		<Box color='#77A6F7' style={{minHeight: hw, minWidth: hw, lineHeight: hw,
			borderBottom: '1px solid black',
			cursor: 'pointer', fontSize: '1.2em',
		}}>
			{props.icon} &nbsp;
			{props.title}
		</Box>
	);
}
export default AnimatedButton;
