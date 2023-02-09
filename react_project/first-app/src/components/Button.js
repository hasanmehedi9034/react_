import React from 'react'

class Button extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        const {change: currentChange, locale: currentLocale} = this.props;
        const {change: nextChange} = nextProps;

        if (currentChange === nextChange && currentLocale) {
            return false;
        }
        return true;
    }

    render() {
        const {locale} = this.props;
        const {change} = this.props;
        return (
            <div>
                {/* <button type="button" onClick={change}>Click Here</button> */}
                <button type="button" onClick={() => change(locale)}>Click Here</button>
            </div>
        )
    }
}

export default Button