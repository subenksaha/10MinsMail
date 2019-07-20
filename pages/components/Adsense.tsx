import { Component } from 'react';
import { height } from 'styled-system';

interface Props {
	width: number;
	height: number;
}
class Adsense extends Component<Props> {
	render() {
		const { height, width} = this.props;
		return (<div style={{height: `${height}px`, width: `${width}px`, border: '1px solid black'}}>
			Adsense
		</div>);
	}
}

export default Adsense;
