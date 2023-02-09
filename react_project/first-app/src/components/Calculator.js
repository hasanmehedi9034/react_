import React from "react";
import { convert, toCelsius, toFahrenheit } from "../lib/converter";
import BoilingVerdict from "./BoilingVerdict";
import TempInput from "./TempInput";

export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c'
    }

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale
        });
    }

    onTemperatureChange = (e) => {
        this.setState({
            temperature: e.target.value
        })
    }

    render() {
        const { temperature, scale } = this.state;

        const celsius = scale === 'f'
            ? convert(temperature, toCelsius)
            : temperature;

        const fareheit = scale === 'c'
            ? convert(temperature, toFahrenheit)
            : temperature;

        return (
            <>
                <TempInput
                    scale='c'
                    temperature={celsius}
                    onTemperatureChange={this.handleChange}
                />

                <TempInput
                    scale='f'
                    temperature={fareheit}
                    onTemperatureChange={this.handleChange}
                />
                
                <BoilingVerdict
                    celsius={parseFloat(temperature)}
                />
            </>
        )
    }
}





