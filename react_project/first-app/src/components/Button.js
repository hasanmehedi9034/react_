import React from 'react'

class Button extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        const {change: currentChange, locale: currentLocale} = this.props;
        const {change: nextChange, locale: nextLocale} = nextProps;

        if (currentChange === nextChange && currentLocale === nextLocale) {
            return false;
        }
        return true;
    }

    render() {
        const {locale, change, show, enable} = this.props;

        if(!enable) {
            return (
                null
            )
        }

        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    { 
                        locale === 'bn-BD' 
                        ? 'Click for Bangla'
                        : 'Click for Eng' 
                    }
                </button>
                {
                    show && <p>Hello Mehedi</p>
                }
            </div>
        )
    }
}

export default Button