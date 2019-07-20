import { Component } from 'react';

interface Props {
	width: number;
	height: number;
}
class Adsense extends Component<Props> {
	render() {
		const { height, width} = this.props;
		return (<div style={{height: `${height}px`, width: `${width}px`}}>
			Adsense
		</div>);
	}
}

export default Adsense;
