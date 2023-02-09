import React from "react";

const scaleNames = {
    c: 'Censius',
    f: 'Fahrenheit'
}

export default class TempInput extends React.Component {
    render() {
        const {scale, temperature, onTemperatureChange} = this.props;
        return (
            <>
                <fieldset>
                    <legend>Enter temperature in {scaleNames[scale]}</legend>
                    <input
                        type="text"
                        value={temperature} 
                        onChange={(e) => onTemperatureChange(e, scale)}
                    />
                </fieldset>
            </>
        )
    }
}





