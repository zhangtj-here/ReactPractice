import React from 'react'
import TemperatureInput from './TemperatureInput'

function BoilingVerdict(props) {
	if(props.celsius >= 100) {
		return <p>The water would boil.</p>
	}
	return <p>The water would not boil.</p>

}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return celsius * 9 / 5 + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}

	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

class Calculator extends React.Component {
	constructor(props) {
		super(props);
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
		this.state = {scale: 'c', temperature: ''}
	}

	handleCelsiusChange(temperature) {
		this.setState({scale: 'c', temperature})
	}

	handleFahrenheitChange(temperature) {
		this.setState({scale: 'f', temperature})
	}

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
		const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
		return (
			<filedset>
				<TemperatureInput scale='c' 
					onTemperatureChange={this.handleCelsiusChange} 
					temperature={celsius}
				/>
				<TemperatureInput scale='f' 
					onTemperatureChange={this.handleFahrenheitChange} 
					temperature={fahrenheit}
				/>

				<BoilingVerdict celsius={celsius}/>

			</filedset>
		)
	}
}

export default Calculator
