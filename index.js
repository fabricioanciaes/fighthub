import './style';
import { Component } from 'preact';
import Header from './components/Header/index.js'
import Event from './components/Event/index.js'
import Button from './components/Button/index.js'

export default class App extends Component {
	render() {
		return (
			<div>
				<Header></Header>
				<Event></Event>
				<Button href="http://google.com/">Ayy</Button>
			</div>
		);
	}
}
