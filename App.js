import React, { Component } from 'react'
import { LogBox, SafeAreaView } from 'react-native';
import AppStack from './src/routers/AppStack'

class App extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount = () => {
		LogBox.ignoreAllLogs();
	}

	render() {
		return (
			<AppStack />
		)
	}
}

export default App